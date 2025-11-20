// DOM Elements
const loginBox = document.getElementById('login-box');
const signupBox = document.getElementById('signup-box');

const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');

const loginEmailInput = document.getElementById('login-email');
const loginPasswordInput = document.getElementById('login-password');

const signupEmailInput = document.getElementById('signup-email');
const signupPasswordInput = document.getElementById('signup-password');

// Create dynamic error messages
function createErrorMessage(input) {
    let error = document.createElement('span');
    error.className = 'error-message';
    error.style.color = 'red';
    error.style.fontSize = '12px';
    input.parentNode.insertBefore(error, input.nextSibling);
    return error;
}

const loginEmailError = createErrorMessage(loginEmailInput);
const loginPasswordError = createErrorMessage(loginPasswordInput);

const signupEmailError = createErrorMessage(signupEmailInput);
const signupPasswordError = createErrorMessage(signupPasswordInput);

// Clear all error messages
function clearErrors() {
    [loginEmailError, loginPasswordError, signupEmailError, signupPasswordError].forEach(e => e.textContent = '');
}

// Toggle forms
document.getElementById('show-signup').addEventListener('click', (e) => {
    e.preventDefault();
    loginBox.style.display = 'none';
    signupBox.style.display = 'flex';
    clearErrors();
});

document.getElementById('show-login').addEventListener('click', (e) => {
    e.preventDefault();
    signupBox.style.display = 'none';
    loginBox.style.display = 'flex';
    clearErrors();
});

// Check localStorage on page load
window.addEventListener('DOMContentLoaded', () => {
    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');

    if (!storedEmail || !storedPassword) {
        loginBox.style.display = 'none';
        signupBox.style.display = 'flex';
    } else {
        loginBox.style.display = 'flex';
        signupBox.style.display = 'none';
    }
});

// Email validation regex
function isValidEmail(email) {
    return /^\S+@\S+\.\S+$/.test(email);
}

// SweetAlert wrapper
function showAlert(title, text, icon = 'success') {
    Swal.fire({
        title,
        text,
        icon,
        confirmButtonColor: '#00f5ff',
        background: '#131e32',
        color: '#fff'
    });
}

// Signup form
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    clearErrors();

    const email = signupEmailInput.value.trim();
    const password = signupPasswordInput.value.trim();
    let hasError = false;

    if (!email) {
        signupEmailError.textContent = 'Email is required.';
        hasError = true;
    } else if (!isValidEmail(email)) {
        signupEmailError.textContent = 'Invalid email format.';
        hasError = true;
    } else if (email === localStorage.getItem('userEmail')) {
        signupEmailError.textContent = 'Email already exists. Please login.';
        hasError = true;
    }

    if (!password) {
        signupPasswordError.textContent = 'Password is required.';
        hasError = true;
    } else if (password.length < 6) {
        signupPasswordError.textContent = 'Password must be at least 6 characters.';
        hasError = true;
    }

    if (!hasError) {
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userPassword', password);

        signupBox.style.display = 'none';
        loginBox.style.display = 'flex';

        showAlert('Success!', 'Signup successful! Please login.', 'success');
    }
});

// Login form
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    clearErrors();

    const email = loginEmailInput.value.trim();
    const password = loginPasswordInput.value.trim();

    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');

    let hasError = false;

    if (!email) {
        loginEmailError.textContent = 'Email is required.';
        hasError = true;
    } else if (!isValidEmail(email)) {
        loginEmailError.textContent = 'Invalid email format.';
        hasError = true;
    }

    if (!password) {
        loginPasswordError.textContent = 'Password is required.';
        hasError = true;
    }

    if (!hasError) {
        if (email === storedEmail && password === storedPassword) {
            showAlert('Welcome!', 'Login successful!', 'success');
            // Optional: redirect to dashboard
            // window.location.href = 'dashboard.html';
        } else {
            showAlert('Oops!', 'Email or password is incorrect.', 'error');
        }
    }
});



// // DOM Elements
// const loginBox = document.getElementById('login-box');
// const signupBox = document.getElementById('signup-box');

// const loginForm = document.getElementById('login-form');
// const signupForm = document.getElementById('signup-form');

// const loginEmailInput = document.getElementById('login-email');
// const loginPasswordInput = document.getElementById('login-password');

// const signupEmailInput = document.getElementById('signup-email');
// const signupPasswordInput = document.getElementById('signup-password');

// // Error message elements (create them dynamically)
// function createErrorMessage(input) {
//     let error = document.createElement('span');
//     error.className = 'error-message';
//     error.style.color = 'red';
//     error.style.fontSize = '12px';
//     input.parentNode.insertBefore(error, input.nextSibling);
//     return error;
// }

// const loginEmailError = createErrorMessage(loginEmailInput);
// const loginPasswordError = createErrorMessage(loginPasswordInput);

// const signupEmailError = createErrorMessage(signupEmailInput);
// const signupPasswordError = createErrorMessage(signupPasswordInput);

// // Toggle forms
// document.getElementById('show-signup').addEventListener('click', (e) => {
//     e.preventDefault();
//     loginBox.style.display = 'none';
//     signupBox.style.display = 'flex';
//     clearErrors();
// });

// document.getElementById('show-login').addEventListener('click', (e) => {
//     e.preventDefault();
//     signupBox.style.display = 'none';
//     loginBox.style.display = 'flex';
//     clearErrors();
// });

// // Clear all error messages
// function clearErrors() {
//     [loginEmailError, loginPasswordError, signupEmailError, signupPasswordError].forEach(e => e.textContent = '');
// }

// // Check localStorage on page load
// window.addEventListener('DOMContentLoaded', () => {
//     const storedEmail = localStorage.getItem('userEmail');
//     const storedPassword = localStorage.getItem('userPassword');

//     if (!storedEmail || !storedPassword) {
//         // No user stored → show Signup form first
//         loginBox.style.display = 'none';
//         signupBox.style.display = 'flex';
//     } else {
//         // User exists → show Login form
//         loginBox.style.display = 'flex';
//         signupBox.style.display = 'none';
//     }
// });

// // Email validation regex
// function isValidEmail(email) {
//     return /^\S+@\S+\.\S+$/.test(email);
// }

// // Signup form
// signupForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     clearErrors();

//     const email = signupEmailInput.value.trim();
//     const password = signupPasswordInput.value.trim();

//     let hasError = false;

//     if (!email) {
//         signupEmailError.textContent = 'Email is required.';
//         hasError = true;
//     } else if (!isValidEmail(email)) {
//         signupEmailError.textContent = 'Invalid email format.';
//         hasError = true;
//     } else if (email === localStorage.getItem('userEmail')) {
//         signupEmailError.textContent = 'Email already exists. Please login.';
//         hasError = true;
//     }

//     if (!password) {
//         signupPasswordError.textContent = 'Password is required.';
//         hasError = true;
//     } else if (password.length < 6) {
//         signupPasswordError.textContent = 'Password must be at least 6 characters.';
//         hasError = true;
//     }

//     if (!hasError) {
//         localStorage.setItem('userEmail', email);
//         localStorage.setItem('userPassword', password);
//         signupBox.style.display = 'none';
//         loginBox.style.display = 'flex';
//         alert('Signup successful! Please login.');
//     }
// });

// // Login form
// loginForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     clearErrors();

//     const email = loginEmailInput.value.trim();
//     const password = loginPasswordInput.value.trim();

//     const storedEmail = localStorage.getItem('userEmail');
//     const storedPassword = localStorage.getItem('userPassword');

//     let hasError = false;

//     if (!email) {
//         loginEmailError.textContent = 'Email is required.';
//         hasError = true;
//     } else if (!isValidEmail(email)) {
//         loginEmailError.textContent = 'Invalid email format.';
//         hasError = true;
//     }

//     if (!password) {
//         loginPasswordError.textContent = 'Password is required.';
//         hasError = true;
//     }

//     if (!hasError) {
//         if (email === storedEmail && password === storedPassword) {
//             alert('Login successful!');
//             // Optional: redirect or hide form
//             // window.location.href = 'dashboard.html';
//         } else {
//             loginPasswordError.textContent = 'Email or password is incorrect.';
//         }
//     }
// });





// // Show Signup / Login forms
// const loginBox = document.getElementById('login-box');
// const signupBox = document.getElementById('signup-box');

// // Toggle forms
// document.getElementById('show-signup').addEventListener('click', (e) => {
//     e.preventDefault();
//     loginBox.style.display = 'none';
//     signupBox.style.display = 'flex';
// });

// document.getElementById('show-login').addEventListener('click', (e) => {
//     e.preventDefault();
//     signupBox.style.display = 'none';
//     loginBox.style.display = 'flex';
// });

// // Check localStorage on page load
// window.addEventListener('DOMContentLoaded', () => {
//     const storedEmail = localStorage.getItem('userEmail');
//     const storedPassword = localStorage.getItem('userPassword');

//     if (!storedEmail || !storedPassword) {
//         // No user stored → show Signup form first
//         loginBox.style.display = 'none';
//         signupBox.style.display = 'flex';
//     } else {
//         // User exists → show Login form
//         loginBox.style.display = 'flex';
//         signupBox.style.display = 'none';
//     }
// });

// // Signup form
// document.getElementById('signup-form').addEventListener('submit', (e) => {
//     e.preventDefault();
//     const email = document.getElementById('signup-email').value;
//     const password = document.getElementById('signup-password').value;

//     if(email && password){
//         // Save to localStorage
//         localStorage.setItem('userEmail', email);
//         localStorage.setItem('userPassword', password);
//         alert('Signup successful! Please login.');
//         // Switch to login form
//         signupBox.style.display = 'none';
//         loginBox.style.display = 'flex';
//     }
// });

// // Login form
// document.getElementById('login-form').addEventListener('submit', (e) => {
//     e.preventDefault();
//     const email = document.getElementById('login-email').value;
//     const password = document.getElementById('login-password').value;

//     const storedEmail = localStorage.getItem('userEmail');
//     const storedPassword = localStorage.getItem('userPassword');

//     if(email === storedEmail && password === storedPassword){
//         alert('Login successful!');
//         // Redirect or show dashboard here
//         // window.location.href = 'dashboard.html';
//     } else {
//         alert('Invalid email or password!');
//     }
// });
