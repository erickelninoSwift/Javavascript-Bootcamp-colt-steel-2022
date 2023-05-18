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

const pupils = {

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


const elabortate = pupils;

const valid = pupils === elabortate;
console.log(valid);


for(let index = 0;index <= 10;index ++)
{

   console.log(`${index} X ${index} = ${index*index}`);

}

const word = 'stressed'.split("");

console.log(word)

word.forEach(index =>{
    console.log(index);
});


const target = Math.floor(Math.random() * 10);

let guess = Math.floor(Math.random() * 10);

    console.log(`Target : ${target}`);
   

while(guess !== target)
{
    guess = Math.floor(Math.random() * 10);
    console.log(`Guess : ${guess}`);
}


var myArray = ["foo", "bar", "baz"];

for(let index of myArray)
{
    console.log(index);
}





// for(index in newspapers)
// {
//     console.log(newspapers[index].name);
// }


// const magicSquare = [[8,6,5]
//                     ,[1,6,2],
//                      [5,9,3]];


// console.log(magicSquare);

// for(let index = 0;index < magicSquare.length;index++)
// {
//     let sum = 0;
//     console.log(magicSquare[index]);
//     for(let i = 0;i < magicSquare[index].length;i++)
//     {
//        console.log(magicSquare[index][i]);
//        sum += magicSquare[index][i]
//     }

//     console.log(`Sum : ${sum}`);
// }

// for(index of magicSquare)
// {
//     console.log(`Hello: ${index}`);
//     let total = 0;
//     for(myindex of index)
//     {
//         console.log(`inside Array: ${myindex}`);
//         total += myindex;
//     }

//     console.log(`Final sum : ${total}`);
// }

const newspapers = [
    {
        name: 'thetimes',
        address: 'https://www.thetimes.co.uk/environment/climate-change'
    },
    {
        name: 'gaurdian',
        address: 'https://www.theguardian.com/environment/climate-crisis'
    },
    {
        name: 'telegraph',
        address: 'https://www.telegraph.co.uk/climate-change'
    }
]


let newobject = Object.values(newspapers)

for(index of newobject)
{
    console.log(index);
}

const elninojackpot = {
    name:'erick',
    surname:'Elnino',
    Age: 25,
    nationality: 'South african'
}


for(index in elninojackpot)
{
    console.log(elninojackpot[index]);
}

function helloworld()
{
    console.log("Hello wordl");
}


const hello = function()
{
    console.log("How are you doing ?");

}

helloworld();
hello();