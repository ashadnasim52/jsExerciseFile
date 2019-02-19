let moneyInRs=(moneyInDollar) =>{
    if (typeof moneyInDollar==='number') {

        return moneyInDollar*72;
        
    } else {
    
        throw 'error';
    }
}

try {
    console.log(moneyInRs('100'));

} catch (error) {
    
}

console.log('I will not run if program crashes');
