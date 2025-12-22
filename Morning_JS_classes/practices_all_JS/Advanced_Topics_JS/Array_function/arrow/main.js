 const arrowBtn = document.getElementById("arrowBtn");
    const docSection = document.getElementById("docSection");

    arrowBtn.addEventListener("click", () => {
      // Toggle the documentation section
      if(docSection.style.display === "none" || docSection.style.display === "") {
        docSection.style.display = "block";
      } else {
        docSection.style.display = "none";
      }

      // Optional: open MDN docs in new tab
      // window.open("https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions", "_blank");
    });


    