var drums=document.querySelectorAll(".drum");
for(var i=0;i<drums.length;i++)
drums[i].addEventListener("click",function ()
{
    // this.style.color="white";
    var buttonInnerHTML=this.innerHTML;
    playRequiredSound(buttonInnerHTML);
    animate(buttonInnerHTML);
    
});
// var sound=new Audio("sounds/tom-1.mp3");
document.addEventListener("keypress",function(event){
    playRequiredSound(event.key);
    animate(event.key);
});
function playRequiredSound(sound)
{
    switch(sound)
    {
        case 'w':
           var tom1=new Audio("sounds/tom-1.mp3");
           tom1.play();
        break;
        case 'a':
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
        break;
        case 's':
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
        break;
        case 'd':
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
        break;
        case 'j':
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
        break;
        case 'k':
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
        break;
        case 'l':
            var kickBass=new Audio("sounds/kick-bass.mp3");
            kickBass.play();
        break;
        default:
            console.log(sound);
    }
}

function animate(pressedkey)
{
    buttonPressed=document.querySelector("."+pressedkey);
    buttonPressed.classList.add("pressed");
    setTimeout(function(){
        buttonPressed.classList.remove("pressed");
    },100)
}