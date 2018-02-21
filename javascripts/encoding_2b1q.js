var input = ["00","11","01","10","01"];
var x1 = [];
var y1 = [];
var i, j, k;


// Replace 5 by no of input
x1.push(0);


for(i = 1; i < 5; ++i){
	x1.push(i);
	x1.push(i);
}


x1.push(5);


var previouslevel=1; // Initial positive level

for(i=0;i<5;++i){
  if(previouslevel==1){
    if(input[i]=="00"){
      y1.push(1);y1.push(1);
    }
    if(input[i]=="01"){
      y1.push(3);y1.push(3);
    }
    if(input[i]=="10"){
      y1.push(-1);y1.push(-1);previouslevel=-1;
    }
    if(input[i]=="11"){
      y1.push(-3);y1.push(-3);previouslevel=-1;
    }
  }
  else{
    if(input[i]=="00"){
      y1.push(-1);y1.push(-1);
    }
    if(input[i]=="01"){
      y1.push(-3);y1.push(-3);
    }
    if(input[i]=="10"){
      y1.push(1);y1.push(1);previouslevel=1;
    }
    if(input[i]=="11"){
      y1.push(3);y1.push(3);previouslevel=1;
    }
  }
}
