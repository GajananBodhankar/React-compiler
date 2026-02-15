var maxSubArray = function (nums: Array<any>) {
  let result = nums[0];
  if (nums.length <= 1) {
    return nums[0];
  }
  for (let i = 1; i < nums.length; i++) {
    let temp = nums[i];
    nums[i] = Math.max(nums[i] + nums[i - 1], nums[i]);
    if (nums[i] != temp) {
      console.log(temp);
    }
    result = Math.max(nums[i], result);
  }
  return result;
};

function findSubarray(arr) {
  // code here
  if (arr.filter((item) => item >= 0).length == 0) {
    return -1;
  }
  let start = 0,
    end = 1,
    currSum = 0,
    currStart = start,
    currEnd = end,
    maxSum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      currSum += arr[i];
      if (currSum >= maxSum) {
        end = i;

        currEnd = end;
        currStart = start;
        maxSum = currSum;
      }
    } else {
      start = i + 1;
      currSum = 0;
    }
  }

  return arr.slice(currStart, currEnd + 1);
}

// console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
// maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
// findSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
// findSubarray([-71, 92, 0, 67, -8, 67, -78 - 7]);
// findSubarray([0, 96, 20, -18, 63, 75]);
console.log(findSubarray([-838, -329]));
