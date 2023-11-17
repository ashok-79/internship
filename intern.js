function submitFeedback() {
    const recommendation = document.querySelector('input[name="recommendation"]:checked');
    const suggestion = document.getElementById('suggestionBox').value;
    const rating = document.getElementById('productRating').value;
    alert(`Thank you for your feedback!\nRecommendation: ${recommendation ? recommendation.value : 'Not provided'}\nSuggestion: ${suggestion}\nRating: ${rating}`);
}
