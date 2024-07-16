

function openNav() {
    document.getElementById("slide-menu").style.width = "600px"; // Adjust width as needed
    // document.getElementById("slide-menu").style.marginRight = "0"; // Adjust width as needed
}

function closeNav() {
    document.getElementById("slide-menu").style.width = "0px";
   
}




function showPage(pageId) {
    var pages = document.querySelectorAll('.page');
    pages.forEach(function(page) {
        if (page.id === pageId) {
            page.classList.add('active');
        } else {
            page.classList.remove('active');
        }
    });

    var buttons = document.querySelectorAll('.container-2-p .button');
    buttons.forEach(function(button) {
        if (button.getAttribute('onclick').includes(pageId)) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

// Ensure the initial state is correct
document.addEventListener('DOMContentLoaded', function() {
    showPage('experience');
});



