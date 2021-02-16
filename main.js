// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

let glyph = {
  "♡": "♥",
  "♥": "♡"
};

let color = {
  "red" : "",
  "": "red"
};

const likeGlyphs = document.querySelectorAll("span.like-glyph");

function callServerCall(e){
  let heart = e.target;
  mimicServerCall("bogusUrl")
    .then(function(serverMessage){
      heart.innerText = glyph[heart.innerText];
      heart.style.color = color[heart.style.color];
    })
    .catch(function(error){
      document.getElementById("modal").classList.remove("hidden");
    })
}

for(let glyph of likeGlyphs){
  glyph.addEventListener("click", callServerCall);
}


//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}