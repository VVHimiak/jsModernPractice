console.log('hello');

// letters, numbers, _, $
// can not start with a number
console.log('hellp');
let num = String(555);

console.log(num);
console.log(typeof num);

let arr = new Array(5,6,7);

console.log(arr); 

const companies = ['fa','gg'];

for(let i = 0; i < companies.length; i++) {
 console.log(companies[i]);
}

companies.forEach(function(co, iv, ar){
 return console.log(co[iv], ar)
})
