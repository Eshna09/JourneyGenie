// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Select the form, input fields, and password toggle button
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    
    // Show/Hide password functionality
    const passwordToggle = document.createElement('button');
    passwordToggle.textContent = 'Show Password';
    passwordInput.parentNode.appendChild(passwordToggle);

    passwordToggle.addEventListener('click', function (event) {
        event.preventDefault();
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            passwordToggle.textContent = 'Hide Password';
        } else {
            passwordInput.type = 'password';
            passwordToggle.textContent = 'Show Password';
        }
    });

    // Form submission validation
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        // Clear any previous error messages
        clearErrors();

        // Validate email format
        if (!email) {
            showError('email', 'Email is required!');
        } else if (!emailPattern.test(email)) {
            showError('email', 'Please enter a valid email address!');
        }

        // Validate password
        if (!password) {
            showError('password', 'Password is required!');
        }

        // If no errors, simulate successful login
        if (!document.querySelector('.error')) {
            alert('Login successful!');
            // You can redirect to a dashboard or another page here
            window.location.href = 'dashboard.html';
        }
    });

    // Function to show error messages
    function showError(fieldId, message) {
        const field = document.getElementById(fieldId);
        const error = document.createElement('div');
        error.classList.add('error');
        error.textContent = message;
        field.parentNode.appendChild(error);
    }

    // Function to clear error messages
    function clearErrors() {
        const errors = document.querySelectorAll('.error');
        errors.forEach(error => error.remove());
    }

    // Add smooth animations for the form elements
    loginForm.classList.add('fadeIn');
    emailInput.classList.add('fadeIn');
    passwordInput.classList.add('fadeIn');
    passwordToggle.classList.add('fadeIn');
});
