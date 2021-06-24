const cards = document.getElementsByClassName("card")
let ids = []
let allIds = ["a","b","c","d","e","f","a","b","c","d","e","f"]

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

shuffle(allIds);
console.log(allIds);

let i = 0;
Array.from(cards).forEach(card => {
    card.id = allIds[i];
    i+=1;
    card.addEventListener("click",()=>{
        card.classList.toggle(`${card.id}`);
        if(ids.length===0)
            ids.push(card);
        else if(card.id == ids[0].id && card !=ids[0]){
            card.classList.add("solved")
            card.style.pointerEvents = 'none';
            ids[0].classList.add("solved")
            ids[0].style.pointerEvents = 'none';
            ids=[];
        }else{
            setTimeout(()=>{
                card.classList.toggle(`${card.id}`);
                ids[0].classList.toggle(`${ids[0].id}`);
                ids=[];
            },500);
        }
    })
});