document.getElementById("hero").addEventListener("mousemove", event => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    gsap.set(".cursor", {
        x: mouseX,
        y: mouseY, 
    })

    gsap.to(".shape", {
        x: mouseX,
        y: mouseY,
        stagger: -0.1
    })
});

// $('#sidebarCollapse').
// if (!document.querySelector("#sidebarCollapse").classList.contains("active")) {

// }

// if (!document.getElementById("sidebarCollapse").classList.contains("active")) {
//     document.getElementsByClassName("hero-content").style.width = '500px';
// }

// if (!document.getElementById("sidebar").classList.contains("active")) {
//     document.getElementsByClassName("hero-content").style.width = '500px';
// }

// if (!document.getElementById("sidebar").classList.contains("active")) {
//     console.log("closed");
// } else {
//     console.log("open")
// }