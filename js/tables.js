let card = document.getElementsByClassName("card");
let cardContainer = document.getElementById("cardContainer");

function tabelaPadaria() {
  for (let i = 0; i < 6; i++) {
    card[i].style.display = "none";
  }

  cardContainer.innerHTML = `
  <table class="table table-responsive table-bordered table-hover">
  <thead>
    <tr class="textWhite">
      <th scope="col">Número do Produto</th>
      <th scope="col">Nome do Produto</th>
      <th scope="col">Preço</th>
    </tr>
  </thead>
  <tbody class="textWhite">
    <tr>
      <th scope="row">1</th>
      <td>Pão Doce</td>
      <td>R$ 0,50 (Unidade)</td>
    </tr>

    <tr>
      <th scope="row">2</th>
      <td>Pão Francês</td>
      <td>R$ 0,70 (Unidade)</td>
    </tr>

    <tr>
      <th scope="row">3</th>
      <td>Pão de queijo</td>
      <td>R$ 0,80 (Unidade)</td>
    </tr>

    <tr>
      <th scope="row">4</th>
      <td>Sonho</td>
      <td>R$ 3,00 (Unidade)</td>
    </tr>

    <tr>
      <th scope="row">5</th>
      <td>Queijo Mussarela 100g</td>
      <td>R$ 4,00</td>
    </tr>

    <tr>
      <th scope="row">6</th>
      <td>Peito de Peru 100g</td>
      <td>R$ 5,00</td>
    </tr>

    <tr>
      <th scope="row">7</th>
      <td>Presunto 100g</td>
      <td>R$ 3,50</td>
    </tr>

    <tr>
      <th scope="row">8</th>
      <td>Bolo</td>
      <td>R$ 20,00</td>
    </tr>

    <tr>
      <th scope="row">9</th>
      <td>Pacote de Café</td>
      <td>R$ 14,00</td>
    </tr>

    <tr>
      <th scope="row">10</th>
      <td>Pacote de Açúcar</td>
      <td>R$ 3,50</td>
    </tr>

    <tr>
      <th scope="row">11</th>
      <td>Manteiga</td>
      <td>R$ 8,50</td>
    </tr>

    <tr>
      <th scope="row">12</th>
      <td>Salgado</td>
      <td>R$ 4,00</td>
    </tr>
  </tbody>
</table>

<div class="d-flex justify-content-center align-items-center w-100">
  <button class="w-50" style="color: #097969; background-color: #fff; border: solid 1px #097969; border-radius: 5px;" onclick="fechaTabela()">Voltar</button>
</div>`;
}

function fechaTabela() {
  location.reload();
}
