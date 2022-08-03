module.exports = function toReadable(n) {
    const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (n < 100) {
        return returnNumbersTens(n);
    } else {
        return ('' + n)[1] === '0' && ('' + n)[2] === '0' ? `${numbers[('' +n)[0]]} hundred` : `${numbers[('' +n)[0]]} hundred ${returnNumbersTens(+('' + n).slice(1))}`;
    };

    function returnNumbersTens(n) {
        if (n < 20) {
            return numbers[n];
        }
        if (n > 19 && n < 100) {
            return ('' + n)[1] === '0' ? tens[('' + n)[0]] : `${tens[('' +n)[0]]} ${numbers[('' +n)[1]]}`;
        };
    };
}