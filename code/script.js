const linkBtn = document.querySelector("[data-link-btn]");
const sendBtn = document.querySelector("[data-send-btn]");
const divLink = document.querySelector("[data-div-link]");
const paragrafo = document.querySelector("[data-p]");
const input = document.querySelector("[data-input-num]")

input.addEventListener("input", (evento) => {
    let valor = evento.target.value;
    valor = valor.replace(/\D/g, "");

    if (valor.length === 11) {
        const numeroFormatado = `(${valor.slice(0, 2)}) ${valor.slice(2, 7)}-${valor.slice(7, 11)}`;
        evento.target.value = numeroFormatado;
        input.style.border= "2px solid green";
        input.style.color = "green";
    } else {
        evento.target.value = valor;
        input.style.border= "2px solid black";
        input.style.color = "black";
    }
  });

input.addEventListener("click", () => {
  divLink.style.display = 'none';
  paragrafo.style.display = 'none';
})
  
const validarNum = () => {
  const numero = input.value;
  const numeroLimpo = numero.replace(/\D/g, "");
  divLink.innerText = 'https://wa.me/55' + numeroLimpo;
}

linkBtn.addEventListener("click", () => {
  const numero = input.value;
  if (numero.length == 15){
    validarNum();
    paragrafo.innerText = "Clique no link para copiar";
    divLink.style.display = 'flex';
    paragrafo.style.display = 'flex';
  }
  else{
    alert('Coloque todos os dígitos do telefone!')
  }
  
})

divLink.addEventListener("click", () =>{
  const link = divLink.innerText;
  navigator.clipboard.writeText(link);
  paragrafo.innerText = "Link copiado para a área de transferência";
})

function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}

sendBtn.addEventListener('click', function() {
  const numero = input.value;
  if (numero.length == 15){
    validarNum();
    const url = divLink.innerText;
    openInNewTab(url);
  }
  else{
    alert('Coloque todos os dígitos do telefone!')
  }
});
