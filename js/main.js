const form = document.getElementById("novoItem")
const lista = document.getElementById("lista")
//eu vou primeiro ver se existe alguma coisa lá no localstorage.getItem passando aqui os itens, mas se isso for falso eu quero que ele crie um array vazio
const itens = JSON.parse(localStorage.getItem("itens")) || []

itens.forEach( (elemento) =>{
  criaElemento(elemento)
})

form.addEventListener("submit", (evento) =>{
    
    evento.preventDefault()

    const nome = evento.target.elements['nome']
    const quantidade = evento.target.elements['quantidade']

    const itemAtual = {
      "nome": nome.value,
      "quantidade": quantidade.value
    }

     criaElemento(itemAtual)

    itens.push(itemAtual)

    localStorage.setItem("itens", JSON.stringify(itens))

    nome.value = ""
    quantidade.value = ""
})

function criaElemento (item) {

  const novoItem =  document.createElement('li')
  novoItem.classList.add("item")

  const numeroItem = document.createElement('strong')
  numeroItem.innerHTML = item.quantidade
  novoItem.appendChild(numeroItem) 

  novoItem.innerHTML += item.nome
  
  lista.appendChild(novoItem)
  
  
}