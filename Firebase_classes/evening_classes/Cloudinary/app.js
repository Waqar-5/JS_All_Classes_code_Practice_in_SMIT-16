// ==========================
// Select DOM Elements
// ==========================
const fileInp = document.getElementById("fileInp"); // File input
const uploadBtn = document.getElementById("uploadBtn"); // Upload button
const outputImg = document.getElementById("outputImg"); // Preview image
const usernameInput = document.getElementById("username"); // Username input

let selectedFile; // To store the selected image

// ==========================
// Handle file selection
// ==========================
fileInp.addEventListener("change", (e) => {
  const file = e.target.files[0]; // Get first selected file
  if (!file) return; // If no file selected, do nothing

  // Check if file is an image
  if (file.type.includes("image")) {
    // Show preview
    outputImg.style.display = "block";
    outputImg.src = URL.createObjectURL(file);
    selectedFile = file; // Store file for upload
  } else {
    // Alert if not an image
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please select an image file!"
    });
  }
});

// ==========================
// Upload image function
// ==========================
const uploadImage = async () => {
  if (!selectedFile) {
    Swal.fire({
      icon: "warning",
      title: "No image selected",
      text: "Please select an image first!"
    });
    return null;
  }

  const formData = new FormData();
  formData.append("file", selectedFile); // Append image file
  formData.append("upload_preset", "mysecondday"); // Cloudinary preset

  try {
    // Upload image to Cloudinary
    const res = await fetch("https://api.cloudinary.com/v1_1/dxxwlp4lg/image/upload", {
      method: "POST",
      body: formData
    });

    const data = await res.json();
    return data.secure_url; // Return uploaded image URL

  } catch (error) {
    console.error("Error uploading image:", error);
    Swal.fire({
      icon: "error",
      title: "Upload failed",
      text: "Something went wrong while uploading."
    });
    return null;
  }
};

// ==========================
// Handle Upload button click
// ==========================
uploadBtn.addEventListener("click", async () => {
  const userName = usernameInput.value.trim(); // Get username

  if (!userName) {
    Swal.fire({
      icon: "warning",
      title: "Username required",
      text: "Please enter your username!"
    });
    return;
  }

  const imageUrl = await uploadImage(); // Upload image

  if (!imageUrl) return; // Stop if upload failed

  // Success alert
  Swal.fire({
    icon: "success",
    title: "Upload Successful",
    html: `Username: <b>${userName}</b><br>Image Uploaded!`,
    imageUrl: imageUrl,
    imageWidth: 200,
    imageHeight: 200,
    imageAlt: 'Uploaded Image'
  });

  console.log("Image URL:", imageUrl);
  console.log("Username:", userName);

  // You can now save this info to Firebase/Server if needed
  // Example:
  // await updateDoc(doc(db, "users", userUid), {
  //   name: userName,
  //   profilePic: imageUrl
  // });
});














// const fileInp = document.getElementById("fileInp");
// const uploadBtn = document.getElementById("uploadBtn");
// const outputImg = document.getElementById("outputImg");
// let selectedFile;

// // Handle file selection
// fileInp.addEventListener("change", (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     if (file.type.includes("image")) {
//         outputImg.style.display = "block";
//         outputImg.src = URL.createObjectURL(file);
//         selectedFile = file;
//     } else {
//         alert("Please select an image file");
//     }
// });

// // Upload function
// const uploadImage = async () => {
//     if (!selectedFile) {
//         alert("Please select an image first");
//         return null;
//     }

//     const formData = new FormData();
//     formData.append("file", selectedFile);
//     formData.append("upload_preset", "mysecondday"); // Cloudinary preset

//     try {
//         const res = await fetch("https://api.cloudinary.com/v1_1/dxxwlp4lg/image/upload", {
//             method: "POST",
//             body: formData
//         });
//         const data = await res.json();
//         return data.secure_url; // Return uploaded image URL
//     } catch (error) {
//         console.error("Error uploading image:", error);
//         return null;
//     }
// };

// // Handle button click
// uploadBtn.addEventListener("click", async () => {
//     const userName = document.getElementById("username").value;
//     const imageUrl = await uploadImage();

//     if (!imageUrl) return; // Stop if upload failed

//     console.log("Image URL:", imageUrl);
//     console.log("Username:", userName);

//     // Example Firestore update (if using Firebase)
//     // await updateDoc(doc(db, "users", userUid), {
//     //     name: userName,
//     //     profilePic: imageUrl
//     // });
// });




// // const fileInp = document.getElementById("fileInp");

// // const uploadBtn = document.getElementById("uploadBtn");

// // const outputImg = document.getElementById("outputImg");


// // let selectedFile;

// // fileInp.addEventListener("change", (e) => {
// //     if(!e.target.files[0])
// //         return;


// //     if(e.target.files[0].type.includes("image")){
// //         outputImg.style.display = "block";
// //         outputImg.src = URL.createObjectURL(e.target.files[0]);
// //         selectedFile = e.target.files[0];
// //     } else {
// //         alert("Please select an image file");
// //     }
// // })

// // const imageUploaded = async () => {
// //     if (!selectedFile){
// //         alert("Please select an image first");
// //         return
// //     }

// //     console.log("selectedFile ==>", selectedFile);

       

// //     // if (selectedFil)

// //   // const formData = new FormData()
// //   // formData.append("file", selectedFile);
// //   // formData.append("upload_preset", "saylani-b16");

// //   // try {
// //   //   //                                                       Cloud Name
// //   //   const res = await fetch("https://api.cloudinary.com/v1_1/ddtfayf8g/image/upload", {
// //   //     method: "POST",
// //   //     body: formData
// //   //   })
// //   //   const data = await res.json();
// //   //   return data.secure_url
// //   // } catch (error) {
// //   //   console.log("error while uploading the image ==>", error)
// //   // }
// // }

// // uploadBtn.addEventListener("click", () => {
// //   if (!selectedFile) {
// //     alert("Please select an image")
// //     return
// //   }

// //   const formData = new FormData()
// //   formData.append("file", selectedFile);
// //   formData.append("upload_preset", "mysecondday");


// //   //                                     Cloud Name
// //   fetch("https://api.cloudinary.com/v1_1/dxxwlp4lg/image/upload", {
// //     method: "POST",
// //     body: formData
// //   })
// //   .then(res => res.json())
// //   .then(data => {
// //     console.log("data ==>", data.secure_url)
// //   })
// //   .catch(err => {
// //     console.log("error while uploading the image ==>", err)
// //   }) 
// // })


// // // }
// // uploadBtn.addEventListener("click", async () => {
// //     const userName = document.getElementById("username").value;

// //     const imageUrl = await imageUploaded();

// //     console.log("Image URL: ", imageUrl);
    
// //     console.log("Username: ", userName);


// //       // Update the document in 
// // //   await updateDoc((db, "users", userUid), {
// // //     name: userName,
// // //     profilePic: imageUrl

    
// // })