
//nested distructing

const users = [

    {userId:1,firstName: 'Saroj', gender: 'male'},
    {userId:2,firstName:'Rishu', gender: 'male'},
    {userId:3,firstName: 'muskan', gender: 'Female'}
]
const [{firstName: userfirstName, userId}] =users;
console.log(userfirstName, userId);