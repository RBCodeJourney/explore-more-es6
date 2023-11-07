// data access 
const data = [{ id: 1, name: 'abul', address: 'kochu khet' }];

console.log(data[0].address);

const products = {
    count: 5000,
    data: [
        { id: 1, name: 'lenovo laptop', price: 65000 },
        { id: 1, name: 'macbook', price: 165000 },
    ]
}
// second product price
console.log(products.data[1].price);


const user = {
    id: 5001,
    name: 'shoriful Raj',
    address: {
        street: {
            first: '54/1 uttor side',
            second: 'poribag er goli',
            third: 'no dorai'
        },
        city: 'Dhaka'
    }
}
console.log(user.address.street.second);

const user2 ={
    id: 5002,
    name: 'pori bibir majar',
    address:{
        city: 'chitagong',
        country: 'Bangladesh'
    }
}


/* Optional chaining (?)
আগের কোডটিকেই বসালাম কারণ optional chaining ব্যাবহার করব 
নিচে  যদি question mark ব্যাবহার করি তাহলে error theke রেহাই পাব 
মানে অই ? চিনহ পর্যন্ত কোডটি চলার পর যদি না মেলাতে পারে undefined রিটার্ন করবে কিন্তু কিন্তু error দিবেনা যেমন এটা 
*/
console.log(user2.address.street?.second);