class Node {
    constructor(key, val) {
        this.prev = null;
        this.next = null;
        this.key = key;
        this.val = val;
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.store = new Map();
        this.start = new Node(0, 0);
        this.end = new Node(0, 0);
        this.start.next = this.end;
        this.end.prev = this.start;
    }

    insert(node) {
        const [prevNode, latestNode] = [this.end.prev, this.end];

        prevNode.next = node;
        node.prev = prevNode;

        node.next = latestNode;
        latestNode.prev = node;
    }

    remove(node) {
        const [nodeLeft, nodeRight] = [node.prev, node.next];

        node.prev.next = nodeRight;
        node.next.prev = nodeLeft;
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
        return node.val;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if (this.store.has(key)) {
            const node = this.store.get(key);
            node.val = value;
            this.remove(node);
            this.insert(node);
        } else {
            const node = new Node(key, value);
            this.store.set(key, node);
            this.insert(node);

            if (this.store.size > this.capacity) {
                const oldest = this.start.next;
                this.remove(oldest);
                this.store.delete(oldest.key);
            }
        }
    }
}
