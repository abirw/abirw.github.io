const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const img_arr = ["kermit.PNG", "patrick.PNG", "pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"]

/* Declaring the alternative text for each image file */
const alt_arr = ["kermit", "patrick", "eye", "lava?", "flowers", "hyroglyphics", "butterfly"]

/* Looping through images */
for (let i = 0; i < img_arr.length; i++){
  const newImage = document.createElement('img');
  newImage.setAttribute('src', "images/"+img_arr[i]);
  newImage.setAttribute('alt', alt_arr[i]);
  newImage.addEventListener('click', () => {setDisplayedImage(newImage);});
  thumbBar.appendChild(newImage);
}

function setDisplayedImage(img){
  displayedImage.src = img.src;
  displayedImage.alt = img.alt;
}

function lightenDarken(btn){
  if (btn.getAttribute("class") === "dark"){
    btn.setAttribute("class", "light");
    btn.textContent = "Lighten";
    overlay.style.backgroundColor =  "rgba(0, 0, 0, 0.5)";
  } else {
    btn.setAttribute("class", "dark");
    btn.textContent = "Darken";
    overlay.style.backgroundColor =  "rgba(0, 0, 0, 0)";
  }
}

btn.addEventListener('click', () => {lightenDarken(btn);});