// Newsletter Subscription


// SUBSCRIPTION BUTTON
function subscribeNewsletter() {
    const email = document.getElementById('newsletter').value;
    if (email) {
        alert("Thank you for subscribing! You'll receive our latest insights.");
        document.getElementById('newsletter').value = '';
    } else {
        alert("Please enter your email address.");
    }
}

// BLOG SEARCH FUNCTIONALITY

// Search input field
const searchInput = document.getElementById('searchInput');
// All blog cards
const blogCards   = document.querySelectorAll('.blog-card');
//grid container for blog cards
const blogGrid    = document.querySelector('.blog-grid');
 
//Filter cards based on search query
function filterCards(query) {
    const q = query.trim().toLowerCase();
    let visibleCount = 0;
 
    blogCards.forEach(card => {

        // Extract title, excerpt, and category text for matching
        const title    = card.querySelector('.blog-title')?.textContent.toLowerCase()    || '';
        const excerpt  = card.querySelector('.blog-excerpt')?.textContent.toLowerCase()  || '';
        const category = card.querySelector('.blog-category')?.textContent.toLowerCase() || '';
        
        // Check if any of the fields match the search query
        const matches = !q || title.includes(q) || excerpt.includes(q) || category.includes(q);
 
        // Show or hide the card based on the match result
        card.style.display = matches ? '' : 'none';
        if (matches) visibleCount++;
    });

}
searchInput.addEventListener('input', () => filterCards(searchInput.value));
 
searchInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') filterCards(searchInput.value);
});
