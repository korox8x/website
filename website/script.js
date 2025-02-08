document.addEventListener("DOMContentLoaded", function() {
    // Typing effect for the header
    const headerText = "Welcome to KoroX8X Website";
    let i = 0;
    const headerElement = document.querySelector("header h1");
    headerElement.textContent = "";

    function typeEffect() {
        if (i < headerText.length) {
            headerElement.textContent += headerText.charAt(i);
            i++;
            setTimeout(typeEffect, 100);
        }
    }
    typeEffect();

    // Button click animation
    const button = document.querySelector(".cool-button");
    button.addEventListener("click", function() {
        alert("Welcome to KoroX8X's world! More features coming soon.");
    });
});
