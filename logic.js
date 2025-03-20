document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#form");
    const submitBtn = document.querySelector("#submit-btn");
    const toggleLogin = document.querySelector("#toggle-login");
    const nameInput = document.querySelector("#name");
    const emailInput = document.querySelector("#email");
    const passwordInput = document.querySelector("#password");
    const nameError = document.querySelector("#name-error");
    const emailError = document.querySelector("#email-error");
    const passwordError = document.querySelector("#password-error");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      validateForm();
    });
  
    submitBtn.addEventListener("click", (e) => {
      e.preventDefault();
      validateForm();
    });
  
    toggleLogin.addEventListener("click", toggleForm);
  
    function validateForm() {
      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();
  
      if (name === "") {
        nameError.innerHTML = "Name is required";
      } else {
        nameError.innerHTML = "";
      }
  
      if (email === "") {
        emailError.innerHTML = "Email is required";
      } else if (!validateEmail(email)) {
        emailError.innerHTML = "Invalid email format";
      } else {
        emailError.innerHTML = "";
      }
  
      if (password === "") {
        passwordError.innerHTML = "Password is required";
      } else {
        passwordError.innerHTML = "";
      }
    }
  
    function validateEmail(email) {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailRegex.test(email);
    }
  
    function toggleForm() {
      form.innerHTML = `
        <h1 class="form-header">Log In</h1>
        <div class="input-box">
          <label for="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email">
          <span class="error-message" id="email-error"></span>
        </div>
        <div class="input-box">
          <label for="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password">
          <span class="error-message" id="password-error"></span>
        </div>
        <button type="button" id="submit-btn" class="action-btn">Log In</button>
        <p class="toggle-form">Don't have an account? <span id="toggle-signup">Sign Up</span></p>
      `;
  
      const loginSubmitBtn = document.querySelector("#submit-btn");
      const loginEmailInput = document.querySelector("#email");
      const loginPasswordInput = document.querySelector("#password");
      const loginEmailError = document.querySelector("#email-error");
      const loginPasswordError = document.querySelector("#password-error");
  
      loginSubmitBtn.addEventListener("click", (e) => {
        e.preventDefault();
        validateLoginForm(loginEmailInput, loginPasswordInput, loginEmailError, loginPasswordError);
      });
  
      document.querySelector("#toggle-signup").addEventListener("click", () => location.reload());
    }
  
    function validateLoginForm(emailInput, passwordInput, emailError, passwordError) {
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();
  
      if (email === "") {
        emailError.innerHTML = "Email is required";
      } else if (!validateEmail(email)) {
        emailError.innerHTML = "Invalid email format";
      } else {
        emailError.innerHTML = "";
      }
  
      if (password === "") {
        passwordError.innerHTML = "Password is required";
      } else {
        passwordError.innerHTML = "";
      }
    }
  });
  
 
    
