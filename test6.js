function test6(input) {
    let finalArr = [];
    for (const word of input.split(` `)) {
        if (word.length > 1) {
            if (word[0] === `#`) {
                finalArr.push(word.substring(1, word.length));
            }
        }
    }
    let pattern = (/^[A-Za-z]+$/);
    for (let finalWord of finalArr) {
        if (finalWord.match(pattern)) {
            console.log(finalWord);
        }

    }

   
}
test6('The symbol # is known #vario5usly in English-speaking #regions as the #number sign')
