const query = [
    {
      question: "teste 1",
      correct: "teste1 1",
      img: "",
      options: [
        "teste1 1",
        "teste1 2",
        "teste1 3",
        "teste1 4"
      ]
    },
    {
      question: "teste 2",
      correct: "teste2 2",
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
      options:[
        "vector",
        "for",
        "varivel",
        "matriz"
      ]
    }
];
  
  var position = 0;
  var hit = 0;
  var nickName = "";
  
  
  function selection(value, id){
  
    if(query[position].correct === value)
      hit ++;    
    else
      document.getElementById(id).style.animatio = "treme";
    
    document.getElementById("position").innerHTML = `${position + 1}/10`;
    document.getElementById("statusBar").value = position;
    
    attPosition();
  }
  
  function attPosition() {
    
    console.log(JSON.parse(sessionStorage.getItem('nickName')))
    let question = query[position];
    
    document.getElementById("ask").innerText = question.question;
    
    for(let i = 0; i < 4; i++){

      let button = document.getElementById(i);
      let value = question.options[i];

      button.value = value;
      button.innerText = value;
    }

    position ++;
  }

  function setNickName(id) {
    nickName = document.getElementById(id).value
    sessionStorage.setItem('nickName', JSON.stringify(nickName));
  }