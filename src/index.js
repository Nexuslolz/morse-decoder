const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let sentence = []
    for(i = 0; i < expr.length; i++){
        sentence.push(expr.slice(i, i + 2))
        i += 1;
    }
    
    let morseResult = []
    for(i = 0; i < sentence.length; i++){
        if(sentence[i] === '10'){
            morseResult.push('.')
        } else if(sentence[i] === '11'){
            morseResult.push('-')
        } else if(sentence[i] === '**'){
            morseResult.push('**')
        } else if(sentence[i] === '00'){
            morseResult.push('')
        }
    }
    let words = []
    for(i = 0; i < morseResult.length; i++){
        if(morseResult[i] === '**'){
            words.push(' ')
            i += 4;
        } else {
        words.push(morseResult.slice(i, i + 5).join(''))
        i += 4;
        }
    }
    let result = []
    for(i = 0; i < words.length; i++){
        for(let key in MORSE_TABLE){
            if(words[i] === key){
                result.push(Object.values(MORSE_TABLE[key]))
            } else if(words[i] === ' '){
                result.push(' ')
            }
  }
  }
  let output = result.join('')
  
  
  return output.replace(/\s+/g,' ');
}

module.exports = {
    decode
}