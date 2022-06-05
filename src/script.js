// Array de objetos dos quais, represantam as imagens
const query = [
  {
    question: "Quantos reais o Poeta Galo Cego ganhou do repóter ?",
    correct: "R$5,00",
    img: 'https://catracalivre.com.br/wp-content/uploads/2016/03/1658.jpg',
    options: [
      "5,00 conto",
      "15,00 conto",
      "8,00 conto",
      "+ de 8 mil conto"
    ]
  },
  {
    question: "teste 2",
    correct: "teste2 2",
    img: "https://i.guim.co.uk/img/media/908edfd0eb30a60f9cdd73a936b6a36b60d67681/0_130_2150_1290/master/2150.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=a0f9fe85ec89bffe7c82a088ffea8ef5",
    options: [
      "teste2 1",
      "teste2 2",
      "teste2 3",
      "teste2 4"
    ]
  },
  {
    question: "teste 3",
    correct: "teste2 3",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqzjbola1cM2UHbgeKcrsoPS_tMbAyg9BARQ&usqp=CAU",
    options: [
      "teste2 1",
      "teste2 2",
      "teste2 3",
      "teste2 4"
    ]
  },
  {
    question: "aula de algoritmo, qual a materia de hoje ?",
    correct: "matriz",
    img: "https://files.nsctotal.com.br/s3fs-public/2019-08/MTX01_0.jpg?nk1pZS3h9LJZOqvkHvlwINcM1Jqe8TzQ",
    options: [
      "vector",
      "for",
      "varivel",
      "matriz"
    ]
  }
];

// Variavel de escopo global, usadas nas estrutura basica do jogo
var position = 0;
var hit = 0;
var nickName = "";

// Funcão que é chamada para validar se a respota é a correta ou não de tal forma que tambem adiciona os efeitos no jogo
function selection(value, id) {

  if (query[position].correct === value) {
    hit++;
    sessionStorage.setItem('hits', hit);
    createUser();
    document.getElementById("body").style.backgroundColor = "#06D6A0"
    document.getElementById(id).style.backgroundColor = "#06D6A0"
    document.getElementById(id).style.borderColor = "#06D6A0"
    document.getElementById(id).style.color = "white"
  } else {
    document.getElementById("container").style.animation = "treme 0.1s";
    document.getElementById("container").style.animationIterationCount = "3"
    document.getElementById(id).style.backgroundColor = "#EF476F"
    document.getElementById(id).style.borderColor = "#EF476F"
    document.getElementById("body").style.backgroundColor = "#EF476F"
  }
  document.getElementById("position").innerHTML = `${position + 2}/10`;
  document.getElementById("statusBar").value = position + 2;

  let coolors = [
    "#FFD166",
    "#118AB2",
    "#62b6cb",
    "#b388eb",
    "#c0c0c0",
    "#dab785",
    "#ffc8dd",
    "#588157",
    "#fec5bb",
    "#f4845f",
    "#bee3db",
    "#ffc857",
    "#619b8a",
    "#cc8b86",
    "#d1be9c",
    "#6a4c93",
    "#0e9594",
    "#f2542d",
    "#b0c4b1",
    "#4a5759",
    "#7b2cbf",
    "#b8d0eb"
  ];

  setTimeout(() => {
    position++;
    sessionStorage.setItem('position', position);
    document.getElementById("body").style.backgroundColor = coolors[parseInt(Math.random() * (coolors.length - 0) + 0)]
    document.getElementById("container").style.animation = "";
    document.getElementById(id).style.backgroundColor = "white"
    document.getElementById(id).style.color = "black"
    document.getElementById(id).style.borderColor = "#8eecf5"
    attPosition();
  }, "500")

}
// tela final de jogo

// Funcão que atualiza a posicao do jogador no array 
function attPosition() {
  let question = query[parseInt(sessionStorage.getItem('position'))] ?? -1;

  if(question === - 1){
    sessionStorage.setItem('nickName', "");
    sessionStorage.setItem('position', "");
    sessionStorage.setItem('hits', "");
    return window.location.href = "../endPoint/index.html"
  }
  
  document.getElementById("ask").innerText = question.question;
  document.getElementById("meme").src = question.img;

  sessionStorage.setItem('position', position);
  for (let i = 0; i < 4; i++) {

    let button = document.getElementById(i);
    let value = question.options[i];

    button.value = value;
    button.innerText = value;
  }

}

function createUser() {
  sessionStorage.setItem('user',  {nickName: sessionStorage.getItem('nickName'), hit: sessionStorage.getItem('hits') });
}

// funcão que armazena no navegador da pessoa seu NickName para que assim não se perca ao atualizar a pagina
function startGame(e) {
  if(e.key === 'Enter' || e.keyCode === 13 || e === startGame){

    nickName =  document.getElementById("nickName").value;

    if(nickName === '')
      return alert("Preencha o noma de Usuario")
  
    sessionStorage.setItem('nickName', nickName);
    
    return window.location.href = "./Game/index.html"    

  }
  
}

function loadTable() {
  
  let players = sessionStorage.getItem('userTables') ?? "[]"

  if(sessionStorage.getItem('position') !== 0){
    let response = window.confirm("Outro game em andamento, gostaria de voltar ?")
    if(response)
      window.location.href = "./Game/index.html" 
    else 
      sessionStorage.setItem('position', "0");
  }


  if(!!sessionStorage.getItem('user')){
    
    if( players[players.length - 1] !== sessionStorage.getItem('user')) {    
      sessionStorage.setItem('userTables', [...players, sessionStorage.getItem('user')]);
    }
  
    players = sessionStorage.getItem('userTables')

    players.sort(function(a,b) {
      if(a.hit < b.hit)
        return 1
      else 
        return -1
    }).forEach((element, index) => {

      let row = document.createElement('tr');
      let data1 = document.createElement('td') 
      data1.innerText =  index + 1;
      let data2 = document.createElement('td') 
      data2.innerText = element.nickName;
      let data3 = document.createElement('td') 
      data3.innerText = element.hit;

      row.appendChild(data1);
      row.appendChild(data2);
      row.appendChild(data3);

      document.getElementById("table").appendChild(row)
    });
  }
  
}
