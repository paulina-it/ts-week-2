let random1 = 39;
let random2 = '18';

function makeSum(n1, n2) {
    if (n1.type === "number" && n2.type === "number") {
        console.log('Сумма: '+n1+n2);
    } else {
        n1 = +n1;
        let n: number = +n2;
        console.log('Сумма: '+(n1+n));
    }
}

makeSum(random1, random2);