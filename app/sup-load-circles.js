//Adds animation to the circles and displays them.
function showLoadingCircles() {
    //Gather the circles. Make "real" array.
    const circles = document.querySelectorAll(".circles");
    const circlesArray = Array.from(circles);

    //Assign IDs.
    circlesArray[0].setAttribute("id", "circle1");
    circlesArray[1].setAttribute("id", "circle2");
    circlesArray[2].setAttribute("id", "circle3");

    //Get the section. Display it.
    const notice = document.getElementById("loading-notice");
    notice.style.display = "block";
}

//Removes animation from the circles and hides them.
function hideLoadingCircles() {
    //Get the section. Hide it.
    const notice = document.getElementById("loading-notice");
    notice.style.display = "none";

    //Gather the circles. Make "real" array.
    const circles = document.querySelectorAll(".circles");
    const circlesArray = Array.from(circles);

    //Remove IDs.
    circlesArray[0].removeAttribute("id");
    circlesArray[1].removeAttribute("id");
    circlesArray[2].removeAttribute("id");
}

//NOTE: You could just hide/show the #loading-notice section.
//But, I added/remove the IDs from circles so animation runs only when needed.
export {showLoadingCircles, hideLoadingCircles};