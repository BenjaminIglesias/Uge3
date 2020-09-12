//a
var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];
//b
var all = boys.concat(girls);
console.log(all)
//c
console.log(all.join())
console.log(all.join('-'))
//d
all.push("Lone","Gitte");
console.log(all);

//e
all.unshift("Hans","Kurt");
console.log(all);
//f
all.shift();
console.log(all);

//g
all.pop();
console.log(all);
//h
all.splice(3,2);
console.log(all);
//i
all.reverse();
console.log(all);
//j
all.sort();
console.log(all);
//l
var uppercased = all.map(navn => navn.toUpperCase());
console.log(uppercased);
//m
const lorL = (name) => name.startsWith("l") ||	name.startsWith("L");
var filtered  = all.filter(lorL);
console.log(filtered);
