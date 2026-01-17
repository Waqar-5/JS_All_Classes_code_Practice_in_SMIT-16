import { db, auth } from "./firebase.js";
import { collection, addDoc, onSnapshot, query, orderBy } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

export function loadComments(postId, containerId){
  const container = document.getElementById(containerId);
  const q = query(collection(db,"posts",postId,"comments"), orderBy("createdAt","asc"));

  onSnapshot(q,snap=>{
    container.innerHTML="";
    snap.forEach(d=>{
      const c = d.data();
      container.innerHTML += `<p>💬 ${c.text}</p>`;
    });
  });
}

export async function addComment(postId,text){
  if(!text.trim()) return;
  await addDoc(collection(db,"posts",postId,"comments"),{
    uid: auth.currentUser.uid,
    text,
    createdAt: new Date()
  });
}
