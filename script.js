document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from submitting
  
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMessage = document.getElementById("error-message");
  
    if (!username || !password) {
      errorMessage.textContent = "Please fill in both fields.";
      errorMessage.style.color = "red";
      return;
    }
  
    // Optional: show success message
    errorMessage.style.color = "green";
    errorMessage.textContent = "Logging in...";
  
    // Redirect after short delay
    setTimeout(() => {
      window.location.href = "http://127.0.0.1:3000/gaming/gaming.html";
    }, 1000); // 1 second delay (optional)
  });
  