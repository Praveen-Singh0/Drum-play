var Length = document.querySelectorAll(".drum").length; // this is for taking numbers (length of .drum class)

for(var i = 0; i<=Length; i++)  //and i will go upto your total .drum class length (kitne hein)
{
    //from here key presss
    document.getElementsByClassName("drum")[i].addEventListener("keydown" , function(event) {
    //get class .drum and [i=numbers, drum[0]= w wali key] )

        makesound(event.key); //makesound function call hoga, at the time key press hogi("keydown")

        buttonAnimation(event.key); //Animation function. (event.key = "w","s","a"....)ok!

    });


//from here mouse pointer press 
    document.getElementsByClassName("drum")[i].addEventListener("click" , function()
    {
        var action = this.innerHTML; // innerHTML me jitne v drum class hein uske andar ane wale sare string "w","a","s" 

        makesound(action); // makesound function run at the time innerHTML ke string match ho gye.

        buttonAnimation(action); // Animation function also run

    });   
    

}



 function makesound(key) 
 {
    switch (key) {
        case "w":      // innerHTML me "w" sring jiske pass hogi wo play
                var audio1 = new Audio('sounds/crash.mp3');
                audio1.play();
            break;
       
        case "a":
                var audio2 = new Audio('sounds/kick-bass.mp3');
                audio2.play();
            break;
        case "s":
                var audio3 = new Audio('sounds/snare.mp3');
                audio3.play();
            break;
        case "d":
                var audio4 = new Audio('sounds/tom-1.mp3');
                audio4.play();
            break;
        case "j":
                var audio5 = new Audio('sounds/tom-2.mp3');
                audio5.play();
            break;
        case "k":
                var audio6 = new Audio('sounds/tom-3.mp3');
                audio6.play();
            break;
        case "l":
                var audio7 = new Audio('sounds/tom-4.mp3');
                audio7.play();
            break;
       
        default: console.log(action);
            break;
    }
 }



function buttonAnimation(currentKey){  // innerHTML me jo key("w", "s"..) heinm that are in currentkey
    var activeButton = document.querySelector("." + currentKey); // .w .a .s .d etc

    activeButton.classList.add("pressed"); // 

    setTimeout(function()
    {
        activeButton.classList.remove("pressed");
    }, 100);

 }





