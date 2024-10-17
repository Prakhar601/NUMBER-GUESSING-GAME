const number =  Math.trunc(Math.random()*20)+1;
 let score=20;
 let highscore=0;
document.querySelector('.check').addEventListener(
    'click',function() {
        const guess = Number((document.querySelector('.guess').value));
        console.log(guess);
        if (!guess) {
            document.querySelector('.message').textContent="NO NUMBER GIVEN MORON!🤬"
        }else if (guess===number) {
            document.querySelector('.message').textContent = "YAY UH GOT THE RIGHT ONE🥳";
            document.querySelector('.number').textContent=number;
            document.querySelector('body').style.
            backgroundColor ='#60b347';
            document.querySelector('.number').style.width="30rem";
            if(score>highscore) {
                highscore=score;
                document.querySelector('.highscore').textContent=highscore;
            }
        }else if (guess>number){
            if (score>1) {document.querySelector('.message').textContent="TOO HIGH😒";
                score--;
                document.querySelector('.score').textContent =score;
            }else {
                document.querySelector('.message').textContent="UH LOST THE GAME😂";
            }
        }else if (guess<number){
            if (score>1) {document.querySelector('.message').textContent="TOO LOW😒";
                score--;
                document.querySelector('.score').textContent =score;
            }else {
                document.querySelector('.message').textContent="UH LOST THE GAME😂";
            }
        }    
 });
 document.querySelector('.again').addEventListener
 ('click',function() {
        score=20;
        const number =  Math.trunc(Math.random()*20)+1;
        document.querySelector('.message').textContent="START GUESSING...";
        document.querySelector('.score').textContent =score;
        document.querySelector('.number').textContent="?";
        document.querySelector('.guess').value="";
        document.querySelector('body').style.
        backgroundColor ='#222';
        document.querySelector('.number').style.width="15rem";
});
