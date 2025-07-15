console.log("hello wurld");

// settin g the. current year in the footer copyright text
const yearEl = document.querySelector(".year");
yearEl.textContent = new Date().getFullYear();


// making the mobile nav work by adding and removing nav-open class to the header when the hamburger icon is clicked

const btnMobNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnMobNavEl.addEventListener('click', function() {
  headerEl.classList.toggle("nav-open");
})
///////////////////////////////////////////////////////////
// smooth scrolling animation 
const allLinks = document.querySelectorAll('a:link');
//will only select links that have the href property 

// adding an eventlistener to all the links 

allLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    //preventing the default behaviour so that we can then implement the smoothscrolling
    e.preventDefault();

    // getting the link out from the attribute of the anchor element that was clicked
    const href = link.getAttribute("href");
    // console.log(href);

    // conditional statements to scroll to the top if any link that has # as href
    if(href === '#')scrollTo({
      top:0,
      behavior:'smooth',
    })

    // for anchors that have links to some section now 
    if(href!=="#" && href.startsWith('#')){
      console.log(href);
      // element that we want to scroll to 
      const sectionEl = document.querySelector(href);
      // now scrolling to that section 
      sectionEl.scrollIntoView({
        behavior:"smooth"
      })
    }

    // closing mobile navigation when one of the navlinks are clicked 
    // can do classlist.contains as well for this 
    if(link.getAttribute("class")==="main-nav-link")
      // removing navopen to close the mobile nav layover 
    // cqn do remove from the class list of can do toggle 
        headerEl.classList.toggle("nav-open");
  })
})




///////////////////////////////////////////////////////////
// sticky nav bar

const sectionHeroEl = document.querySelector(".section-hero");
const obs = new IntersectionObserver(function(entries) {

  const ent = entries[0];
  console.log(ent);
  // isIntersecting basically checks if the entry on which it is being checked is in the viewport of not .. if it has 0 value it means that the element that the observer is observing is not in the viewport 
  if(ent.isIntersecting === false){
    // adding the cticky header as the hero is not on the viewport
    document.body.classList.add("sticky");
  }else{
    // adding back the sticky header as hero is in some copacity on the viewport 
        document.body.classList.remove("sticky");
  }
},

{
// first we define the root .. this is where the element should exist .. or not exist ... to observe it within the viewport we set it to null
root:null,

// next the percentage of the selected element is within the viewport .. we want the sticky to work when there is 0% of hero left on the viewport so we set the threshold to 0... 0 is completly outside and 1 is completely inside 

threshold:0,

// we want the sticky header to appear just as the hero is about to runout .. currently it appears only after the entire hero is gone from the header .. we use some root margin so that the sticky header appears just as the hero is about to run out .. rem and percentages dont work for this prop.. 80px comes from the 8rem height that we gave to the sticky header 


rootMargin:'-80px',



})
obs.observe(sectionHeroEl);


///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap(); 

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/
