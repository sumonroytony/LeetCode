/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let mergeHead = { val: -1, next: null };
  let crt = mergeHead;
  while (list1 && list2) {
    console.log({ list1 }, { list2 }, { crt }, { mergeHead });
    if (list1.val > list2.val) {
      crt.next = list2;
      list2 = list2.next;
    } else {
      crt.next = list1;
      list1 = list1.next;
    }
    crt = crt.next;
  }
  console.log('loop finished');
  console.log({ list1 }, { list2 }, { crt }, { mergeHead });
  crt.next = list1 || list2;
  return mergeHead.next;
};

mergeTwoLists([2, 3], [2, 5, 6]);
