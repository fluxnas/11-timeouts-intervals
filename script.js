// ecrire la function setInterval pour ecrire prout lettre par lettre
// transformer prout > tableau

// const mot = "prout"
// const tab = []
// for(let i=0; i<mot.length; i++) {
// 	tab.push(mot[i])
// }


// 2eme methode : plus court : meme resultat
// const mot = "prout"
// const tab = mot.split("")
// console.log(tab)


// // boucle sur le tableau pour afficher chaque lettre 
// tab.forEach(function(item){
// 	console.log(item)
// })

// // integrer interval
// //essai1
// const times = 0
// function inter() {
// 	tab.forEach(function(item){
// 	console.log(item)
// 	})
// 	times++
// }
// setInterval(inter, 2000)

//essai2
// 	tab.forEach(function(item){
// 		setInterval(() => {
// 			console.log(item)
// 	}, 2000)
// })

// //essai3
// for (let item of tab) {
// 	setInterval(() => { 
// 		console.log(item)
// 	}, 3000)
// }

//essai4
// var i = 0
// function inter() {
// 	i++
// 	for (let valeur of tab) {
// 	console.log(valeur)
// }
// }





// essai5 avec aide yns > OK

// const mot = "prout"
// var i = 0
// var intervalID = setInterval(() => {
// 	console.log(mot[i])
// 	i++
// 	if (i == mot.length) {
// 		clearInterval(intervalID)
// 	}
// }, 1000)



// Write a function that displays every 
// second that has passed on the page since it was opened. 
// The display should be refreshed every second. 
// If 60 seconds are elapsed, write "a minute has passed", 
// then "2 minutes have passed" (for 120 seconds and more), etc.


// recuperer nombre de sec passer sur la page dans var = time

// fonction qui affiche le temps : time


// var i = 0
// var minutes = 

// const intervalID = setInterval(() => {
// 	console.log("ca fait " + i + " sec")
// 	i++
// 	if (i === 60) {
// 		console.log("a minute has passed")
// 	}
// }, 1000)


// Whack-A-Mole

// toute les 1sec
// selectionner rond au hasard : random
// sa couleur change
//


(() => {
// shuffle array of div.latest-sales
const shuffleDivs = () => 
	shuffle(Array.from(document.querySelectorAll("div.circle")))
// hide the active element
  const hideActive = el => {
  el && el.classList.remove("active")
}
// hide active element and activate [el]
const showMessage = el => {
    hideActive(document.querySelector(".active"));
    el.classList.add("active");
  }
 // initialize
  let divsShuffled = shuffleDivs();
  let current = 0;

  
// start showing a random div.circle
// every 5 seconds.
  showRandomMessage();

  function showRandomMessage() {
    showMessage(divsShuffled[current]);
    current += 1;
    
    // reshuffle and reset if all elements are used
    if (current == divsShuffled.length - 1) {
      divsShuffled = shuffleDivs();
      current = 0;
    }

    // show next div after 5 seconds
    setTimeout(showRandomMessage, 1000);
  }

  function shuffle(array) {
    let i = array.length;
    while (i--) {
      const ri = Math.floor(Math.random() * (i + 1));
      [array[i], array[ri]] = [array[ri], array[i]];

    }
    return array;

  }
})();


// lorsquon clique sur active 
// const active = document.querySelector(".active")
// console.log(active)
// active.addEventListener("click", function() {
//   const p = document.querySelector("p")

//   const calcscore = 1
//   const calcfinal = 0
//   while (calcfinal < 10) {
//     let calcfinal = calcscore + calcscore
//     calcfinal++
//     p.innerText = "score : " + calcfinal
//   }
// });