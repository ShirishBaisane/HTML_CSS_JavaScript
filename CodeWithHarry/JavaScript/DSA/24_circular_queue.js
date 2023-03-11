class CircularQueue {
    constructor(capacity) {
        this.items = new Array(capacity)
        this.rear = -1
        this.front = -1
        this.currentLength = 0
        this.capacity = capacity
    }

    isFull() {
        return this.currentLength === this.capacity
    }

    isEmpty() {
        return this.currentLength === 0
    }

    size() {
        return this.currentLength
    }

    enqueue(item) {
        if (!this.isFull()) {
          this.rear = (this.rear + 1) % this.capacity;
          this.items[this.rear] = item;
          this.currentLength += 1;
          if (this.front === -1) {
            this.front = this.rear;
          }
        }
      }

    dequeue() {
        if (this.isEmpty()) {
            return null
        }
        const item = this.items[this.front]
        this.items[this.front] = null
        this.front = (this.front + 1) % this.capacity
        this.currentLength--
        if (this.isEmpty()) {
            this.rear = -1
            this.front = -1
        }
        return item
    }

    peek() {
        if (!this.isEmpty()) {
            return this.items[this.front]
        }
        return null
    }

    print() {
        if (this.isEmpty()) {
            console.log("Queue is empty.")
        } else {
            let i, str = ''
            for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
                str += this.items[i] + " "
            }
            str += this.items[i]
            console.log(str)
        }

    }

}

const queue = new CircularQueue(5)
console.log(queue.isEmpty())

queue.enqueue(2)
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
console.log(queue.isFull())
// queue.enqueue(40)
queue.enqueue(50)

console.log(queue.isFull())
queue.print()

console.log(queue.peek())
console.log(queue.dequeue())
console.log(queue.peek())
console.log(queue.dequeue())
console.log(queue.peek())
queue.print()

queue.enqueue(60)
queue.enqueue(70)
queue.print()