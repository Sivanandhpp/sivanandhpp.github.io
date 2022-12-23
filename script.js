
// TOP RIGHT PROFILE POPUP CONTROLLER 
document.getElementById("profile-popup").onclick = function (e) {
  var x = document.getElementById("profile-dropdown")

  if (window.getComputedStyle(x).display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
document.getElementById("profile-dropdown").onmouseleave = function (e) {

  document.getElementById("profile-dropdown").style.display = "none";
}



// LIGHT MODE AND DARK MODE TOGGLE 
const toggleButton = document.querySelector('.modeToggle');

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
});

// SIDE TAB CHANGE FUNCTION
function changeTab(evt, tabName) {
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// TOP LEFT MacOS BUTTONS CONTROLLER 
function toggleFullscreen() {
  let elem = document.body;

  if (!document.fullscreenElement) {
    elem.requestFullscreen().catch((err) => {
      alert(`Error attempting to enable fullscreen mode: ${err.message} (${err.name})`);
    });
  } else {
    document.exitFullscreen();
  }
}


// TOP LEFT HAMBURGER CONTROLLER ON MOBILE DEVICES 
document.getElementById("navbar").onclick = function (e) {
  var x = document.getElementById("navbarele")

  if (window.getComputedStyle(x).display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
// TOP LEFT HAMBURGER AND CROSS CONTROLLER 
$(document).ready(function () {
  $('#navbar').click(function () {
    $(this).toggleClass('open');
  });
});