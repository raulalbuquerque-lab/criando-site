cconst botao = document.getElementById('botao_tema');

function alternarModo() {
  document.body.classList.toggle('modo_claro');

  if (document.body.classList.contains('modo_claro')) {
    botao.textContent = 'Modo Escuro';
  } else {
    botao.textContent = 'Modo Claro';
  }
}

botao.addEventListener('click', alternarModo);
