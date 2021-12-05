//Variables used across below functions.
const notice = document.getElementById("notice");
const loadingMsg = document.getElementById("loading-msg");
const errorMsg = document.getElementById("error-msg");
const circles = document.querySelectorAll(".circles");
const circlesArray = Array.from(circles);

//NOTE FOR DEVS: Adding/removing IDs from circles not essential.
//But makes animation runs only when needed.

function showLoadingMsg() {
    //Assign IDs to circles.
    circlesArray[0].setAttribute("id", "circle1");
    circlesArray[1].setAttribute("id", "circle2");
    circlesArray[2].setAttribute("id", "circle3");

    //Display section, "loading" p.
    notice.style.display = "block";
    loadingMsg.style.display = "block";
}

function hideLoadingMsg() {
    //Hide section, "loading" p.
    notice.style.display = "none";
    loadingMsg.style.display = "none";

    //Remove IDs to circles.
    circlesArray[0].removeAttribute("id");
    circlesArray[1].removeAttribute("id");
    circlesArray[2].removeAttribute("id");
}

function showErrorMsg(errorMessage, errorStatus) {
    //Display section, "error" p.
    notice.style.display = "block";
    errorMsg.textContent = `${errorMessage} ${errorStatus}`;
    errorMsg.style.display = "block";
}

function hideErrorMsg() {
    //Hide "error" p.
    errorMsg.style.display = "none";
}

export {showLoadingMsg, hideLoadingMsg, showErrorMsg, hideErrorMsg};