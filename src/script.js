const navbar = document.querySelector('.navbar');
const mobileNavbar = document.querySelector('.navbar__mobile');
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');
const mobileLinks = document.querySelector('.mobile__links');

// Função para iniciar uma conversa no WhatsApp
function iniciarConversa() {
  const nome = document.getElementById('nome').value;
  const mensagem = document.getElementById('mensagem').value;
  const numero = '5515974043210'; 
  const texto = `Olá, meu nome é ${nome}. ${mensagem}`;

  const url = `https://api.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent(texto)}`;
  window.open(url, '_blank');
}


// Alternar o menu ao clicar no ícone
menuIcon.addEventListener('click', () => {
  mobileLinks.classList.toggle('show');
  menuIcon.style.display = 'none';
  closeIcon.style.display = 'block';
});

closeIcon.addEventListener('click', () => {
  mobileLinks.classList.remove('show');
  closeIcon.style.display = 'none';
  menuIcon.style.display = 'block';
});

// Fechar o menu ao clicar em um link
document.querySelectorAll('.mobile__links a').forEach(link => {
  link.addEventListener('click', () => {
    mobileLinks.classList.remove('show');
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';
  });
});

// Alternar a navbar fixa ao rolar a página
window.addEventListener('scroll', function () {
  if (window.pageYOffset > 0) {
    navbar.classList.add('active');
  } else {
    navbar.classList.remove('active');
  }
});
function showError(message) {
  var errorMessage = document.getElementById('error-message');
  errorMessage.textContent = message;
  errorMessage.style.display = 'block';
  
  setTimeout(function() {
    errorMessage.style.display = 'none';
  }, 5000); // Esconde a mensagem após 5 segundos
}

// Adicione event listeners aos botões/links que ainda não estão finalizados
document.querySelectorAll('.not-finished').forEach(function(element) {
  element.addEventListener('click', function(event) {
    event.preventDefault();
    showError('Ops! Este recurso ainda não foi finalizado. Mas tenho certeza que o Desenvolvedor está trabalhando nisso! 😉')	;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const elementsToAnimate = document.querySelectorAll('.btn, img, .fade-in-left, .fade-in-right');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.setAttribute('data-visible', true);
        observer.unobserve(entry.target); // Para não observar novamente
      }
    });
  }, { threshold: 0.2 });

  elementsToAnimate.forEach(element => {
    observer.observe(element);
  });
});