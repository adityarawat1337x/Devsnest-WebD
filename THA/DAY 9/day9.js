// const window2 = window.open();
// window2.window.location = "https://youtube.com";

// window2.window.close();

//////////////////////////////////

const obj = {
	name: "adi",
	check() {
		console.log(this.name);
	},
};

const obj2 = {
	name: "vasi",
};

obj.check.call(obj);
obj.check.call(obj2);

obj.check.apply(obj);
obj.check.apply(obj2);


const itsAmethod = obj.check.bind(obj2);
itsAmethod()


///////////////////////////////