//Object character.

Character = {

    x: 100,
    y: 100,

}

function movement(userInput){

    if(userInput.key == 'd' && Character.x <= 800){
        Character.x += 10;
        mainGame();
    }
    else if(userInput.key == 's' && Character.y <= 600){
        Character.y += 10;
        mainGame();
    }
    else if(userInput.key == 'a' && Character.x > 0){
        Character.x -= 10;
        mainGame();
    }     
    else if(userInput.key == 'w' && Character.y > 0){
        Character.y -= 10;
        mainGame();
    }     
}

function mainGame() {

    ctx.clearRect(0, 0, 800, 600);
    ctx.save();
    ctx.fillStyle = 'rgb(0, 200, 0)';
    ctx.fillRect(0, 0, 800, 600);
    ctx.drawImage(characterImg, Character.x, Character.y);
    ctx.translate(Character.x, Character.y);
    ctx.restore();

}


window.onload = function(){
    
    //Canvas object creation.
    let input = document.querySelector('input');
    worldMap = document.getElementById("worldMap");
    if(worldMap.getContext) {
        ctx = worldMap.getContext('2d');
    }else{
        alert("no canvas");
    }
    
    characterImg = new Image();
    characterImg.src = 'assets/imgs/mario.png';

    input.addEventListener('keydown', movement); 

}