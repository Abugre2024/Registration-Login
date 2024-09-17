// Get form element by id
const registerForm = document.querySelector("#register");
console.log(registerForm);
registerForm.addEventListener("submit", function (event) {
  event.preventDefault();
  // Collect form data
  const formData = new FormData(registerForm);
//   console.log(
//     formData.get("username"),
//     formData.get(email),
//     formData.get(password)
//   );
// Send data to backend
// Display success message to user
const messageH1 = document.querySelector("#message");
messageH1.textContent = "Accounnt registered successfully!";
});

// declare variable age
const age = 71;
// Define squareAge Function
function squareAge(age) {
  return age ** 2;
}

const squaredAge = squareAge(34);
console.log(squaredAge);
