/* 
Given an array of intervals [startTime, endTime], merge all overlapping intervals and return a sorted array of non-overlapping intervals.

intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]
output = [[1, 6], [8, 10], [15, 18]] 
*/

function mergeHighDefinitionIntervals(intervals) {
  if (!intervals || intervals.length === 0) return [];

  intervals.sort((a, b) => a[0] - b[0]);
  const arrayInterval = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    let overlapComp = arrayInterval[arrayInterval.length - 1];

    if (intervals[i][0] <= overlapComp[1]) {
      overlapComp[1] = Math.max(intervals[i][1], overlapComp[1])
    } else {
      arrayInterval.push(intervals[i]);
    }
  }

  return arrayInterval;
}
