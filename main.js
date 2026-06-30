const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]',
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) =>
    new bootstrap.Tooltip(tooltipTriggerEl, {
      trigger: "hover", // Removes the 'focus' requirement
    }),
);
$(document).on("click", function () {
  setTimeout(function () {
    $('[data-bs-toggle="tooltip"]').tooltip("hide");
  }, 200); // Hides tooltip in 100 milliseconds
});

const pages = $(".pages");

const currentYear = new Date().getFullYear();
$("#current_year").text(currentYear);

const navbarCollapseEl = $("#navbarSupportedContent");

$("#home_button").on("click", showHome);
function showHome() {
  window.location.href = "#home"; //mimics the <a> thing
}

$("#about_button").on("click", showAbout);
function showAbout() {
  window.location.href = "#about"; //mimics the <a> thing
}

$("#portfolio_button").on("click", showPortfolio);
function showPortfolio() {
  window.location.href = "#portfolio"; //mimics the <a> thing
}

$("#contact_button").on("click", showContact);
function showContact() {
  window.location.href = "#contact"; //mimics the <a> thing
}

function showContactPopup() {
  $("#contact_popup").show();
}
function hideContactPopup() {
  $("#contact_popup").hide();
}
$("#contact_button_popup").on("click", showContactPopup);
$("#popup_background").on("click", hideContactPopup);
$("#popup_content_x").on("click", hideContactPopup);

function showGame1() {
  window.location.href = "#portfolio/game1"; //changes the link at the top back to match the page
}
function showGame2() {
  window.location.href = "#portfolio/game2"; //changes the link at the top back to match the page
}
function showGame3() {
  window.location.href = "#portfolio/game3"; //changes the link at the top back to match the page
}
function showGame4() {
  window.location.href = "#portfolio/game4"; //changes the link at the top back to match the page
}
function showGame5() {
  window.location.href = "#portfolio/game5"; //changes the link at the top back to match the page
}
function hideGames() {
  window.location.href = "#portfolio"; //changes the link at the top back to portfolio to match the page
}

//CHARACTER POPUP
function hideChar()
{
  $("#game_char").removeClass("rotate-in");
  $("#game_char").removeClass("rotate-out");
  $("#game_char").hide();
}
var newXPos = -1;
function showChar(which)
{
  newXPos = -1;
  $("#game_char").css("scale", "1 1");
  $("#game_char").css("left", -($("#game_char").innerWidth() * 1.2) + "px"); //first side will always be left
  $("#game_char").css("top", 200 + "px"); //will always start at the top
  $("#game_char").show();
  CharIn(which);
}
function CharIn(spriteNo)
{
  switch (spriteNo){
    case 1:
      $("#game_char").attr("src", "images/characters/Ctd char.png");
      break;
    case 2:
      $("#game_char").attr("src", "images/characters/bloodcraft char.png");
      break;
    case 3:
      $("#game_char").attr("src", "images/characters/exct char.png");
      break;
    case 4:
      $("#game_char").attr("src", "images/characters/GH char.png");
      break;
    case 5:
      $("#game_char").attr("src", "images/characters/exct compy.png");
      break;
    default:
      break;
  }
  $("#game_char").removeClass("rotate-out");
  $("#game_char").addClass("rotate-in");
}
function CharOut()
{
  $("#game_char").removeClass("rotate-in");
  $("#game_char").addClass("rotate-out");
}

function newSpot()
{
  const maxFloored = Math.floor($(".active_page").innerHeight() - $("#game_char").innerHeight() - 50); //max downward position
  const newYPos = Math.floor(Math.random() * (maxFloored - 100 + 1) + 100);
  $("#game_char").css("top", newYPos + "px");

  newXPos *= -1;
  if(newXPos === 1) //right side
  {
    $("#game_char").css("scale", "-1 1");
    $("#game_char").css("left", $(".active_page").innerWidth() -($("#game_char").innerWidth() * 0.8) + "px");
  }
  else if(newXPos === -1) //left side
  {
    $("#game_char").css("scale", "1 1");
    $("#game_char").css("left", -($("#game_char").innerWidth() * 1.2) + "px");
  }
  
}
const bubbleSound = new Audio("sounds/dragon-studio-bubble-pop-406640.mp3");
bubbleSound.volume = 0.7;
$("#game_char").on("click", function(){
  CharOut();
  bubbleSound.currentTime = 0; //resets the sound
  bubbleSound.play();
  setTimeout(() => {
    newSpot();
    CharIn();
  }, 500);
})

//Fireworks animation
//Code from: https://css-tricks.com/playing-with-particles-using-the-web-animations-api/

$("#game_char").on("click", pop);

function pop (e) {
  // Quick check if user clicked the button using a keyboard
  if (e.clientX === 0 && e.clientY === 0) {
    const bbox = document.querySelector('#game_char').getBoundingClientRect();
    const x = bbox.left + bbox.width / 2;
    const y = bbox.top + bbox.height / 2;
    for (let i = 0; i < 30; i++) {
      // We call the function createParticle 30 times
      // We pass the coordinates of the game character for x & y values
      createParticle(x, y);
    }
  } else {
    for (let i = 0; i < 30; i++) {
      // We call the function createParticle 30 times
      // As we need the coordinates of the mouse, we pass them as arguments
      createParticle(e.clientX, e.clientY);
    }
  }
}

function createParticle (x, y) {
  const particle = document.createElement('particle');
  document.body.appendChild(particle);
  
  // Calculate a random size from 5px to 25px
  const size = Math.floor(Math.random() * 20 + 5);
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  // Generate a random color in a rainbow palette
  particle.style.background = `hsl(${Math.random() * 360}, 80%, 55%)`;
  
  // Generate a random x & y destination within a distance of 75px from the mouse
  const destinationX = x + (Math.random() - 0.5) * 2 * 75;
  const destinationY = y + (Math.random() - 0.5) * 2 * 75;

  // Store the animation in a variable as we will need it later
  const animation = particle.animate([
    {
      // Set the origin position of the particle
      // We offset the particle with half its size to center it around the mouse
      transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
      opacity: 1
    },
    {
      // We define the final coordinates as the second keyframe
      transform: `translate(${destinationX}px, ${destinationY}px)`,
      opacity: 0
    }
  ], {
    // Set a random duration from 500 to 1500ms
    duration: Math.random() * 1000 + 500,
    easing: 'cubic-bezier(0, .9, .57, 1)',
    // Delay every particle with a random value of 200ms
    delay: Math.random() * 200
  });
  
  // When the animation is complete, remove the element from the DOM
  animation.onfinish = () => {
    particle.remove();
  };
}

//I DID THE FOLLOWING SECTION BECAUSE IT BOTHERED ME THAT THE LINK AT THE TOP WOULDNT MATCH THE PAGE
//THIS IS THE PAGE CHANGING FUNCTION
$(window).on("hashchange", function () {
  var currentHash = window.location.hash;

  const pages = $(".pages");
  
  // Mobile navbar Menu Auto-Collapse
  if (navbarCollapseEl.hasClass("show")) {
    bootstrap.Collapse.getOrCreateInstance(navbarCollapseEl).hide();
  }
  //Game Popups and Pages
  switch (currentHash) {

    case "":
    case "#home":
      pages.hide();
      $(".active_page").hide().removeClass("active_page"); //hides the active page
      $("#homepage").show().addClass("active_page"); //adds active page class for the character popup
      hideContactPopup();
      hideChar();
      break;

    case "#about":
      pages.hide();
      $(".active_page").hide().removeClass("active_page");//hides the active page
      $("#about_page").show().addClass("active_page");//adds active page class for the character popup
      hideContactPopup();
      showChar(5);
      break;

    case "#portfolio":
      pages.hide();
      $(".active_page").hide().removeClass("active_page");
      $("#portfolio_page").show().addClass("active_page");
      hideContactPopup();
      hideChar();
      break;

    case "#contact":
      pages.hide();
      $(".active_page").hide().removeClass("active_page");
      $("#contact_page").show().addClass("active_page");   
      hideContactPopup();
      hideChar();
      break;
    
    case "#portfolio/game1":
      $(".active_page").hide().removeClass("active_page");
      $("#Game_Popup1").show().addClass("active_page");
      hideContactPopup();
      showChar(1);
      break;
    case "#portfolio/game2":
      $(".active_page").hide().removeClass("active_page");
      $("#Game_Popup2").show().addClass("active_page");
      hideContactPopup();
      break;
    case "#portfolio/game3":
      $(".active_page").hide().removeClass("active_page");
      $("#Game_Popup3").show().addClass("active_page");
      hideContactPopup();
      showChar(2);
      break;
    case "#portfolio/game4":
      $(".active_page").hide().removeClass("active_page");
      $("#Game_Popup4").show().addClass("active_page");
      hideContactPopup();
      showChar(3);
      break;
    case "#portfolio/game5":
      $(".active_page").hide().removeClass("active_page");
      $("#Game_Popup5").show().addClass("active_page");
      hideContactPopup();
      showChar(4);
      break;

    default:      
      $(".active_page").hide().removeClass("active_page");
      hideContactPopup();
      hideChar();
      break;
  }

  //Navbar Highlights Synced
  $(".nav-link").removeClass("active").removeAttr("aria-current");
  $('.nav-link[href="' + currentHash + '"]')
    .addClass("active")
    .attr("aria-current", "page");

  //Reset scroll position
  window.scrollTo(0, 0);
});
$(window).trigger('hashchange');




