/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
class Solution {
    /**
     * @param {ListNode} head
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        const dummy = new ListNode(0, head);
        let groupPrev = dummy;

        while (true) {
            const kth = this.getKthGroup(groupPrev, k);

            if (!kth) break;

            let curr = groupPrev.next;
            const kthNext = kth.next;
            let prev = kthNext;

            while (curr !== kthNext) {
                const next = curr.next;
                curr.next = prev;
                prev = curr;
                curr = next;
            }

            const temp = groupPrev.next;
            groupPrev.next = kth;
            groupPrev = temp;
        }

        return dummy.next;
    }

    getKthGroup(node, k) {
        while (node && k > 0) {
            node = node.next;
            k--;
        }

        return node;
    }
}
