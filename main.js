const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl, {
  trigger: 'hover' // Removes the 'focus' requirement
}))
const navbarButtons = $(".nav-link").toArray();

navbarButtons.forEach(element => {
    $(element).on("click", function() {
        $(".active").removeClass("active");
        $(this).addClass("active");   
    })
})