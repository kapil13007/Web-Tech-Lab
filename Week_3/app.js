const inputName = document.getElementById("Name");
const inputAge = document.getElementById("Age");
const inputEmail = document.getElementById("Email");
const inputPhone_no = document.getElementById("Phone");
const SubmitBtn = document.getElementById("SubmitBtn");

const nameError = document.getElementById("nameError");
const ageError = document.getElementById("ageError");
const mailError = document.getElementById("mailError");
const phoneError = document.getElementById("phoneError");

SubmitBtn.addEventListener("click", () => {
    const name = inputName.value.trim();
    const age = parseInt(inputAge.value);
    const email = inputEmail.value.trim();
    const phone_no = inputPhone_no.value.trim();

    let isValid = true;

    if (name.length < 5) {
        nameError.textContent = "name must be atleast 5 characters long"
        isValid = false;
    }

    if (isNaN(age) || age <= 17) {
        ageError.textContent = "age must be greater than 18"
        isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        mailError.textContent = "invalid mail"
        isValid = false;
    }

    if (!/^\d{10}$/.test(phone_no)) {
        phoneError.textContent = "invalid phone number"
        isValid = false;
    }

    if (isValid) {
        alert("Form submitted successfully");
    }
});

