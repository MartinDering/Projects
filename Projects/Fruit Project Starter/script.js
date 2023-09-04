// const input = document.querySelector('#fruit');
// const suggestions = document.querySelector('.suggestions ul');
// const wholeContainer = document.querySelector('.search-container');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];



const inputElement = document.getElementById('textInput');
const resultsContainer = document.getElementById('resultsContainer');
const searchContainer = document.getElementById('searchContainer');

// Define the search function to filter fruits based on the prefix
function search() {
  const userInput = inputElement.value.toLowerCase().trim();
  return fruit.filter(fruits => fruits.toLowerCase().includes(userInput));
}

    // Update the results container based on the search results
	function updateResults() {
		const searchResults = search();
		resultsContainer.innerHTML = '';
  
		if (searchResults.length === 0 || inputElement.value.trim() === '') {
			resultsContainer.style.display = 'none';
		  } else {
			resultsContainer.style.display = 'block';
			const userInput = inputElement.value.trim();
			searchResults.forEach(result => {
			  const p = document.createElement('p');
			  const index = result.toLowerCase().indexOf(userInput.toLowerCase());
			  if (index >= 0) {
				p.innerHTML = `${result.substring(0, index)}<strong class="highlight">${result.substring(index, index + userInput.length)}</strong>${result.substring(index + userInput.length)}`;io
			  } else {
				p.textContent = result;
			  }
			  p.addEventListener('click', () => {
				inputElement.value = result;
				resultsContainer.style.display = 'none';
			  });
			  resultsContainer.appendChild(p);
			});
		  }
		}
  
	  // Attach the event listener to the input element for typing and focus
	  inputElement.addEventListener('input', () => {
		updateResults();
		searchContainer.classList.add('show-results');
	  });
  
	  inputElement.addEventListener('focus', () => {
		if (inputElement.value.trim() !== '') {
		  updateResults();
		  searchContainer.classList.add('show-results');
		}
	  });

	   // Listen for changes in the input value (including deletion) to hide the results container
	   inputElement.addEventListener('change', () => {
		if (inputElement.value.trim() === '') {
		  resultsContainer.style.display = 'none';
		}
	  });
  
	  // Hide results when user clicks outside the search container or results container
	  document.addEventListener('click', (event) => {
		const isClickedInsideSearchContainer = searchContainer.contains(event.target);
		const isClickedInsideResultsContainer = resultsContainer.contains(event.target);
		const isClickedOnInput = event.target === inputElement;
  
		if (!isClickedInsideSearchContainer && !isClickedInsideResultsContainer && !isClickedOnInput) {
		  searchContainer.classList.remove('show-results');
		}
	  });

// function search(str) {
// 	let results = [];

// 	// TODO

// 	return results;
// }

// function searchHandler(e) {
// 	// TODO
// }

// function showSuggestions(results, inputVal) {

// 	// TODO
// }

// function useSuggestion(e) {
// 	// TODO
// }

// input.addEventListener('keyup', searchHandler);
// suggestions.addEventListener('click', useSuggestion);