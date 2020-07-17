function brickCalculator(brick){
    const feet = 1000;

    if (brick <= 10){
    var totalBrick = 15*feet*brick;

    }
    else if(brick <= 20){
        
        var a = brick*12;
        var totalBrick = a*feet;
    
    }
    else{
        var b = brick*10;
        var totalBrick = b*feet;
    }
 return totalBrick;
}
var output = brickCalculator(30);
console.log(output);