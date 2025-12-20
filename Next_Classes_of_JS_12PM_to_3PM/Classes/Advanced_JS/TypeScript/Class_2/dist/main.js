"use strict";
// Types by Inference
// let num = 10;
// let name = "ABC";
Object.defineProperty(exports, "__esModule", { value: true });
// type User = {
//     fullName: string
//     address: string
//     age: number
//     gender: string
//     privacy: "public" | "private"
// }
// const user: User = {
//      fullName: "User 1",
//   address: "Karachi",
//   age: 20,
//   gender: "Male",
//   privacy: "public"
// }
// console.log(user);
const users = [
    {
        fullName: "User2",
        gender: "Female",
        address: "Lahore",
        age: 26,
    },
    {
        fullName: "User 1",
        address: "Karachi",
        age: 20,
        gender: "Male"
    },
    {
        fullName: "User 1",
        address: "Karachi",
        age: 20,
        gender: "Male"
    },
    {
        fullName: "User 1",
        address: "Karachi",
        age: 20,
        gender: "Male"
    },
    {
        fullName: "User 1",
        address: "Karachi",
        age: 20,
        gender: "Male"
    },
];
function getUsers() {
    return users;
}
function getUserByAge(age) {
    const user = users.find(user => user.age == age);
    return user;
}
console.log("getUsers ==>", getUsers());
console.log("getUserByAge ==>", getUserByAge(26));
//# sourceMappingURL=main.js.map