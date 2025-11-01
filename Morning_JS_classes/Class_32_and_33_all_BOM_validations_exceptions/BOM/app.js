// var fullUrl = document.getElementById("url")
// var domainName = document.getElementById("domain")
// var pathName = document.getElementById("pathName")
// var hashName = document.getElementById("hashName")
// var changeUrl = document.getElementById("changeUrl")
// var alterUrl = document.getElementById("altWay")
// var assignName = document.getElementById("assignValue")
// var replaceName = document.getElementById("replaceValue")


// var contextPara = document.getElementById("context");

// fullUrl.addEventListener("click", function() {
//     var urlDiv = (window.location.href)
//     contextPara.innerText =  urlDiv;
// })




// domainName.addEventListener("click", function() {
//     var domainDiv = (window.location.hostname)
//     if(domainDiv === "") {
//         contextPara.innerText = "No domain name present in the URL";
//      } else {
//     contextPara.innerText = domainDiv;
//      }
// })

// pathName.addEventListener("click", function() {
//     var path = (window.location.pathname)
//     contextPara.innerText = path;
    
// })

// hashName.addEventListener("click", function() {
//     var hashDiv = (window.location.hash)
//      if(hashDiv === "") {
//         contextPara.innerText = "No hash value present in the URL";
//      } else {
//         contextPara.innerText = hashDiv;
//      }
// })


// changeUrl.addEventListener("click", function() {
//     var path = (window.location.href = "https://www.google.com/")
//     contextPara.innerText = path;
    
// })

// // assignName.addEventListener("click", function() {
// //     var assigns = (window.location.assign("https://www.netacad.com/"))
// //    contextPara.innerText = assigns;
// // })


// // replaceName.addEventListener("click", function() {
// //     var replace = (window.location.replace("https://www.youtube.com/"))
// //     contextPara.innerText = replace;
// // })


// alterUrl.addEventListener("click", function() {
//     var alternative = (document.URL)
//     contextPara.innerText = alternative;
    
// })

// assignName.addEventListener("click", function() {
//     contextPara.innerText = "Navigating to NetAcad… 🌐";
//     setTimeout(function() {
//         window.location.assign("https://www.netacad.com/");
//     }, 500); // 0.5 second delay
// });

// replaceName.addEventListener("click", function() {
//     contextPara.innerText = "Opening YouTube for 1 second… ▶️";

//     // Open YouTube in a new tab
//     var newTab = window.open("https://www.youtube.com/", "_blank");

//     // Close the new tab after 1 second
//     setTimeout(() => {
//         if (newTab) newTab.close();
//         contextPara.innerText = "Back to original page ✅";
//         // contextPara.innerText = fullUrl;
//     }, 1000); // 1 second
// });



// // var forwordBtn = document.getElementById("forword")
// // var backBtn = document.getElementById("back")
// // var goBtn = document.getElementById("go")

// // Forward in history
// forwardBtn.addEventListener("click", function() {
//     history.forward(); 
//     contextPara.innerText = "Moved forward in history (if possible) ➡️";
// });

// // Back in history
// backBtn.addEventListener("click", function() {
//     history.back();
//     contextPara.innerText = "Moved back in history (if possible) ⬅️";
// });

// // Go to specific history entry
// goBtn.addEventListener("click", function() {
//     const steps = prompt("Enter number of steps to move in history (positive or negative):", "0");
//     if(steps !== null) {
//         history.go(Number(steps));
//         contextPara.innerText = `Moved ${steps} step(s) in history 🔄`;
//     }
// });



// Get all button elements
var fullUrl = document.getElementById("url");
var domainName = document.getElementById("domain");
var pathName = document.getElementById("pathName");
var hashName = document.getElementById("hashName");
var changeUrl = document.getElementById("changeUrl");
var alterUrl = document.getElementById("altWay");
var assignName = document.getElementById("assignValue");
var replaceName = document.getElementById("replaceValue");
var forwardBtn = document.getElementById("forword");
var backBtn = document.getElementById("back");
var goBtn = document.getElementById("go");

// Output paragraph
var contextPara = document.getElementById("context");

// Show full URL
fullUrl.addEventListener("click", function() {
    contextPara.innerText = window.location.href;
});

// Show domain name
domainName.addEventListener("click", function() {
    const domain = window.location.hostname;
    contextPara.innerText = domain ? domain : "No domain name present in the URL 🌐";
});

// Show path name
pathName.addEventListener("click", function() {
    const path = window.location.pathname;
    contextPara.innerText = path ? path : "No path present in the URL 📁";
});

// Show hash
hashName.addEventListener("click", function() {
    const hash = window.location.hash;
    contextPara.innerText = hash ? hash : "No hash value present in the URL #️⃣";
});

// Change URL (current tab)
changeUrl.addEventListener("click", function() {
    contextPara.innerText = "Navigating to Google… 🌐";
    setTimeout(() => {
        window.location.href = "https://www.google.com/";
    }, 500);
});

// Alternative: show document.URL
alterUrl.addEventListener("click", function() {
    contextPara.innerText = document.URL;
});

// Assign (current tab)
assignName.addEventListener("click", function() {
    contextPara.innerText = "Navigating to NetAcad… 🌐";
    setTimeout(() => {
        window.location.assign("https://www.netacad.com/");
    }, 500);
});

// Replace (open new tab temporarily)
replaceName.addEventListener("click", function() {
    contextPara.innerText = "Opening YouTube for 1 second… ▶️";
    const newTab = window.open("https://www.youtube.com/", "_blank");

    setTimeout(() => {
        if (newTab) newTab.close();
        contextPara.innerText = "Back to original page ✅";
    }, 1000);
});

// Forward in history
forwardBtn.addEventListener("click", function() {
    history.forward(); 
    contextPara.innerText = "Moved forward in history (if possible) ➡️";
});

// Back in history
backBtn.addEventListener("click", function() {
    history.back();
    contextPara.innerText = "Moved back in history (if possible) ⬅️";
});

// Go to specific history entry
goBtn.addEventListener("click", function() {
    const steps = prompt("Enter number of steps to move in history (positive or negative):", "0");
    if(steps !== null) {
        history.go(Number(steps));
        contextPara.innerText = `Moved ${steps} step(s) in history 🔄`;
    }
});
