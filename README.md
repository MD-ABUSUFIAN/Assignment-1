# 1. What are some differences between interfaces and types in TypeScript?

উত্তর: Interface এবং  types Alias অনেকাংশে প্রায় একই রকম কাজ করে। কিন্তুু কিছু কিছু কাজের উপর নির্ভর করে আলাদা আলাদা types ব্যবহিত হয়।
### Interface মূলত function/object/array of object কাজের জন্য উপযুক্ত ‍যদি তুমি শুধু object shape or API Contact দিতে চাইলে interface ব্যবহার করা সহজ।

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

ফিচার (Feature)                      Interface (ইন্টারফেস)  Type (টাইপ)          
-----------------------------       -------------------    ---------------------- 
অবজেক্ট শেইপ তৈরি করা               পারে                     পারে                
Union / Tuple / Conditional         পারে না                   পারে                
Extending / Composing              `extends` ব্যবহার করে      `&` (intersection)    
class-এ `implements` হিসেবে ব্যবহার   বেশি প্রচলিত              করা যায়            
Reopen / আবার declare করা          পারে                     পারে না             
