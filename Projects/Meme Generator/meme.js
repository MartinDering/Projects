





 const form = document.getElementById('uploadForm');
const output = document.getElementById('output');

//Makes it so form is not submitted without validation
form.addEventListener('submit', function(e) { 
  e.preventDefault();

  //Grabs the html content elements
  const topText = document.getElementById('topText').value;
  const bottomText = document.getElementById('bottomText').value;
  const imageLink = document.getElementById('imageLink').value;

  //Informs User of missing inputs reqiured
  if (!topText || !bottomText || !imageLink) {
    alert('Please fill in all fields');
    return;
  }

  //Creates the container div for meme container
  const memeContainer = document.createElement('div');
  memeContainer.classList.add('meme-container');

  //Grabs the link image 
  const image = document.createElement('img');
  image.alt = 'Uploaded Image';
  image.src = imageLink;

  //Applies the text overlay top text to the meme image
  const topTextOverlay = document.createElement('div');
  topTextOverlay.classList.add('text-overlay', 'top-text');
  topTextOverlay.textContent = topText;

  //Applies the bottom text overlay to the meme image
  const bottomTextOverlay = document.createElement('div');
  bottomTextOverlay.classList.add('text-overlay', 'bottom-text');
  bottomTextOverlay.textContent = bottomText;

  //Creating a delete button and adding it to the output container and adding the function to delete entire meme container created.
  const deleteButton = document.createElement('button');
  deleteButton.classList.add('delete-button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', function() {
    memeContainer.remove();
  });

  //pulls the image/ text overlays and delete botton and adds it the the memecontainer.
  memeContainer.appendChild(image);
  memeContainer.appendChild(topTextOverlay);
  memeContainer.appendChild(bottomTextOverlay);
  memeContainer.appendChild(deleteButton);
// takes the memecontainer and displays result
  output.appendChild(memeContainer);
// resets input fields to be used again
  form.reset();
});