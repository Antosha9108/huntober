let str = "   The white space at the beginning of this string doesn't match the whitespace at the end. "

function reverserDayFour(str){
    return str.split("").reverse().join("")
}


console.log(reverserDayFour(str))