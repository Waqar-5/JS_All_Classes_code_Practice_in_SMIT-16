const cloudName = "dxxwlp4lg";
const uploadPreset = "my_first_present";

const uploadBtn = document.getElementById("uploadBtn");
const imageInput = document.getElementById("imageInput");
const preview = document.getElementById("preview");

uploadBtn.addEventListener("click", async () => {

    const file = imageInput.files[0];

    if (!file) {
        Swal.fire("No File", "Please select an image", "warning");
        return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset); // ← THIS was the issue

    try {
        Swal.fire({
            title: "Uploading...",
            allowOutsideClick: false,
            didOpen: () => Swal.showLoading()
        });

        const res = await fetch(
          `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
          {
            method: "POST",
            body: formData
          }
        );

        const data = await res.json();
        console.log(data);

        preview.src = data.secure_url;

        Swal.fire("Uploaded!", "Image uploaded successfully", "success");

    } catch (error) {
        Swal.fire("Error", "Upload failed", "error");
        console.error(error);
    }
});
