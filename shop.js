
document.getElementById("show-search").addEventListener("click", function() {
    document.querySelector(".search-popup").classList.add("search-active");
});

document.getElementById("close-search-btn").addEventListener("click", function() {
    document.querySelector(".search-popup").classList.remove("search-active");
});


function openNav() {
    document.getElementById("slide-menu").style.width = "600px"; // Adjust width as needed
    // document.getElementById("slide-menu").style.marginRight = "0"; // Adjust width as needed
}

function closeNav() {
    document.getElementById("slide-menu").style.width = "0px";
   
}


function showPage(event, pageId) {
    event.preventDefault();

    var pages = document.querySelectorAll('.page');
    pages.forEach(function(page) {
        if (page.id === pageId) {
            page.classList.add('active');
        } else {
            page.classList.remove('active');
        }
    });

    var links = document.querySelectorAll('.product-nav ul li a');
    links.forEach(function(link) {
        if (link.getAttribute('onclick').includes(pageId)) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}


