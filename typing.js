const words = "  Small habits have a profound impact on our lives. Whether it's reading a few pages daily, taking short walks, or practicing mindfulness for a few minutes, these tiny actions compound over time. They shape our identity and lead to significant transformations without overwhelming us. The key is consistency—showing up every day, even if the effort seems minimal. Over time, these small changes create a ripple effect, making us healthier, more knowledgeable, and more disciplined. In the end, it's not about making huge leaps but about taking small, consistent steps toward growth.".split(" ");
const wordsCount = words.length;


function addClass(el,name){
    el.className += ' '+name;
}
function removeClass(el,name){
    el.className = el.className.replace(name,'');
}


function randomWords() {
    const randomIndex = Math.ceil(Math.random() * wordsCount);
    return words[randomIndex-1];
}

function formatWord(word) {
    return `<div class="word">
        <span class="letter">${word.split('').join('</span><span class="letter">')}</span>
    </div>`;
}

//in the above part I create a new div with a class word 


function newGame(){
    document.getElementById("words").innerHTML = ' ';
    for(let i = 0; i < 200; i++){
        document.getElementById("words").innerHTML += formatWord(randomWords());
    }
    addClass(document.querySelector(".word"),'current');
    addClass(document.querySelector(".letter"),'current');
}

document.getElementById("game").addEventListener('keyup',ev=>{
    const key = ev.key;
    const currentletter = document.querySelector('.letter.current');
    const expected = currentletter.innerHTML;
    const isLetter = key.length === 1 && key !== ' ';
    console.log({key,expected});

    if(isLetter){
        if(currentletter){
            alert(key == expected?'ok':'wrong');
        }
    }
})


newGame();