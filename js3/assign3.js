var driver_age=34;
if( driver_age<18)
{
    alert("Not legal age to drive");
}
if( driver_age>=18)
{
    alert("Drive safe");
}


var library=[
{
    author:'Bill Gates',
    title:'The Road Ahead',
    readingStatus:true

},
{
    author:'Steve Jobs',
    title:'Waltor Issacson',
    readingStatus:true

},
{
    author:'Suzanne Collins',
    title:'Mockingjay: The Final Book of The Hunger Games',
    readingStatus:false

}
];

if(library[0].readingStatus==true)
{
    console.log("Already read 'Bill Gates' by The Roaad Accident");
} 
if(library[1].readingStatus==true)
{
    console.log("Already read 'steve jobs' by walter isaacson");
}
if(library[2].readingStatus==false)
{
    console.log("You still need to read 'Mockingjay: The final book of the hunger games'");
}



