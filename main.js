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


//I DID THE FOLLOWING SECTION BECAUSE IT BOTHERED ME THAT THE LINK AT THE TOP WOULDNT MATCH THE PAGE

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
      $("#homepage").show();
      $(".active_game").hide().removeClass("active_game");
      break;

    case "#about":
      pages.hide();
      $("#about_page").show();
      $(".active_game").hide().removeClass("active_game");
      break;

    case "#portfolio":
      pages.hide();
      $("#portfolio_page").show();
      $(".active_game").hide().removeClass("active_game");
      break;

    case "#contact":
      pages.hide();
      $("#contact_page").show();
      $(".active_game").hide().removeClass("active_game");
      break;
    
    case "#portfolio/game1":
      $("#Game_Popup1").show().addClass("active_game");
      break;
    case "#portfolio/game2":
      $("#Game_Popup2").show().addClass("active_game");
      break;
    case "#portfolio/game3":
      $("#Game_Popup3").show().addClass("active_game");
      break;
    case "#portfolio/game4":
      $("#Game_Popup4").show().addClass("active_game");
      break;
    case "#portfolio/game5":
      $("#Game_Popup5").show().addClass("active_game");
      break;

    default:
      // Matches any other page or back-button click
      // Cleanly hides any open popups
      $(".active_game").hide().removeClass("active_game");
      break;
  }

  //Navbar Highlights Synced
  $(".nav-link").removeClass("active").removeAttr("aria-current");
  $('.nav-link[href="' + currentHash + '"]')
    .addClass("active")
    .attr("aria-current", "page");
});
$(window).trigger('hashchange');

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
