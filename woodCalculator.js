function woodCalculator(chair , table , bed){
    var total = (chair*1)+ (table*3) + (bed*5);
    return total;
    
}

var output = woodCalculator(1,1,1);
console.log("total we need ",output,"woods");