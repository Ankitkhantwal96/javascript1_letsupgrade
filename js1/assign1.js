console.log(1 + "2" + "2");
console.log(1 +  +"2" + "2");
console.log(1 +  -"1" + "2");
console.log(+"1" + "1" + "2");
console.log("A" - "B" + "2");
console.log("A" - "B" + 2);

//output:

// 122 here string is concatinate becoz of + operator
//  32 here first 2 will concanate with 1 like this 12 but becoz of other + operator it will treat 2 as int type and add it with 1
// and other operator will work as concanate
//  02 same with this - operator will as arithematic operator and it will get subtracted
//  112 here all + operator act as concatenation operator
//  NaN2 here we can't use - operator because string dont subtract from each other only numbers can. and 2 is concatnate as + operator ia there as concatination operator. 
//  NaN same reason for this one.


var marks=100;
if (marks>90)
{
    console.log("AA");
}

if (marks>80 || marks<=90) 
{       
console.log("AB");
}
if(marks>70  || marks<=80){      
    console.log("BB");
  }

 if(marks>60 || marks<=70){
     console.log("BC");
 }
 if(marks>50 || marks<=60){
     console.log("CC");
 }
     if(marks>40 || marks<=50 ){
           console.log("CD");
 }
 if(marks>30 || marks<=40 ){
     console.log("DD");
 }
     if( marks<=30 || marks>30){
        console.log("FF");
    }



