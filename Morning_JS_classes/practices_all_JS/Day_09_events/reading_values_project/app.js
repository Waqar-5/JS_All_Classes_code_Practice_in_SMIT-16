  // ✅ Validate Email Field Before Submission
    function validateForm() {
      var emailVal = document.getElementById("email").value;
      var emailError = document.getElementById("emailError");

      if (emailVal === "") {
        emailError.style.display = "block"; // show error
        return false; // stop form submission
      } else {
        emailError.style.display = "none"; // hide error if fixed
        alert("Form submitted successfully!");
        return true;
      }
    }

    // ✅ Autofill City from ZIP
    function fillCity() {
      var zipEntered = document.getElementById("zip").value;
      var cityName = "";

      switch (zipEntered) {
        case "60608": cityName = "Chicago"; break;
        case "68114": cityName = "Omaha"; break;
        case "53212": cityName = "Milwaukee"; break;
        default: cityName = ""; // clear if ZIP not recognized
      }

      document.getElementById("city").value = cityName;
    }