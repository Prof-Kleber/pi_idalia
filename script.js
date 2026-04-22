
  // Função para abrir o modal
  function abrirFoto(elementoImg) {
    var modal = document.getElementById("janela-modal");
    var imagemAmpliada = document.getElementById("imagem-ampliada");
    
    // Mostra o modal (muda de none para flex para centralizar a imagem)
    modal.style.display = "flex";
    
    // Pega o 'src' da miniatura clicada e coloca na imagem grande
    imagemAmpliada.src = elementoImg.src;
  }

  // Função para fechar o modal
  function fecharFoto() {
    var modal = document.getElementById("janela-modal");
    modal.style.display = "none";
  }
