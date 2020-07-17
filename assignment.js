// feet to mile 
function feetToMile(num){
    var total =  num*0.000189394;
    return total;
}

var output = feetToMile(5);
console.log('Alert Signal : dont put negetive values || It is illigal || the conversion from inch to mile: ', output);






// woodCalculator
function woodCalculator(chair , table , bed){
    var total = (chair*1)+ (table*3) + (bed*5);
    return total;
    
}

var output = woodCalculator(1,1,1);
console.log("total we need ",output,"woods");


// brick calculator





// tiny friend
function tinyFriend(nameList){
    var tiniest = nameList[0];

    for(var i=0; i<nameList.length ; i++){
        if(tiniest.length >= nameList[i].length){
            tiniest = nameList[i];
        }
    }
    return tiniest;

}
var nameList = ['Ahmed', 'Mahmud' , 'Abbas', 'Khalid' , 'Raju', "pathan",'Shamsuddin'];
var output = tinyFriend(nameList)
console.log(output);
