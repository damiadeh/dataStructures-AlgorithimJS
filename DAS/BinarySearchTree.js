/***----BINARY SEARCH TREE
 * left-subtree must be less than the parent
 * right-subtree must be greater than the parent
 */

class Node {
    constructor(data, left = null, right =null){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

const log = console.log;
class BinaryST{
    constructor(){
        this.root = null;
    }

    add = (data) => {
        const node = this.root;
        if(node == null){
            this.root = new Node(data);
            log(this.root);
            return "Empty Tree! Node inserted at the beginning";
        }else{
            const findOpening = function(node){
                if(data < node.data){
                    if(node.left === null){
                        node.left = new Node(data);
                        return "node inserted as left child"
                    }else if(node.left !== null){
                        return findOpening(node.left);
                    }
                }else if(data > node.data){
                    if(node.right === null){
                        node.right = new Node(data);
                        return  "node inserted at right side"
                    }else if(node.right !== null){
                        return findOpening(node.right);
                    }
                }else {
                    return null;
                }
            };
            return findOpening(node);
        }
    }

    findMin = () => {
        log(this.root);
        let current = this.root;
        while(current.left !== null){
            current = current.left;
        }
        return current.data;
    }

    findMax = () => {
        let current = this.root;
        while(current.right !== null){
            current = current.right;
        }
        return current.data;
    }

    find = (data) => {
        let current = this.root;
        while(current.data !== data){
            if(data < current.data){
                current = current.left;
            }else{
                current = current.right;
            }
            if(current = null){
                return "Not found! data not in tree";
            }
        }
        return current;
    }

    isPresent = (data) => {
        let current = this.root;
        while(current){
            if(data === current.data) return true;
            if(data < current.data){
                current = current.left;
            }else{
                current = current.right;
            }
        }
        return false;
    }

    remove = (data) => {
        const removeNode = function(node, data) {
            if (node == null){
                return "Tree is empty";
            }
            if (data == node.data){
                //for node with no child
                if(node.left == null && node.right == null){
                    return null; //sets reference to the node to null, hence deleted
                }
                // node with no left child
                if(node.left == null) return node.right;
                //node with right child
                if(node.right == null) return node.left;
                // node that has two children
                var tempNode = node.right;
                while(tempNode.left !== null) {
                    tempNode = tempNode.left;
                }
                node.data = tempNode.data;
                node.right = removeEventListener(node.right, tempNode.data);
                return node;
            }else if(data < node.data){
                node.left = removeNode(node.left, data);
                return node;
            }else{
                node.right = removeNode(node.right, data);
            }
        }
        this.root = removeNode(this.root, data);
    }
}


const bst = new BinaryST();

bst.add(20);
bst.add(15);
bst.add(65);
bst.add(23);
bst.add(16);
bst.add(35);
bst.add(55);
bst.remove(23);
log(bst)

log(bst.findMin());
// log(bst.findMax());
bst.remove(65);
// log(bst.findMax());
log(bst.isPresent(23));