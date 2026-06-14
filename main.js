const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl, {
  trigger: 'hover' // Removes the 'focus' requirement
}))
$(document).on("click",function(){
    setTimeout(function(){
    $('[data-bs-toggle="tooltip"]').tooltip('hide');
    },200);    // Hides tooltip in 100 milliseconds
});

const navbarButtons = $(".nav-link").toArray();
const pages = $(".pages").toArray();
pages.forEach(element => {
    $(element).hide();
    $("#homepage").show();  
});
const currentYear = new Date().getFullYear();
$("#current_year").text(currentYear);

const navbarCollapseEl = $('#navbarSupportedContent');

function switchNav(button) 
{
    $(".active").removeClass("active");
    $(button).addClass("active");  //makes the correct button look active

    //collapses the navbar on mobile when button is clicked
    if ($(navbarCollapseEl).hasClass('show')) {
        const bsCollapse = bootstrap.Collapse.getOrCreateInstance(navbarCollapseEl);            
        bsCollapse.hide();
    } 
}

$("#home_button").on("click", showHome)
function showHome() 
{
    switchNav("#home_button");
    pages.forEach(element => {    
        $(element).hide()    
    });
    $("#homepage").show();   
}

$("#about_button").on("click", showAbout)
function showAbout() 
{
    switchNav("#about_button");
    pages.forEach(element => {    
        $(element).hide()    
    });
    $("#about_page").show();   
}

$("#portfolio_button").on("click", showPortfolio)
function showPortfolio() 
{
    switchNav("#portfolio_button");
    pages.forEach(element => {    
        $(element).hide()    
    });
    $("#portfolio_page").show();   
}

$("#contact_button").on("click", showContact)
function showContact() 
{
    switchNav("#contact_button");
    pages.forEach(element => {    
        $(element).hide()    
    });
    $("#contact_page").show();   
}


function showContactPopup()
{
    $("#contact_popup").show();
}
function hideContactPopup()
{
    $("#contact_popup").hide();
}
$("#contact_button_popup").on("click",showContactPopup)
$("#popup_background").on("click",hideContactPopup)
$("#popup_content_x").on("click",hideContactPopup)