/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function(deck) {
    deck = deck.sort((a, b) => b - a);

    let res = [];

    while (deck.length) {
        res.length && res.unshift(res.pop());
        res.unshift(deck.shift());
    }

    return res;
};