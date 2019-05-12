let activities = document.getElementById("dropdown");

activities.addEventListener("click", function() {
    let options = activities.querySelectorAll("option");
    let count = options.length;
    if(typeof(count) === "undefined" || count > 5) {
        // do nothing
    }
    else if(count === 2){

    }
});

activities.addEventListener("change", function() {

});