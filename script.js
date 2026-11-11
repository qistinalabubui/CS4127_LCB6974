// =========================================
// BRUNEI TOURISM - JAVASCRIPT FEATURES
// =========================================

document.addEventListener("DOMContentLoaded", () => {

  // ----------------------------------------------------
  // FEATURE 1: Mobile Navigation Hamburger Menu
  // ----------------------------------------------------
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      // Toggles the 'active' class to show/hide the menu on mobile
      navLinks.classList.toggle('active');
    });
  }

  // ----------------------------------------------------
  // FEATURE 2: Interactive Trip Planner
  // ----------------------------------------------------
  const planCards = document.querySelectorAll('.plan-card');
  const planSummary = document.getElementById('planSummary');

  const itineraries = {
    nature: `
      <h4><i class="fas fa-tree" style="color: #b57d4b;"></i> Nature & Adventure itinerary</h4>
      <ul>
        <li><i class="fas fa-check-circle"></i> Day 1: Ulu Temburong National Park – canopy walk & waterfall</li>
        <li><i class="fas fa-check-circle"></i> Day 2: Bio-diversity tour at Tasek Merimbun</li>
        <li><i class="fas fa-check-circle"></i> Day 3: Mangrove river cruise & proboscis monkey spotting</li>
      </ul>
    `,
    culture: `
      <h4><i class="fas fa-mosque" style="color: #b57d4b;"></i> Culture & Heritage itinerary</h4>
      <ul>
        <li><i class="fas fa-check-circle"></i> Day 1: Sultan Omar Ali Saifuddien Mosque + Royal Regalia Museum</li>
        <li><i class="fas fa-check-circle"></i> Day 2: Kampong Ayer water village tour & local lunch</li>
        <li><i class="fas fa-check-circle"></i> Day 3: Malay Technology Museum & night market</li>
      </ul>
    `,
    relax: `
      <h4><i class="fas fa-spa" style="color: #b57d4b;"></i> Relax & Luxury itinerary</h4>
      <ul>
        <li><i class="fas fa-check-circle"></i> Day 1: The Empire Brunei – spa & beachfront relaxation</li>
        <li><i class="fas fa-check-circle"></i> Day 2: Sunset cruise along Brunei River</li>
        <li><i class="fas fa-check-circle"></i> Day 3: Fine dining at a riverside restaurant + shopping</li>
      </ul>
    `,
    family: `
      <h4><i class="fas fa-users" style="color: #b57d4b;"></i> Family Fun itinerary</h4>
      <ul>
        <li><i class="fas fa-check-circle"></i> Day 1: Kampong Ayer boat ride + visit to water village homes</li>
        <li><i class="fas fa-check-circle"></i> Day 2: Jerudong Park Playground & Gadong night market</li>
        <li><i class="fas fa-check-circle"></i> Day 3: Seri Kenangan Beach picnic & sunset</li>
      </ul>
    `
  };

  if (planCards.length > 0 && planSummary) {
    planCards.forEach((card) => {
      card.addEventListener('click', function () {
        // Remove selected class from all cards
        planCards.forEach((c) => c.classList.remove('selected'));
        // Add selected class to clicked card
        this.classList.add('selected');
        
        // Update the summary box with the matching itinerary
        const planType = this.dataset.plan;
        if (itineraries[planType]) {
          planSummary.innerHTML = itineraries[planType];
        }
      });
    });
  }

  // ----------------------------------------------------
  // FEATURE 3: Contact Form Validation
  // ----------------------------------------------------
  const contactForm = document.getElementById('contactForm');
  const formFeedback = document.getElementById('formFeedback');

  if (contactForm && formFeedback) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault(); // Stop page from reloading

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      // Basic validation
      if (name === "" || email === "" || message === "") {
        formFeedback.style.color = '#b33a3a'; // Red for error
        formFeedback.textContent = 'Error: Please fill in all required fields.';
        return;
      }

      // Success message
      formFeedback.style.color = '#1f6d4b'; // Green for success
      formFeedback.textContent = 'Thank you! Your enquiry has been sent to the Ministry of Tourism.';
      
      // Clear the form
      contactForm.reset();

      // Clear success message after 5 seconds
      setTimeout(() => {
        formFeedback.textContent = '';
      }, 5000);
    });
  }

});