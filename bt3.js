function daoNguoc(arr){
    let arrDaoNguoc = '';
    for (let i = arr.length - 1; i >= 0; i--){
        arrDaoNguoc += arr[i];
    }
    return arrDaoNguoc
}
let input = 'Cường';
let output = daoNguoc(input);
console.log(output);