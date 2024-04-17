/* Amy says:
    - Measure longest point on left side to longest point on right side, even if they are not on the same line
    - The cutter is always standing on the OUTside
    - Per-side measurement not useful
*/

function setPoints() {
    var textBox = document.getElementById("miterCode");
    var code = textBox.value;

    var svg = document.getElementById("diagram");
    var topView = svg.getElementById("topView");
    var sideView = svg.getElementById("sideView");
    var topText = document.getElementById("topText");
    var bottomText = document.getElementById("bottomText");

    var jobType = document.querySelector('input[name = miterJobType]:checked').value

    if (jobType == "CLG") {
        topText.innerHTML = "INSIDE";
        bottomText.innerHTML = "OUTSIDE";

        sideView.setAttribute("points", "130,10 125,10 125,20 130,20 120,20");
    } else if (jobType == "CLGV") {
        topText.innerHTML = "TOP";
        bottomText.innerHTML = "BOTTOM"

        sideView.setAttribute("points", "125,20 125,15 135,15 135,10 135,20")
    } else {
        topText.innerHTML = "INSIDE";
        bottomText.innerHTML = "OUTSIDE";

        // Use these points for Ceiling Without Lip
        //sideView.setAttribute("points", "125,10 120,10 120,20 125,20");

        sideView.setAttribute("points", "123,10 130,10 130,20 123,20");
    }

    if (code == "BES")
        topView.setAttribute("points", "10,10 90,10 90,20 10,20");
    else if (code == "BEM")
        topView.setAttribute("points", "25,10 75,10 90,20 10,20");
    else if (code == "LEM")
        topView.setAttribute("points", "25,10 90,10 90,20 10,20");
    else if (code == "REM")
        topView.setAttribute("points", "10,10 75,10 90,20 10,20");
    else if (code == "BED-L")
        topView.setAttribute("points", "25,10 90,10 75,20 10,20");
    else if (code == "BED-R")
        topView.setAttribute("points", "10,10 75,10 90,20 25,20");
    else if (code == "BEM-REV")
        topView.setAttribute("points", "10,10 90,10 75,20 25,20");
    else if (code == "LEM-REV")
        topView.setAttribute("points", "10,10 90,10 90,20 25,20");
    else if (code == "REM-REV")
        topView.setAttribute("points", "10,10 90,10 75,20 10,20");
    else if (code == "BEM-V")
        topView.setAttribute("points", "10,10 90,10 70,30 30,30 10,10 20,20 80,20 90,10");
    else if (code == "LEM-V")
        topView.setAttribute("points", "10,10 90,10 70,30 10,30 10,10 10,20 80,20 90,10");
    else if (code == "REM-V")
        topView.setAttribute("points", "10,10 90,10 90,30 30,30 10,10 20,20 90,20 90,10");
}