class Queue {
    #internalArray = [];

    enqueue = (item) => {
        this.#internalArray.push(item);
    }

    dequeue = () => {
        return this.#internalArray.shift();
    }

    tryDequeue = () => {
        if (this.length > 0) {
            return {
                success: true,
                item: this.dequeue()
            }
        }
        return {
            success: false
        }
    }

    peek = () => {
        return this.#internalArray[0];
    }

    clear = () => {
        this.#internalArray = [];
    }

    isEmpty = () => {
        return this.#internalArray.length === 0;
    }

    get length() {
        return this.#internalArray.length;
    }
}

export default Queue;
