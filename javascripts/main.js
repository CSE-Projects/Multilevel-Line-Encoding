// load 2B1Q graph as default after window has loaded
window.onload = function (ev) {
    // use to data computed in encoding_2b1q.js and provide it to the Ploty library
    Plotly.newPlot('graph-area', data_2b1q);
};

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

    if (type === '2B1Q') {
        Plotly.newPlot('graph-area', data_2b1q);
    }
    else {
        Plotly.newPlot('graph-area', data_8b6t);
    }

}
