class SiteCard {
  constructor(title, link, thumbnail, year) {
    this.title = title;
    this.link = link;
    this.thumbnail = thumbnail;
    this.year = year;
  }
  generateHTML() {
    return `
      <a href="${this.link}">
        <div class="site-box">
          <img
            src="${this.thumbnail}"
            alt="${this.title} Thumbnail"
            width="250px"
            height="125"
          />
          <p class="site-title card-text"><strong>${this.title}</strong></p>
          <p class="site-year card-text"><em>Est. ${this.year}</em></p>
        </div>
      </a>
    `;
  }
}

const boxBox = document.getElementById("box-box");

//ADD NEW SITES HERE
const siteArray = [
  new SiteCard(
    "Pokémon Quiz",
    "https://pokemonquiz.me",
    "assets/thumbnails/pokemon-quiz-thumbnail.png",
    "2022"
  ),
  new SiteCard(
    "freecodecamp",
    "https://freecodecamp.org",
    "assets/thumbnails/freecodecamp.jpg",
    "2014"
  ),
];

//add site cards to page HTML
for (site of siteArray) {
  boxBox.innerHTML += site.generateHTML();
}

const siteCardElements = boxBox.children;
let timeoutID;

for (let i = 0; i < siteCardElements.length; i++) {
  //add event listener to animate on mouse enter
  siteCardElements[i].addEventListener("mouseenter", () => {
    siteCardElements[i].classList.add("site-box-mouseenter");
    //remove animation class once animation is finished
    setTimeout(() => {
      siteCardElements[i].classList.remove("site-box-mouseenter");
    }, 250);
    //add persistent shadow after animation finishes
    //assigning an ID to cancel if mouse leaves before animation finishes
    timeoutID = setTimeout(() => {
      siteCardElements[i].classList.add("site-box-shadow");
    }, 250);
  });
  //add event listener to animate on mouse leave
  siteCardElements[i].addEventListener("mouseleave", () => {
    //cancel persistent shadow timeout if necessary
    clearTimeout(timeoutID);
    siteCardElements[i].classList.add("site-box-mouseleave");
    //remove animation class and persistent shadow once animation finishes
    setTimeout(() => {
      siteCardElements[i].classList.remove("site-box-mouseleave");
      siteCardElements[i].classList.remove("site-box-shadow");
    }, 150);
  });
}
