const inputRef = document.querySelector("#validation-input");
console.log(inputRef);

const validValue = inputRef.dataset.length;
console.log(validValue);

// inputRef.addEventListener("blur", (event) => {
//   console.log(event.currentTarget.value.length);
//   console.log(Number(validValue));
//   if (event.currentTarget.value.length === Number(validValue)) {
//     console.log("------");
//     inputRef.classList.remove("invalid");
//     inputRef.classList.add("valid");
//   } else {
//     inputRef.classList.remove("valid");
//     inputRef.classList.add("invalid");
//   }
// });

// inputRef.addEventListener("blur", (event) => {
//   console.log(event.currentTarget.value.length);
//   console.log(Number(validValue));
//   if (event.currentTarget.value.length === Number(validValue)) {
//     console.log("------");

//     inputRef.setAttribute("class", "valid");
//   } else {
//     inputRef.setAttribute("class", "invalid");
//   }
// });
// console.log(inputRef);

inputRef.addEventListener("blur", (event) => {
  inputRef.className =
    event.currentTarget.value.length === Number(validValue)
      ? "valid"
      : "invalid";
});
