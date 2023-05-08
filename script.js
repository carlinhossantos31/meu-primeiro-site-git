const button = document.getElementById('cnvert-button')
const select = document.getElementById('currency-select')

const dlar =  5.2

const convertValues = () =>{
    const inputReais = document.getElementById('input-real').value
    const realValuetext = document.getElementById('real-value-text')
    const currencyValueTex = document.getElementById('currency-value-text')
    realValuetext.innerHTML = inputReais
    realValuetext.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency:"BRL",
    }).format(inputReais)
    currencyValueText.innerHTML = inputReais / dlar
    currencyValueText.innerHTML = new Intl.NumberFormat("en-US",{
        style: "currency",
        currency: "USD"
    }).format(inputReais / dlar)
    console.log(inputReais / dlar)

}
button.addEventListener('click',convertValues)

changeCurrency = () => {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.getElementById("currency-img")
  
    if(select.value === 'US$ Dolar Americano')
    currencyName.innerHTML = "Dolar Americano" 
    currencyImg.src ="./dolar.png"

    if(select.value === '€ Euro')
    currencyName.innerHTML ="Euro"
    currencyImg.src ="./euro.png"

    if(select.value === '₿ Bitcoin')
    currencyName.innerHTML ="Bitcoin"
    currencyImg.src ="./bitcoin.png"
}