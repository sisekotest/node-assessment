export const mergeSortedArray = (nums1: Array<number>, m: number, nums2: Array<number>, n: number): Array<number> => {
    if (n === 0) return nums1;

    if (m === 0) {
        nums2.forEach((element, index) => {
            nums1.splice(index, 1, element);
        });

        return nums1;
    }

    let firstElementInNums2 = nums2.shift();

    nums1.every((element, index) => {
        if (element > firstElementInNums2) {
            nums1.splice(index, 0, firstElementInNums2);
            nums1.splice(-1, 1);
            firstElementInNums2 = nums2.shift();
        }

        if (element === 0 && index > 0) {
            nums1.splice(index, 1, firstElementInNums2);
            firstElementInNums2 = nums2.shift();
        }

        return !!firstElementInNums2;
    });

    return nums1;
};
