function LinkedListNode(value) {
    this.value = value;
    this.next = null;
}

var a = new LinkedListNode("Angel Food");
var b = new LinkedListNode("Bundt");
var c = new LinkedListNode("Cheese");
var d = new LinkedListNode("Devil's Food");
var e = new LinkedListNode("Eccles");

a.next = b;
b.next = c;
c.next = d;
d.next = e;

kthToLastNode(2, a);

function kthToLastNode(k, headNode) {
    let nodeVals = []
    let currentNode = headNode
    let counter = 0
    while(true) {
        if (currentNode.next) {
            nodeVals[counter] = currentNode.value
            currentNode = currentNode.next
            counter++
        } else {
            break;
        }
    }
    return nodeVals[counter - k + 1]
}