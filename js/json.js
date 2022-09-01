const user = {id: 1, name: 'gorib amir', job: 'actor'};
console.log(user)
// JavaScript Object Notation (JSON)
const stringified = JSON.stringify(user);
console.log(stringified)
/*
{ id: 1, name: 'gorib amir', job: 'actor' }--->JS
{"id":1,"name":"gorib amir","job":"actor"}--->JSON
*/

const shop = {
    owner: 'Hablu',
    address: {
        street: 'kochukhat',
        city: 'dhaka',
        country: 'BD'
    },
    products : ['laptop', 'mic', 'monitor', 'keyboard'],
    revenue: 50000,
    isOpen: true,
    isNew: false,
};
console.log(shop);

const shopJSAN = JSON.stringify(shop);
console.log(shopJSAN);

const shopObj = JSON.parse(shopJSAN);
console.log(shopObj)