
// Select encoding scheme
function selectEncoding(eventItem, type) {


    var i, tablinks;

    // un-highlight all tab buttons
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; ++i) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // highlight the clicked button
    eventItem.currentTarget.className += " active";

}
