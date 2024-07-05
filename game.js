var gamePattern=[];
var buttonColours=["red","blue","green","yellow"];                                                                                                                                       
var userClickedPattern=[];
var level=0;

function animatedSound(colour) {
    $('#'+colour).fadeIn(100).fadeOut(100).fadeIn(100);
    var audio=new Audio("sounds/"+colour+".mp3");
    audio.play();  
}
function nextSequence() {
    userClickedPattern=[];
    level+=1;
    $("h1").text("Level "+level);
    var randomNumber=Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    console.log(gamePattern);
    animatedSound(randomChosenColour);
}
$(".btn").click(function (event) {
    var userChosenColour= event.target.id;
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
    animatedSound(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
})
$("body").keypress(function(){
    nextSequence();
});
function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel]===userClickedPattern[currentLevel]) {
        console.log("success");
        if (gamePattern.length===userClickedPattern.length) {
            setTimeout(function(){
                nextSequence();
            },3000);
        }
    }else{
        console.log("wrong");
        reset();
    }
}
function reset() {
    $("body").addClass("game-over");
    $("h1").text("Game Over");
    setTimeout(function(){
    $("h1").text("Press Any Key to Restart");
    $("body").removeClass("game-over");    
    })
    level=0;
    gamePattern=[];
}