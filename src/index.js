module.exports = function toReadable (number) {
    const objNum = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };

    if (number <= 10) return objNum[number];

    let hundreds = Math.floor(number / 100);
    let doz = Math.floor(number % 100 / 10);
    let num = number % 100 % 10;

    let hundredsString = '';
    let dozString = '';
    let numString = '';

    if (hundreds) {
        hundredsString = `${objNum[hundreds]} hundred`;
    } else {
        hundredsString = '';
    }
    if(!doz && !num) {
        return hundredsString;
    }
    if (doz && doz >=2) {
            dozString = `${objNum[doz*10]}`;
        } else {
            dozString = objNum[doz*10 + num];
    }
    if (num) {
        numString = `${objNum[num]}`;
    }
    return (hundredsString + ' ' + dozString + ' ' + ((doz >= 2 && num) ? numString : '')).trim();
};
