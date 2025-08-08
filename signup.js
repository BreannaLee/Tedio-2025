function validateSignupForm(formData) {
    const { password, confirmPassword } = formData;

    if (password !== confirmPassword) {
        return { valid: false, error: "Passwords do not match." };
    }

    // Prepare data for backend (excluding confirmPassword)
    const backendData = {
        ...formData,
        confirmPassword: undefined // Remove confirmPassword before sending
    };

    return { valid: true, data: backendData };
}

// Handle form submission
document.addEventListener('DOMContentLoaded', function () {
    const signupForm = document.getElementById('signupForm');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');

    // Create a message element for password match feedback
    const messageDiv = document.createElement('div');
    messageDiv.id = 'passwordMatchMessage';
    messageDiv.style.color = 'red';
    confirmPasswordInput.parentNode.appendChild(messageDiv);

    confirmPasswordInput.addEventListener('input', function () {
        if (passwordInput.value !== confirmPasswordInput.value) {
            messageDiv.textContent = "Passwords do not match.";
        } else {
            messageDiv.textContent = "";
        }
    });

    if (signupForm) {
        signupForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const username = document.getElementById('username') ? document.getElementById('username').value : '';
            const email = document.getElementById('email') ? document.getElementById('email').value : '';
            const password = passwordInput.value;
            const confirmPassword = confirmPasswordInput.value;

            const formData = { username, email, password, confirmPassword };
            const result = validateSignupForm(formData);

            if (!result.valid) {
                messageDiv.textContent = result.message;
            } else {
                messageDiv.textContent = "";
                // Send result.data to backend (e.g., via fetch or axios)
                // fetch('/api/signup', { method: 'POST', body: JSON.stringify(result.data) });
                // alert('Signup successful!');
                window.location.href = "upload.html"; // Redirect to upload page
            }
        });
    }
});