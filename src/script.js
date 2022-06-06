var position = 0;
var hit = 0;

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
    question: "O cidadão da imagem a esquerda, ficou conhecido como: ",
    correct: "Slk cachoeira",
    img: "https://i.ytimg.com/vi/H4emrWxvmig/maxresdefault.jpg",
    options: [
      "Waltar",
      "ari eu nao to nem ai",
      "Slk cachoeira",
      "Zé polvinho"
    ]
  },
  {
    question: "Segundo este matador de onça, como elas fazem ao pé do ouvido ?",
    correct: "MINHAAAU AAUURRRR",
    img: "https://midiamax.uol.com.br/wp-content/uploads/2021/12/arquivos_noticias_2017_fev_mucho_macho_serjao_berranteiro.jpg",
    options: [
      "MIAUUUUUUUU",
      "AU AU",
      "MINHAAAU AAUURRRR",
      "PÓ PÓ PÓ"
    ]
  },
  {
    question: "Meme da imagem ao lado mais conhecido como, Senhora, Senhora. Ela estava sendo acusada de fazer o que ?",
    correct: "Bater o ponto na assembleia, e sair",
    img: "https://i.makeagif.com/media/10-06-2015/oODGpv.gif",
    options: [
      "Bater o ponto na assembleia, e sair",
      "Trafico de droga",
      "Assalto a mão armada",
      "Não pagou o boleto da Claro"
    ]
  },
  {
    question: "O meme ao lado ficou conhecido apos:",
    correct: "Tomar um choque",
    img: "https://www.opovo.com.br/noticiasimages/app/noticia_146418291334/2017/02/21/262624/Uma-das-cenas-mais-clssicas-da-TV-brasileira-completa-21-anos.jpg",
    options: [
      "Tomar um choque",
      "comer uma uva",
      "Vender uva ilegalmente",
      "Roubar uva"
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
    question: "Quem estava estava tacando o pau no carrinho ?",
    correct: "Marcos",
    img: "https://c.tenor.com/BgmFJAcbFrQAAAAC/carrinho-marcos-tacalhe-pau.gif",
    options: [
      "Marcos",
      "Pedrinho",
      "Lohane Vêkanandre Sthephany Smith Bueno de HA HA HA de Raio Laser bala de Icekiss",
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



function loadTable() {
  let players = JSON.parse(sessionStorage.getItem('userTables'));
  console.log(players)
  players.sort(function (a, b) {
            if (a.hit < b.hit)
              return 1
            else
              return -1
          })
          .forEach((element, index) => {
            let row = document.createElement('tr');

            let data1 = document.createElement('td')
            data1.innerText = index + 1;
            
            console.log(element)
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
function startGame(event) {
  if(event.key === 'Enter' || event.keyCode === 13 || event === 'startGame'){  
    let nick = document.getElementById("nickName").value;      
    
    if(nick === '')
      return alert("Deve ser preenchido o campo de nickName!!!");

    sessionStorage.setItem('nickname', nick);
    sessionStorage.setItem('hits', 0);
    window.location.href = "./game/index.html"
  }
}


function attPosition() {
  let question = query[position] ?? -1;

  if (question === - 1) 
    return window.location.href = "../endPoint/index.html";

  if(sessionStorage.getItem('nickname') === '')
    return window.location.href = "../index.html"

  document.getElementById("ask").innerText = question.question;

  document.getElementById("meme").src = question.img;

  for (let i = 0; i < 4; i++) {
    let button = document.getElementById(i);
    let value = question.options[i];
    button.value = value;
    button.innerText = value;
  }

}
function selection(value, id) {

  if (query[position].correct === value) {
    
    hit++;
    sessionStorage.setItem('hits', hit);
    
    document.getElementById(id).style.color = "white"
    document.getElementById(id).style.borderColor = "#06D6A0"
    document.getElementById(id).style.backgroundColor = "#06D6A0"
    document.getElementById("body").style.backgroundColor = "#06D6A0"
  } else {
    document.getElementById(id).style.borderColor = "#EF476F"
    document.getElementById(id).style.backgroundColor = "#EF476F"
    document.getElementById("body").style.backgroundColor = "#EF476F"
    document.getElementById("container").style.animation = "treme 0.3s";
    document.getElementById("container").style.animationIterationCount = "3"
  }

  setTimeout(() => {
    document.getElementById(id).style.color = "black"
    document.getElementById(id).style.borderColor = "#8eecf5"
    document.getElementById("container").style.animation = "";
    document.getElementById(id).style.backgroundColor = "white"
    document.getElementById("body").style.backgroundColor = coolors[parseInt(Math.random() * (coolors.length - 0) + 0)]

    position++;
    attPosition();  
  }, "500")

  document.getElementById("position").innerHTML = `${position + 1}/10`;
  document.getElementById("statusBar").value = position + 1;

}


function endPoint() {

  switch (parseInt(sessionStorage.getItem('hits'))) {
    case 0:
      document.getElementById("imgResult").src = "https://i.pinimg.com/564x/c6/dc/fc/c6dcfcdad8401eabea7cb537671a629c.jpg"
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
      document.getElementById("imgResult").src = "https://i.pinimg.com/originals/a7/39/d0/a739d02f04b58ff2ca349e5c4f5ee0ed.png"
    break;

    case 7:
      document.getElementById("imgResult").src = "https://i.pinimg.com/originals/e0/27/cd/e027cd754b1c2a06ce4dd16df5a68c39.jpg"
    break;

    case 8:
      document.getElementById("imgResult").src = "http://www.criarmeme.com.br/meme/meme-41173-Minha-nota-e-de-mais--de-8-mill.jpg"
    break;

    case 9:
      document.getElementById("imgResult").src = "https://images-na.ssl-images-amazon.com/images/I/71UdPXPpjoL.png"
    break;

    case 10:
      document.getElementById("imgResult").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTe7q1oDHkpq2sVo4AxzKQZ-wzTb2z8cvUxA&usqp=CAU"
    break;

  }

  document.getElementById("hit").innerText = `${sessionStorage.getItem('hits')}/10 `

  sessionStorage.setItem('userTables',
    JSON.stringify( 
      [
        ...JSON.parse(sessionStorage.getItem('userTables') ?? "[]"), 
        { 
          nickName: sessionStorage.getItem('nickname'),
          hit: sessionStorage.getItem('hits')
        } 
      ]
    )
  );
  sessionStorage.setItem('nickname', "");
  sessionStorage.setItem('hits', "0");
}
