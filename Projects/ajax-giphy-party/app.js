console.log("Let's get this party started!");

const body = document.querySelector("body");
body.style.backgroundColor = "gray";
// const h1 = document.querySelector("h1");
// const searchBtn = document.querySelector("#search");
// const removeBtn = document.querySelector("#remove");
// const field = document.querySelector("#search-form");

// field.style.textAlign = "center";

// searchBtn.style.backgroundColor = "darkgray";
// removeBtn.style.backgroundColor = "orange";
const API_KEY = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"; // Replace with your GIPHY API key

const searchForm = document.getElementById("searchForm");
const searchTermInput = document.getElementById("searchTerm");
const gifContainer = document.getElementById("gifContainer");
const removeGIFsButton = document.getElementById("removeGIFs");

searchForm.style.textAlign = "center";

// Function to fetch and display GIFs
async function searchAndDisplayGIFs(event) {
  event.preventDefault(); // Prevent form submission
  const searchTerm = searchTermInput.value;
  try {
    // Make a request to GIPHY API
    const response = await axios.get(
      `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${API_KEY}`
    );
    const data = response.data;

    // Display GIFs on the page
    data.data.forEach((gif) => {
      const img = document.createElement("img");
      img.src = gif.images.fixed_height.url;
      gifContainer.appendChild(img);
    });
  } catch (error) {
    console.error("Error fetching and displaying GIFs:", error);
  }
}

// Function to remove GIFs from the page
function removeGIFs() {
  gifContainer.innerHTML = ""; // Remove all child elements
}

// Event listeners
searchForm.addEventListener("submit", searchAndDisplayGIFs);
removeGIFsButton.addEventListener("click", removeGIFs);
