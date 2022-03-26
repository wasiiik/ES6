const person = { name: 'Jack William', age: 17, job: 'Facebooker', phone: 01683381938, gfName: 'Ema Watson', friends: ['Tom hanks', 'Tom cruise', 'Tom yarn'] }

const { phone, gfName, job, salary } = person;

const complexObject = {
    name: 'abc',
    info: {
        address: 'Kola Bagan'
        leader: 'Tiger Leader'
    }
}

const { leader } = complexObject.info;

console.log(leader);

// const gfName = person.gfName;
// const gfName = person.gfName;
// const phone = person.phone;

// console.log(gfName, phone, job, salary);
// console.log(gfName, phone, job);

// const friends = ['Sakib Khan', 'Arman Khan', 'Amir Khan', 'Salman Khan', 'Sarukh khan'];

// const [chotoFriend, nextFriend, ...restFriend] = friends;

// console.log(chotoFriend, nextFriend, restFriend);