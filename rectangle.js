module.exports = (x,y,callback) => {
    setTimeout( () => 2000);
    if(x <= 0 || y <= 0){
        setTimeout(() =>
            callback(new Error("Rectangle should be greater the l = " + x +" b = " + y),
            null),
            2000);
    }
    else{
        setTimeout(() =>
            callback(null,
            {
                perimeter: () => (2*(x+y)),
                area: () => (x*y)
            }),
            2000);
    }
}






perimeter = (x,y) => (2*(x+y)),
area = (x,y) => (x*y);