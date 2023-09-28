// Smooth scrolling for section links
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        window.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth'
        });
    }
}

document.getElementById('contactBtn').addEventListener('click', () => {
    scrollToSection('contactSection');
});

document.getElementById('projectsBtn').addEventListener('click', () => {
    scrollToSection('projectsSection');
});

document.getElementById('supportBtn').addEventListener('click', () => {
    scrollToSection('supportSection');
});

document.getElementById('skillsBtn').addEventListener('click', () => {
    scrollToSection('skillsSection');
});

// Footer buttons
document.getElementById('contactBtnFooter').addEventListener('click', () => {
    scrollToSection('contactSection');
});

document.getElementById('projectsBtnFooter').addEventListener('click', () => {
    scrollToSection('projectsSection');
});

document.getElementById('supportBtnFooter').addEventListener('click', () => {
    scrollToSection('supportSection');
});

document.getElementById('skillsBtnFooter').addEventListener('click', () => {
    scrollToSection('skillsSection');
});
