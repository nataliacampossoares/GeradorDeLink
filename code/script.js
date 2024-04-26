const linkBtn = document.querySelector("[data-link-btn]")
const sendBtn = document.querySelector("[data-send-btn]")
const divLink = document.querySelector("[data-div-link]")


linkBtn.addEventListener("click", () => {
    divLink.innerText = 'https://nati'
    divLink.style.display = 'flex'
})