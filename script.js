const form = document.getElementById("form");
const username = document.getElementById("username");
const phone = document.getElementById("phone");
const aadhar = document.getElementById("aadhar");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const showError = (input, message) => {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
};

const showSuccess = input => {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
  const small = formControl.querySelector("small");
  small.innerText = " ";
};

const checkFieldsIsEmpty = inputArr => {
  inputArr.forEach(input => {
    //console.log(input);
    if (input.value.trim() === "") {
      showError(input, `${capitalizeFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }

    if (input.id === "email") {
      checkEmail(email);
    }
    if (input.id === "aadhar") {
      checkAadhar(aadhar);
    }
  });
};

const checkLength = (input, min, max) => {
  if (input.value.length < min) {
    showError(
      input,
      `${capitalizeFieldName(input)} should be of minimun ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${capitalizeFieldName(input)} should not be more than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
};

const checkEmail = email => {
  if (
    !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email.value.trim()
    )
  ) {
    showError(email, "Incorrect email format ");
  } else {
    showSuccess(email);
  }
};

const checkPassword = (password, confirmPassword) => {
  if (password.value.trim() === confirmPassword.value.trim()) {
    showSuccess(confirmPassword);
  } else {
    showError(confirmPassword, `Password doesn't match`);
  }
};

const checkAadhar = aadhar => {
  if (!/^[0-9]*$/.test(aadhar.value)) {
    showError(aadhar, "Aadhar Number should only contain digit(0-9)");
  } else {
    showSuccess(aadhar);
  }
};

const capitalizeFieldName = input => {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
};

form.addEventListener("submit", function(e) {
  e.preventDefault();
  checkFieldsIsEmpty([
    username,
    phone,
    email,
    aadhar,
    password,
    confirmPassword
  ]);
  checkLength(username, 5, 15);
  checkLength(phone, 10, 10);
  checkLength(password, 6, 25);
  checkLength(aadhar, 16, 16);
  checkEmail(email);
  checkPassword(password, confirmPassword);

  //   if (username.value === "") {
  //     showError(username, "Username is required");
  //   } else {
  //     showSuccess(username);
  //   }
  //   if (phone.value === "") {
  //     //console.log(/^[0-9]*$/.test(phone.value));
  //     showError(phone, "Please enter phone number");
  //   } else if (!/^[0-9]*$/.test(phone.value)) {
  //     showError(phone, "Please enter only digits 0-9");
  //   } else if (phone.value.match(/[0-9]/g).length !== 10) {
  //     showError(phone, "Phone number should be 10 digits only");
  //   } else {
  //     showSuccess(phone);
  //   }

  //   if (aadhar.value === "") {
  //     showError(aadhar, "Aadhar number is required");
  //   } else if (!/^[0-9]*$/.test(aadhar.value)) {
  //     showError(aadhar, "Please enter only digits 0-9");
  //   } else if (aadhar.value.match(/[0-9]/g).length !== 16) {
  //     showError(aadhar, "Aadhar number should be 16 digits only");
  //   } else {
  //     showSuccess(aadhar);
  //   }

  //   if (email.value === "") {
  //     showError(email, "Email is required");
  //   } else if (
  //     !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
  //       email.value
  //     )
  //   ) {
  //     showError(email, "Incorrect email format ");
  //   } else {
  //     showSuccess(email);
  //   }

  //   if (password.value === "") {
  //     showError(password, "Password is required");
  //   } else if (password.value.length < 6) {
  //     showError(password, "Password should be atleast 6 characters");
  //   } else {
  //     showSuccess(password);
  //   }
  //   if (password.value !== confirmPassword.value) {
  //     showError(confirmPassword, "Password doesn't match");
  //   } else {
  //     showSuccess(confirmPassword);
  //   }
});
