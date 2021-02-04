var rect = require('./rectangle.js');
function solveRect(x,y){
    console.log("Solving for Rectangle with l = " + x + "b = " + y);
    rect(x,y, (err,rectangle) => {
        if(err){
            console.log("ERROR" +err.message);
        }
        else{
            console.log("The area of the rectangle wil x =" + x + "y = " + y + "is " +rectangle.area());
            console.log("The perimerter of the rectangle wil x =" + x + "y = " + y + "is " +rectangle.perimeter());
        }
    });
    console.log("This statement is after completion of rect()");

}
solveRect(3,4);
solveRect(6,5);
solveRect(0,4);
solveRect(-3,4);