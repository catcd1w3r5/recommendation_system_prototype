/**
 * compares percentage of overlapping ids (numbers)
 * @param numArr1 {Array<number>}
 * @param numArr2 {Array<number>}
 * @returns {number}
 */
const findPercentMatch = (numArr1, numArr2) => {
    const matches = numArr1.filter((item) => numArr2.includes(item));
    return matches.length / numArr1.length;
}

export default findPercentMatch;
