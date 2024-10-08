// src/utils/formUtilities.js

// Default form state
export const initialRegisterFormState = {
    userName: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    repeatpassword: ''
};

export const initialLoginFormState = {
    email: '',
    password: ''
};

// Form validation function
export const validateSignUpForm = (formData) => {
    const { userName, firstName, lastName, email, password, repeatpassword } = formData;
    
    if (!userName) return "Username is required.";
    if (!firstName) return "First name is required.";
    if (!lastName) return "Last name is required.";
    if (!email) return "Email is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "Please enter a valid email address.";
    if (!password) return "Password is required.";
    if (password.length < 6) return "Password must be at least 6 characters long.";
    if (password !== repeatpassword) return "Passwords do not match.";
    
    return null; // No errors
};
