var data_2b1q;


function encoding_2b1q(input_2b1q) {
    var x1 = [];
    var y1 = [];
    var i, j, k;


    x1.push(0);

	// Setting up the x coordinates
    for(i = 1; i < input_2b1q.length; ++i){
        x1.push(i);
        x1.push(i);
    }


    x1.push(input_2b1q.length);


    var previouslevel=1; // Initial positive level

    
	// Depending on the input setting up y coordinates
	// According to the table values are pushed into y1[] and previouslevel is switched
	for(i = 0; i < input_2b1q.length; ++i){
        if(previouslevel === 1){
            if(input_2b1q[i] == "00"){
                y1.push(1);y1.push(1);
            }
            if(input_2b1q[i] == "01"){
                y1.push(3);y1.push(3);
            }
            if(input_2b1q[i]=="10"){
                y1.push(-1);y1.push(-1);previouslevel=-1;
            }
            if(input_2b1q[i]=="11"){
                y1.push(-3);y1.push(-3);previouslevel=-1;
            }
        }
        else{
            if(input_2b1q[i]=="00"){
                y1.push(-1);y1.push(-1);
            }
            if(input_2b1q[i]=="01"){
                y1.push(-3);y1.push(-3);
            }
            if(input_2b1q[i]=="10"){
                y1.push(1);y1.push(1);previouslevel=1;
            }
            if(input_2b1q[i]=="11"){
                y1.push(3);y1.push(3);previouslevel=1;
            }
        }
    }

	// Plotting the graph    
	var trace1 = {
        x: x1,
        y: y1,
        type: 'scatter'
    };


    data_2b1q = [trace1];

}


