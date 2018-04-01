/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

var merge = function(nums1, m, nums2, n) {
    nums1.length = m,
    nums2.length = n;
  
    Array.prototype.push.apply(nums1, nums2);
    nums1.sort(function(a, b) {
      return a - b;
    });
  };
/*
  1.将两个数组连接
  2.再将新数组排序
*/  