/* PARTE RELACIONADA AO MENU MOBILE */
const navbar = document.getElementById('navbar');
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

/* PARTE DA SELEÇÃO DE MODALIDADE DOS PLANOS */
const planButtons = document.querySelectorAll('[data-plan]');
const modalidadeSelect = document.getElementById('modalidade');

planButtons.forEach(button => {
    button.addEventListener('click', () => {
        const selectedPlan = button.getAttribute('data-plan');
        if (modalidadeSelect) {
            modalidadeSelect.value = selectedPlan;
        }
    });
});

/* PARTE RELACIONADA AO FORMULÁRIO DE CONTATO E TRIAGEM */
const contactForm = document.getElementById('contact-form');
const formFeedback = document.getElementById('form-feedback');

if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const nome = document.getElementById('nome').value.trim();
        const modalidade = document.getElementById('modalidade').value;
        const foco = document.getElementById('foco').value;

        formFeedback.textContent = `Obrigado, ${nome}! Sua solicitação para ${modalidade} (${foco}) foi registrada. O Personal Távora entrará em contato em breve.`;
        contactForm.reset();
    });
}