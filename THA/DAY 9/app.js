const wrap = document.querySelector(".wrapper");
const re = document.querySelector("#rem")
const bok = document.querySelector("#booked");


let book = 0,
	rem = 400;


for (let i = 0; i < 400; i++) {
	const temp = document.createElement("div");

	temp.style.border = "1px solid white";
	temp.style.width = "30px";
	temp.style.height = "30px";

	temp.addEventListener("click", () => {
		if (temp.className == "white")
			book -= 1;
		else book += 1;
		
		temp.classList.toggle("white");

		re.innerHTML = rem - book;
		bok.innerHTML = book;
		
	});


	wrap.appendChild(temp);
}
