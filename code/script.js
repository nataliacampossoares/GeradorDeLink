const linkBtn = document.querySelector("[data-link-btn]")
const sendBtn = document.querySelector("[data-send-btn]")
const divLink = document.querySelector("[data-div-link]")
const paragrafo = document.querySelector("[data-p]")
const input = document.querySelector("[data-input-num]")

input.addEventListener("input", (evento) => {
  let numeros = "0123456789"
  contador = 0
  if (evento.target.value in numeros){
    contador += 1
  }
  // let contador = numeros ? numeros.length : 0;
  // if (contador > 11){
  //   input.maxLength = 11;
  // }
}
)

const validarNum = () => {
  // let regex = /(\(?\d{2}\)?\s)?(\d{4,5}\-\d{4})/
  const numero = input.value 
    .replace("(", "")
    .replace(")", "")
    .replace("-", "")
    .replace(" ", "")
    .replace("55", "")
    .replace("+", "")
  
  divLink.innerText = 'https://wa.me/55' + numero
}


linkBtn.addEventListener("click", () => {
  validarNum()
  paragrafo.innerText = "Clique no link para copiar"
  divLink.style.display = 'flex'
  paragrafo.style.display = 'flex'
})

divLink.addEventListener("click", () =>{
  const link = divLink.innerText;
  navigator.clipboard.writeText(link);
  paragrafo.innerText = "Link copiado para a área de transferência"
})

function openInNewTab(url) {
  console.log(url)
  var win = window.open(url, '_blank');
  win.focus();
}

sendBtn.addEventListener('click', function() {
  validarNum()
  const url = divLink.innerText
  openInNewTab(url);
});