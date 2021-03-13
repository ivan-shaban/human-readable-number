const digitsMap = [
    ['zero', '', ''],
    ['one', 'eleven', 'ten'],
    ['two', 'twelve', 'twenty'],
    ['three', 'thirteen', 'thirty'],
    ['four', 'fourteen', 'forty'],
    ['five', 'fifteen', 'fifty'],
    ['six', 'sixteen', 'sixty'],
    ['seven', 'seventeen', 'seventy'],
    ['eight', 'eighteen', 'eighty'],
    ['nine', 'nineteen', 'ninety'],
];

module.exports = function toReadable(number) {
    const d100 = number / 100 >> 0;
    const d10 = (number % 100) / 10 >> 0;
    const d = number % 10;
    
    let result = '';
    if (d100) {
        result += `${digitsMap[d100][0]} hundred`;
    }
    if (d10 === 1 && !d || d10 > 1) {
        result += `${result && ' '}${digitsMap[d10][2]}`;
    }
    
    if (d) {
        result += `${result && ' '}${digitsMap[d][d10 === 1 ? 1 : 0]}`;
    }
    
    return result || digitsMap[0][0];
};
