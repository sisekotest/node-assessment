export const duplicateZeroes = (array: Array<number>): void => {
    if (!array?.length) return;

    const tempArray = [...array];
    tempArray.forEach((element, index) => {
        if (element === 0) {
            array.splice(index + 1, 0, 0);
            array.splice(-1, 1);
        }
    });
};
