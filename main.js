// var typed = new typed(".text",{
//     Strings:["Frontend Developer", "Beckend Developer", "Data Analyst"],
//     typeSpeed:100,
//     backSpeed:100,
//     backDelay:1000,
//     loop:true
// })


const contentList = [
    "Frontend Developer",
    "Beckend Developer",
    "Data Analyst"
];

let currentIndex = 0;

function changeContent() {
    // Get the homeContent element
    const homeContent = document.getElementById("homeContent");

    // Change the content
    homeContent.innerHTML = `<h2>${contentList[currentIndex]}</h2>`;

    // Increment index, reset if it exceeds the array length
    currentIndex = (currentIndex + 1) % contentList.length;
}

// Set interval to change content every 2 seconds (2000 milliseconds)
setInterval(changeContent, 3000);



    
