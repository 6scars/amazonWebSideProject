const array = [-6,20,8,-2,4];


function quicksort(arr){
    if(arr.length < 2){
        return arr
    }
    let left =[];
    let right = [];
    let pivot = arr[arr.length-1];

    for(let i =0; i<arr.length-1; i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }

    return [...quicksort(left), pivot, ...quicksort(right)]
}
const start = performance.now()
console.log(start);
const sort = quicksort(array)
const end = performance.now();


console.log(end);
const duration = end - start;
console.log(`solution1: ${duration.toFixed(2)}ms`);

// const output = `solution1: ${parseFloat(duration.toFixed(2))} solution2: 3.45ms`;
// console.log(output);

// const match = output.match(/solution1: (\d+(\.\d+)?)(ms)?\s+solution2: (\d+(\.\d+)?)ms/);

// console.log(match);
// console.log("solution1:", match[1], "ms");