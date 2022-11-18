/**
 * compares percentage of overlapping ids (numbers)
 * @param numArr1 {Array<number>}
 * @param numArr2 {Array<number>}
 * @returns {number}
 */
const findPercentMatch = (numArr1, numArr2) => {
    //iterate through smaller array
    const smaller = numArr1.length < numArr2.length ? numArr1 : numArr2;
    const larger = numArr1.length < numArr2.length ? numArr2 : numArr1;
    let matches = 0;
    for (let i = 0; i < smaller.length; i++) {
        if (larger.includes(smaller[i])) {
            matches++;
        }
    }
    //calculate the percentage match
    return matches/smaller.length;
    // const matches = numArr1.filter((item) => numArr2.includes(item));
    // return matches.length / numArr1.length;
}

export default findPercentMatch;
