// Lista de sites oficiais conhecidos
const sitesOficiais = [
  "mercadolivre.com.br",
  "shopee.com.br",
  "amazon.com.br",
  "magazineluiza.com.br",
  "americanas.com.br"
];

// Função para verificar o link
function verificarLink(event) {
  event.preventDefault(); // Evitar que a página seja recarregada ao submeter o formulário

  const input = document.getElementById("linkInput").value.trim().toLowerCase();
  const resultado = document.getElementById("resultado");

  if (!input) {
    resultado.innerHTML = '<div class="alert alert-secondary">Digite um link para verificar.</div>';
    return;
  }

  let siteValido = false;
  
  // Verificar se o link contém algum dos sites oficiais conhecidos
  for (let site of sitesOficiais) {
    if (input.includes(site)) {
      siteValido = true;
      break;
    }
  }

  // Exibir o resultado
  if (siteValido) {
    resultado.innerHTML = '<div class="alert alert-success">✅ Este link parece confiável e corresponde a um site oficial.</div>';
  } else {
    resultado.innerHTML = '<div class="alert alert-danger">🚨 Atenção: este link NÃO corresponde a um site oficial conhecido. Pode ser fraude!</div>';
  }
}

// Adiciona o evento de envio ao formulário
document.getElementById("formVerificarLink").addEventListener("submit", verificarLink);


  // Sistema de sessão
  document.addEventListener("DOMContentLoaded", () => {
    const linkLogin = document.querySelector('a.nav-link[href="login.html"]');
    const navbar = document.querySelector('.navbar-nav');

    if (localStorage.getItem("usuarioLogado") === "true") {
      if(linkLogin) linkLogin.style.display = "none";
      const liSair = document.createElement("li");
      liSair.classList.add("nav-item");
      liSair.innerHTML = <a class="nav-link" href="#" id="btnSair">Sair</a>;
      navbar.appendChild(liSair);

      document.getElementById("btnSair").addEventListener("click", () => {
        localStorage.removeItem("usuarioLogado");
        window.location.href = "login.html";
      });
    }
  });