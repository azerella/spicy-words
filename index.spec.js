const Expect = require( 'chai' ).expect;
const Assert = require( 'chai' ).assert;

const SpicyWords = require( './index.js' );
const Words = require( './dictionary.js' );

describe( 'SpicyWords()', () => {
    it( 'Should return a single random word from the word list.', () => {
        Expect( Words ).to.include( SpicyWords() );
    })

    it( 'Should return a five random words from the word list.', () => {
        Expect( Words ).to.include.members( SpicyWords( 5 ) );
    })

    it( 'Should return a array type given multiple words', () => {
        Assert( Array.isArray( SpicyWords( 5 ) ) );
        
    })

    it( 'Should return a string type given a single word', () => {
        Assert.isString( SpicyWords() );
    })

    it( 'Should throw an exception given a number less than 0', () => {
        try{
            SpicyWords( -2 )
        }
        catch( error ) {
            Expect( error.message ).to.equal( `❌ Number needs to be > 0 !` );
        }
    })
});
