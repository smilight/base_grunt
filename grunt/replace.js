module.exports = {
    html: {
        src: ['<%= config.appDir %>/*.html'],
        overwrite: true,
        replacements: [
            {
                from: /(<!-- Begin:.*-->)/g,
                to: ''
            },
            {
                from: /(<!-- End:.*-->)/g,
                to: ''
            },
            {
                from: /^\s*$/gm,
                to: function (matchedWord, index, fullText, regexMatches) {
                    return '';
                }
            }
        ]
    },

    /* TODO end css replacements */
//    css: {
//        src: ['<%= config.appDir %>/*.html'],
//        overwrite: true,
//        replacements: [
//            {
//                from: /(?!.*(\W|^)[.]min(\W|$).*)(\W|^)[.]css(\W|$)]/g ,
//                to: function (matchedWord, index, fullText, regexMatches) {
//                    // matchedWord:  "world"
//                    // index:  6
//                    // fullText:  "Hello world"
//                    // regexMatches:  ["ld"]
//                    console.log(matchedWord);
//                    console.log(index);
////                    console.log(fullText);
//                    console.log(regexMatches);
//                    return 'planet';   //
//                }
//            }
//        ]
//    }
};