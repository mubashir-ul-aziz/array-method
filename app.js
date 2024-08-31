let arr = [];

document.getElementById("addItemBtn").addEventListener("click", function () {
  let value = prompt("Enter a value to add to the array:");
  if (value !== null && value.trim() !== "") {
    arr.push(value);
    alert("Item added. Current array: [" + arr.join(", ") + "]");
  }
});

document
  .getElementById("showMethodsBtn")
  .addEventListener("click", function () {
    document.getElementById("methodsContainer").style.display = "block";
  });

function arrayMethod(method) {
  let result;
  let numItems;

  switch (method) {
    case "push":
      let pushValue = prompt("Enter a value to push into the array:");
      if (pushValue !== null) {
        arr.push(pushValue);
        alert("Item pushed. Current array: [" + arr.join(", ") + "]");
      }
      break;

    case "pop":
      if (arr.length === 0) {
        alert("Array is empty.");
        return;
      }
      result = arr.pop();
      alert(
        "Item popped: " + result + ". Current array: [" + arr.join(", ") + "]"
      );
      break;

    case "shift":
      if (arr.length === 0) {
        alert("Array is empty.");
        return;
      }
      result = arr.shift();
      alert(
        "Item shifted: " + result + ". Current array: [" + arr.join(", ") + "]"
      );
      break;

    case "unshift":
      let unshiftValue = prompt("Enter a value to unshift into the array:");
      if (unshiftValue !== null) {
        arr.unshift(unshiftValue);
        alert("Item unshifted. Current array: [" + arr.join(", ") + "]");
      }
      break;

    case "splice":
      let startIndex = parseInt(prompt("Enter the start index for splice:"));
      if (isNaN(startIndex) || startIndex < 0 || startIndex >= arr.length) {
        alert("Invalid index.");
        return;
      }
      numItems = parseInt(prompt("Enter the number of items to remove:"));
      if (isNaN(numItems) || numItems < 0) {
        alert("Invalid number.");
        return;
      }
      let itemsToAdd = [];
      for (let i = 0; i < numItems; i++) {
        let item = prompt("Enter a value to add to the array:");
        if (item !== null) {
          itemsToAdd.push(item);
        }
      }
      result = arr.splice(startIndex, numItems, ...itemsToAdd);
      alert("Array after splice: [" + arr.join(", ") + "]");
      break;

    case "sort":
      arr.sort();
      alert("Array sorted. Current array: [" + arr.join(", ") + "]");
      break;

    case "reverse":
      arr.reverse();
      alert("Array reversed. Current array: [" + arr.join(", ") + "]");
      break;

    case "concat":
      let concatArray = prompt(
        "Enter comma-separated values to concatenate with the array:"
      );
      if (concatArray !== null) {
        arr = arr.concat(concatArray.split(",").map((v) => v.trim()));
        alert("Array after concat: [" + arr.join(", ") + "]");
      }
      break;

    case "join":
      let separator = prompt("Enter a separator for joining the array:");
      if (separator !== null) {
        alert("Array joined: " + arr.join(separator));
      }
      break;

    case "slice":
      let start = parseInt(prompt("Enter the start index for slice:"));
      let end = parseInt(prompt("Enter the end index for slice:"));
      if (
        isNaN(start) ||
        start < 0 ||
        start >= arr.length ||
        isNaN(end) ||
        end < start ||
        end > arr.length
      ) {
        alert("Invalid indices.");
        return;
      }
      result = arr.slice(start, end);
      alert("Array slice: [" + result.join(", ") + "]");
      break;

    default:
      alert("Unknown method.");
      break;
  }
}
