"use-strict";

const Words = require( './dictionary.js' );

/**
 * Return a spicy word or multiple words as a string or array respectfully.
 * 
 * @param {number} number - Number of words to return.
 * 
 * @returns {string|string[]} - Return a word or array of words.
 */
const GenerateWord = ( number ) => {
    if( typeof( number ) == 'number' &&
        number > 0 ) {
        let result = [];

        for( let i = 0; i < number; i++ ){
            result.push( Words[ Math.floor( Math.random() * Words.length ) ] );
        }

        return result;
    }
    else if( number < 0 ){
        throw Error( `❌ Number needs to be > 0 !` );
    }

    return Words[ Math.floor( Math.random() * Words.length ) ];
}

module.exports = GenerateWord;