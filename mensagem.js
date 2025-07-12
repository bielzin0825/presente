const fotos = [
  { src: "fotos/foto1.img.jpeg", data: "06/05/2023" },
  { src: "fotos/foto2.img.jpeg", data: "21/05/2023" },
  { src: "fotos/foto3.img.jpeg", data: "30/10/2023" },
  { src: "fotos/foto4.img.jpeg", data: "11/11/2023" },
  { src: "fotos/foto5.img.jpeg", data: "11/11/2023" },
  { src: "fotos/foto6.img.jpeg", data: "15/11/2023" },
  { src: "fotos/foto7.img.jpeg", data: "15/11/2023" },
  { src: "fotos/foto8.img.jpeg", data: "15/11/2023" },
  { src: "fotos/foto9.img.jpeg", data: "15/11/2023" },
  { src: "fotos/foto10.img.jpeg", data: "15/11/2023" },
  { src: "fotos/foto11.img.jpeg", data: "15/11/2023" },
  { src: "fotos/foto12.img.jpeg", data: "29/12/2023" },
  { src: "fotos/foto13.img.jpeg", data: "27/01/2024" },
  { src: "fotos/foto14.img.jpeg", data: "27/01/2024" },
  { src: "fotos/foto17.img.jpeg", data: "27/01/2024" },
  { src: "fotos/foto15.img.jpeg", data: "09/02/2024" },
  { src: "fotos/foto16.img.jpeg", data: "19/03/2024" },
  { src: "fotos/foto18.img.jpeg", data: "06/04/2024" },
  { src: "fotos/foto19.img.jpeg", data: "21/04/2024" },
  { src: "fotos/foto20.img.jpeg", data: "14/07/2024" },
  { src: "fotos/foto21.img.jpeg", data: "20/10/2024" },
  { src: "fotos/foto22.img.jpeg", data: "16/11/2024" },
  { src: "fotos/foto23.img.jpeg", data: "16/12/2024" },
  { src: "fotos/foto24.img.jpeg", data: "05/04/2025" },
  { src: "fotos/foto25.img.jpeg", data: "03/06/2025" }
];

let indexAtual = 0;

const fotoEl = document.getElementById("foto");
const legendaEl = document.getElementById("legenda");
const btnProximo = document.getElementById("proximo");
const btnAnterior = document.getElementById("anterior");
const botaoVideo = document.getElementById("ver-video");

const somClique = new Audio("click.mp3");
const musica = document.getElementById("musica"); // <audio> com autoplay

function mostrarFoto(index) {
  indexAtual = (index + fotos.length) % fotos.length;

  fotoEl.classList.add("fade");
  legendaEl.classList.add("fade");

  setTimeout(() => {
    fotoEl.src = fotos[indexAtual].src;
    legendaEl.textContent = fotos[indexAtual].data;

    fotoEl.classList.remove("fade");
    legendaEl.classList.remove("fade");

    // Mostra botão do vídeo na última foto
    if (indexAtual === fotos.length - 1) {
      botaoVideo.style.display = "block";
    } else {
      botaoVideo.style.display = "none";
    }
  }, 200);
}

btnAnterior.addEventListener("click", () => {
  somClique.play();
  mostrarFoto(indexAtual - 1);
});

btnProximo.addEventListener("click", () => {
  somClique.play();
  mostrarFoto(indexAtual + 1);
}); 

// Inicia a galeria
mostrarFoto(indexAtual);

// Inicia música quando a página é clicada
document.body.addEventListener('click', () => {
  const musica = document.getElementById('musica');
  if (musica.paused) {
    musica.play().catch((e) => {
      console.log("Reprodução bloqueada pelo navegador:", e);
    });
  }
}, { once: true }); // só executa uma vez
