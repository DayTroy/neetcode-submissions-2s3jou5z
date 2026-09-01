class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.store = new Map();
        this.start = new Node(null, null);
        this.end = new Node(null, null);

        this.start.next = this.end;
        this.end.prev = this.start;
    }

    insert(node) {
        const [nodePrev, latest] = [this.end.prev, this.end];

        nodePrev.next = node;
        node.prev = nodePrev;

        latest.prev = node;
        node.next = latest;
    }

    remove(node) {
        const [left, right] = [node.prev, node.next];

        node.prev = null;
        node.next = null;

        left.next = right;
        right.prev = left;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (!this.store.has(key)) return -1;

        const node = this.store.get(key);

        this.remove(node);
        this.insert(node);

        return node.value;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if (this.store.has(key)) {
            const node = this.store.get(key);
            node.value = value;
            this.remove(node);
            this.insert(node);
        } else {
            const node = new Node(key, value);
            this.store.set(key, node);
            this.insert(node);
            
            if (this.store.size > this.capacity) {
                const oldest = this.store.get(this.start.next.key);
                this.remove(oldest);
                this.store.delete(oldest.key);
            }
        }
    }
}
