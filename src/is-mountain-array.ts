export const isMountainArr = (arr: Array<number>): boolean => {
    let isMountainArray = false;
    if (arr?.length < 3) return isMountainArray;

    let prevNumber: number = 0;
    let isIncreasing: boolean = true;
    let isDecreasing: boolean = false;

    isMountainArray = arr.every((element, index) => {
        if (index === 0 && element === prevNumber) {
            return true;
        } else if (index > 0 && element === prevNumber) {
            return false;
        } else if (isIncreasing && element > prevNumber) {
            prevNumber = element;
            return true;
        } else if (isIncreasing && element < prevNumber) {
            prevNumber = element;
            isIncreasing = false;
            isDecreasing = true;
            return index != 0 && index < arr.length - 1;
        } else if (isDecreasing && element < prevNumber) {
            prevNumber = element;
            return true;
        } else if (isDecreasing && element > prevNumber) {
            return false;
        }
    });

    return isMountainArray;
};
