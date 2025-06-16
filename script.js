//your JS code here. If required.

// 

 // Select the button and the paragraph
    const button = document.getElementById("enterBtn");
    const statusParagraph = document.getElementById("status");

    // Add event listener for click
    button.addEventListener("click", function () {
      statusParagraph.innerHTML = "<h1>Entered Metaverse</h1>";
    });