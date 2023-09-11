function emojiDetector(arr) {

    let text = arr.shift();

    let regexForEmoji = /([\::]{2}|[**]{2})[A-Z][a-z]{2,}\1/gm;
    let regexForDig = /\d/gm;

    let matchedDig = text.match(regexForDig)
    let coolThreshold = matchedDig.reduce((a, b) => a * b)

    let matchedEmoji = text.match(regexForEmoji)
    let coolEmoji = matchedEmoji.filter(e => {
        let sum = 0;
        e = e.substring(2, e.length - 2)
        e = e.split("");
        e.map(ch => {
            sum += ch.charCodeAt();
        })
        return sum >= coolThreshold
    });

    console.log(`Cool threshold: ${coolThreshold}`);
    console.log(`${matchedEmoji.length} emojis found in the text. The cool ones are:`);
    for (let emoji of coolEmoji) {
        console.log(emoji);
    }

}
emojiDetector(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."])