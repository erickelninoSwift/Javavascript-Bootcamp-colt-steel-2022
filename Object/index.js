console.log("Object");


const usernam = {
    name:'erick',
    surname:'tshimbombo',
    age: 45,
    contry: 'Democratic republic of Congo'
}


console.log(usernam);

console.log(usernam['age']);

usernam.totalnumber = 56;

console.log(usernam);


const students  = {

    student1: {
        name:'jorgio',
        age: 45,
        notionality: 'Congolese'
    },
    student2: {
        name:'Elnino',
        age: 21,
        notionality: 'Brazilian'
    },
    student3: {
        name:'Jackpot',
        age: 20,
        notionality: 'Scottish'
    }

}


console.log(students['student2'].notionality);