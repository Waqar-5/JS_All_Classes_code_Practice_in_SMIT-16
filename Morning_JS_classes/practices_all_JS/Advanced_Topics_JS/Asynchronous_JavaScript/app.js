// 1. Basic Asynchronous Code – setTimeout

console.log("Start"); // Synchronous: Executes immediately

// Asynchronous task using setTimeout
setTimeout(() => {
    console.log("This runs after 2 seconds"); //  Runs after 2 seconds
}, 2000);

console.log("End"); // // Executes immediately, doesn't wait for setTimeout

console.log("***********************************************");

// 2. Callback Example (Old-school Async)
// function accepts a name and a callback
function greet(name, callback){
    console.log("Hello " + name); // print greeting
    callback(); // call the callback function after greeting
}

// call greet with a callback function
greet("Waqar", () => {
    console.log("Callback executed!"); // Runs after greeting
});


console.log("***********************************************************");
// 3. Promises – Basic Example
// Create a new promise
let myPromise = new Promise((resolve, reject) => {
    let success = true; // Condition for success
    if(success){
        resolve("Promise resloved successfully!") // fulfilled
    } else {
        reject("Promise rejected!") // Rejected
    }
});

// Consume the promise
myPromise.then((value) => console.log("Success:", value))// Runs on resolve
.catch((error) => console.log("Error:", error)); // Runs on reject 

console.log("******************************************************");
// 4. Promise Chaining
// A promise returning function
function multiplyBy2(num){
    return new Promise((resolve) => {
        resolve(num * 2);
    })
}


// Chaining promises
multiplyBy2(5)
.then((result) =>{
    console.log("Step 1:", result); // 10
    return result + 10; // Pass to next .then
})
.then((result) => {
    console.log("Step 2:", result); // 20
    return result * 3; // Pass to next .then
})
.then((result) => {
    console.log("Step 3:", result); // 60
});

console.log("**************************************************************");
// 4. Promise Chaining
let p1 = new Promise((resolve) => setTimeout(() => resolve("Task 1 done"), 1000))
let p2 = new Promise((resolve) => setTimeout(() => resolve("Task 2 done"), 2000))
let p3 = new Promise((resolve) => setTimeout(() => resolve("Task 3 done"), 1500))


// Wait for all promises to complete
Promise.all([p1, p2, p3]).then((result) => {
    console.log("All tasks completed: ", result);
    
})

console.log("*****************************************************");
// 6. Promise.race – First Finished Task
let fast = new Promise((resolve) => setTimeout(() => resolve("Fast task"), 1000))
let slow = new Promise((resolve) => setTimeout(() => resolve("Slow task"), 2000))

// First Promise to resolve wins
Promise.race([fast, slow]).then((result) => {
    console.log("Winner: ", result); // fast task
});


console.log("***************************************************");
// 7. Async/Await – Cleaner Syntax
// Function returning a promise
function fetchData(){
    return new Promise((resolve) => {
        setTimeout(() => resolve("Data fetched!"), 2000) // Simulate API delay
    });
}

// Async function to await the promise
async function getData() {
  console.log("Start fetching"); // Runs immediately
  let data = await fetchData(); // Wait for promise to resolve
  console.log(data); // Logs resolved data
  console.log("End fetching"); // Runs after await
}

getData();


console.log("************************************************************");
// 8. Async/Await with Try/Catch (Error Handling)
// Async function simulating API call
async function getUser(){
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users") //// Fetch API
        let data = await response.json() // convert response to JSON
        console.log("Users: ", data); // Log user data
    } catch(error){
        console.log("Error fetching users: ", error); // Handle network or parsing error
    } finally{
        console.log("API call finished!"); // Always exection
        
    }
}


getUser();

console.log("****************************************************");

// 9. Sequential Async Operations with Async/Await
async function sequentialTasks() {
    const task1 = await new Promise(res => setTimeout(() => res("Task 1 completed"), 1000))
    console.log(task1);

    const task2 = await new Promise(res => setTimeout(() => res("Task 2 completed"), 1000))
    console.log(task2);

    const task3 = await new Promise(res => setTimeout(() => res("Task 3 completed"), 1000))
    console.log(task3);
    
}

sequentialTasks()


console.log("******************************************************");
// 10. Parallel Async Operations with Async/Await + Promise.all

async function parallelTasks() {
  const promises = [
    new Promise(res => setTimeout(() => res("Task A done"), 1000)),
    new Promise(res => setTimeout(() => res("Task B done"), 2000)),
    new Promise(res => setTimeout(() => res("Task C done"), 1500))
  ];

  const results = await Promise.all(promises); // Wait for all in parallel
  console.log("All tasks completed:", results);
}

parallelTasks();


console.log("****************************************************");
// 11. Fetch API with Promises and Async/Await
// Using Promises
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(res => res.json()) // Convert response to JSON
  .then(data => console.log("Posts:", data))
  .catch(err => console.error("Error:", err));

// Using Async/Await
async function fetchPosts() {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts");
    let posts = await res.json();
    console.log("Posts (async/await):", posts);
  } catch(error) {
    console.error("Error fetching posts:", error);
  }
}
fetchPosts();

