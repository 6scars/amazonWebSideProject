import {formatCurrency} from "../../scripts/utils/money.js";


console.log('test suite: formatCurrency')

console.log('converts cents into dolars');
if(formatCurrency(2095) === '20.95'){
    console.log('passed');
}else{
    console.log('failed')
}

console.log('works for 0');
if(formatCurrency(0) === '0.00'){
    console.log('passed');
}else{
    console.log('failed')
}

console.log('rounds up to the nearest cent');
if(formatCurrency(2095.5) === '20.96'){
    console.log('passed');
}else{
    console.log('failed')
}

