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
