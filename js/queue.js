/***----QUEUE ALGORITHM FUNCTIONALITIES
 * join: join to the queue.
 * leave: leave the queue
 * size: number of items in the queue
 * peek: returns the item on in front of the queue
 */

var log = console.log;
class Queue{
    constructor(){
        this.count = 0;
        this.firstInQueue = 0;
        this.storage = {};
    }

    join = (value) => {
        this.storage[this.count] = value;
        this.count++;
        log(`${value} has joined to queue`);
    }

    leave = () => {
        if(this.count === 0) return "stack is empty. Add first!";
        this.count--;
        this.firstInQueue++
        var valueToDelete = this.storage[0];
        delete this.storage[0];
        return `${valueToDelete} has been removed from stack`;
    }

    size = () => {
        return this.count;
    }

    peek = () => {
        return this.storage[this.firstInQueue];
    }
 }

 
var queue = new Queue();
queue.join("Mike");
queue.join("Dami");
queue.join(1345);
queue.join("Dex");
log(queue.storage);
log("----------");
log(queue.leave());
log(queue.size());
log(queue.peek());
log("-----Current Queue-----");
log(queue.storage);