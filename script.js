// 1️⃣ Run after the page loads
document.addEventListener('DOMContentLoaded', function() {
  // 2️⃣ Select the form and feedback message area
  const form = document.getElementById('registration-form');
  const feedbackDiv = document.getElementById('form-feedback');

  // 3️⃣ Listen for form submission
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // stop the default submit

    // 4️⃣ Get and trim user input values
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    let isValid = true;        // assume it's valid unless we find a problem
    const messages = [];       // to store error messages

    // ✅ Username validation (at least 3 characters)
    if (username.length < 3) {
      isValid = false;
      messages.push("Username must be at least 3 characters long.");
    }

    // ✅ Email validation (must include '@' and '.')
    if (!email.includes('@') || !email.includes('.')) {
      isValid = false;
      messages.push("Please enter a valid email address.");
    }

    // ✅ Password validation (at least 8 characters)
    if (password.length < 8) {
      isValid = false;
      messages.push("Password must be at least 8 characters long.");
    }

    // 6️⃣ Show results — either success or errors
    feedbackDiv.style.display = 'block';

    if (isValid) {
      feedbackDiv.textContent = "✅ Registration successful!";
      feedbackDiv.style.color = "#28a745"; // green
      form.reset(); // clear the form
    } else {
      feedbackDiv.innerHTML = messages.join('<br>');
      feedbackDiv.style.color = "#dc3545"; // red
    }
  });
});
