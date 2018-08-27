var modal = document.getElementById('myModal');
console.log("Hello");

// Get the image and insert it inside the modal - use its "alt" text as a caption
let img = document.querySelectorAll('.myImg');
let modalImg = document.getElementById("img01");
let captionText = document.getElementById("caption");
let imgBox = document.querySelectorAll(".imgBox");

//Loop through the Divs and add Class Orange
for(let i = 0; i < imgBox.length; i++) {

  if(i == 0 || i % 4 == 0 || (i + 1) % 4 == 0 ){
    imgBox[i].classList.add("orange");
  }

  imgBox[i].querySelector("span").innerHTML = i + 1;

}

img.forEach( (element) => element.addEventListener("click", (e) => {
  modal.style.display = "block";
  modalImg.src = e.target.src;
  captionText.innerHTML = e.target.alt;
  console.log("Clicked");
}));

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.addEventListener("click", () => {
  modal.style.display = "none";
});
