let str = "The Pawshank Redemption,Caturday Night Live,Only Meworders in the Building,I Love Mewcy, Mewsummer Meowders,The Golden Purrs, Purrlandia ,Meowpardy, Meowstery Science Theater: Purrthousand, Amewican Idol,Dog City,Doctor Mew , The Meowing Fed,Mew Peter,The Vicar of Dogley, Kittens,Meownton Abbey,Pets and the Kitty,Dogis and Bonehead,Pawlty Meowers ,The Meowpet Show,Barkos,The Catbert Purrport,The Pawffice,The Dogford Files, Battlestar Catlactica,Catlumbo,SpongeDog Squarepants,NYPD Mew ,Fluffy the Meowpire Purrer,The Inbemewners,Meowder She Wrote,Paw & Order,30 Dog, Pawvatar: The Last Meowbender,The Pawnight Show,Arrested Dogvelopment,Furiends,Mewie,Curb Your Dogthusiasm,Teenage Mewtant Ninja Turtles,Phineas and Purrb,Paw Trek, Paw Trek: The Next Mewination, Twin Mewks, *C*A*T*S*,DogTales, Game of Bones, House of the Meowgon,The Purrlight Zone,Breaking Bone,The Meowre,The Dogpranos,The Rings of Meower, The KIT Crowd,Strangepaw Things ,Catman: The Animeowted Series,Meowter Call Saul,Mewgerton ,Obark,Mewphoria,La Casa de Pawpel,Rick & Meowty,Amewican Purror Story, Mewcifer,PawndaVision,Dogxter,The Meowndalorian, Dog Lasso,Bark,Meowdern Pawmily , Meowtlander,Bone Mirror,Barks and Recreation,How to Get Away with Meowder,Boneland ,Meowther Ted,Mewtopia,Mewey,The Mewkie Meowse Doghouse,Mewster Rogers' Neighborhood"

// P a long ass string
// R an integer with the amount of puns
// E we'll find out
// P we gonna take it all in steps

//! 1 first we need to split the string into an array.

let string1 = str.split(',')
//! 2 then we need to see if the element != element.trim() to get rid of the ones with spaces
let arr = string1.filter((pun)=> pun == pun.trim())
//! 3 then we need to filter through array and remove all strings containing bark dog or bone(case sensitive)
let arr2 = arr.filter((element)=>!element.includes('Dog')).filter((element)=>!element.includes('Bark')).filter((element)=>!element.includes('Bone')).filter((element)=>!element.includes('bark'))
//! 4 after that we need to see if the length of the pun is not multiple of 5. we can do that with %5==0 operator
let arr3 = arr2.filter((element)=> element.length%5!=0)
//! 5 then we need to filter the sum of charcodes of the first and last characters of the pun and it has to be odd.
let arr4 = arr3.filter((element) => (element.charCodeAt(0)+element.charCodeAt(element.length-1))%2!=0)
//! 6 now we need to filter out the puns in which the charecter directly after the middle may not be e. 
    //?so we can use char at element .length/2 ==e ??
    let arr5 = arr4.filter((element)=> element.length%2==0 ? element.charAt(element.length / 2) !='e' : element.charAt(element.length / 2+1) !='e')
    //? so we will filter with ternary operator and see if the length of the element is odd or not and after that see if the char !=e
//! 7
    //? now we need to find if Puns have even number of lowercase letters, not counting punctuation or spaces
    arr6 = arr5.filter((element)=> element.toLowerCase())
        

//! 8

// console.log(arr4)
// console.log(arr4.length)

console.log(arr5)
// console.log(arr5.length)
console.log(arr6)