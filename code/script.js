const linkBtn = document.querySelector("[data-link-btn]")
const sendBtn = document.querySelector("[data-send-btn]")
const divLink = document.querySelector("[data-div-link]")
const paragrafo = document.querySelector("[data-p]")


linkBtn.addEventListener("click", () => {
    divLink.innerText = 'https://wa.me/número'
    divLink.style.display = 'flex'
    paragrafo.style.display = 'flex'
})


var url = "https://www.google.com";


function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}

sendBtn.addEventListener('click', function() {
    
  openInNewTab(url);

});