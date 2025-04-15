document.querySelector("form").addEventListener("submit", async function (e) {
  e.preventDefault();

  const formData = {
    firstName: document.querySelector('input[name="firstName"]').value,
    lastName: document.querySelector('input[name="lastName"]').value,
    age: document.querySelector('input[name="age"]').value,
    email: document.querySelector('input[name="email"]').value,
    phone: document.querySelector('input[name="phone"]').value,
    cardNumber: document.querySelector('input[name="cardNumber"]').value,
    cardExpiry: document.querySelector('input[name="cardExpiry"]').value,
  };

  try {
    const res = await fetch("http://localhost:5000/api/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await res.json();
    if (res.ok) {
      alert("User submitted successfully!");
    } else {
      alert("Submission failed: " + result.message);
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Something went wrong!");
  }
});
