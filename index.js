const qtd_func = [
  17000, //arcelor
  2000, //cbmm
  8000, //terniun
  6500, //usiminas
  2000, //aperam
  30000, // csn
  3400, //belgo
  4800, // cba
  17000, // suzanno
  10000, // gerdau
];

const ano1 =document.getElementById('ano1').style

const empresas = [
  document.getElementById("org1"),
  document.getElementById("org2"),
  document.getElementById("org3"),
  document.getElementById("org4"),
  document.getElementById("org5"),
  document.getElementById("org6"),
  document.getElementById("org7"),
  document.getElementById("org8"),
  document.getElementById("org9"),
  document.getElementById("org10"),
];

let quantidade = 0;
let somaValor = 0;
let value_func = 10;

let assinaturaPosterior = 0;
let assinatura = 0;

function agrupar(event) {
  // value_func= document.getElementById('valor_func').value
  const empresaClicada = event.target;
  if (empresaClicada.classList.contains("clicada")) {
    quantidade--;
    desmarcar(empresaClicada.id);
    const indice = empresas.findIndex((empresa) => empresa === empresaClicada);
    somaValor -= qtd_func[indice] * value_func; // Subtrai o valor da empresa da soma
  } else {
    quantidade++;
    marcar(empresaClicada.id);
    const indice = empresas.findIndex((empresa) => empresa === empresaClicada);
    somaValor += qtd_func[indice] * value_func; // Adiciona o valor da empresa à soma

    alert(
      `a empresa ${empresaClicada.getAttribute("name")} possui ${
        qtd_func[indice]
      } colaboradores`
    );
  }
  empresaClicada.classList.toggle("clicada");
}

/**adcionando o evento a todas as empresas */
document.getElementById("org1").addEventListener("click", agrupar, false);
document.getElementById("org2").addEventListener("click", agrupar, false);
document.getElementById("org3").addEventListener("click", agrupar, false);
document.getElementById("org4").addEventListener("click", agrupar, false);
document.getElementById("org5").addEventListener("click", agrupar, false);
document.getElementById("org6").addEventListener("click", agrupar, false);
document.getElementById("org7").addEventListener("click", agrupar, false);
document.getElementById("org8").addEventListener("click", agrupar, false);
document.getElementById("org9").addEventListener("click", agrupar, false);
document.getElementById("org10").addEventListener("click", agrupar, false);

/**modificar o estilo da empresa selecionada */
function marcar(id) {
  document.getElementById(id).style.boxShadow =
    "0px 4px 40px 0px rgba(240, 126, 20, 0.63)";
}

/**Desmarcar a empresa */
function desmarcar(id) {
  document.getElementById(id).style.boxShadow = "none";
}

function open() {
  var janela = document.getElementById("janela").style;
  janela.display = "block";
}
function close() {
  var janela = document.getElementById("janela").style;
  janela.display = "none";
}

//procedimento de calculo roi
const btn_calc = document.getElementById("btn-calcular");

//indicadores
const roi = document.getElementById("ROI");
const payback = document.getElementById("PAYBACK");

//tabela do faturamento
let all_meses = document.getElementById("fatMensal");
const start = document.getElementById("firstMes");
const fat_ano = document.getElementById("fatAnual");

/**Calculo de roi  */
function return_Roi(tempo, valor, investimento) {
  let receita = tempo * valor;
  let calc = (receita - investimento) / investimento;
  let calc2 = calc * 100;
  roi.innerText = `${calc2.toFixed(2)}%`;
}

/**calculo payback */
function return_Payback(investimento, receita) {
  let valor = investimento / receita;
  payback.innerText = `${valor.toFixed(2)} meses`;
}

/*zera os valores de roi and payback*/
function zerar() {
  roi.innerText = 0.0;
  payback.innerText = 0.0;
  assinatura = 0;
  valor_add = false;
  start.innerText = 'R$ 0,00';
  fat_ano.innerText = 'R$ 0,00';
  document.getElementById("invest").innerText = 'R$ 0,00';
  document.getElementById("preco").innerText = 'R$ 0,00';
  all_meses.innerText = 0;
  firstyear.innerText='R$ 0,00'
 
  

  //value_func= 0
}

//.toLocaleString('pt-BR')


/**calculo do perfil conservador */
function calculate_economy(invest, assinatura) {
  zerar();
  let investimento = invest;
  var first =  assinatura
  let tempo = document.getElementById("tmp").value;

  let mes = "R$ " + assinaturaPosterior.toFixed(2).replace(".", ",");
  let faturamentoMes = "R$" + assinatura.toFixed(2).replace(".", ",");
  let faturamentoAno =
    "R$" + (assinatura * 12 * quantidade).toFixed(2).replace(".", ",");
  let custo = "R$ " + investimento.toFixed(2).replace(".", ",");
  let preço = "R$ " + assinatura.toFixed(2).replace(".", ",");
  first= "R$ " + first.toFixed(2).replace(".", ",");

  mes = mes.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  faturamentoMes = faturamentoMes.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  faturamentoAno = faturamentoAno.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  first = first.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  custo = custo.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  preço = preço.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  document.getElementById("invest").innerText = custo;
  document.getElementById("preco").innerText = preço;

  all_meses.innerText = first;

  start.innerText = faturamentoMes;
  fat_ano.innerText = faturamentoAno;

  let value_venda = assinatura * quantidade;
  return_Roi(tempo, value_venda, investimento);
  return_Payback(investimento, value_venda);
}




let valor_add = false;
//calculo pulse card
/**calculo do perfil conservador */
function calculate_economy_Pulse(invest, assinatura) {
  zerar()
 
  let tempo = document.getElementById("tmp").value
  let first = assinatura;
  let custo = "R$ " + invest.toFixed(2).replace(".", ",");
  let preço = "R$ " + assinatura.toFixed(2).replace(".", ",");

  custo = custo.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  preço = preço.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  document.getElementById("invest").innerText = custo;
  document.getElementById("preco").innerText = preço;

  if (!valor_add) {
    assinatura += somaValor;
    valor_add = true;
  } else {
    assinatura = assinaturaPosterior;
  }

  assinatura = assinatura * quantidade;

  let mes = "R$ " + first.toFixed(2).replace(".", ",");
  let faturamentoMes = "R$" + assinatura.toFixed(2).replace(".", ",");
  let faturamentoAno ="R$" + (first * 12 * quantidade).toFixed(2).replace(".", ",");
  let goodYear ="R$" + ((first * 12 * quantidade)+assinatura).toFixed(2).replace(".", ",");
  mes = mes.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  goodYear = goodYear.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  faturamentoMes = faturamentoMes.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  faturamentoAno = faturamentoAno.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  all_meses.innerText=mes
  start.innerText = faturamentoMes;
  fat_ano.innerText = faturamentoAno;
  firstyear.innerText=goodYear

  return_Roi(tempo, assinatura, invest);
  return_Payback(invest, assinatura);
}









btn_calc.addEventListener(
  "click",
  () => {
    const selectElement = document.getElementById("selec");
    var meses = "";
    const valorSelecionado = selectElement.value;
    switch (valorSelecionado) {
      case "nowaste":
        
        calculate_economy(581749.0, 30000.0);
        break;
      case "sdo":
        
        calculate_economy(312365.0, 10000.0);
        break;
      case "pulse":
        calculate_economy_Pulse(346000.0, 10000);
       
        break;
      case "gnt":
       
        alert("gnt");
        break;
      default:
        alert("nenhum");
        break;
    }
  },
  false
);


document.getElementById("selec").addEventListener('change',zerar,false)