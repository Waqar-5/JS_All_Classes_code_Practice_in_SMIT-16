import { db, auth } from "./firebase.js";
import { collection, query, orderBy, onSnapshot, doc } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";
import { createPost, updatePost, deletePost, toggleLike, addComment, updateComment, deleteComment } from "./post.js";

export function loadFeed(){
  const feed = document.getElementById("feed");
  const postBtn = document.getElementById("postBtn");
  const postText = document.getElementById("postText");

  // Create Post
  postBtn.onclick = async () => {
    await createPost(postText.value);
    postText.value = "";
    Swal.fire({
      icon: 'success',
      title: 'Posted!',
      text: 'Your post has been added successfully.',
      timer: 1500,
      showConfirmButton: false
    });
  };

  const q = query(collection(db,"posts"), orderBy("createdAt","desc"));
  onSnapshot(q, snap => {
    feed.innerHTML = "";

    snap.forEach(docSnap => {
      const p = docSnap.data();
      const id = docSnap.id;
      const uid = auth.currentUser.uid;

      const likes = p.likes || [];
      const liked = likes.includes(uid);

      feed.innerHTML += `
      <div class="post" data-id="${id}">
        <p>${p.text}</p>

        <div class="actions">
          <button class="likeBtn" data-id="${id}">${liked ? "❤️" : "🤍"} ${likes.length}</button>
          <button class="shareBtn" data-id="${id}">🔗 Share</button>
          ${p.uid === uid ? `<button class="editBtn" data-id="${id}">✏️</button>
          <button class="deleteBtn" data-id="${id}">🗑️</button>` : ""}
        </div>

        <div class="comments" data-id="${id}">
          <input class="commentInput" data-id="${id}" placeholder="Write a comment..." />
        </div>
      </div>
      `;

      // Load comments for this post
      const commentsRef = collection(db,"posts",id,"comments");
      const commentsQuery = query(commentsRef, orderBy("createdAt","asc"));

      onSnapshot(commentsQuery, csnap => {
        const commentBox = document.querySelector(`.comments[data-id="${id}"]`);
        commentBox.querySelectorAll(".comment-item").forEach(c => c.remove());

        csnap.forEach(cdoc => {
          const c = cdoc.data();
          const cId = cdoc.id;
          const isMine = c.uid === uid;

          const div = document.createElement("div");
          div.className = "comment-item";
          div.innerHTML = `
            <span>${c.text}</span>
            ${isMine ? `<button class="cEdit" data-post="${id}" data-id="${cId}">✏️</button>
                         <button class="cDel" data-post="${id}" data-id="${cId}">🗑️</button>` : ""}
          `;
          commentBox.appendChild(div);

          // EDIT COMMENT
          div.querySelectorAll(".cEdit").forEach(btn=>{
            btn.onclick = async ()=>{
              const { value: t } = await Swal.fire({
                title: 'Edit Comment',
                input: 'text',
                inputLabel: 'Update your comment',
                inputValue: c.text,
                showCancelButton: true,
              });
              if(t) await updateComment(btn.dataset.post, btn.dataset.id, t);
            };
          });

          // DELETE COMMENT
          div.querySelectorAll(".cDel").forEach(btn=>{
            btn.onclick = async ()=>{
              const result = await Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3085d6',
                confirmButtonText: 'Yes, delete it!'
              });

              if(result.isConfirmed){
                await deleteComment(btn.dataset.post, btn.dataset.id);
                Swal.fire('Deleted!', 'Your comment has been deleted.', 'success');
              }
            };
          });
        });
      });
    });

    // LIKE
    document.querySelectorAll(".likeBtn").forEach(btn => {
      btn.onclick = () => {
        const id = btn.dataset.id;
        const post = snap.docs.find(d => d.id === id).data();
        toggleLike(id, post.likes || []);
      };
    });

    // EDIT POST
    document.querySelectorAll(".editBtn").forEach(btn => {
      btn.onclick = async () => {
        const { value: t } = await Swal.fire({
          title: 'Edit Post',
          input: 'textarea',
          inputLabel: 'Update your post',
          inputValue: snap.docs.find(d => d.id === btn.dataset.id).data().text,
          showCancelButton: true,
        });
        if(t) await updatePost(btn.dataset.id, t);
      };
    });

    // DELETE POST
    document.querySelectorAll(".deleteBtn").forEach(btn => {
      btn.onclick = async () => {
        const result = await Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#d33',
          cancelButtonColor: '#3085d6',
          confirmButtonText: 'Yes, delete it!'
        });

        if(result.isConfirmed){
          await deletePost(btn.dataset.id);
          Swal.fire('Deleted!', 'Your post has been deleted.', 'success');
        }
      };
    });

    // COMMENT INPUT
    document.querySelectorAll(".commentInput").forEach(input=>{
      input.onkeypress = e=>{
        if(e.key==="Enter"){
          addComment(input.dataset.id, input.value);
          input.value = "";
        }
      };
    });

    // SHARE
    document.querySelectorAll(".shareBtn").forEach(btn=>{
      btn.onclick = () => {
        const url = `${location.origin}?post=${btn.dataset.id}`;
        navigator.clipboard.writeText(url);
        Swal.fire({
          icon: 'success',
          title: 'Copied!',
          text: 'Post link copied to clipboard',
          timer: 1500,
          showConfirmButton: false
        });
      };
    });
  });
}
