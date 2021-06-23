const cards = document.getElementsByClassName("card")
let ids = []
Array.from(cards).forEach(card => {
    card.addEventListener("click",()=>{
        card.classList.toggle("flip");
        if(ids.length===0)
            ids.push(card);
        else if(card.id == ids[0].id){
            card.classList.add("solved")
            ids[0].classList.add("solved")  
            ids=[];
        }else{
            setTimeout(()=>{
                card.classList.toggle("flip");
                ids[0].classList.toggle("flip");
                ids=[];
            },500);
        }
    })
});


