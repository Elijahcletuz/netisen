document.addEventListener('DOMContentLoaded', function() {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const submitButton = document.getElementById('submitButton');
    const usernameError = document.querySelector('.username_error');
    const passwordError = document.querySelector('.error_password');

    function updateSubmitButton() {
        if (usernameInput.value.trim() !== '' && passwordInput.value.trim() !== '') {
            submitButton.classList.remove('initial_button');
        } else {
            submitButton.classList.add('initial_button');
        }
    }

    function handleFormSubmission(event) {
        if (usernameInput.value.trim() === '') {
            usernameError.style.visibility = 'visible';
        } else {
            usernameError.style.visibility = 'hidden';
        }

        if (passwordInput.value.trim() === '') {
            passwordError.style.visibility = 'visible';
        } else {
            passwordError.style.visibility = 'hidden';
        }

        if (usernameInput.value.trim() === '' && passwordInput.value.trim() === '') {
            usernameError.style.visibility = 'visible';
            passwordError.style.visibility = 'visible';
        }

        event.preventDefault(); // Prevent the form from submitting
    }

    usernameInput.addEventListener('input', updateSubmitButton);
    passwordInput.addEventListener('input', updateSubmitButton);
    submitButton.addEventListener('click', handleFormSubmission);
});


const passwordField = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');

togglePassword.addEventListener('click', function() {
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        togglePassword.src = '/assets/images/hidden-password.svg'; // Replace with your image for showing the password
    } else {
        passwordField.type = 'password';
        togglePassword.src = '/assets/images/hidden-password.svg'; // Replace with your image for hiding the password
    }
});






document.addEventListener('DOMContentLoaded', function() {
    // ... (previous code remains the same)

    const forgotLink = document.querySelector('.forgot');
    const forgotPasswordSection = document.querySelector('.forgot_password');
    const resendLinkButton = document.querySelector('.resend_link');
    const newPasswordSection = document.querySelector('.new_password');

    forgotLink.addEventListener('click', function() {
        document.querySelector('.login_container').style.display = 'none';
        document.querySelector('.option_section').style.display = 'none';
        document.querySelector('.new_password').style.display = 'none';
        forgotPasswordSection.style.display = 'block';
    });

    resendLinkButton.addEventListener('click', function() {
        document.querySelector('.login_container').style.display = 'block';
        document.querySelector('.option_section').style.display = 'block';
        forgotPasswordSection.style.display = 'none';
        newPasswordSection.style.display = 'block';
    });

    // ... (remaining code for form validation and button behavior)
});
