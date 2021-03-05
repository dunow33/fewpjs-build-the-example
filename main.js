const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
// Your JavaScript code goes here!
const modal = document.querySelector("#modal")
modal.classList.add("hidden");

document.addEventListener("DOMContentLoaded", () => {
  const hearts = document.getElementsByClassName("like-glyph")

  for (const heart of hearts){

    heart.addEventListener("click", (e) => {
      //make a server call
      mimicServerCall()
      // example of how to see what mimicServerCall() is returning
      // .then(resp => console.log(resp))
      .then(() => {
        if (heart.innerHTML === EMPTY_HEART){
          heart.innerHTML = FULL_HEART
          heart.className = "activated-heart"
        } else {
          heart.innerHTML = EMPTY_HEART
          heart.className = "like-glyph"
        }
      })

      .catch(error => {
        //modal.hidden = false
        modal.classList.remove("hidden");
        const modalMessage = document.querySelector("#modal-message")
        modalMessage.innerText = error
        setTimeout(() => {
          //do this during timeout
          //modal.hidden = true
          modal.classList.add("hidden");
        }, 5000)
      })

    })

  }

})



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