let title = document.getElementById("titleInput");
let category = document.getElementById("categoryInput");
const parent = document.querySelector("ul");
let form = document.querySelector("form");

// Retrieve cards data from localStorage if available
const allCards = JSON.parse(localStorage.getItem("cards")) || [];

// Function to create a card based on the provided data
function createCardUI(cardsArray) {
  // Clear existing cards
  parent.innerHTML = "";

  cardsArray.forEach((card) => {
    // Create list item
    let li = document.createElement("li");

    // title
    const createTitle = document.createElement("input");
    createTitle.setAttribute("type", "text");
    createTitle.setAttribute("class", "title");
    createTitle.value = card.title;

    // category
    const createCategory = document.createElement("input");
    createCategory.setAttribute("type", "text");
    createCategory.setAttribute("class", "category");
    createCategory.value = card.category;

    // Append elements to list item
    li.append(createTitle, createCategory);
    parent.append(li);
  });
}
// Event listener for form submission
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get value from input
  let titleValue = title.value;
  let categoryValue = category.value;

  // Add data to allCards array
  allCards.push({ title: titleValue, category: categoryValue });

  // Save allCards array to localStorage
  localStorage.setItem("cards", JSON.stringify(allCards));

  // Create card UI
  createCardUI(allCards);

  // Clear input fields
  title.value = "";
  category.value = "";
});
createCardUI(allCards);
