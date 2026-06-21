// Fade animation on scroll

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    sections.forEach(section => {

        let top = window.scrollY;
        let offset = section.offsetTop - 300;
        let height = section.offsetHeight;

        if(top > offset && top < offset + height){
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }

    });

});
function sendMail() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    window.location.href =
        `mailto:sowmyakadali156@gmail.com?subject=Message from ${name}&body=Email: ${email}%0A%0A${message}`;
}