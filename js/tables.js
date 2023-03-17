let nomeProd = 0;
// Container Card e Container Tabela
let cardContainer = document.getElementById("cardContainer");
let tabelaContainer = document.getElementById("tableContainer");

// Tabela
let tabela = document.getElementById("tabela");
let thead = criaElemento("thead");
let linhaHead = criaElemento("tr");
let tbody = criaElemento("tbody");
let indicesTabela = ["Número do Produto", "Nome do Produto", "Preço"];
let linhasTabela = [];
// Matriz de produtos
let tabelaPadaria = [
  [1, "Pão Doce", "R$ 0,50 (Unidade)"],
  [2, "Pão Francês", "R$ 0,70 (Unidade)"],
  [3, "Pão de Queijo", "R$ 0,80 (Unidade)"],
  [4, "Pão de Forma", "R$ 7,00"],
  [5, "Sonho", "R$ 3,00"],
  [6, "Queijo Mussarela 100g", "R$ 4,00"],
  [7, "Peito de Peru 100g", "R$ 5,00"],
  [8, "Presunto 100g", "R$ 3,50"],
  [9, "Bolo", "R$ 20,00"],
  [10, "Pacote de Café", "R$ 14,00"],
  [11, "Pacote de Açúcar", "R$ 5,00"],
  [12, "Manteiga", "R$ 8,50"],
  [13, "Requeijão", 'R$ 9,00']
];

let tabelaCarne = [
  [1, "Filé Mignon", "R$ 69,98"],
  [2, "Maminha", "R$ 38,99"],
  [3, "Picanha", "R$ 69,29"],
  [4, "Coxão mole", "R$ 39,99"],
  [5, "Patinho", "R$ 39,99"],
  [6, "Contrafilé", "R$ 41,98"],
  [7, "Alcatra", "R$ 49,00"],
  [8, "Costela", "R$ 44,90"],
  [9, "Paleta", "R$ 29,98"],
  [10, "Chuleta", "R$ 35,80"],
  [11, "Coxão Duro", "R$ 34,99"],
  [12, "Filé de Frango", "R$ 20,99"],
  [13, "Frango a Passarinho", "R$ 24,99"]
];

function criaElemento(elemento) {
  return document.createElement(elemento);
}

function criaCel(elemento, conteudo) {
  elemento = criaElemento(elemento);
  elemento.textContent = conteudo;

  return elemento;
}

function criaThead() {
  for (let i = 0; i < indicesTabela.length; i++) {
    let th = criaCel("th", indicesTabela[i]);
    th.classList.add("scope");
    linhaHead.appendChild(th);
  }

  thead.appendChild(linhaHead);
  tabela.appendChild(thead);
}

function criaTbody() {
  for (let i = 0; i < linhasTabela.length; i++) {
    let linhaBody = criaElemento("tr");

    for (let j = 0; j < linhasTabela[i].length; j++) {
      let cel = criaCel("td", linhasTabela[i][j]);
      linhaBody.appendChild(cel);
    }

    tbody.appendChild(linhaBody);
  }

  tabela.appendChild(tbody);
}

function alteraNomeProd(n) {
  nomeProd = n;
  criaTabela();
}

function criaTabela() {
  if (nomeProd == 1) {
    linhasTabela = tabelaPadaria;
    
  } else if (nomeProd == 2) {
    linhasTabela = tabelaCarne;
  }
  nomeProd = 0;
  criaThead();
  criaTbody();

  cardContainer.style.display = "none";
  tabelaContainer.style.display = "block";
}

function fechaTabela() {
  location.reload();
}
