/***----QUEUE ALGORITHM FUNCTIONALITIES
 * join: join to the queue.
 * leave: leave the queue
 * size: number of items in the queue
 * front: returns the item on in front of the queue
 */

var log = console.log;
class Queue{
    constructor(){
        this.count = 0;
        this.firstInQueue = 0;
        this.storage = {};
    }

    enqueue = (value) => {
        this.storage[this.count] = value;
        this.count++;
        log(`${value} has joined to queue`);
    }

    dequeue = () => {
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

    first = () => {
        return this.storage[this.firstInQueue];
    }

    isEmpty = () => {
        return this.count === 0;
    }
 }

 
var queue = new Queue();
queue.enqueue("Mike");
queue.enqueue("Dami");
queue.enqueue(1345);
queue.enqueue("Dex");
log(queue.storage);
log("----------");
log(queue.dequeue());
log(queue.size());
log(queue.first());
log("-----Current Queue-----");
log(queue.storage);


// PRIORITY QUEUE

class PriorityQueue {
    constructor(){
        this.collection = []
    }

    //to be done
}