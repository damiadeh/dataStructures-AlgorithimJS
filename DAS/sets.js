/***----SET ALGORITHM FUNCTIONALITIES
 * has: check for the presence of an element in a set.
 * values: return all the values in the set
 * add: adds element to the set
 * *remove****
 * removeByName: removes element from set by the name
 * removeByPosition: removes element from set by the position(not index) of the element
 * remove********
 * size: counts the items in the set and returns the number.
 * union: returns the union of two sets
 * intersection: returns intersection of two sets as a new set
 * difference: returns difference in two sets as a new set
 */

var log = console.log;
 class MySet{
     constructor() {
        this.collection = [];
     }

     has = (element) => {
        return (this.collection.indexOf(element) !== -1);
     };

     values = () => {
        return this.collection;
     }

     add = (element) => {
        if(!this.has()){
            this.collection.push(element);
            return true;
        }
        return false;
     }

     removeByName = (element) => {
         if(this.has(element)){
            let index = this.collection.indexOf(element);
            this.collection.splice(index, 1);
            return true;
         }
         return false;
     }

     removeByPosition = (position) => {
         if(Number.isInteger(position) && position > 0 && position <= this.collection.length){
            this.collection.splice(position-1, 1);
            return true;
         }
         return false;
     };

     size = () => {
         return collection.length;
     };

     union = (set) => {
        var unionSet = new MySet();
        var currentSet = this.values();
        unionSet.collection = currentSet;
        set.forEach(value => {
            unionSet.add(value);
        });
        return unionSet;
     };

     intersection = (set) => {
        var intersectionSet = new MySet();
        var currentSet = this.values();
        currentSet.forEach(value => {
            if(set.has(value)){
                intersectionSet.add(value);
            }
        });
        return intersectionSet;
     };

     difference = (set) => {
        var differenceSet = new MySet();
        var currentSet = this.values();
        var otherSet = set.values()
        if(this.size >= set.size){
            currentSet.forEach(value => {
                if(!set.has(value)){
                    differenceSet.add(value);
                }
            });
        }else{
            otherSet.forEach(value => {
                if(!currentSet.has(value)){
                    differenceSet.add(value);
                }
            });
        }
        return differenceSet;
     };

     subset = (set) => {
        var currentSet = this.values();
        return currentSet.every(value => {
            return set.has(value);
        });
     };
 }

var setA = new MySet();
var setB = new MySet();
setA.add("me");
setA.add("you");
setB.add("Teken");
setB.add("me");
setB.add("go");
setB.add("you");
log(setA.subset(setB));
log(setA.intersection(setB).values());
log(setA.difference(setB).values());