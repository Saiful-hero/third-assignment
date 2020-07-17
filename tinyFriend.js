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
