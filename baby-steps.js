/*array = process.argv;
var index = 2;
var sum =0;
while(index < array.length){
    sum+=parseInt(array[index]);
    index+=1;
}
console.log(sum);*/

let result = 0

for (let i = 2; i < process.argv.length; i++) {
  result += Number(process.argv[i])
}

console.log(result)