排序方法        平均情况        最好情况        最坏情况        辅助空间        稳定性
冒泡排序         O(n^2)           O(n)              O(n^2)            O(1)                稳定
选择排序         O(n^2)          O(n^2)            O(n^2)            O(1)              不稳定
插入排序         O(n^2)           O(n)              O(n^2)            O(1)                稳定
希尔排序O(n*log(n))~O(n^2)         O(n^1.3)       O(n^2)            O(1)              不稳定
堆排序          O(n*log(n))     O(n*log(n))    O(n*log(n))       O(1)              不稳定
归并排序       O(n*log(n))     O(n*log(n))    O(n*log(n))       O(n)                稳定
快速排序       O(n*log(n))     O(n*log(n))      O(n^2)            O(logn)              不稳定

冒泡排序经过优化以后，最好时间复杂度可以达到O(n)。设置一个标志位，如果有一趟比较中没有发生任何交换，
可提前结束，因此在正序情况下，时间复杂度为O(n)。

选择排序在最坏和最好情况下，都必须在剩余的序列中选择最小（大）的数，与已排好序的序列后一个位置元素做交换，依次最好和最坏时间复杂度均为O(n^2)。

插入排序是在把已排好序的序列的后一个元素插入到前面已排好序(需要选择合适的位置)的序列中，在正序情况下时间复杂度为O(n)。

堆是完全二叉树，因此树的深度一定是log(n)+1，最好和最坏时间复杂度均为O(n*log(n))。

归并排序是将大数组分为两个小数组，依次递归，相当于二叉树，深度为log(n)+1，因此最好和最坏时间复杂度都是O(n*log(n))。快速排序在正序或逆序情况下，每次划分只得到比上一次划分少一个记录的子序列，用递归树画出来，是一棵斜树，此时需要n-1次递归，且第i次划分要经过n-i次关键字比较才能找到第i个记录，因此时间复杂度是\sum_{i=1}^{n-1}(n-i)=n(n-1)/2，即O(n^2)。
