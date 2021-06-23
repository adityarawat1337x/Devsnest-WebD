const cards = document.getElementsByClassName("card")
let ids = []
Array.from(cards).forEach(card => {
    card.addEventListener("click",()=>{
        card.classList.toggle(`${card.id}`);
        if(ids.length===0)
            ids.push(card);
        else if(card.id == ids[0].id && card !=ids[0]){
            card.classList.add("solved")
            ids[0].classList.add("solved")  
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


