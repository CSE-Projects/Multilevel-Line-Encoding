
var data_8b6t;

function encoding_8b6t(input_8b6t) {

    var p = input_8b6t;

    var x1=[];

    var y1=[];

    var i,j,k;

    
	// Setting up the x coordinates
	x1.push(0);

    for(i=1;i<(6*p.length);++i){
        x1.push(i);x1.push(i);
    }

    x1.push(6*p.length);

    var last=0; // Initial last is 0

    
	// Setting up the y coordinates by pushing values according to the table 
	// According to the table values are pushed into y1[] and last is switched
	for(i=0;i<p.length;++i){
        if(p[i]=="00" && last==0){
            var a1=-1,a2=1,a3=0,a4=0,a5=-1,a6=1;if((a1+a2+a3+a4+a5+a6)==1){last=1;}
            y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
			console.log(y1);        
	}
            else if(p[i]=="00"){
            var a1=-1,a2=1,a3=0,a4=0,a5=-1,a6=1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="01"){
            var a1=0,a2=-1,a3=1,a4=-1,a5=1,a6=0,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="02"){
            var a1=0,a2=-1,a3=1,a4=0,a5=-1,a6=1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="03"){
            var a1=0,a2=-1,a3=1,a4=1,a5=0,a6=-1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="04"){
            var a1=-1,a2=1,a3=0,a4=1,a5=0,a6=-1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="05"){
            var a1=1,a2=0,a3=-1,a4=-1,a5=1,a6=0,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="06"){
            var a1=1,a2=0,a3=-1,a4=0,a5=-1,a6=1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="07"){
            var a1=1,a2=0,a3=-1,a4=1,a5=0,a6=-1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="08"){
            var a1=-1,a2=1,a3=0,a4=0,a5=1,a6=-1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="09"){
            var a1=0,a2=-1,a3=1,a4=1,a5=-1,a6=0,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="0A"){
            var a1=0,a2=-1,a3=1,a4=0,a5=1,a6=-1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="0B"){
            var a1=0,a2=-1,a3=1,a4=-1,a5=0,a6=1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="0C"){
            var a1=-1,a2=1,a3=0,a4=-1,a5=0,a6=1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="0D"){
            var a1=1,a2=0,a3=-1,a4=1,a5=-1,a6=0,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="0E"){
            var a1=1,a2=0,a3=-1,a4=0,a5=1,a6=-1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="0F"){
            var a1=1,a2=0,a3=-1,a4=-1,a5=0,a6=1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="10"){
            var a1=0,a2=-1,a3=-1,a4=1,a5=0,a6=1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="11"){
            var a1=-1,a2=0,a3=-1,a4=0,a5=1,a6=1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="12"){
            var a1=-1,a2=0,a3=-1,a4=1,a5=0,a6=1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="13"){
            var a1=-1,a2=0,a3=-1,a4=1,a5=1,a6=0,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="14"){
            var a1=0,a2=-1,a3=-1,a4=1,a5=1,a6=0,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="15"){
            var a1=-1,a2=-1,a3=0,a4=0,a5=1,a6=1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="16"){
            var a1=-1,a2=-1,a3=0,a4=1,a5=0,a6=1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="17"){
            var a1=-1,a2=-1,a3=0,a4=1,a5=1,a6=0,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="18"){
            var a1=-1,a2=1,a3=0,a4=-1,a5=1,a6=0,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="19"){
            var a1=1,a2=-1,a3=0,a4=-1,a5=1,a6=0,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="1A"){
            var a1=-1,a2=1,a3=1,a4=-1,a5=1,a6=0,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="1B"){
            var a1=1,a2=0,a3=0,a4=-1,a5=1,a6=0,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="1C"){
            var a1=1,a2=0,a3=0,a4=1,a5=-1,a6=0,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="1D"){
            var a1=-1,a2=1,a3=1,a4=1,a5=-1,a6=0,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="1E"){
            var a1=1,a2=-1,a3=0,a4=1,a5=-1,a6=0,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="1F"){
            var a1=-1,a2=1,a3=0,a4=1,a5=-1,a6=0,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="20"){
            var a1=-1,a2=1,a3=1,a4=-1,a5=0,a6=0,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="21"){
            var a1=1,a2=0,a3=0,a4=1,a5=-1,a6=-1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="22"){
            var a1=-1,a2=1,a3=0,a4=-1,a5=1,a6=1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="23"){
            var a1=1,a2=-1,a3=0,a4=-1,a5=1,a6=1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="24"){
            var a1=1,a2=-1,a3=0,a4=1,a5=0,a6=0,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="25"){
            var a1=-1,a2=1,a3=0,a4=1,a5=0,a6=0,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="26"){
            var a1=1,a2=0,a3=0,a4=-1,a5=0,a6=0,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="27"){
            var a1=-1,a2=1,a3=1,a4=1,a5=-1,a6=-1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="28"){
            var a1=0,a2=1,a3=1,a4=-1,a5=0,a6=-1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="29"){
            var a1=1,a2=0,a3=1,a4=0,a5=-1,a6=-1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="2A"){
            var a1=1,a2=0,a3=1,a4=-1,a5=0,a6=-1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="2B"){
            var a1=1,a2=0,a3=1,a4=-1,a5=-1,a6=0,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="2C"){
            var a1=0,a2=1,a3=1,a4=-1,a5=-1,a6=0,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="2D"){
            var a1=1,a2=1,a3=0,a4=0,a5=-1,a6=-1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="2E"){
            var a1=1,a2=1,a3=0,a4=-1,a5=0,a6=-1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="2F"){
            var a1=1,a2=1,a3=0,a4=-1,a5=-1,a6=0,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="30"){
            var a1=1,a2=-1,a3=0,a4=0,a5=-1,a6=1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="31"){
            var a1=0,a2=1,a3=-1,a4=-1,a5=1,a6=0,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="32"){
            var a1=0,a2=1,a3=-1,a4=0,a5=-1,a6=1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="33"){
            var a1=0,a2=1,a3=-1,a4=1,a5=0,a6=-1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="34"){
            var a1=1,a2=-1,a3=0,a4=1,a5=0,a6=-1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="35"){
            var a1=-1,a2=0,a3=1,a4=-1,a5=1,a6=0,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="36"){
            var a1=-1,a2=0,a3=1,a4=0,a5=-1,a6=1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="37"){
            var a1=-1,a2=0,a3=1,a4=1,a5=0,a6=-1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="38"){
            var a1=1,a2=-1,a3=0,a4=0,a5=1,a6=-1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="39"){
            var a1=0,a2=1,a3=-1,a4=1,a5=-1,a6=0,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="3A"){
            var a1=0,a2=1,a3=-1,a4=0,a5=1,a6=-1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="3B"){
            var a1=0,a2=1,a3=-1,a4=-1,a5=0,a6=1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="3C"){
            var a1=1,a2=-1,a3=0,a4=-1,a5=0,a6=1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="3D"){
            var a1=-1,a2=0,a3=1,a4=1,a5=-1,a6=0,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="3E"){
            var a1=-1,a2=0,a3=1,a4=0,a5=1,a6=-1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="3F"){
            var a1=-1,a2=0,a3=1,a4=-1,a5=0,a6=1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="40"){
            var a1=-1,a2=0,a3=0,a4=1,a5=0,a6=1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="41"){
            var a1=0,a2=-1,a3=0,a4=0,a5=1,a6=1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="42"){
            var a1=0,a2=-1,a3=0,a4=1,a5=0,a6=1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="43"){
            var a1=0,a2=-1,a3=0,a4=1,a5=1,a6=0,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="44"){
            var a1=-1,a2=0,a3=0,a4=1,a5=1,a6=0,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="45"){
            var a1=0,a2=0,a3=-1,a4=0,a5=1,a6=1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="46"){
            var a1=0,a2=0,a3=-1,a4=1,a5=0,a6=1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="47"){
            var a1=0,a2=0,a3=-1,a4=1,a5=1,a6=0,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="48"){
            var a1=0,a2=0,a3=1,a4=0,a5=0,a6=0,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="49"){
            var a1=1,a2=1,a3=-1,a4=0,a5=0,a6=0,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="4A"){
            var a1=1,a2=-1,a3=1,a4=0,a5=0,a6=0,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="4B"){
            var a1=-1,a2=1,a3=1,a4=0,a5=0,a6=0,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="4C"){
            var a1=0,a2=1,a3=-1,a4=0,a5=0,a6=0,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="4D"){
            var a1=1,a2=0,a3=-1,a4=0,a5=0,a6=0,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="4E"){
            var a1=0,a2=-1,a3=1,a4=0,a5=0,a6=0,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="4F"){
            var a1=-1,a2=0,a3=1,a4=0,a5=0,a6=0,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="50"){
            var a1=1,a2=-1,a3=-1,a4=1,a5=0,a6=1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="51"){
            var a1=-1,a2=1,a3=-1,a4=0,a5=1,a6=1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="52"){
            var a1=-1,a2=1,a3=-1,a4=1,a5=0,a6=1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="53"){
            var a1=-1,a2=1,a3=-1,a4=1,a5=1,a6=0,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="54"){
            var a1=1,a2=-1,a3=-1,a4=1,a5=1,a6=0,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="55"){
            var a1=-1,a2=-1,a3=1,a4=0,a5=1,a6=1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="56"){
            var a1=-1,a2=-1,a3=1,a4=1,a5=0,a6=1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="57"){
            var a1=-1,a2=-1,a3=1,a4=1,a5=1,a6=0,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="58"){
            var a1=-1,a2=-1,a3=0,a4=1,a5=1,a6=1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="59"){
            var a1=-1,a2=0,a3=-1,a4=1,a5=1,a6=1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="5A"){
            var a1=0,a2=-1,a3=-1,a4=1,a5=1,a6=1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="5B"){
            var a1=0,a2=-1,a3=-1,a4=0,a5=1,a6=1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="5C"){
            var a1=1,a2=-1,a3=-1,a4=0,a5=1,a6=1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="5D"){
            var a1=-1,a2=0,a3=0,a4=0,a5=1,a6=1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="5E"){
            var a1=0,a2=1,a3=1,a4=1,a5=-1,a6=-1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="5F"){
            var a1=0,a2=1,a3=1,a4=-1,a5=0,a6=0,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="60"){
            var a1=0,a2=1,a3=1,a4=0,a5=-1,a6=0,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="61"){
            var a1=1,a2=0,a3=1,a4=-1,a5=0,a6=0,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="62"){
            var a1=1,a2=0,a3=1,a4=0,a5=-1,a6=0,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="63"){
            var a1=1,a2=0,a3=1,a4=0,a5=0,a6=-1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="64"){
            var a1=0,a2=1,a3=1,a4=0,a5=0,a6=-1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="65"){
            var a1=1,a2=1,a3=0,a4=-1,a5=0,a6=0,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="66"){
            var a1=1,a2=1,a3=0,a4=0,a5=-1,a6=0,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="67"){
            var a1=1,a2=1,a3=0,a4=0,a5=0,a6=-1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="68"){
            var a1=0,a2=1,a3=1,a4=-1,a5=1,a6=-1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="69"){
            var a1=1,a2=0,a3=1,a4=1,a5=-1,a6=-1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="6A"){
            var a1=1,a2=0,a3=1,a4=-1,a5=1,a6=-1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="6B"){
            var a1=1,a2=0,a3=1,a4=-1,a5=-1,a6=1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="6C"){
            var a1=0,a2=1,a3=1,a4=-1,a5=-1,a6=1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="6D"){
            var a1=1,a2=1,a3=0,a4=1,a5=-1,a6=-1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="6E"){
            var a1=1,a2=1,a3=0,a4=-1,a5=1,a6=-1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="6F"){
            var a1=1,a2=1,a3=0,a4=-1,a5=-1,a6=1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="70"){
            var a1=0,a2=0,a3=0,a4=1,a5=1,a6=-1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="71"){
            var a1=0,a2=0,a3=0,a4=1,a5=-1,a6=1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="72"){
            var a1=0,a2=0,a3=0,a4=-1,a5=1,a6=1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="73"){
            var a1=0,a2=0,a3=0,a4=1,a5=0,a6=0,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="74"){
            var a1=0,a2=0,a3=0,a4=1,a5=0,a6=-1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="75"){
            var a1=0,a2=0,a3=0,a4=1,a5=-1,a6=0,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="76"){
            var a1=0,a2=0,a3=0,a4=-1,a5=0,a6=1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="77"){
            var a1=0,a2=0,a3=0,a4=-1,a5=1,a6=0,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="78"){
            var a1=1,a2=1,a3=1,a4=-1,a5=-1,a6=0,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="79"){
            var a1=1,a2=1,a3=1,a4=-1,a5=0,a6=-1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="7A"){
            var a1=1,a2=1,a3=1,a4=0,a5=-1,a6=-1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="7B"){
            var a1=0,a2=1,a3=1,a4=0,a5=-1,a6=-1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="7C"){
            var a1=-1,a2=0,a3=0,a4=-1,a5=1,a6=1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="7D"){
            var a1=-1,a2=0,a3=0,a4=1,a5=0,a6=0,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="7E"){
            var a1=1,a2=-1,a3=-1,a4=-1,a5=1,a6=1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="7F"){
            var a1=1,a2=-1,a3=-1,a4=1,a5=0,a6=0,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="80"){
            var a1=-1,a2=0,a3=0,a4=1,a5=-1,a6=1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="81"){
            var a1=0,a2=-1,a3=0,a4=-1,a5=1,a6=1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="82"){
            var a1=0,a2=-1,a3=0,a4=1,a5=-1,a6=1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="83"){
            var a1=0,a2=-1,a3=0,a4=1,a5=1,a6=-1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="84"){
            var a1=-1,a2=0,a3=0,a4=1,a5=1,a6=-1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="85"){
            var a1=0,a2=0,a3=-1,a4=-1,a5=1,a6=1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="86"){
            var a1=0,a2=0,a3=-1,a4=1,a5=-1,a6=1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="87"){
            var a1=0,a2=0,a3=-1,a4=1,a5=1,a6=-1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="88"){
            var a1=-1,a2=0,a3=0,a4=0,a5=1,a6=0,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="89"){
            var a1=0,a2=-1,a3=0,a4=1,a5=0,a6=0,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="8A"){
            var a1=0,a2=-1,a3=0,a4=0,a5=1,a6=0,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="8B"){
            var a1=0,a2=-1,a3=0,a4=0,a5=0,a6=1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="8C"){
            var a1=-1,a2=0,a3=0,a4=0,a5=0,a6=1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="8D"){
            var a1=0,a2=0,a3=-1,a4=1,a5=0,a6=0,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="8E"){
            var a1=0,a2=0,a3=-1,a4=0,a5=1,a6=0,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="8F"){
            var a1=0,a2=0,a3=-1,a4=0,a5=0,a6=1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="90"){
            var a1=1,a2=-1,a3=-1,a4=1,a5=-1,a6=1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="91"){
            var a1=-1,a2=1,a3=-1,a4=-1,a5=1,a6=1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="92"){
            var a1=-1,a2=1,a3=-1,a4=1,a5=-1,a6=1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="93"){
            var a1=-1,a2=1,a3=-1,a4=1,a5=1,a6=-1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="94"){
            var a1=1,a2=-1,a3=-1,a4=1,a5=1,a6=-1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="95"){
            var a1=-1,a2=-1,a3=1,a4=0,a5=0,a6=0,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="96"){
            var a1=-1,a2=-1,a3=1,a4=1,a5=-1,a6=1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="97"){
            var a1=-1,a2=-1,a3=1,a4=1,a5=1,a6=-1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="98"){
            var a1=1,a2=-1,a3=-1,a4=0,a5=1,a6=0,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="99"){
            var a1=-1,a2=1,a3=-1,a4=1,a5=0,a6=0,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="9A"){
            var a1=-1,a2=1,a3=-1,a4=0,a5=1,a6=0,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="9B"){
            var a1=-1,a2=1,a3=-1,a4=0,a5=0,a6=1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="9C"){
            var a1=1,a2=-1,a3=-1,a4=0,a5=0,a6=1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="9D"){
            var a1=-1,a2=-1,a3=1,a4=1,a5=0,a6=0,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="9E"){
            var a1=-1,a2=-1,a3=1,a4=0,a5=1,a6=0,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="9F"){
            var a1=-1,a2=-1,a3=1,a4=0,a5=0,a6=1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="A0"){
            var a1=-1,a2=1,a3=1,a4=0,a5=-1,a6=0,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="A1"){
            var a1=1,a2=-1,a3=1,a4=-1,a5=0,a6=0,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="A2"){
            var a1=1,a2=-1,a3=1,a4=0,a5=-1,a6=0,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="A3"){
            var a1=1,a2=-1,a3=1,a4=0,a5=0,a6=-1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="A4"){
            var a1=-1,a2=1,a3=1,a4=0,a5=0,a6=-1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="A5"){
            var a1=1,a2=1,a3=-1,a4=-1,a5=0,a6=0,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="A6"){
            var a1=1,a2=1,a3=-1,a4=0,a5=-1,a6=0,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="A7"){
            var a1=1,a2=1,a3=-1,a4=0,a5=0,a6=-1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="A8"){
            var a1=-1,a2=1,a3=1,a4=-1,a5=1,a6=-1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="A9"){
            var a1=1,a2=-1,a3=1,a4=1,a5=-1,a6=-1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="AA"){
            var a1=1,a2=-1,a3=1,a4=-1,a5=1,a6=-1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="AB"){
            var a1=1,a2=-1,a3=1,a4=-1,a5=-1,a6=1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="AC"){
            var a1=-1,a2=1,a3=1,a4=-1,a5=-1,a6=1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="AD"){
            var a1=1,a2=1,a3=-1,a4=1,a5=-1,a6=-1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="AE"){
            var a1=1,a2=1,a3=-1,a4=-1,a5=1,a6=-1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="AF"){
            var a1=1,a2=1,a3=-1,a4=-1,a5=-1,a6=1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="B0"){
            var a1=1,a2=0,a3=0,a4=0,a5=-1,a6=0,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="B1"){
            var a1=0,a2=1,a3=0,a4=-1,a5=0,a6=0,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="B2"){
            var a1=0,a2=1,a3=0,a4=0,a5=-1,a6=0,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="B3"){
            var a1=0,a2=1,a3=0,a4=0,a5=0,a6=-1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="B4"){
            var a1=-1,a2=0,a3=0,a4=0,a5=0,a6=-1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="B5"){
            var a1=0,a2=0,a3=1,a4=-1,a5=0,a6=0,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="B6"){
            var a1=0,a2=0,a3=1,a4=0,a5=-1,a6=0,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="B7"){
            var a1=0,a2=0,a3=1,a4=0,a5=0,a6=-1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="B8"){
            var a1=1,a2=0,a3=0,a4=-1,a5=1,a6=-1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="B9"){
            var a1=0,a2=1,a3=0,a4=1,a5=-1,a6=-1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="BA"){
            var a1=0,a2=1,a3=0,a4=-1,a5=1,a6=-1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="BB"){
            var a1=0,a2=1,a3=0,a4=-1,a5=-1,a6=1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="BC"){
            var a1=1,a2=0,a3=0,a4=-1,a5=-1,a6=1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="BD"){
            var a1=0,a2=0,a3=1,a4=1,a5=-1,a6=-1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="BE"){
            var a1=0,a2=0,a3=1,a4=-1,a5=1,a6=-1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="BF"){
            var a1=0,a2=0,a3=1,a4=-1,a5=-1,a6=1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="C0"){
            var a1=-1,a2=1,a3=0,a4=1,a5=-1,a6=1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="C1"){
            var a1=0,a2=-1,a3=1,a4=-1,a5=1,a6=1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="C2"){
            var a1=0,a2=-1,a3=1,a4=1,a5=-1,a6=1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="C3"){
            var a1=0,a2=-1,a3=1,a4=1,a5=1,a6=-1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="C4"){
            var a1=-1,a2=1,a3=0,a4=1,a5=1,a6=-1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="C5"){
            var a1=1,a2=0,a3=-1,a4=-1,a5=1,a6=1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="C6"){
            var a1=1,a2=0,a3=-1,a4=1,a5=-1,a6=1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="C7"){
            var a1=1,a2=0,a3=-1,a4=1,a5=1,a6=-1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="C8"){
            var a1=-1,a2=1,a3=0,a4=0,a5=1,a6=0,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="C9"){
            var a1=0,a2=-1,a3=1,a4=1,a5=0,a6=0,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="CA"){
            var a1=0,a2=-1,a3=1,a4=0,a5=1,a6=0,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="CB"){
            var a1=0,a2=-1,a3=1,a4=0,a5=0,a6=1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="CC"){
            var a1=-1,a2=1,a3=0,a4=0,a5=0,a6=1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="CD"){
            var a1=1,a2=0,a3=-1,a4=1,a5=0,a6=0,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="CE"){
            var a1=1,a2=0,a3=-1,a4=0,a5=1,a6=0,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="CF"){
            var a1=1,a2=0,a3=-1,a4=0,a5=0,a6=1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="D0"){
            var a1=1,a2=-1,a3=0,a4=1,a5=-1,a6=1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="D1"){
            var a1=0,a2=1,a3=-1,a4=-1,a5=1,a6=1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="D2"){
            var a1=0,a2=1,a3=-1,a4=1,a5=-1,a6=1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="D3"){
            var a1=0,a2=1,a3=-1,a4=1,a5=1,a6=-1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="D4"){
            var a1=1,a2=-1,a3=0,a4=1,a5=1,a6=-1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="D5"){
            var a1=-1,a2=0,a3=1,a4=-1,a5=1,a6=1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="D6"){
            var a1=-1,a2=0,a3=1,a4=1,a5=-1,a6=1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="D7"){
            var a1=-1,a2=0,a3=1,a4=1,a5=1,a6=-1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="D8"){
            var a1=1,a2=-1,a3=0,a4=0,a5=1,a6=0,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="D9"){
            var a1=0,a2=1,a3=-1,a4=1,a5=0,a6=0,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="DA"){
            var a1=0,a2=1,a3=-1,a4=0,a5=1,a6=0,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="DB"){
            var a1=0,a2=1,a3=-1,a4=0,a5=0,a6=1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="DC"){
            var a1=1,a2=-1,a3=0,a4=0,a5=0,a6=1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="DD"){
            var a1=-1,a2=0,a3=1,a4=1,a5=0,a6=0,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="DE"){
            var a1=-1,a2=0,a3=1,a4=0,a5=1,a6=0,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="DF"){
            var a1=-1,a2=0,a3=1,a4=0,a5=0,a6=1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="E0"){
            var a1=-1,a2=1,a3=1,a4=0,a5=-1,a6=1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="E1"){
            var a1=1,a2=-1,a3=-1,a4=1,a5=1,a6=0,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="E2"){
            var a1=1,a2=-1,a3=1,a4=0,a5=-1,a6=1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="E3"){
            var a1=1,a2=-1,a3=1,a4=1,a5=0,a6=-1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="E4"){
            var a1=-1,a2=1,a3=1,a4=1,a5=0,a6=-1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="E5"){
            var a1=1,a2=1,a3=-1,a4=-1,a5=1,a6=0,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="E6"){
            var a1=1,a2=1,a3=-1,a4=0,a5=-1,a6=1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="E7"){
            var a1=1,a2=1,a3=-1,a4=1,a5=0,a6=-1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="E8"){
            var a1=-1,a2=1,a3=1,a4=0,a5=1,a6=-1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="E9"){
            var a1=1,a2=-1,a3=1,a4=1,a5=-1,a6=0,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="EA"){
            var a1=1,a2=-1,a3=1,a4=0,a5=1,a6=-1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="EB"){
            var a1=1,a2=-1,a3=1,a4=-1,a5=0,a6=1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="EC"){
            var a1=-1,a2=1,a3=1,a4=-1,a5=0,a6=1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="ED"){
            var a1=1,a2=1,a3=-1,a4=1,a5=-1,a6=0,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="EE"){
            var a1=1,a2=1,a3=-1,a4=0,a5=1,a6=-1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="EF"){
            var a1=1,a2=1,a3=-1,a4=-1,a5=0,a6=1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="F0"){
            var a1=1,a2=0,a3=0,a4=0,a5=-1,a6=1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="F1"){
            var a1=0,a2=1,a3=0,a4=-1,a5=1,a6=0,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="F2"){
            var a1=0,a2=1,a3=0,a4=0,a5=-1,a6=1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="F3"){
            var a1=0,a2=1,a3=0,a4=1,a5=0,a6=-1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="F4"){
            var a1=1,a2=0,a3=0,a4=1,a5=0,a6=-1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="F5"){
            var a1=0,a2=0,a3=1,a4=-1,a5=1,a6=0,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="F6"){
            var a1=0,a2=0,a3=1,a4=0,a5=-1,a6=1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="F7"){
            var a1=0,a2=0,a3=1,a4=1,a5=0,a6=-1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="F8"){
            var a1=1,a2=0,a3=0,a4=0,a5=1,a6=-1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="F9"){
            var a1=0,a2=1,a3=0,a4=1,a5=-1,a6=0,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="FA"){
            var a1=0,a2=1,a3=0,a4=0,a5=1,a6=-1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="FB"){
            var a1=0,a2=1,a3=0,a4=-1,a5=0,a6=1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="FC"){
            var a1=1,a2=0,a3=0,a4=-1,a5=0,a6=1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="FD"){
            var a1=0,a2=0,a3=1,a4=1,a5=-1,a6=0,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="FE"){
            var a1=0,a2=0,a3=1,a4=0,a5=1,a6=-1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }
        else if(p[i]=="FF"){
            var a1=0,a2=0,a3=1,a4=-1,a5=0,a6=1,r1=a1+a2+a3+a4+a5+a6;
            if(last==0){
                if(r1==1){last=1;}
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else if(r1){
                a1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
            else{
                last=0;
                y1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);
            }
        }

    }

	// Plotting the graph
    var trace2 = {
        x: x1,
        y: y1,
        type: 'scatter'
    };

    data_8b6t = [trace2];
}
