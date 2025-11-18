# 1. What are some differences between interfaces and types in TypeScript?

উত্তর: Interface এবং  types Alias অনেকাংশে প্রায় একই রকম কাজ করে। কিন্তুু কিছু কিছু কাজের উপর নির্ভর করে আলাদা আলাদা types ব্যবহিত হয়।

Interface মূলত function/object/array of object কাজের জন্য উপযুক্ত ‍যদি তুমি শুধু object shape or API Contact দিতে চাইলে interface ব্যবহার করা সহজ।

type Union="string"| number 
এইখানে type Union মধ্য যে কোন premitive ভেলু রাখা যাবে । 
যেটা interface Union{
    string|number } 
দেওয়া যাবেনা error আসবে। types Alias মূল্যত premitive,union,intersection,tuple,mapped type ইত্যাদি কাজে বেশী ব্যবহিুত হয়।

## type alias
type User1={
    name:string;
    id:number
}
type User2={
    phone:string;
    age:number
}
type MixedUser=User1 & User2

এইখানে type alias মাধ্যমে ২টা User মাঝের ভেল ‍ু গুলোকে একটার মধ্য রাখা হচ্ছে। 

## interface
interface User1{
    name:string;
    id:number
}
interface MixedUser extends {
    phone:string;
    age:number
}

এইখানে type alias মাধ্যমে ২টা User মাঝের ভেল ‍ু গুলোকে একটার মধ্য রাখা হচ্ছে। 

## interface
interface Array{
    [index:number]=string
}
এইখানে একটা interface Array মধ্যে index সাধারনত number হিসেবে থাকে।তাই index:number হবে এবং index যেহেতু string ‍হবে তাই string দেওয়া হইসে।

# What is the use of the keyof keyword in TypeScript? Provide an example.

TypeScript এ keyof keyword ব্যবহার করা হয় কোন object type  এর key গুলোকে union type হিসেবে রাখে।
### Example:
type User={
    name:string,
    age:number,
    isAdmin:boolean
}
type UserKey=keyof User দিলে user type key গুলো যেমন: name,age,isAdmin এই গুলোকে UserKey মধ্যে সব key গুলোকে Union বানানো হয় আর এইগুলো type হিসেবে ব্যবহিত হয়।

### Example:
type Product={
    name:string;
    id:number;
    brand:string;
    price:number
}
type ProductKeys = keyof Product; 

function getValue(obj:product,key:ProductKeys){
    return obj[key]
}


const product:Product={
    name:"mackBook Pro";
    id:1;
    brand:"apple";
    price:200000
}
getValue(product,"brand")

এইখানে result হবে "apple" কারন হচ্ছে getValue ফংশনে কল দেওয়ার সময়  obj হিসেবে product এবং key হিসেবে brand পাঠানোর মাধ্যমে brand value হিসেবে result আসবে। এইখানে ProductKeys মাধ্যমে product মধ্য থেকে key গুলোকে দেয়।