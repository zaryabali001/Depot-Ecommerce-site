document.querySelector("#show-login").addEventListener("click", function () {
    document.querySelector(".login-popup").classList.add("active");
});



document.querySelector("#close-btn").addEventListener("click", function () {
    document.querySelector(".login-popup").classList.remove("active");

})


document.getElementById("show-search").addEventListener("click", function () {
    document.querySelector(".search-popup").classList.add("search-active");
});

document.getElementById("close-search-btn").addEventListener("click", function () {
    document.querySelector(".search-popup").classList.remove("search-active");
});


document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 0;
    const radios = document.querySelectorAll('input[name="switch"]');
    const totalSlides = radios.length;
  
    const autoSlide = () => {
      currentIndex = (currentIndex + 1) % totalSlides;
      radios[currentIndex].checked = true;
    };
  
    setInterval(autoSlide, 3000); // Change slide every 3 seconds
  });
  

window.onscroll = function () {
    if (window.scrollY > 200) {
        document.getElementById("btn").style.display = "block"
    }
    else {
        document.getElementById("btn").style.display = "none"

    }
}

document.getElementById("btn").onclick = function(){
    window.scrollTo({top : 0 ,  behavior : "smooth"})
}



let loginBtn = document.getElementById("login-btn");
let registerBtn = document.getElementById("register-btn");
let nameField = document.getElementById("name-field");
let titleBtn = document.getElementById("title-btn");
let recover = document.getElementById("recover")


loginBtn.onclick = function () {
    recover.innerHTML = `<a href = "#">Lost Your passward? </a>`
    nameField.style.maxHeight = "0";
    titleBtn.innerHTML = "Login"
    registerBtn.classList.add("disable")
    loginBtn.classList.remove("disable")

}
registerBtn.onclick = function () {
    recover.innerHTML = "Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy"
    recover.style.marginTop = "10px"
    nameField.style.maxHeight = "70px";
    titleBtn.innerHTML = "Register"
    registerBtn.classList.remove("disable")
    loginBtn.classList.add("disable")

}


function openNa() {
    document.getElementById("slide-menu").style.width = "600px"; 
}

function closeNav() {
    document.getElementById("slide-menu").style.width = "0px";
}

function openNavs() {
    document.querySelector('.dropdown-menu').style.display = 'block';
}

function closeNavs() {
    document.querySelector('.dropdown-menu').style.display = 'none';
}

// Add event listeners to the hamburger icon and the close button
document.getElementById('humburger').addEventListener('click', openNav);
document.getElementById('close-ham-btn').addEventListener('click', closeNav);


function showPage(event, pageId) {
    event.preventDefault();

    var pages = document.querySelectorAll('.page');
    pages.forEach(function (page) {
        if (page.id === pageId) {
            page.classList.add('active');
        } else {
            page.classList.remove('active');
        }
    });

    var links = document.querySelectorAll('.product-nav ul li a');
    links.forEach(function (link) {
        if (link.getAttribute('onclick').includes(pageId)) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}


// document.addEventListener('DOMContentLoaded', () => {
//     let currentIndex = 0;
//     const radios = document.querySelectorAll('input[name="switch"]');
//     const totalSlides = radios.length;
  
//     const autoSlide = () => {
//       currentIndex = (currentIndex + 1) % totalSlides;
//       radios[currentIndex].checked = true;
//     };
  
//     setInterval(autoSlide, 3000); // Change slide every 3 seconds
//   });
  