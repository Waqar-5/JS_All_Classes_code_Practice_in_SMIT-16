// ===============================
// STATE
// ===============================

let expenses = [];


function addExpense() {
  const title = document.getElementById('title').value;
  const amount = +document.getElementById('amount').value;
  const category = document.getElementById('category').value;

  if (!title || !amount) return;

  expenses.push({
    title,
    amount, category,
    date: new Date()
  });

    document.getElementById('title').value = "";
  document.getElementById('amount').value = "";

  render();
}

// ===============================
// RENDER INTELLIGENCE
// ===============================

function render(){

    // Total (reduce)
    const totl = expenses.reduce((sum, e) => sum + e.amount, 0);

    // Average (reduce)
    const average = expenses.length
    ? Math.round(total / expenses.length)
    : 0;
    document.getElementById("average").textContent = average;

    // Highest (reduce)
    const highest = expenses.reduce(
        (max, e) => e.amount > max ? e.amount : max, 0
    );
    document.getElementById("highest").textContent = highest;

    // GROUP BY CATEGORY (reduce object)
  const byCategory = expenses.reduce((acc,e)=>{
    acc[e.category] = (acc[e.category] || 0) + e.amount;
    return acc;
  },{});

  const box = document.getElementById('byCategory');
  box.innerHTML = "";
  Object.entries(byCategory).forEach(([cat,val])=>{
    box.innerHTML += `<div><span>${cat}</span><span>${val}</span></div>`;
  });

}