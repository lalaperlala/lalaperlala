
const navLinks = document.querySelectorAll('nav a');
const projectButtons = document.querySelectorAll('.project-btn');
const contentSections = document.querySelectorAll('.content-section');


function showSection(sectionName) {

  contentSections.forEach(section => {
    section.classList.remove('active');
  });


  const target = document.getElementById(sectionName);
  if (target) target.classList.add('active');


  navLinks.forEach(link => link.classList.remove('active-link'));

  const matchingLink = document.querySelector(`nav a[data-section="${sectionName}"]`);
  if (matchingLink) matchingLink.classList.add('active-link');
}


navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const sectionName = this.getAttribute('data-section');
    showSection(sectionName);
  });
});


const portfolioBtn = document.querySelector('.portfolio-button');
if (portfolioBtn) {
  portfolioBtn.addEventListener('click', () => {
    showSection('portfolio');
  });
}

projectButtons.forEach(button => {
  button.addEventListener('click', function (e) {
    e.preventDefault();
    const sectionName = this.getAttribute('data-section');
    showSection(sectionName);
  });
});

function toggleMore(button) {
  const card = button.closest('.experience-card');
  const content = card.querySelector('.more-content');

  if (content.style.display === "none" || content.style.display === "") {
    content.style.display = "block";
    button.textContent = "See less";
  } else {
    content.style.display = "none";
    button.textContent = "See more";
  }
}


const imageSets = {
  agrika: ["AgriKA1.jpg"], 
  loro: ["LORO.jpg", "LORO2.jpg"],
  bibekalma: ["Bibe Kalma.jpg", "BIBE2.jpg", "BIBE3.jpg","BIBE4.jpg", "BIBE5.jpg", "BIBE6.jpg","BIBE7.jpg", "BIBE8.jpg", "BIBE9.jpg"],
  haste: ["Haste1.jpg"] 
};

const imageIndices = {
  agrika: 0,
  loro: 0,
  bibekalma: 0,
  haste: 0
};

function nextImage() {
  const activeSection = document.querySelector(".content-section.active");
  const sectionId = activeSection.id;

  if (!imageSets[sectionId]) return;


  imageIndices[sectionId] = (imageIndices[sectionId] + 1) % imageSets[sectionId].length;


  const img = activeSection.querySelector("#project-image");
  img.src = imageSets[sectionId][imageIndices[sectionId]];
}
