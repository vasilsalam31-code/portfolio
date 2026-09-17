```javascript
// Project button
function showProject(projectName) {

    alert(
        projectName +
        " selected!"
    );

}


// Contact form
document
    .getElementById("contactForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        document.getElementById("formMessage").textContent =
            "Thank you! Your message has been received.";

        this.reset();

    });
```
