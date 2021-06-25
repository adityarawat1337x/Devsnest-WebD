const is_array2= function(s){
    if (Array.isArray(s))
        return true;
    return false;
}

const is_array= function(s){
    if (s.constructor.name == "Array")
        return true;
    return false;
}

console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));

console.log(is_array2('w3resource'));
console.log(is_array2([1, 2, 4, 0]));
//////////////////////////////////////////

function array_Clone(x) {
    let y = [];
    x.forEach(e => {
      y.push(e)  
    })
    return y;
} 

function array_Clone2(x) {
    return [...x];
}

console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));

console.log(array_Clone2([1, 2, 4, 0]));
console.log(array_Clone2([1, 2, [4, 0]]));
///////////////////////////////////////////

function first(x,n=1) {
    let y = []
    for (let i = 0; i < n && x[i]!==undefined; i++) {
        y.push(x[i])
    }
    return y;
}

console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));

/////////////////////////////////////////

var arr=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

var map = {}
let ans = arr[0];

arr.forEach(e => {
    if(!map[e]){
        map[e]=1;
    }else{
        ++map[e];
        if(map[e]>map[ans]){
            ans = e;
        }
    }
});

console.log(ans)

///////////////////////////////////////


myColor = ["Red", "Green", "White", "Black"];

console.log(myColor.join(","));
console.log(myColor.join("+"));
