class DoublyLinkedList{
    constructor(val, next){
        this.val = val;
        this.next = next;
    }
}
var MyLinkedList = function() {  
    this.head = null;
    this.tail = null;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {

    if(!this.check(index)) return -1;
    for(let i = 0 ;this.head !== null; i++ ){
        if(i === index) return this.head.val;
        this.head = this.head.next;
    }
};

MyLinkedList.prototype.getLength = function() {
    let length= 0;
    let temp = this.head;
    while(temp){
        length++;
        temp= temp.next;
    }
    return length;
};

MyLinkedList.prototype.check = function(index) {
    const length = this.getLength();

    if(length === 0 || length < index) return false;
    else return true;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    if(!this.head) {
        this.head = new DoublyLinkedList(val,null)
        this.tail = this.head;
    }
    else {
        const newNode = new DoublyLinkedList(val, this.head)
        this.head.previous = newNode;
        this.head = newNode;
    }
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    const newNode = new DoublyLinkedList(val, null);
    this.tail.next = newNode;
    newNode.previous = this.tail;
    this.tail = newNode;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    const length = this.getLength();
    if(index > length) return;
    if(index === length -1)this.addAtTail(val)
    else if( index === 0) this.addAtHead(val);
    else{
        let tempHead = this.head;
        for(let i = 0;i< length; i++){
            if(i === index-1){
                const newNode = new DoublyLinkedList(val, tempHead);
                newNode.previous = tempHead.previous;
                tempHead.previous = newNode
                return;
            }
            tempHead = tempHead.next;
        }
    }
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    
};

MyLinkedList.prototype.print = function(){
    let curr = this.head;
    let s = "";
    while (curr != this.tail) {
        s+= curr.val + "->";     
        curr = curr.next;
    }
    console.log(s);
}


 var obj = new MyLinkedList()
//  var param_1 = obj.get(index)
 obj.addAtHead(2)
 obj.addAtHead(1)
 console.log(obj.get(1))
 obj.addAtTail(4)
 obj.addAtIndex(1,100)
 console.log(obj.print())
//  obj.deleteAtIndex(index)
