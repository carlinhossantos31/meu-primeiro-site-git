const input = document.querySelector('input')
const select = document.querySelector('select')
const button = document.querySelector('button')



const clickButton = () => {
    alert('0 Botão foi clicado')
}




input.addEventListener('focus', () => {
    console.log('Deu um foco')
})

select.addEventListener('change', () => {
    console.log(select.value)
})

button.addEventListener('click',clickButton)

