#include <bits/stdc++.h>
#define pb push_back
#define mp make_pair
#define f(i,a,b) for(int (i)=(a);(i)<=(b);++i)
using namespace std;
typedef long long ll;
string aa;

// converting integer to hexadecimal
void dd(int n)
{   
    aa="";
    // char array to store hexadecimal number
    char hexaDeciNum[100];
     
    // counter for hexadecimal number array
    int i = 0;
    while(n!=0)
    {   
        // temporary variable to store remainder
        int temp  = 0;
         
        // storing remainder in temp variable.
        temp = n % 16;
         
        // check if temp < 10
        if(temp < 10)
        {
            hexaDeciNum[i] = temp + 48;
            i++;
        }
        else
        {
            hexaDeciNum[i] = temp + 55;
            i++;
        }
         
        n = n/16;
    }
     
    // printing hexadecimal number array in reverse order
    if(i==0)aa="00";
    if(i==1){
        char x='0',y=hexaDeciNum[0];
        aa.pb(x);
        aa.pb(y);
    }
    if(i==2){
        char x=hexaDeciNum[1],y=hexaDeciNum[0];
        aa.pb(x);
        aa.pb(y);
    }
}

// assigning '+' to +1 and '-' to -1
int foo(char x){
    if(x=='+')return 1;
    if(x=='-')return -1;
    return 0;
}
int main(){
    ios_base::sync_with_stdio(false);
    cin.tie(NULL); 

	// reading the file and storing it in Map (data structure in STL)
    FILE * input;
    input=fopen("source.txt","r");
    char s1[10000],s2[10000];
    map <string,string> a;
    while(fscanf(input,"%s%s",s1,s2)==2){
        if(strlen(s2)<strlen(s1))
        a[s2]=s1;
        else
           a[s1]=s2; 
    }
    fclose(input);

	// making an iterator for the Map
    map <string,string> ::iterator it;
    for(int i=0;i<256;++i){
        dd(i);
        string pp=a[aa];

		// JS script will be printed in the terminal
        cout<<"\telse if(p[i]==\""<<aa<<"\"){\n";
        cout<<"\t\tvar a1=<<"<<foo(pp[0])<<",a2="<<foo(pp[1])<<",a3="<<foo(pp[2])<<",a4="<<foo(pp[3])<<",a5="<<foo(pp[4])<<",a6="<<foo(pp[5])<<",r1=a1+a2+a3+a4+a5+a6;\n";
        cout<<"\t\tif(last==0){\n";
        cout<<"\t\t\tif(r1==1){last=1;}\n";
        cout<<"\t\t\ty1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);\n";
        cout<<"\t\t}\n";
        cout<<"\t\telse if(r1){\n";
        cout<<"\t\t\ta1=-1*a1;a2=-1*a2;a3=-1*a3;a4=-1*a4;a5=-1*a5;a6=-1*a6;last=0;\n";
        cout<<"\t\t\ty1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);\n";
        cout<<"\t\t}\n";
        cout<<"\t\telse{\n";
        cout<<"\t\t\tlast=0;\n";
        cout<<"\t\t\ty1.push(a1);y1.push(a1);y1.push(a2);y1.push(a2);y1.push(a3);y1.push(a3);y1.push(a4);y1.push(a4);y1.push(a5);y1.push(a5);y1.push(a6);y1.push(a6);\n";
        cout<<"\t\t}\n";
        cout<<"\t}\n";
    }
    return 0;
}
