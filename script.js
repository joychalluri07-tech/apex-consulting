function showMessage() {
    // Replace the link inside the quotes with your real Calendly link!
    const myCalendlyLink = "https://calendly.com/joychalluri07/30min"; 
    
    window.open(myCalendlyLink, "_blank");
    document.getElementById("myButton").addEventListener("click", function() {
    window.open("YOUR_CALENDLY_LINK_HERE", "_blank");
});
    
}
