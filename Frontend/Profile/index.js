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
    const res = await fetch("http://127.0.0.1:5000/api/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await res.json();
    if (res.ok) {
      alert("User submitted successfully!");

      // After successful submission, store user details in localStorage
      localStorage.setItem("firstName", formData.firstName);
      localStorage.setItem("lastName", formData.lastName);
      localStorage.setItem("age", formData.age);
      localStorage.setItem("email", formData.email);
      localStorage.setItem("phone", formData.phone);
      localStorage.setItem("cardNumber", formData.cardNumber);
      localStorage.setItem("cardExpiry", formData.cardExpiry);

      // Optionally, you can store the userId if it's returned by the backend
      // localStorage.setItem("userId", result.userId);  // If userId is part of the response
    } else {
      alert("Submission failed: " + result.message);
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Something went wrong!");
  }
});
