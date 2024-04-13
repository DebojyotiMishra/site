document.addEventListener('DOMContentLoaded', function() {
    // Function to format the date in a human-readable way
    function formatDate(date) {
        const options = { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
        return new Date(date).toLocaleDateString('en-US', options);
    }

    // Get the current date and time
    const currentDate = new Date();

    // Set the last updated date in the span element
    const lastUpdatedElement = document.getElementById('lastUpdatedDate');
    lastUpdatedElement.textContent = formatDate(currentDate);
});
