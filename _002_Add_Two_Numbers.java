/**
 * Add Two Numbers
 * https://leetcode.com/problems/add-two-numbers/
 */
public class _002_Add_Two_Numbers {
    public static class ListNode {
        int val;
        ListNode next;
        ListNode(int x) {
            val = x;
            next = null;
        }

        @Override
        public final String toString() {
            boolean isFirst = true;
            String str = "";
            for (ListNode node = this; node != null; node = node.next) {
                str += (isFirst == true ? "" : " -> ") + node.val;
                isFirst = false;
            }
            return str;
        }

        public static ListNode createListByNumber(int num) {
            // TODO: check num
            ListNode list = new ListNode(0);
            ListNode tail = list;
            for (; num >= 10; num = num / 10) {
                tail.val = num % 10;
                tail.next = new ListNode(0);
                tail = tail.next;
            }

            // last digit number
            tail.val = num;
            return list;
        }
    }

    public static ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode n1 = l1;
        ListNode n2 = l2;

        ListNode sum = new ListNode(0);
        for (ListNode tail = sum; ; tail = tail.next) {
            tail.val += (n1 == null ? 0 : n1.val) + (n2 == null ? 0 : n2.val);
            if (n1 != null) n1 = n1.next;
            if (n2 != null) n2 = n2.next;

            // check overflow
            if (tail.val >= 10) {
                tail.next = new ListNode(tail.val / 10);
                tail.val %= 10;
            } else {
                if (n1 == null && n2 == null) {
                    return sum;
                }

                // create next node
                tail.next = new ListNode(0);
            }
        }
    }

    public static void main(String[] args) {
        ListNode l1 = ListNode.createListByNumber(342);
        ListNode l2 = ListNode.createListByNumber(465);
        System.out.format("Input: (%s) + (%s)\n", l1, l2);

        ListNode l3 = addTwoNumbers(l1, l2);
        System.out.format("Output: %s\n", l3);
    }
}
