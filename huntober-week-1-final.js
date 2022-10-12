let str = "e!!Igv)t5lltBcvbdeDH3dVw!OOtI#Aa.ZMDu7WYpP^VVjDc4I50iv#ylhgmQfs"

function replacerDayOne(str){
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


function replacerDayThree(str){
    return str.replaceAll('s',' ').replaceAll('p',' ').replaceAll('a',' ').replaceAll('c',' ').replaceAll('e',' ')
}

function reverserDayFour(str){
    return str.split("").reverse().join("")
}

let result = replacerDayOne(str)
let result2 = replacerDayThree(result)
let result3 = reverserDayFour(result2)
console.log(result3)



// answer so far
//! fQmghly#viOSIh DjVV^P YWLuDMZ. A#ItOO!wVdEHD dbv BtllSt)vgI!! 
//? sfQmg4ly#viO 1h DjVV^P YWLuDM2. A#1t00!wVdEHD dbv 8tll t)vg1!!
//* e!!Igv)t5lltBcvbdeDH3dVw!OOtI#Aa.ZMDu7WYpP^VVjDc4I50iv#ylhgmQfs
 