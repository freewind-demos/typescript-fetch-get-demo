const button = document.querySelector('#button')!;
const message = document.querySelector('#message')!;

button.addEventListener('click', async () => {
    const response = await fetch('https://httpbin.org/get')
    message.textContent = await response.text()
})
