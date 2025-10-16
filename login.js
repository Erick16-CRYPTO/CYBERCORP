function autenticarUsuario() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const telefone = document.getElementById("telefone").value;
  const mensagem = document.getElementById("mensagem");

  if (!email || !senha || !telefone) {
    mensagem.innerHTML = `<div class="alert alert-warning">❌ Preencha todos os campos!</div>`;
    return;
  }

  localStorage.setItem("usuarioLogado", "true");
  mensagem.innerHTML = `<div class="alert alert-success">✅ Login realizado! Redirecionando...</div>`;
  setTimeout(() => { window.location.href = "index.html"; }, 1500);
}

async function loginBiometria() {
  const mensagem = document.getElementById("mensagem");

  if (!window.PublicKeyCredential) {
    mensagem.innerHTML = `<div class="alert alert-danger">❌ Seu navegador não suporta WebAuthn. Tente um navegador mais atualizado.</div>`;
    return;
  }

  try {
    const credenciais = await navigator.credentials.get({
      publicKey: {
        challenge: new Uint8Array([0x8C,0xFA,0x84,0x02,0x12,0x55,0xA3,0x3F]).buffer,
        timeout: 60000,
        userVerification: "preferred"
      }
    });
   
    if (credenciais) {
      localStorage.setItem("usuarioLogado", "true");
      mensagem.innerHTML = `<div class="alert alert-success">✅ Autenticado com biometria! Redirecionando...</div>`;
      setTimeout(() => { window.location.href = "index.html"; }, 1500);
    }
  } catch (error) {
    mensagem.innerHTML = `<div class="alert alert-danger">❌ Falha na autenticação biométrica: ${error.message}. Por favor, tente novamente.</div>`;
  }
}
