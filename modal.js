var modal = document.getElementById("myModal");
var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btn1 = document.getElementById("myBtn1");
var btn2 = document.getElementById("myBtn2");


function openModal() {
  modal.style.display = "block";
}

function openModal1() {
  modal1.style.display = "block";
}

function openModal2() {
  modal2.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

function closeModal1() {
  modal1.style.display = "none";
}

function closeModal2() {
  modal2.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  } else if (event.target == modal1) {
    modal1.style.display = "none";
  } else if (event.target == modal2) {
    modal2.style.display = "none";
  }
}
