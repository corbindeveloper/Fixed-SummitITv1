//Navigation Scroll Functionality 
window.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById("stickyHeader")
    let lastScrollY = 0;

  //Viewport Variables 
  const viewportWidth = window.innerWidth;

    window.addEventListener( 'scroll', () => {
        const currentScrollY = window.scrollY

        if(viewportWidth <= 700) {
          return;
        }

        if(currentScrollY > lastScrollY) {
            header.classList.add('hidden');
            header.style.pointerEvents = "none";
        } else {
            header.classList.remove('hidden')
            header.style.display = "flex";
            header.style.pointerEvents = "all";
        } 
        lastScrollY = currentScrollY;
      
        }); 
    })


//Section Left Fade In Scrolling 
const scrollItems = document.querySelectorAll('.scroll-item');

function handleScroll() {
  scrollItems.forEach(item => {
    const rect = item.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.8) {
      item.classList.add('visible');
    }  
  });
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);

//Dropdown Cards Functionality 

const toggleButtons = document.querySelectorAll(".toggleButton");

toggleButtons.forEach(button => {
    button.addEventListener("click", function() {
        const answer = this.nextElementSibling;
        const icon = this.querySelector("i");
        const circle = this.querySelector("div.plus-circle");

        if(answer.style.display === "block") {
            answer.style.display = "none";
            icon.classList.remove("fa-minus");
            icon.classList.add("fa-plus");
            circle.style.backgroundColor ="#BF2026";
        }
        else {
            answer.style.display = "block";
            circle.style.backgroundColor = "#36454F";
            icon.classList.remove("fa-plus");
            icon.classList.add("fa-minus");
            
        }
    })
})

//Show More functionality 
  function showMore() {
    let featureHide = document.getElementById("feature-hide");

    //Hide the div after clicking on it once.
    let showHide = document.querySelector('div.show-more')


    if(featureHide.style.display == "flex") {
      featureHide.style.display = "none";
      
    } else
    {
      
      featureHide.style.display = "flex";
      showHide.style.display ="none";
    }  
}
                
//Mobile Navbar Functionality Functions
function mobileMenu() {
  const mobileNavList = document.getElementById('mobile-nav-func')

  const body = document.querySelector("body");

  if(mobileNavList.style.display === "flex") {
    mobileNavList.style.display = "none";
    body.style.removeProperty('overflow'); 
  } else {
    mobileNavList.style.display = "flex";
    body.style.overflow = "hidden";
  }
}

function mobileAbout() {
  const mobileAboutList = document.getElementById('about-nav')

  if(mobileAboutList.style.display === "flex") {
    mobileAboutList.style.display = "none";
  } else {
    mobileAboutList.style.display = 'flex';
  }
}

function mobileService() {
  const mobileServiceList = document.getElementById('service-nav')

  if(mobileServiceList.style.display === "flex") {
    mobileServiceList.style.display = "none";
  } else {
    mobileServiceList.style.display = 'flex';
  }
}

//Annoucement Bar closing functionality 
const announcementBar = document.getElementById('announcement-bar');
const closeButton = document.getElementById('announcement-close');
const mainContent = document.getElementById('main-content');

closeButton.addEventListener('click', () => {
  announcementBar.style.display = 'none';
  mainContent.style.paddingTop = '0px';
});

