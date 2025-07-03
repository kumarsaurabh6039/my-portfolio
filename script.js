// Initialize Lucide icons on document load
document.addEventListener('DOMContentLoaded', function() {
    lucide.createIcons();

    // Dynamically update the current year in the footer
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
});
