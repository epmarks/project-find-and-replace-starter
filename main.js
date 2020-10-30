// You should NOT change the HTML or CSS in this project (at least until you reach
// the bonus objectives). Focus on the JavaScript.

const findInput = document.querySelector(".find-input");
const replaceInput = document.querySelector(".replace-input");
const replaceAllButton = document.querySelector(".replace-all-button");

// The following variable holds your OUTER ARRAY of row elements.
// Later you will need an OUTER LOOP to loop over the individual elements within
// this array.
const rowElements = document.querySelectorAll(".row");

// for (i = 0; i < rowElements.length; i += 1) {
//     const currentRowElement = rowElements[i];

//     currentRowElement.addEventListener("click", function(event) {
//         const clickedRowElement = event.target;

//         if () {}
//     }
// });

// When you call the function below, it will get and return an INNER ARRAY
// containing the cell elements for a given row.
// Call this function from WITHIN your row elements loop. Then you will, in turn,
// need to loop over the resulting cell elements. But where should this whole
// NESTED LOOP go? Think through the user's experience: when should WHAT happen?
function getCellElements(currentRowElement) {
  return currentRowElement.querySelectorAll(".cell");
}

replaceAllButton.addEventListener("click", function () {
  let userInput = findInput.Value;
  let replacement = replaceInput.Value;

  for (i = 0; i < rowElements.length; i++) {
    const currentRowElement = rowElements[i];
    getCellElements(currentRowElement);
    console.log(currentRowElement);
    for (j = 0; j < currentRowElement.length; j++) {
      const currentCell = currentRowElement[j];
      console.log(currentCell);
    }
  }
});
