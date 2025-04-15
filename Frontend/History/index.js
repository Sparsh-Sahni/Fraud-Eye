// Add hovered class to selected list item
let list = document.querySelectorAll(".navigation li");

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};

// Fetch transaction history and populate table
window.addEventListener("DOMContentLoaded", async () => {
  try {
    // Assuming cardNumber is stored in localStorage after login
    const cardNumber = localStorage.getItem("cardNumber");

    if (!cardNumber) {
      console.error("Card number not found in storage");
      return;
    }

    const response = await fetch(`http://127.0.0.1:5000/api/transactions/${cardNumber}`, {
      method: "GET",
      credentials: "include",
    });

    const data = await response.json();

    const transactionBody = document.getElementById("transactionBody");
    transactionBody.innerHTML = ""; // Clear existing rows

    data.forEach((transaction) => {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${transaction.amount}</td>
        <td>${transaction.location}</td>
        <td>${transaction.time}</td>
        <td>${transaction.category}</td>
        <td>${transaction.device}</td>
        <td>${transaction.logic_pattern}</td>
        <td>${transaction.velocity}</td>
        <td>${transaction.card_present}</td>
        <td>${transaction.declined_transactions}</td>
        <td class="${transaction.fraud === 'Fraud' ? 'fraud' : 'safe'}">${transaction.fraud}</td>
      `;

      transactionBody.appendChild(row);
    });
  } catch (error) {
    console.error("Error fetching transactions:", error);
  }
});
