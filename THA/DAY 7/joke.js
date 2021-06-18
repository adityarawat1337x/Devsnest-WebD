window.onload = async () => {
    const a = document.getElementById("a");
    const b = document.getElementById("b");
    const c = document.querySelector("img");

    let joke = await fetch("https://www.breakingbadapi.com/api/characters");
    joke = await joke.json();
    
    setInterval(() => {
        let i = Math.floor(Math.random() * joke.length);
        
        c.src = joke[i].img;
        setTimeout(() => {
            a.innerText = joke[i].name;
            b.innerText = joke[i].nickname;
        }, 200);
        
    }, 2000);
    
    console.log(joke);
}

