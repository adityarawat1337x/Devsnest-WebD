
let x = 0;

setInterval(()=>{
    document.getElementById("hour").style.transform  = 'rotate('+x+'deg)'; 
    x+=1;
}, 100)

