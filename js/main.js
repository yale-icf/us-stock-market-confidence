document.addEventListener('DOMContentLoaded', function() {
    // Initialize chart
    const chart = new ConfidenceChart('#chart');
    chart.init();

    // Handle download button
    document.getElementById('downloadBtn').addEventListener('click', function() {
        // Implement download functionality
        window.location.href = 'data/confidence_indices.csv';
    });
}); 