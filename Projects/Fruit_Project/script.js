
// Get the input element and the results container
const input = document.getElementById('fruit');
const suggestions = document.querySelector('.suggestions ul'); // Select the <ul> element inside .suggestions
const searchContainer = document.querySelector('.search-container'); // Select the search container

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu', 'Monstera Deliciosa'];





// Makes search function filter out fruit depending on user input.
function search(str) {
  const userInput = str.toLowerCase().trim();
  return fruit.filter(fruit => fruit.toLowerCase().includes(userInput));
} // move the toLowerCase() function to search handler***

// Event handler for search input changes
function searchHandler(e) {
  const userInput = e.target.value;
  const searchResults = search(userInput);
  showSuggestions(searchResults, userInput);
  searchContainer.classList.add('show-results'); 
}

// Update the results container based on the search results (Should be block commented)a
function showSuggestions(results, inputVal) {
  suggestions.innerHTML = ''; // Clears ul

  if (results.length === 0 || inputVal.trim() === '') {
	suggestions.parentElement.style.display = 'none'; // Hide the .suggestions container
  } else {
	suggestions.parentElement.style.display = 'block'; // Show the .suggestions container
	const userInput = inputVal.trim();
	results.forEach(result => {
	  const li = document.createElement('li');
	  const index = result.toLowerCase().indexOf(userInput.toLowerCase()); // Repetative with the toLowerCase Can remove it as is already being stated.
	  if (index >= 0) {
		li.innerHTML = `${result.substring(0, index)}<strong class="highlight">${result.substring(index, index + userInput.length)}</strong>${result.substring(index + userInput.length)}`; // Remove strong string and put in, put in own value
	  } else {
		li.textContent = result;
	  }
	  li.addEventListener('click', () => {
		input.value = result;
		suggestions.parentElement.style.display = 'none'; //Split the parentElement.style.display!
		 // Hide the .suggestions container after selection
	  });
	  suggestions.appendChild(li); // Appends to the <ul> container
	});
  }
}


// Event handler for using a suggestion
function useSuggestion(e) {
  if (e.target.tagName === 'LI') {
	input.value = e.target.textContent;
	suggestions.parentElement.style.display = 'none'; // Hide the .suggestions container after selection
  }
}

// Attach the event listeners
input.addEventListener('input', searchHandler);
suggestions.addEventListener('click', useSuggestion); // Add the event listener to the .suggestions container

