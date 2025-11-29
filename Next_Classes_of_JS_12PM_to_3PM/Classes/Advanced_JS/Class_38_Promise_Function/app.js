// //  all about promise
// const myPromise = new Promise((resolve, reject) => {
//     // const success = true // Simulate success or failure
//     const success = false // Simulate success or failure
//     if(success){
//         resolve("Operation successful!")
//     } else{
//         reject("Operation Failed.")
//     }
// })

// console.log(myPromise);


// myPromise.then((result) => {
//     console.log(result); // Logs: "Operation successful!"
    
// }).catch((error) =>{
// console.log(error); //// Logs: "Operation failed."
// })



// console.log("********************************************");

// const fetchData = () =>{
//     return new Promise((resolve) =>{
//         setTimeout(() => resolve("Data Fetched", 1000)
//     )
//     });
// };
// fetchData().then((data) => {
//     console.log(data); // Logs: "Data fetched"
//     return "Processing data";
// }).then((processedData) => {
//     console.log(processedData); // Logs: "Processing data"
// }).catch((error) => {
//     console.error(error);
// });


// console.log("********************************");


// fetchData().then(() =>{
//     throw new Error("Something Went Wrong!");

// }).catch((error) =>{
//     console.error(error.message); // Logs: "Something went wrong!"

// })


// testing JSON API



// fetch("https://jsonplaceholder.typicode.com/photdfsfos")
//   .then(data => data.json())
//   .then(response => console.log("response ==>", response[0].thumbnailUrl))
//   .catch(err => console.log("error ==>", err))
// // fetch("https://jsonplaceholder.typicode.com/photdfsfos")
// //   .then(data => data.json())
// //   .then(response => console.log("response ==>", response[0].thumbnailUrl))
// //   .catch(err => console.log("error ==>", err))



// fetch("https://jsonplaceholder.typicode.com/photdfsfos")


// console.log("Me chala")




// fetch("https://jsonplaceholder.typicode.com/posts")
// .then(data => data.json())
// .then(response => console.log("response ==> ", response)
// ).catch(error => console.log(error))



const main = document.querySelector(".main");

main.innerHTML = "Loading..."

setTimeout(() =>{
   fetch("https://jsonplaceholder.typicode.com/posts")
   .then(data => data.json())
   .then(res => {
    // console.log("res ==> ", res);

    main.innerHTML = ""
    res.map(post => {
        console.log("post ==> ", post);
        main.innerHTML += `
        <div class="card">
        <div class="mainDiv">
        <p>userId: ${post.userId}</p>
        <p>id: ${post.id}</p>
        </div>
        <h1>${post.title}</h1>
        <p>${post.body}</p>
      </div>
        `
        
    })
    
   }).catch(err => main.innerHTML = "Something went wrong, Please try later!")


}, 1000)

