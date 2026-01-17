import { db } from "./firebase.js";
import { collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

export async function searchUsers(term, containerId){
  const container = document.getElementById(containerId);
  container.innerHTML="Searching...";

  const q = query(collection(db,"users"), where("name",">=",term));
  const snap = await getDocs(q);

  container.innerHTML="";
  snap.forEach(doc=>{
    const u = doc.data();
    container.innerHTML += `
      <div class="user-suggestion">
        <span class="avatar">${u.avatar}</span>
        <span>${u.name}</span>
      </div>
    `;
  });
}
