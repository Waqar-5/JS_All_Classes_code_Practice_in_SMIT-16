import { db, auth } from "./firebase.js";
import {
  collection, addDoc, serverTimestamp,
  doc, updateDoc, deleteDoc, arrayUnion, arrayRemove
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

/* CREATE POST */
export async function createPost(text){
  if (!text.trim()) {
    alert("Please write something before posting");
    return;
  }

  await addDoc(collection(db,"posts"),{
    uid: auth.currentUser.uid,
    text,
    likes: [],
    createdAt: serverTimestamp()
  });
}

/* LIKE POST */
export async function toggleLike(postId, likes){
  const uid = auth.currentUser.uid;
  const ref = doc(db,"posts",postId);

  if (likes.includes(uid)) {
    await updateDoc(ref,{ likes: arrayRemove(uid) });
  } else {
    await updateDoc(ref,{ likes: arrayUnion(uid) });
  }
}

/* ADD COMMENT */
export async function addComment(postId, text){
  if(!text.trim()) return;

  await addDoc(collection(db,"posts",postId,"comments"),{
    uid: auth.currentUser.uid,
    text,
    createdAt: serverTimestamp()
  });
}

/* EDIT POST */
export async function updatePost(postId, newText){
  if(!newText.trim()) return;
  await updateDoc(doc(db,"posts",postId),{ text: newText });
}

/* DELETE POST */
export async function deletePost(postId){
  await deleteDoc(doc(db,"posts",postId));
}

/* EDIT COMMENT */
export async function updateComment(postId, commentId, newText){
  if(!newText.trim()) return;
  await updateDoc(doc(db,"posts",postId,"comments",commentId),{ text: newText });
}

/* DELETE COMMENT */
export async function deleteComment(postId, commentId){
  await deleteDoc(doc(db,"posts",postId,"comments",commentId));
}
