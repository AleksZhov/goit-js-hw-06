const nameInputRef = document.querySelector("#name-input");

const nameOutputRef = document.querySelector("#name-output");

nameInputRef.addEventListener("input", (event) => {
  if (event.currentTarget.value === "") {
    return (nameOutputRef.textContent = "Anonymous");
  }
  nameOutputRef.textContent = event.currentTarget.value;
});
