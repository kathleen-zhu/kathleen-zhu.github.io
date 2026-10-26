// makes sure only bottom content changes & blue highlights
function showSection(sectionId) {
    // hide all sections
    const sections = document.querySelectorAll(".tab-content");

    sections.forEach(section => {
        section.style.display = "none";
    });

    // show the selected section
    document.getElementById(sectionId).style.display = "block";

    // remove highlight from all nav buttons
    const buttons = document.querySelectorAll("nav button");

    buttons.forEach(button => {
        button.classList.remove("active");
    });

    // highlight the button that was clicked
    event.target.classList.add("active");
}