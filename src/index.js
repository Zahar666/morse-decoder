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
    let str = ''
    for (let i = 0; i < expr.length; i++) {
      if (expr[i] == '*') {
        if (expr[i + 1] != '*') {
          str += ',!!!'
        } else {
          continue
        }
      }
      if (i % 10 == 0 && i != 0) {
          str += ','
      } 
      if (expr[i] == 1) {
          if (expr[i + 1] == 0) {
            str += '.'
          } else {
            str += '-'
          }
          i++
        }
      }
    
    console.log(str);
    let arr = str.split(',')
    console.log(arr);
    let strEnd = ''
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] == '!!!') {
            strEnd += ' '
          } else {
            strEnd += MORSE_TABLE[arr[i]]
          }
        }
   return strEnd
}









module.exports = {
    decode
}