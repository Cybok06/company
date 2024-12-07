window.addEventListener("load", () => {
    const image = document.getElementById("slide-image");
    image.classList.add("animate"); // Add the class to trigger the animation
});
window.addEventListener('scroll', function () {
    var contactSection = document.getElementById('contact');
    var scrollPosition = window.innerHeight + window.scrollY;
    var pageHeight = document.documentElement.scrollHeight;

    if (scrollPosition >= pageHeight) {
        // When the user scrolls to the bottom, add the 'visible' class to the contact section
        contactSection.classList.add('visible');
    } else {
        // Optionally, hide it again when the user scrolls up
        contactSection.classList.remove('visible');
    }
});
function message(){
    alert("Message Sent")
}