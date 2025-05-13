// Get references to DOM elements
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("ul");

button.addEventListener("click", function () {
  if (input.value.trim() !== "") {
    const listItem = document.createElement("li");
    const deleteButton = document.createElement("button");
    listItem.textContent = input.value;
    deleteButton.textContent = "❌";
    listItem.append(deleteButton);
    list.appendChild(listItem);

    deleteButton.addEventListener("click", function () {
      list.removeChild(listItem);
      input.focus();
    });

    input.value = "";
    input.focus();
  }
});
