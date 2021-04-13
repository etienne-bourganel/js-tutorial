let betterSort = (array) => {
  array.sort(function(a, b) {return (a-b)});
}

let b = [12, 11, 45, 9, 48, 22];
betterSort(b);
console.log(b);

b.forEach( element => console.log(element));
