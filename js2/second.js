
//1. program

const clothes=['jacket','t-shirt'];
clothes.length=0;
 console.log(clothes[0]);


 //output:
 //undefined because length of array always starts with 1 not zero


 //2. program to find out the sum of array elements
var arr= [1,4,6,5,6,7];
var sum=0;
for(var i=0; i < arr.length; i++)
{   
   var sum=sum+arr[i];
}
console.log(sum);