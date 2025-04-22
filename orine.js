function counter() {
    var count = 0;
    this.incrementCouter = function () {
        count++;
        console.log (count);
    }
    this.decrementCounter = function () { 
        count--;
        console.log(count);
    }
}
var counter1 = new counter();
counter1.incrementCouter();


var counter2 = new counter();
counter2.decrementCounter();