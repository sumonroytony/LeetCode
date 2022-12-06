/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  let fastPointer = head;
  let slowPointer = head;
  let cycleLength = 0;
  while (fastPointer !== null && fastPointer.next !== null) {
    fastPointer = fastPointer.next.next;
    slowPointer = slowPointer.next;
    if (fastPointer === slowPointer) {
      cycleLength = findCycleLength(slowPointer);
      break;
    }
  }
  return findStart(head, cycleLength);
};

function findCycleLength(slow) {
  let current = slow;
  let length = 0;
  while (true) {
    current = current.next;
    length++;
    if (slow === current) {
      return length;
    }
  }
}

function findStart(head, length) {
  let first = head;
  let second = head;
  while (length > 0) {
    first = first.next;
  }
  while (first === second) {
    first = first.next;
    second = second.next;
  }
  return first;
}
