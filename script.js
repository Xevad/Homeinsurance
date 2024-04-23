// Function to show the next page of the form
function nextPage() {
    // Get the current page
    var currentPage = document.querySelector('.current-page');

    // Check if there are next pages
    var nextPage = currentPage.nextElementSibling;
    if (nextPage && nextPage.classList.contains('page')) {
        // Hide current page
        currentPage.classList.remove('current-page');
        // Show next page
        nextPage.classList.add('current-page');

        // Check if this is the last page
        if (!nextPage.nextElementSibling || !nextPage.nextElementSibling.classList.contains('page')) {
            // Show thank you message
            showThankYouMessage();
        }
    }
}

// Function to show the previous page of the form
function prevPage() {
    // Get the current page
    var currentPage = document.querySelector('.current-page');

    // Check if there are previous pages
    var prevPage = currentPage.previousElementSibling;
    if (prevPage && prevPage.classList.contains('page')) {
        // Hide current page
        currentPage.classList.remove('current-page');
        // Show previous page
        prevPage.classList.add('current-page');
    }
}

// Function to show the thank you message
function showThankYouMessage() {
    // Hide navigation buttons
    document.getElementById('navigation-buttons').style.display = 'none';

    // Show thank you message
    var thankYouMessage = document.createElement('div');
    thankYouMessage.innerHTML = '<h2>Thank you for buying home insurance!</h2>';
    document.getElementById('insurance-form').appendChild(thankYouMessage);
}
