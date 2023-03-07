//--------------------------PÁGINA DE FORMULÁRIO-----------------------
//função pro BUTTON

function guardaForm() {
  var formsClientes = new Object();

  formsClientes.nome = document.getElementById("nome").value;
  formsClientes.sobrenome = document.getElementById("sobrenome").value;
  formsClientes.nascimento = document.getElementById("nascimento").value;
  formsClientes.cpf = document.getElementById("cpf").value;
  formsClientes.profissao = document.getElementById("profissao").value;
  formsClientes.cep = document.getElementById("cep").value;
  formsClientes.senha = document.getElementById("senha").value;
  formsClientes.confirma = document.getElementById("confirma").value;

  //converte para string JSON
  var formParaJson = JSON.stringify(formsClientes);

  document.getElementById("nome").value = formsClientes.nome;
  document.getElementById("sobrenome").value = formsClientes.sobrenome;
  document.getElementById("nascimento").value = formsClientes.nascimento;
  document.getElementById("cpf").value = formsClientes.cpf;
  document.getElementById("profissao").value = formsClientes.profissao;
  document.getElementById("cep").value = formsClientes.cep;
  document.getElementById("senha").value = formsClientes.senha;
  document.getElementById("confirma").value = formsClientes.confirma;

  window.print();
  console.log(formsClientes);

  // document.write(dados.nome)
}

//
//
//
//--------------------------API FAKE--------------------------
const racas =
  '{"raca1": "Dobermann", "descricao1": "Por trás da “cara de mau”, jeito imponente e corpo forte e musculoso do doberman, existe uma personalidade bastante afetuosa, leal, companheira e muito protetora. Ele é um grande amigo para toda a família e um ótimo cão de guarda. Também chamado de dobie e doberman pinscher, essa raça é conhecida por sua incrível inteligência e obediência. Não é à toa que esse cachorro é perfeito para atuar em resgates e como policial.", "raca2": "Corgie", "descricao2": "Amorosos, companheiros, obedientes e inteligentes: essas são quatro palavras que poderiam definir bem o temperamento do welsh corgi. Esse é o tipo de cachorro que adora se envolver nas atividades da família e que costuma seguir o tutor pela casa, para onde quer que ele vá. <br>Cachorros deste porte, podem ser treinados para atividades específicas como o pastoreio, motivo pelo qual esses foram desenvolvidos durante séculos.", "raca3": "Pug", "descricao3": "Sendo creditada como uma das raças mais antigas do mundo, o pug tem um tamanho pequeno e seu temperamento dócil o torna versátil e adaptável à rotina dos tutores. No entanto, por ser uma raça braquicefálica, o Pug é um pouco mais sensível do que os outros cãezinhos e, por isso, pede uma atenção especial de sua família humana.", "raca4": "Pastor Alemão", "descricao4": "Como todo canino, o comportamento deste cachorro vai depender muito da forma que for criado pela sua família. Apesar de ser fiel e carinhoso, o Pastor Alemão é uma raça grande e muito defensora, por isso é importante iniciar o adestramento desde cedo para que o cão desenvolva um temperamento equilibrado. Mantê-los sempre ativos com brincadeiras e atividades físicas é imprescindível para que eles não fiquem entediados e não se tornem destruidores.", "raca5": "Golden Retriver", "descricao5": "Essa raça é extremamente amável, muito companheira dos tutores e fica ainda mais alegre na presença de crianças. Se bem treinada, pode ser uma excelente companhia para gatos e outros animais. Certamente uma das principais características do Golden, que o torna um dos cães mais populares, é a sua alta sociabilidade e anseio por afeto. Pode-se dizer que foram feitos para a família e, por isso, precisam ficar junto a seu “bando humano”, dentro de casa, e pouco tempo sozinhos no quintal.", "raca6": "Beagle", "descricao6": "Uma coisa que define o Beagle: personalidade carismática e divertida, além de super aventureira. Não é à toa que para reconhecer a raça Beagle é muito simples: basta procurar pelo cão mais animado do local. Sempre muito ativo e bem-humorado, o Beagle adulto ou filhote ama ter companhia e faz de tudo para estar ao lado dos seus humanos sempre que possível. O único ponto negativo é que, se for deixado de lado por muito tempo, o cachorro Beagle pode latir bastante e ficar irritadísso"}';
const converteParaJson = JSON.parse(racas);

function botao1() {
  document.getElementById("raca").innerHTML = converteParaJson.raca1;
  document.getElementById("descricao").innerHTML = converteParaJson.descricao1;
}
function botao2() {
  document.getElementById("raca").innerHTML = converteParaJson.raca2;
  document.getElementById("descricao").innerHTML = converteParaJson.descricao2;
}
function botao3() {
  document.getElementById("raca").innerHTML = converteParaJson.raca3;
  document.getElementById("descricao").innerHTML = converteParaJson.descricao3;
}
function botao4() {
  document.getElementById("raca").innerHTML = converteParaJson.raca4;
  document.getElementById("descricao").innerHTML = converteParaJson.descricao4;
}
function botao5() {
  document.getElementById("raca").innerHTML = converteParaJson.raca5;
  document.getElementById("descricao").innerHTML = converteParaJson.descricao5;
}

function botao6() {
  document.getElementById("raca").innerHTML = converteParaJson.raca6;
  document.getElementById("descricao").innerHTML = converteParaJson.descricao6;
}

function mudaBG() {
  var teste = document.getElementById("div_mudaCor");
  teste.style.background = "black";
  teste.style.padding = "20px";
}

//
//
//
//
// ----------------------API CLIMA-------------------------
//
//o código usa a biblioteca AXIOS para realizar uma requisição HTTP a API da OpenWeatherMap para obter a previsão do tempo

//esta linha define a função assíncrona , isso significa que a função pode esperar por uma resposta da API
async function getWeather() {
  //nesta linha estamos fazendo uma chamada a API usando a biblioteca Axios. A URL inclui informações de localização  (Mogi das Cruzes) e a unidade de medida (Celsius) e a chave da API (API-KEY).
  var lugar = document.getElementById("local").value;

  const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${lugar}&units=metric&appid=64ed82577ced7f69cb1687f0ce536131`);
  //depois de WEATHERQ=colocar o local para localizar qualquer lugar

  //aqui estamos extraindo a temperatura atual (Celsius) da resposta de API e armazenando na variável tempCelsius
  const tempCelsius = response.data.main.temp;

  document.querySelector("#temperatura").innerHTML = `A temperatura atual é de ${tempCelsius}°C.`;
}
//chamando a função getWeather para iniciar a consulta à API
getWeather();

//
//
//
//
//
//--------------------------API PARA JSON-----------------------------
//método FETCH() para buscar o arquivo dados.json transformando o resultado em um objeto usando o método response.json

fetch("json/dados.json")
  .then((response) => response.json())
  .then((infos) => {
    //acessando os dados do objeto JSON e adicionando ao HTML dentro de um elemento div usando a propriedade innerHTML (Front-End)
    document.getElementById("imagem").innerHTML = infos.pop.image;
    document.getElementById("nome").innerHTML = "Nome: " + infos.pop.name;
    document.getElementById("disco").innerHTML = "Disco: " + infos.pop.album;
    document.getElementById("estilo").innerHTML = "Estilo musical: " + infos.pop.style;
    document.getElementById("preco").innerHTML = "Preço do álbum: " + infos.pop.price;

    document.getElementById("imagem2").innerHTML = infos.samba.image;
    document.getElementById("nome2").innerHTML =  "Nome do artista: " + infos.samba.name;
    document.getElementById("disco2").innerHTML = "Disco: " + infos.samba.album;
    document.getElementById("estilo2").innerHTML = "Estilo musical: " + infos.samba.style;
    document.getElementById("preco2").innerHTML = "Preço do álbum: " + infos.samba.price;

    document.getElementById("imagem3").innerHTML = infos.funk.image;
    document.getElementById("nome3").innerHTML = "Nome do artista: " + infos.funk.name;
    document.getElementById("disco3").innerHTML = "Disco: " + infos.funk.album;
    document.getElementById("estilo3").innerHTML =
      "Estilo musical: " + infos.funk.style;
    document.getElementById("preco3").innerHTML =
      "Preço do álbum: " + infos.funk.price;
  });

//
//
//
//
//
//--------------------------API DÓLAR-----------------------------

fetch(`https://economia.awesomeapi.com.br/json/last/USD-BRL`).then((resposta) => {
    return resposta.json();
  }).then((economia) => {
    console.log(economia);
    document.getElementById("dolar_input").innerHTML = economia.USDBRL.bid;
    document.getElementById("titulo_Dolar").innerHTML = economia.USDBRL.code;
  });


//
//
//
//
//
//--------------------------API CEP-----------------------------
const preencherFormulario = (endereco) => {
  document.getElementById("rua").value = endereco.logradouro;
  document.getElementById("bairro").value = endereco.bairro;
  document.getElementById("cidade").value = endereco.localidade;
  document.getElementById("estado").value = endereco.uf;
};

//autopreenchimento
const cepValido = (cep) => {
  if ((cep.length = 8)) {
    return true;
  } else {
    return false;
  }
};

//buscar API
const pesquisarCep = async () => {
  const cep = document.getElementById("cep").value;
  const url = `http://viacep.com.br/ws/${cep}/json/`;
  if (cepValido(cep)) {
    const dados = await fetch(url);
    const endereco = await dados.json();
    preencherFormulario(endereco);
  }
};
document.getElementById('cep').addEventListener('focusout', pesquisarCep);

//
//
//
//
//  para menu

const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
  const active = nav.classList.contains("active");
  event.currentTarget.setAttribute("aria-expanded", active);
  if (active) {
    event.currentTarget.setAttribute("aria-label", "Fechar Menu");
  } else {
    event.currentTarget.setAttribute("aria-label", "Abrir Menu");
  }
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);
