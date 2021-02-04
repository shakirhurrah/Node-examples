var rect = {
    perimeter : (x,y) => (2*(x+y)),
    area : (x,y) => (x*y)
};
function solveRect(l,b){
    console.log("Solving for Rectangle with l = "+l+"b =" +b);
    if(l <= 0 || b <= 0){
        console.log("Rectangle should be greater the l = " +l+"b = " +b);
    }
    else{
        console.log("The area of the rectangle is" +rect.area(l,b));
        console.log("The Perimeter of the rectangle is " + rect.perimeter(l,b));
    }

}
solveRect(3,4);
solveRect(6,5);
solveRect(0,4);
solveRect(-3,4);