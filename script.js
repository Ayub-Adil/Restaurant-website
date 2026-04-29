function showSection(id) {
    const sections = document.querySelectorAll(".content-section");

    sections.forEach(section => {
        section.style.display = "none";
    });

    const active = document.getElementById(id);
    if (active) {
        active.style.display = "block";
    }
}

window.onload = () => {
    showSection("home");
};