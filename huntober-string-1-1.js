let str = "PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770."

// function replacer(str){
//     return str.replaceAll('0','O').replaceAll('1','I').replaceAll('2','Z').replaceAll('3','E').replaceAll('4','h').replaceAll('5','S').replaceAll('6','G').replaceAll('7','L').replaceAll('8','B').replaceAll('9','q')
// }



function replacer2(str){
    let array = [
        'O',
        'I',
        'Z',
        'E',
        'h',
        'S',
        'G',
        'L',
        'B',
        'q'
    ]

 return str.split('').map((char)=> (Number(char) || char === '0') ? array[char] : array.includes(char) ? array.indexOf(char) : char).join('')
    
}

// replacer(str)
// answer "its nice to say hello"
console.log(replacer2(str))