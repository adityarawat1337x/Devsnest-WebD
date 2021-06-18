const wrap = document.querySelector(".wrapper");

let click = 0;

document.body.onmousedown = function () {
	mouseDown = 1;
};
document.body.onmouseup = function () {
	mouseDown = 0;
};

for (let i = 0; i < 400; i++) {
	const temp = document.createElement("div");
	temp.style.border = "1px solid white";
	temp.style.width = "30px";
    temp.style.height = "30px";
		
	temp.addEventListener("click", () => {
		temp.classList.toggle("white");
	});
	temp.addEventListener("mouseover", () => {
		if(mouseDown)temp.classList.toggle("white");
	});
	wrap.appendChild(temp);
}
