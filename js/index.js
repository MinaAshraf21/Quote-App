
quotes = ["“Be yourself; everyone else is already taken.”",
  "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
"“A room without books is like a body without a soul.”",
"“If you tell the truth, you don't have to remember anything.”",
"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”"
]
authors = ["― Oscar Wilde","― Albert Einstein","― Marcus Tullius Cicero","― Mark Twain","― Bernard M. Baruch"]
var prevIndx = -1
function generateQuote(){
  var indx = Math.floor(Math.random() * 5);
  while(indx == prevIndx){
    indx = Math.floor(Math.random() * 5);
  }
  document.getElementById("quote").innerHTML = quotes[indx]
  document.getElementById("author").innerHTML = authors[indx]
  prevIndx = indx
}