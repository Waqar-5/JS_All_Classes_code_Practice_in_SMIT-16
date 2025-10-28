var users = JSON.parse(localStorage.getItem("usersData")) || [];
var currentUser = JSON.parse(localStorage.getItem("currentUser"));

var openTransactionBtn = document.getElementById("openTransactionBtn");
var addTransactionDiv = document.querySelector(".addTransactionDiv");

// Money logics
var incomeAmount = document.getElementById("incomeAmount");
var balanceAmount = document.getElementById("balanceAmount");
var expenseAmount = document.getElementById("expenseAmount");

openTransactionBtn.addEventListener("click", function () {
  addTransactionDiv.style.display = "block";
  openTransactionBtn.style.display = "none";
});

var addTransactionBtn = document.getElementById("addTransactionBtn");

addTransactionBtn.addEventListener("click", function () {
  var amountDescription = document.getElementById("amountDescription").value;
  var amountValue = document.getElementById("amountValue").value;

  if (!amountDescription || !amountValue) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please fill all the fields!",
    });
    return;
  }

  // Convert value to number
  var amount = Number(amountValue);

  // Expense case
  if (amount < 0) {
    expenseAmount.innerText = "Rs. " + (
      Number(expenseAmount.innerText.replace("Rs. ", "")) + Math.abs(amount)
    );

    balanceAmount.innerText = "Rs. " + (
      Number(balanceAmount.innerText.replace("Rs. ", "")) - Math.abs(amount)
    );
  }

  // Income case
  else {
    incomeAmount.innerText = "Rs. " + (
      Number(incomeAmount.innerText.replace("Rs. ", "")) + amount
    );

    balanceAmount.innerText = "Rs. " + (
      Number(balanceAmount.innerText.replace("Rs. ", "")) + amount
    );
  }

  // Save transaction to localStorage
  var usersTransactionsArr = JSON.parse(localStorage.getItem("usersTransactions")) || [];

  // Find existing user history OR create new one
  let existingUser = usersTransactionsArr.find(user => user.id === currentUser.id);

  var transaction = {
    description: amountDescription,
    value: amountValue,
    date: new Date().toLocaleString()
  };

  if (existingUser) {
    existingUser.transactionHistoryArr.push(transaction);
  } else {
    usersTransactionsArr.push({
      id: currentUser.id,
      transactionHistoryArr: [transaction]
    });
  }

  localStorage.setItem("usersTransactions", JSON.stringify(usersTransactionsArr));

  
  // Clear input fields AFTER adding
  document.getElementById("amountDescription").value = "";
  document.getElementById("amountValue").value = "";
  getTransations();

  addTransactionDiv.style.display = "none";
  openTransactionBtn.style.display = "block";
});

if (!currentUser) {
  alert("Please Login first!");
  location = "./login/login.html";
}

var tableBody = document.getElementById("tableBody");

function getTransations() {
  var usersTransactionsArr = JSON.parse(localStorage.getItem("usersTransactions")) || [];
  tableBody.innerText = "";
  var dataFound = false;

  for (var index in usersTransactionsArr) {
    if (usersTransactionsArr[index].id == currentUser.id) {
      dataFound = true;
      var transactionHistoryArr = usersTransactionsArr[index].transactionHistoryArr;

      transactionHistoryArr.map(function (transaction, idx) {
        tableBody.innerHTML += `
          <tr>
            <th scope="row">${idx + 1}</th>
            <td>${transaction.date}</td>
            <td>${transaction.description}</td>
            <td>${transaction.value}</td>
            <td class="delete-btn">X</td>
          </tr>
        `;
      });
    }
  }

  if (!dataFound) {
    tableBody.innerText = "No Transactions Found!";
  }
}

getTransations();

// Delete Transaction (UI + localStorage)
tableBody.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-btn")) {

    const row = event.target.parentElement;
    const rowIndex = row.rowIndex - 1; // ignore header

    let usersTransactionsArr = JSON.parse(localStorage.getItem("usersTransactions")) || [];

    for (let i in usersTransactionsArr) {
      if (usersTransactionsArr[i].id === currentUser.id) {
        usersTransactionsArr[i].transactionHistoryArr.splice(rowIndex, 1);
        localStorage.setItem("usersTransactions", JSON.stringify(usersTransactionsArr));
        break;
      }
    }

    row.remove();
  }
});
