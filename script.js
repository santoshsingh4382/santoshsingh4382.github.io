document.addEventListener("DOMContentLoaded", function () {
    // Load header and footer
    loadComponent("header", "header.html");
    loadComponent("footer", "footer.html");

    // Feedback form handling
    let feedbackForm = document.getElementById("feedbackForm");
    if (feedbackForm) {
        feedbackForm.addEventListener("submit", function (event) {
            event.preventDefault();
            
            let name = document.getElementById("name").value;
            let message = document.getElementById("message").value;
            
            if (name && message) {
                document.getElementById("responseMessage").innerText = "Thank you for your feedback, " + name + "!";
                feedbackForm.reset();
            } else {
                document.getElementById("responseMessage").innerText = "Please fill in all fields.";
            }
        });
    }
});

// Function to load header and footer
function loadComponent(id, url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        });
}
