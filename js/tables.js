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
  [13, "Requeijão", "R$ 9,00"],
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
  [13, "Frango a Passarinho", "R$ 24,99"],
];

let tabelaBebida = [
  [1, "Refrigerante 2L", "R$ 8,00"],
  [2, "Suco de Caixa 1,5L", "R$ 7,00"],
  [3, "Caixa de Cerveja", "R$ 37,00"],
  [4, "Garrafa de Vinho", "R$ 90,00"],
  [5, "Garrafa de Água 2L", "R$ 5,00"],
  [6, "Garrafa de Energético 2L", "R$ 15,00"],
  [7, "Achocolatado em pó 2kg", "R$ 30,00"],
  [8, "Vodka 2L", "R$ 99,90"],
  [9, "Whisky 2L", "R$ 110,00"],
  [10, "Cachaça 2L", "R$ 35,80"],
];

let tabelaFruta = [
  [1, "Maça Vermelha Kg", "R$ 15,00"],
  [2, "Banana Kg", "R$ 12,00"],
  [3, "Goiaba Kg", "R$ 10,00"],
  [4, "Ameixa Kg", "R$ 12,00"],
  [5, "Manga Kg", "R$ 15,00"],
  [6, "Laranja Kg", "R$ 10,00"],
  [7, "Mexerica Kg", "R$ 10,00"],
  [8, "Amora Kg", "R$ 12,90"],
  [9, "Abacate Kg", "R$ 17,00"],
  [10, "Abacaxi Kg", "R$ 20,00"],
  [11, "Mamão Kg", "R$ 22,80"],
  [12, "Melão Kg", "R$ 24,80"],
  [13, "Uva Kg", "R$ 13,80"],
];

let tabelaComida = [
  [1, "Pacote de Arroz 5Kg", "R$ 25,00"],
  [2, "Pacote de Feijão Kg", "R$ 10,00"],
  [3, "Óleo 1L", "R$ 8,00"],
  [4, "Salgadinho", "R$ 6,00"],
  [5, "Bolacha", "R$ 4,00"],
  [6, "Bolinho", "R$ 6,00"],
  [7, "Cereal", "R$ 15,00"],
  [8, "Batata Palha", "R$ 9,00"],
  [9, "Batata Kg", "R$ 13,00"],
  [10, "Tomate Kg", "R$ 12,00"],
  [11, "Alface", "R$ 3,50"],
];

let tabelaLimpeza = [
  [1, "Desinfetante", "R$ 6,00"],
  [2, "Amaciante 1L", "R$ 17,00"],
  [3, "Desengordurante", "R$ 10,00"],
  [4, "Álcool", "R$ 12,00"],
  [5, "Sabão em Pó", "R$ 14,00"],
  [6, "Sabão em Pedra", "R$ 6,00"],
  [7, "Detergente", "R$ 3,00"],
  [8, "Palha de Aço", "R$ 1,00"],
  [9, "Aromatizador", "R$ 7,00"],
  [10, "Cera", "R$ 12,00"],
  [11, "Limpa Vidros", "R$ 8,50"],
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
  }
  if (nomeProd == 2) {
    linhasTabela = tabelaCarne;
  }
  if (nomeProd == 3) {
    linhasTabela = tabelaBebida;
  }
  if (nomeProd == 4) {
    linhasTabela = tabelaFruta;
  }
  if (nomeProd == 5) {
    linhasTabela = tabelaComida;
  }
  if (nomeProd == 6) {
    linhasTabela = tabelaLimpeza;
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
