const btn = document.getElementById("m-btn");
const nav = document.getElementById("m-nav");

// Função para fechar o menu
const closeMenu = () => {
    btn.setAttribute("aria-expanded", "false");
    nav.classList.remove("active");
};

// Toggle do botão
btn.onclick = (e) => {
    e.stopPropagation(); // Impede que o clique no botão dispare o fechamento imediato
    const isExp = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", !isExp);
    nav.classList.toggle("active");
};

// Fecha ao clicar fora ou no próprio link (melhor UX para Single Page Apps)
document.onclick = (e) => {
    if (nav.classList.contains("active") && !nav.contains(e.target)) {
        closeMenu();
    }
};

// Fecha ao pressionar ESC (Bônus de Acessibilidade WCAG)
document.onkeydown = (e) => {
    if (e.key === "Escape") closeMenu();
};

// Fecha ao clicar em um link dentro do menu (opcional, mas recomendado para SPAs)
nav.querySelectorAll("a").forEach((link) => {
    link.onclick = () => closeMenu();
});