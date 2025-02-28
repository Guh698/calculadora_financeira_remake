/* nav */
const formulas_nav = document.getElementById("formulas_nav");
const calculos_nav = document.getElementById("calculos_nav");
const incognitas_nav = document.getElementById("incognitas_nav");

/* categories */
const formulas_container = document.getElementById("formulas-container");
const btn_calc_container = document.getElementById("botoes_calculos-container");
const incognitas_container = document.getElementById("incognitas-container");

/*botões */
const btnJurosSimples = document.getElementById("juros_simples_btn");
const btnJurosCompostos = document.getElementById("juros_compostos_btn");
const btnDescontoSimples = document.getElementById("desconto_simples_btn");
const btnDescontoComposto = document.getElementById("desconto_composto_btn");
const btnAmortizacao = document.getElementById("amortizacao_btn");

/*divs correspondentes */
const divJuros = document.getElementById("juros_bnt");
const divDescontoS = document.getElementById("descontos_s_btn");
const divDescontoC = document.getElementById("descontos_c_btn");
const divAmortizacao = document.getElementById("amortizacoes_btn");

/*escolha das contas */
const escolha_js = document.getElementById("escolha_js");
const escolha_js_montante = document.getElementById("escolha_js_montante");
const escolha_ds_racional = document.getElementById("escolha_ds_racional");
const escolha_ds_comercial = document.getElementById("escolha_ds_comercial");
const escolha_dc_racional = document.getElementById("escolha_dc_racional");
const escolha_dc_comercial = document.getElementById("escolha_dc_comercial");
const escolha_sac = document.getElementById("escolha_sac");
const escolha_price = document.getElementById("escolha_price");
const escolha_americano = document.getElementById("escolha_americano");

/*contas*/
const contas_container = document.getElementById("contas-container");
const conta1 = document.querySelector(".conta1");
const conta2 = document.querySelector(".conta2");
const conta3 = document.querySelector(".conta3");
const conta4 = document.querySelector(".conta4");
const conta5 = document.querySelector(".conta5");
const conta6 = document.querySelector(".conta6");
const conta7 = document.querySelector(".conta7");
const conta8 = document.querySelector(".conta8");
const conta9 = document.querySelector(".conta9");
const conta10 = document.querySelector(".conta10");

/*remove all*/
function esconderTodas() {
  divJuros.classList.remove("show");
  divDescontoS.classList.remove("show");
  divDescontoC.classList.remove("show");
  divAmortizacao.classList.remove("show");
}

function esconderTodasAsContas() {
  contas_container.style.display = "none";
  document.querySelectorAll(".contas > div").forEach((conta) => {
    conta.style.display = "none";
  });
}

function mostrarConta(conta) {
  esconderTodasAsContas();
  contas_container.style.display = "flex";
  conta.style.display = "flex";
}

/* show categories */
if (formulas_container) {
  formulas_nav.addEventListener("click", function () {
    formulas_container.classList.add("show");

    /*remove*/
    btn_calc_container.classList.remove("show");
    incognitas_container.classList.remove("show");
    esconderTodas();
    esconderTodasAsContas();
  });
}

if (btn_calc_container) {
  calculos_nav.addEventListener("click", function () {
    btn_calc_container.classList.add("show");

    /*remove*/
    incognitas_container.classList.remove("show");
    formulas_container.classList.remove("show");
    esconderTodas();
    esconderTodasAsContas();
  });
}

if (incognitas_container) {
  incognitas_nav.addEventListener("click", function () {
    incognitas_container.classList.add("show");

    /*remove*/
    btn_calc_container.classList.remove("show");
    formulas_container.classList.remove("show");
    btn_calc_container.classList.remove("show");
    esconderTodas();
    esconderTodasAsContas();
  });
}

/*botões de escolhass*/

/*juros simples*/
btnJurosSimples.addEventListener("click", function () {
  btn_calc_container.classList.remove("show");
  esconderTodas();
  divJuros.classList.add("show");
});

/*juros compostos*/
btnJurosCompostos.addEventListener("click", function () {
  esconderTodas();
  btn_calc_container.classList.remove("show");
  mostrarConta(conta3);
});

/*dedscontos simples */
btnDescontoSimples.addEventListener("click", function () {
  esconderTodas();
  btn_calc_container.classList.remove("show");
  divDescontoS.classList.add("show");
});

/*descontos compostos*/
btnDescontoComposto.addEventListener("click", function () {
  esconderTodas();
  btn_calc_container.classList.remove("show");
  divDescontoC.classList.add("show");
});

/*amortizações*/
btnAmortizacao.addEventListener("click", function () {
  esconderTodas();
  btn_calc_container.classList.remove("show");
  divAmortizacao.classList.add("show");
});

/* escolhas das contas */

/*juros simples*/
escolha_js.addEventListener("click", function () {
  esconderTodas();
  mostrarConta(conta1);
});

/*juros simples montante*/
escolha_js_montante.addEventListener("click", function () {
  esconderTodas();
  mostrarConta(conta2);
});

/*desconto simples racional*/
escolha_ds_racional.addEventListener("click", function () {
  esconderTodas();
  mostrarConta(conta4);
});

/*desconto simples comercial*/
escolha_ds_comercial.addEventListener("click", function () {
  esconderTodas();
  mostrarConta(conta5);
});
/*desconto composto racional*/
escolha_dc_racional.addEventListener("click", function () {
  esconderTodas();
  mostrarConta(conta6);
});

/*desconto composto comercial*/
escolha_dc_comercial.addEventListener("click", function () {
  esconderTodas();
  mostrarConta(conta7);
});

/*sac*/
escolha_sac.addEventListener("click", function () {
  esconderTodas();
  mostrarConta(conta8);
});

/*price*/
escolha_price.addEventListener("click", function () {
  esconderTodas();
  mostrarConta(conta9);
});

/*americano*/
escolha_americano.addEventListener("click", function () {
  esconderTodas();
  mostrarConta(conta10);
});

/*cálculos*/

function calcularJurosSimples() {
  let capital = parseFloat(document.getElementById("capital").value);
  let taxa = parseFloat(document.getElementById("taxa").value) / 100;
  let tempo = parseFloat(document.getElementById("tempo").value);

  if (isNaN(capital) || isNaN(taxa) || isNaN(tempo)) {
    document.getElementById("resultado1").textContent =
      "Por favor, insira valores válidos.";
    return;
  }

  let juros = capital * taxa * tempo;

  document.getElementById(
    "resultado1"
  ).textContent = `O valor dos juros simples é: R$ ${juros.toFixed(2)}`;
}

document
  .getElementById("calcular1")
  .addEventListener("click", calcularJurosSimples);

function calcularJurosSimplesmontante() {
  let capital = parseFloat(document.getElementById("capital2").value);
  let taxa = parseFloat(document.getElementById("taxa2").value) / 100;
  let tempo = parseFloat(document.getElementById("tempo2").value);

  if (isNaN(capital) || isNaN(taxa) || isNaN(tempo)) {
    document.getElementById("resultado2").textContent =
      "Por favor, insira valores válidos.";
    return;
  }

  let montante = capital * (1 + taxa * tempo);

  document.getElementById(
    "resultado2"
  ).textContent = `O seu montante é: R$ ${montante.toFixed(2)}`;
}

document
  .getElementById("calcular2")
  .addEventListener("click", calcularJurosSimplesmontante);

function calcularJurosCompostos() {
  let capital = parseFloat(document.getElementById("capital3").value);
  let taxa = parseFloat(document.getElementById("taxa3").value) / 100;
  let tempo = parseFloat(document.getElementById("tempo3").value);

  if (isNaN(capital) || isNaN(taxa) || isNaN(tempo)) {
    document.getElementById("resultado3").textContent =
      "Por favor, insira valores válidos.";
    return;
  }

  let montante = capital * (1 + taxa) ** tempo;

  document.getElementById(
    "resultado3"
  ).textContent = `O seu montante é: R$ ${montante.toFixed(2)}`;
}

document
  .getElementById("calcular3")
  .addEventListener("click", calcularJurosCompostos);

function calcularDescontoSimplesRacional() {
  let nominal = parseFloat(document.getElementById("nominal").value);
  let taxa = parseFloat(document.getElementById("taxa4").value) / 100;
  let tempo = parseFloat(document.getElementById("tempo4").value);

  if (isNaN(nominal) || isNaN(taxa) || isNaN(tempo)) {
    document.getElementById("resultado4").textContent =
      "Por favor, insira valores válidos.";
    return;
  }

  let atual = nominal / (1 + taxa * tempo);
  let desconto = nominal - atual;

  document.getElementById(
    "resultado4"
  ).innerHTML = `O seu atual é: R$ ${atual.toFixed(
    2
  )} <br> O seu desconto foi de R$ ${desconto.toFixed(2)}`;
}

document
  .getElementById("calcular4")
  .addEventListener("click", calcularDescontoSimplesRacional);

function calcularDescontoSimplesComercial() {
  let nominal = parseFloat(document.getElementById("nominal2").value);
  let taxa = parseFloat(document.getElementById("taxa5").value) / 100;
  let tempo = parseFloat(document.getElementById("tempo5").value);

  if (isNaN(nominal) || isNaN(taxa) || isNaN(tempo)) {
    document.getElementById("resultado5").textContent =
      "Por favor, insira valores válidos.";
    return;
  }

  let atual = nominal * (1 - taxa * tempo);
  let desconto = nominal - atual;

  document.getElementById(
    "resultado5"
  ).innerHTML = `O seu atual é: R$ ${atual.toFixed(
    2
  )} <br> O seu desconto foi de R$ ${desconto.toFixed(2)}`;
}
document
  .getElementById("calcular5")
  .addEventListener("click", calcularDescontoSimplesComercial);

function calcularDescontoCompostoRacional() {
  let nominal = parseFloat(document.getElementById("nominal3").value);
  let taxa = parseFloat(document.getElementById("taxa6").value) / 100;
  let tempo = parseFloat(document.getElementById("tempo6").value);

  if (isNaN(nominal) || isNaN(taxa) || isNaN(tempo)) {
    document.getElementById("resultado6").textContent =
      "Por favor, insira valores válidos.";
    return;
  }

  let atual = nominal / (1 + taxa) ** tempo;
  let desconto = nominal - atual;

  document.getElementById(
    "resultado6"
  ).innerHTML = `O seu atual é: R$ ${atual.toFixed(
    2
  )} <br> O seu desconto foi de R$ ${desconto.toFixed(2)}`;
}

document
  .getElementById("calcular6")
  .addEventListener("click", calcularDescontoCompostoRacional);

function calcularDescontoCompostoComercial() {
  let nominal = parseFloat(document.getElementById("nominal4").value);
  let taxa = parseFloat(document.getElementById("taxa7").value) / 100;
  let tempo = parseFloat(document.getElementById("tempo7").value);

  if (isNaN(nominal) || isNaN(taxa) || isNaN(tempo)) {
    document.getElementById("resultado7").textContent =
      "Por favor, insira valores válidos.";
    return;
  }

  let atual = nominal * (1 - taxa) ** tempo;
  let desconto = nominal - atual;

  document.getElementById(
    "resultado7"
  ).innerHTML = `O seu atual é: R$ ${atual.toFixed(
    2
  )} <br> O seu desconto foi de R$ ${desconto.toFixed(2)}`;
}
document
  .getElementById("calcular7")
  .addEventListener("click", calcularDescontoCompostoComercial);

function calcularSAC() {
  let principal = parseFloat(document.getElementById("principal").value);
  let taxa = parseFloat(document.getElementById("taxa8").value) / 100;
  let parcelas = parseFloat(document.getElementById("parcelas").value);

  if (isNaN(principal) || isNaN(taxa) || isNaN(parcelas)) {
    document.getElementById("resultado8").innerHTML =
      "Por favor, insira valores válidos.";
    return;
  }

  let amortizacaoFixa = principal / parcelas;
  let totalJuros = 0;
  let totalPrestacoes = 0;
  let saldoDevedor = principal;
  let detalhesParcelas = `
      <table border="1" style="width: 100%; text-align: left;">
          <tr>
              <th>Parcela</th>
              <th>Amortização</th>
              <th>Juros</th>
              <th>Prestação</th>
              <th>Saldo Devedor</th>
          </tr>
  `;

  for (let i = 1; i <= parcelas; i++) {
    let juros = saldoDevedor * taxa;
    let prestacao = amortizacaoFixa + juros;

    totalJuros += juros;
    totalPrestacoes += prestacao;

    if (parcelas <= 10) {
      detalhesParcelas += `
            <tr>
                <td>${i}</td>
                <td>R$ ${amortizacaoFixa.toFixed(2)}</td>
                <td>R$ ${juros.toFixed(2)}</td>
                <td>R$ ${prestacao.toFixed(2)}</td>
                <td>R$ ${saldoDevedor.toFixed(2)}</td>
            </tr>
        `;
    }

    saldoDevedor -= amortizacaoFixa;
  }

  if (parcelas <= 10) {
    detalhesParcelas += `</table>`;
  } else {
    detalhesParcelas =
      "<p><em>O detalhamento das parcelas foi omitido devido ao número elevado de parcelas.</em></p>";
  }

  let resultadoFinal = `
    <strong>Resumo:</strong><br>
    Total Pago: R$ ${totalPrestacoes.toFixed(2)}<br>
    Total de Juros: R$ ${totalJuros.toFixed(2)}<br>
    Amortização Total: R$ ${principal.toFixed(2)}<br><br>
    ${parcelas <= 10 ? `<br>${detalhesParcelas}` : detalhesParcelas}
`;

  const resultado8 = document.getElementById("resultado8");
  resultado8.innerHTML = resultadoFinal;
}

if (botaoCalcular1 && resultado8) {
  botaoCalcular1.addEventListener("click", calcularSAC);
  resultado8.classList.remove("show0");
}

function calcularPrice() {
  let principal = parseFloat(document.getElementById("principal2").value);
  let taxa = parseFloat(document.getElementById("taxa9").value) / 100;
  let parcelas = parseFloat(document.getElementById("parcelas2").value);

  if (isNaN(principal) || isNaN(taxa) || isNaN(parcelas)) {
    document.getElementById("resultado9").innerHTML =
      "Por favor, insira valores válidos.";
    return;
  }

  let coeficiente =
    (taxa * Math.pow(1 + taxa, parcelas)) / (Math.pow(1 + taxa, parcelas) - 1);

  let prestacao = principal * coeficiente;
  let totalJuros = 0;
  let saldoDevedor = principal;
  let detalhesParcelas = `
      <table border="1" style="width: 100%; text-align: left;">
          <tr>
              <th>Parcela</th>
              <th>Prestação</th>
              <th>Juros</th>
              <th>Amortização</th>
              <th>Saldo Devedor</th>
          </tr>
  `;

  for (let i = 1; i <= parcelas; i++) {
    let juros = saldoDevedor * taxa;
    let amortizacao = prestacao - juros;

    totalJuros += juros;

    saldoDevedor -= amortizacao;

    if (parcelas <= 10) {
      detalhesParcelas += `
              <tr>
                  <td>${i}</td>
                  <td>R$ ${prestacao.toFixed(2)}</td>
                  <td>R$ ${juros.toFixed(2)}</td>
                  <td>R$ ${amortizacao.toFixed(2)}</td>
                  <td>R$ ${saldoDevedor.toFixed(2)}</td>
              </tr>
          `;
    }
  }

  if (parcelas <= 10) {
    detalhesParcelas += `</table>`;
  } else {
    detalhesParcelas =
      "<p><em>O detalhamento das parcelas foi omitido devido ao número elevado de parcelas.</em></p>";
  }

  let totalPago = prestacao * parcelas;

  // Exibir os resultados finais
  let resultadoFinal = `
      <strong>Resumo:</strong><br>
      Total Pago: R$ ${totalPago.toFixed(2)}<br>
      Total de Juros: R$ ${totalJuros.toFixed(2)}<br>
      Amortização Total: R$ ${principal.toFixed(2)}<br><br>
      ${parcelas <= 10 ? `<br>${detalhesParcelas}` : detalhesParcelas}
  `;

  resultado9.innerHTML = resultadoFinal;
}

botaoCalcular2.addEventListener("click", calcularPrice);

function calcularAmericano() {
  let principal = parseFloat(document.getElementById("principal3").value);
  let taxa = parseFloat(document.getElementById("taxa10").value) / 100;
  let parcelas = parseFloat(document.getElementById("parcelas3").value);

  if (isNaN(principal) || isNaN(taxa) || isNaN(parcelas)) {
    document.getElementById("resultado10").innerHTML =
      "Por favor, insira valores válidos.";
    return;
  }

  let jurosPorParcela = principal * taxa;
  let totalJuros = jurosPorParcela * parcelas;
  let ultimaParcela = jurosPorParcela + principal;
  let totalPago = jurosPorParcela * (parcelas - 1) + ultimaParcela;

  let detalhesParcelas = `
      <table border="1" style="width: 100%; text-align: left;">
          <tr>
              <th>Parcela</th>
              <th>Juros</th>
              <th>Amortização</th>
              <th>Prestação</th>
          </tr>
  `;

  for (let i = 1; i <= parcelas; i++) {
    if (parcelas <= 10) {
      let amortizacao = i === parcelas ? principal : 0;

      let prestacao = i === parcelas ? ultimaParcela : jurosPorParcela;

      detalhesParcelas += `
              <tr>
                  <td>${i}</td>
                  <td>R$ ${jurosPorParcela.toFixed(2)}</td>
                  <td>R$ ${amortizacao.toFixed(2)}</td>
                  <td>R$ ${prestacao.toFixed(2)}</td>
              </tr>
          `;
    }
  }

  if (parcelas <= 10) {
    detalhesParcelas += `</table>`;
  } else {
    detalhesParcelas =
      "<p><em>O detalhamento das parcelas foi omitido devido ao número elevado de parcelas.</em></p>";
  }

  let resultadoFinal = `
      <strong>Resumo:</strong><br>
      Prestação (exceto última): R$ ${jurosPorParcela.toFixed(2)}<br>
      Última Prestação: R$ ${ultimaParcela.toFixed(2)}<br>
      Total Pago: R$ ${totalPago.toFixed(2)}<br>
      Total de Juros: R$ ${totalJuros.toFixed(2)}<br>
      Amortização Total: R$ ${principal.toFixed(2)}<br><br>
      ${parcelas <= 10 ? `<br>${detalhesParcelas}` : detalhesParcelas}
  `;

  resultado10.innerHTML = resultadoFinal;
}

botaoCalcular3.addEventListener("click", calcularAmericano);
