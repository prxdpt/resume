// Function to display rotating greetings
const greetingsContainer = document.getElementById('greetings');
const greetings = ['Hello!', 'নমস্কার!', 'नमस्ते!', 'Hola!', 'Bonjour!'];
let currentGreetingIndex = 0;

function displayGreetings() {
  greetingsContainer.style.opacity = 0;
  setTimeout(() => {
    greetingsContainer.textContent = greetings[currentGreetingIndex];
    greetingsContainer.style.opacity = 1;
    currentGreetingIndex = (currentGreetingIndex + 1) % greetings.length;
  }, 400); // Duration of fade out

  setTimeout(displayGreetings, 2000); // Total interval time (includes fade in time)
}

displayGreetings();

// Function to toggle contact info visibility
const showContactButton = document.getElementById('show-contact');
const contactInfo = document.getElementById('contact-info');

showContactButton.addEventListener('click', () => {
  contactInfo.style.display = contactInfo.style.display === 'none' ? 'block' : 'none';
});

// Function to toggle additional skills visibility
const showMoreButton = document.getElementById('show-more-skills');
const expandedSkills = document.getElementById('expanded-skills');

showMoreButton.addEventListener('click', () => {
  expandedSkills.style.display = expandedSkills.style.display === 'none' ? 'block' : 'none';
});

// Function to toggle utilisation details visibility
const utilisationButtons = document.querySelectorAll('.utilisation-btn');

utilisationButtons.forEach(button => {
  button.addEventListener('click', () => {
    const targetId = button.getAttribute('data-target');
    const content = document.getElementById(targetId);
    content.style.display = content.style.display === 'none' ? 'block' : 'none';
  });
});

// Function to display the Easter egg
document.addEventListener('DOMContentLoaded', () => {
  const greetings = document.getElementById('greetings');
  const easterEgg = document.getElementById('easter-egg');

  greetings.addEventListener('click', () => {
    easterEgg.classList.toggle('hidden');
  });
});
