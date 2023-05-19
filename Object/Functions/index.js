console.log("Create a functions");

function grumpus()
{
    console.log("Hello world");
    console.log("How are you doing ?");
    console.log("We doing very well");
}


grumpus();


const manoey = [1,2,3,4,8].indexOf(3);

console.log(manoey);





function monica(namne,surname)
{
    console.log(`name: ${namne} \n Surname:${surname}`);

    return{
        name: namne,
        surname: surname
    }
}

const data = monica('erick','elnino');

console.log(data);



function isValidPassword(username,password)
{

     if(password.trim().length >= 8)
     {
        const valid = /\s/.test(password);
        if(!valid)
        {
            const nameisyou = password.includes(username);

            if(!nameisyou)
            {
                console.log("We good ")
            }else
            {
                console.log("please make sure that your password doesnt contains username");
            }

        }else
        {
            console.log("Please white space was spotted");
        }

     }else
     {
        console.log("Please passoerd not long .should have at least 8");
     }
}

isValidPassword("Erick","#kelnino1");
isValidPassword("doKluvr","dogluvr123")
















