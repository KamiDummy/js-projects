const nameInput = document.querySelector("#full-name");
const emailInput = document.querySelector("#email");
const orderNoInput = document.querySelector("#order-no");
const productCodeInput = document.querySelector("#product-code");
const quantityInput = document.querySelector("#quantity");
const complaintsGroup = document.querySelector("#complaints-group");
const complaintCheckBoxes = document.querySelectorAll(
  '#complaints-group input[type="checkbox"]'
);
const solutionGroups = document.querySelector("#solutions-group");
const solutionCheckBoxes = document.querySelectorAll(
  '#solutions-group input[type="radio"]'
);
const complaintDescription = document.querySelector("#complaint-description");
const solutionDescription = document.querySelector("#solution-description");
const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  isValid();
});

function validateFullName() {
  return nameInput.value !== "";
}

function validateEmail() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(emailInput.value);
}

function validateOrderNo() {
  const orderNoRegex = /^2024\d{6}$/;
  return orderNoRegex.test(orderNoInput.value);
}

function validateProductCode() {
  const productCodeRegex = /^[A-Za-z]{2}\d{2}-[A-Za-z]\d{3}-[A-Za-z]{2}\d$/;
  return productCodeRegex.test(productCodeInput.value);
}

function validateQuantity() {
  return quantityInput.value > 0;
}

function validateComplaintsGroup() {
  return Array.from(complaintCheckBoxes).some((cb) => cb.checked);
}

function validateComplaintDescription() {
  return complaintCheckBoxes[3]?.checked
    ? complaintDescription.value.trim().length >= 20
    : true;
}
function validateSolutionGroups() {
  return Array.from(solutionCheckBoxes).some((cb) => cb.checked);
}
function validateSolutionDescription() {
  return solutionCheckBoxes[2]?.checked
    ? solutionDescription.value.trim().length >= 20
    : true;
}

function validateForm() {
  const validationResults = {
    "full-name": validateFullName(),
    email: validateEmail(),
    "order-no": validateOrderNo(),
    "product-code": validateProductCode(),
    quantity: validateQuantity(),
    "complaints-group": validateComplaintsGroup(),
    "complaint-description": validateComplaintDescription(),
    "solutions-group": validateSolutionGroups(),
    "solution-description": validateSolutionDescription(),
  };
  return validationResults;
}

function isValid() {
  return Object.values(validateForm()).every((value) => value === true);
}
nameInput.addEventListener("change", () => {
  if (validateFullName()) {
    nameInput.style.borderColor = "green";
  } else nameInput.style.borderColor = "red";
});
emailInput.addEventListener("change", () => {
  if (validateEmail()) {
    emailInput.style.borderColor = "green";
  } else emailInput.style.borderColor = "red";
});

orderNoInput.addEventListener("change", () => {
  if (validateOrderNo()) {
    orderNoInput.style.borderColor = "green";
  } else orderNoInput.style.borderColor = "red";
});
productCodeInput.addEventListener("change", () => {
  if (validateProductCode()) {
    productCodeInput.style.borderColor = "green";
  } else productCodeInput.style.borderColor = "red";
});
quantityInput.addEventListener("change", () => {
  if (validateQuantity()) {
    quantityInput.style.borderColor = "green";
  } else quantityInput.style.borderColor = "red";
});

complaintsGroup.addEventListener("change", () => {
  if (validateComplaintsGroup()) {
    complaintsGroup.style.borderColor = "green";
  } else complaintsGroup.style.borderColor = "red";
});

complaintDescription.addEventListener("change", () => {
  if (validateComplaintDescription()) {
    complaintDescription.style.borderColor = "green";
  } else complaintDescription.style.borderColor = "red";
});

solutionDescription.addEventListener("change", () => {
  if (validateSolutionDescription()) {
    solutionDescription.style.borderColor = "green";
  } else solutionDescription.style.borderColor = "red";
});

solutionGroups.addEventListener("change", () => {
  if (validateSolutionGroups()) {
    solutionGroups.style.borderColor = "green";
  } else solutionGroups.style.borderColor = "red";
});
