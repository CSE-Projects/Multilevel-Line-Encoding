
// hold value of selected tab
var selected_encoding = '2B1Q';

// input for 8B6T
var input_8b6t = [];

// input for 2B1Q
var input_2b1q = [];



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

    // set the selected tab
    selected_encoding = type;

    // clear input
    document.getElementById('bitstream-input').value= '';


    addExplanation();

    // plot blank graph
    var gNode = document.getElementById('graph-area');
    while (gNode.hasChildNodes()) {
        gNode.removeChild(gNode.lastChild);
    }
}



// get the bit stream from the input field and check validity
function getBitStreamAndPlot(event, bitStream) {

    // check for no input
    if (bitStream.length === 0) {
        alert("Please Enter the Bit Stream");
        return;
    }

    // check bits are binary
    for (var i = 0; i < bitStream.length; ++i) {
        if (bitStream[i] != 0 && bitStream[i] != 1) {
            alert("Please Enter a valid Bit Stream of only 0 and 1");
            return;
        }
    }

    // check validity for 2B1Q (multiples of 2)
    if ((bitStream.length % 2) !== 0  && selected_encoding === '2B1Q') {
        alert("Please Enter the Bit Stream for 2B1Q in multiples of 2");
        return;
    }

    // check validity for 8B6T (multiples of 8)
    if ((bitStream.length % 8) !== 0  && selected_encoding === '8B6T') {
        alert("Please Enter the Bit Stream for 8B6T in multiples of 8");
        return;
    }

    console.log(bitStream);

    parseBitStream(bitStream);
    if (selected_encoding === '2B1Q') {
        encoding_2b1q(input_2b1q);
        console.log("IN");
        Plotly.newPlot('graph-area', data_2b1q);
    }
    else {
        encoding_8b6t(input_8b6t);
        Plotly.newPlot('graph-area', data_8b6t);
    }

    // clear input
    input_8b6t = [];
    input_2b1q = [];

    addExplanation();
}



// check for bit input
document.querySelector('#bitstream-input').addEventListener('keypress', function (){

    // focus plot button
    document.getElementById('plot-button').style.backgroundColor = '#3498db';
});



// converts input bit stream to the inputs for the logic to plot the graph
function parseBitStream(bitStream) {

    // split bit stream into groups of 2
    for (var i = 0; i <= (bitStream.length - 2); i += 2) {
        input_2b1q.push(bitStream.substr(i, 2));
    }

    console.log(input_2b1q);

    // convert bit stream from base 2 to base 16
    var bitStreamHex = parseInt(bitStream, 2).toString(16).toUpperCase();

    // split bit stream into groups of 2
    for (i = 0; i <= (bitStreamHex.length - 2); i += 2) {
        input_8b6t.push(bitStreamHex.substr(i, 2));
    }

    console.log(input_8b6t);
}

function addExplanation() {

    var exp_2b1q = "In this type of encoding mBnL m =2, n =1, and L = 4 (quaternary) </br>"
        + "Uses data patterns of size 2 and encodes the 2-bit patterns as one signal element belonging to a four-level signal using the mapping table sown below </br>"
        + "<br> 1. The incoming data stream is split into 2-bit patterns.<br> 2. This 2-bit pattern is then converted into a 1 signal-bit pattern but using 4 voltage levels -3V, -1V, 1V and 3V looking at the previous signal level also<br><br>"
    + "The mapping table used is shown below </br>";

    var img_2b1q = "images/table_2b1q.jpg";

    var exp_8b6t = "In this type of encoding mBnL m = 8, n =6, and L = 3 (ternary) </br>" + "The idea is to encode a pattern of 8 bits as a pattern of 6 signal elements, where the signal has three levels (ternary) </br>" +
        "<br> 1. The incoming data stream is split into 8-bit patterns. <br> 2. This 8-bit pattern is then converted into a 6 signal-bit pattern but using three voltage levels -V, 0 and V volts, so each 8-bit pattern has a unique 6T code<br><br> For example the bit pattern 0000 0000 (0x00) uses the code +-00+- and 0000 1110 (0x0E) uses the code -+0-0+. </br><br>"
        + "The mapping table used is shown below </br>";

    var img_8b6t = "images/table_8b6t.png";

    if (selected_encoding === '2B1Q') {
        document.getElementById('explanation').innerHTML = exp_2b1q;
        document.getElementById('table').src = img_2b1q;
    }
    else {
        document.getElementById('explanation').innerHTML = exp_8b6t;
        document.getElementById('table').src = img_8b6t;
    }


}