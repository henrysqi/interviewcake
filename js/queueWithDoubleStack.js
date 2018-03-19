function Stack() {
	this.storage = []
	this.count = 0;
}

Stack.prototype.insert = function(val) {
	this.storage[this.count] = val
	this.count++
}

Stack.prototype.pop = function() {
	if (this.count === 0) return;
	var temp = this.storage[this.count - 1]
	this.storage[this.count - 1] = null
	this.count--
	return temp
}

Stack.prototype.peek = function() {
	return this.storage[this.count - 1]
}

function Queue() {
	this.stack1 = new Stack();
	this.stack2 = new Stack();
}
 Queue.prototype.insert = function(val) {
 	this.stack1.insert(val)
 }
 
 Queue.prototype.pop = function() {
 	while(this.stack1.peek()) {
 		this.stack2.insert(this.stack1.pop())
 	}
 	this.stack2.pop()
 }
 
 var queue = new Queue()
 queue.insert(1)
 queue.insert(523)
 queue.insert(12)
 queue.insert(665)
 queue.insert(3)
 queue.insert(535123)
 queue.pop()
 queue.pop()
 console.log(queue)

				