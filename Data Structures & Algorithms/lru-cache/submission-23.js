class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
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
        this.cache = new Map();
        this.start = new Node(null, null);
        this.end = new Node(null, null);

        this.start.next = this.end;
        this.end.prev = this.start;
    }

    insert(node) {
        const [nodePrev, latest] = [this.end.prev, this.end];

        nodePrev.next = node;
        node.next = latest;

        latest.prev = node;
        node.prev = nodePrev;
    }

    remove(node) {
        const [left, right] = [node.prev, node.next];

        left.next = right;
        right.prev = left;

        node.prev = null;
        node.next = null;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (!this.cache.has(key)) return -1;

        const node = this.cache.get(key);

        this.remove(node);
        this.insert(node);

        return node.value
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if (this.cache.has(key)) {
            const node = this.cache.get(key);
            node.value = value;
            this.remove(node);
            this.insert(node);
        } else {
            const node = new Node(key, value);
            this.cache.set(key, node);
            this.insert(node);

            if (this.cache.size > this.capacity) {
                const oldest = this.cache.get(this.start.next.key);
                this.remove(oldest);
                this.cache.delete(oldest.key);
            }
        }
    }
}
