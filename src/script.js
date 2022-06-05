// Array de objetos dos quais, represantam as imagens
const query = [
  {
    question: "Quantos reais o Poeta Galo Cego ganhou do repóter ?",
    correct: "5,00 conto",
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm99aTlcU8A6ECPaIUXGzAv-QrWQF89J7Nw4zKcWxMwalERUqlrjxwh_mhbo_0spZWf_Q&usqp=CAU',
    options: [
      "5,00 conto",
      "15,00 conto",
      "8,00 conto",
      "+ de 8 mil conto"
    ]
  },
  {
    question: "Que frase foi dita pelo cidadão da imagem a esquerda, que virou meme ?",
    correct: "Então morre diabo",
    img: "http://s2.glbimg.com/1SLMXydpxD_rnGUDap0UNHuHn-Q=/smart/e.glbimg.com/og/ed/f/original/2016/06/16/morrediabo.jpg",
    options: [
      "To com fome, idai",
      "Quero merenda",
      "Então morre diabo",
      "1+1=2,5"
    ]
  },
  {
    question: "O cidadão da imagem a esquerda, mais conhecido como Seloko Cachoeira, diz que rouba lanchonete de: ",
    correct: "pistola",
    img: "https://i.ytimg.com/vi/H4emrWxvmig/maxresdefault.jpg",
    options: [
      "faca",
      "cassetete",
      "arma de mentira",
      "pistola"
    ]
  },
  {
    question: "Moradora de rua da imagem ao lado é mais conhecida como Policia...",
    correct: "Policia militar, federal, civil",
    img: "https://i.ytimg.com/vi/zu2vzQAJR0E/hqdefault.jpg",
    options: [
      "Ambiental",
      "Maritima",
      "Policia militar, federal, civil",
      "Aerea"
    ]
  },
  {
    question: "Meme da imagem ao lado mais conhecido como, Senhora, Senhora. Ela estava sendo acusada de fazer o que ?",
    correct: "Bater o ponto na assembleia, e sair",
    img: "https://upload.wikimedia.org/wikipedia/pt/2/2c/Senhora_%28meme%29.jpg",
    options: [
      "Bater o ponto na assembleia, e sair",
      "Trafico de droga",
      "Assalto a mão armada",
      "Não pagou o boleto da Claro"
    ]
  },
  {
    question: "O meme ao lado ficou conhecido pelo apelido:",
    correct: "AuAu",
    img: "https://i.ytimg.com/vi/NpHpPIGQvGQ/maxresdefault.jpg",
    options: [
      "Robertinho",
      "Xuxa",
      "Zezinho",
      "AuAu"
    ]
  },
  {
    question: "Cidadão diz que sua profissão é:",
    correct: "Ladrão",
    img: "https://i.ytimg.com/vi/XkZ6g6YvyUQ/hqdefault.jpg",
    options: [
      "Dormir",
      "Ladrão",
      "Modelo",
      "Desenvoldedor de Software"
    ]
  },
  {
    question: "Meme ao lado ficou mais conhecido como:",
    correct: "Nunca nem vi",
    img: "https://images.uncyc.org/pt/thumb/1/14/Nuncanemvi.jpg/150px-Nuncanemvi.jpg.png",
    options: [
      "Senhora, Senhora",
      "Seloko Cachoeira",
      "Nunca nem vi",
      "Então morre diabo"
    ]
  },
  {
    question: "Cidadão ao lado diz que prendeu...",
    correct: "Batman e o diabo",
    img: "https://i.ytimg.com/vi/qGPbRJpSZjY/mqdefault.jpg",
    options: [
      "Batman e o diabo",
      "Coringa",
      "Pinguim",
      "Chaves"
    ]
  },
  {
    question: "Meme ao lado ficou mais conhecido como:",
    correct: "Não sei",
    img: "https://i.ytimg.com/vi/CwSGCX9slGs/hqdefault.jpg",
    options: [
      "Então morre diabo",
      "Senhora, senhora",
      "Nunca nem vi",
      "Não sei"
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
    sessionStorage.setItem('hits', JSON.stringify(hit));
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
  let question = query[position] ?? -1;

  if(question === - 1)
    return window.location.href = "/src/endPoint/index.html"
  
  document.getElementById("ask").innerText = question.question;
  document.getElementById("meme").src = question.img;

  for (let i = 0; i < 4; i++) {

    let button = document.getElementById(i);
    let value = question.options[i];

    button.value = value;
    button.innerText = value;
  }

}

function createUser() {
  sessionStorage.setItem('user', JSON.stringify( {nickName: JSON.parse(sessionStorage.getItem('nickName')), hit: JSON.parse(sessionStorage.getItem('hits')) }));
}

// funcão que armazena no navegador da pessoa seu NickName para que assim não se perca ao atualizar a pagina
function setNickName(e,id) {
  nickName =  document.getElementById(id).value;
  sessionStorage.setItem('nickName', JSON.stringify(nickName));

  console.log(e)
  if(e.key === 'enter')
    window.location.href = "./src/Game/index.html";
}

function loadTable() {
  
  let players = JSON.parse(sessionStorage.getItem('userTables') ?? "[]")

  if(!!sessionStorage.getItem('user')){
    
    if( JSON.stringify(players[players.length - 1]) !== sessionStorage.getItem('user')) {    
      sessionStorage.setItem('userTables', JSON.stringify([...players, JSON.parse(sessionStorage.getItem('user'))]));
    }
  
    players = JSON.parse(sessionStorage.getItem('userTables'))

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

function endPoint(){
  switch(hit){
    case 0:
      document.getElementById("imgResult").src = "https://st2.depositphotos.com/1864495/11264/i/950/depositphotos_112646148-stock-photo-internet-meme-why-you-no.jpg"

    break;

    case 1:
      document.getElementById("imgResult").src = "https://imagens1.ne10.uol.com.br/blogsne10/mundobit/uploads/2013/01/template_memegenerator_memezecapagodinho.jpg"

    break;

    case 2:
      document.getElementById("imgResult").src = "https://conteudo.imguol.com.br/c/entretenimento/9f/2021/04/28/bbb-21-gil-diz-que-vai-dar-baile-em-sarah-quando-deixar-a-casa-1619649292831_v2_450x337.jpg"

    break;

    case 3:
      document.getElementById("imgResult").src = "https://i.pinimg.com/564x/1e/d5/c3/1ed5c339e9dbfa74248428e6241751eb.jpg"

    break;

    case 4:
      document.getElementById("imgResult").src = "https://i.pinimg.com/236x/ba/7e/1b/ba7e1bca9c1b7daf4318b5a49e047c87.jpg"

    break;

    case 5:
      document.getElementById("imgResult").src = "https://i.pinimg.com/236x/05/94/1c/05941cdd5ce0ba21b44d87102baf8d4b.jpg"

    break;

    case 6:
      document.getElementById("imgResult").src = "https://t.ctcdn.com.br/RXx6_SJ1v9-w_E2UlD3a528OyIE=/i360801.png"

    break;

    case 7:
      document.getElementById("imgResult").src = "https://i.pinimg.com/originals/e0/27/cd/e027cd754b1c2a06ce4dd16df5a68c39.jpg"

    break;

    case 8:
      document.getElementById("imgResult").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTusxSfPCBcqUrGHjWd3aSpSNS-HjL6smZFhw&usqp=CAU"

    break;

    case 9:
      document.getElementById("imgResult").src = ""

    break;

    case 10:
      document.getElementById("imgResult").src = ""

    break;
  }

  document.getElementById("hit").innerText = `SUA PONTUAÇÃO = ${hit}/10`

}
