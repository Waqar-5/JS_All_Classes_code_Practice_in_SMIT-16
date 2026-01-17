import { db } from "./firebase.js";
import { doc, updateDoc, arrayUnion, arrayRemove } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

export function follow(myId,targetId){
  updateDoc(doc(db,"users",targetId),{followers:arrayUnion(myId)});
  updateDoc(doc(db,"users",myId),{following:arrayUnion(targetId)});
}

export function unfollow(myId,targetId){
  updateDoc(doc(db,"users",targetId),{followers:arrayRemove(myId)});
  updateDoc(doc(db,"users",myId),{following:arrayRemove(targetId)});
}


// import { db } from "./firebase.js";
// import { doc, updateDoc, arrayUnion, arrayRemove } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

// export function follow(myId,targetId){
//   updateDoc(doc(db,"users",targetId),{followers:arrayUnion(myId)});
//   updateDoc(doc(db,"users",myId),{following:arrayUnion(targetId)});
// }

// export function unfollow(myId,targetId){
//   updateDoc(doc(db,"users",targetId),{followers:arrayRemove(myId)});
//   updateDoc(doc(db,"users",myId),{following:arrayRemove(targetId)});
// }
