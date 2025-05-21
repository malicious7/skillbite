// SkillBite JS Placeholder
// Add interactivity as needed

// Example: Mobile nav toggle (if you add a hamburger menu in the future)
// document.querySelector('.menu-toggle').addEventListener('click', function() {
//     document.querySelector('.nav-links').classList.toggle('active');
// });

// Close AI chat widget when clicking outside
window.addEventListener('click', function(e) {
    const chat = document.querySelector('.ai-chat-widget');
    const toggle = document.querySelector('.ai-chat-toggle');
    if (chat && chat.style.display === 'flex' && !chat.contains(e.target) && !toggle.contains(e.target)) {
        chat.style.display = 'none';
    }
});

// Placeholder for Stripe/AdSense integration 