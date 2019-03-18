/***----STACK ALGORITHM FUNCTIONALITIES
 * push: add to the stack.
 * pop: remove from the stack
 * size: number of items in the stack
 * peek: returns the item on top/end of the stack
 */
var log = console.log;
class Stack{
    constructor(){
        this.count = 0;
        this.storage = {};
    }

    push = (value) => {
        this.storage[this.count] = value;
        this.count++;
        log(`${value} has been added to stack`);
    }

    pop = () => {
        if(this.count === 0) return "stack is empty. Add first!";
        this.count--;
        var valueToDelete = this.storage[this.count];
        delete this.storage[this.count];
        return `${valueToDelete} has been removed from stack`;
    }

    size = () => {
        return this.count;
    }

    peek = () => {
        return this.storage[this.count-1];
    }
 }

 
 var stack = new Stack();
stack.push("Mike");
stack.push("Dami");
stack.push(1345);
stack.push("Dex");
log(stack.storage);
log("----------");
log(stack.pop());
log(stack.size());
log(stack.peek());
log("-----Current stack-----");
log(stack.storage);
