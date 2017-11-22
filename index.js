var shortId = require('shortid');
var badWordsList = require('badwords-list');

function decode(encodedShortId) {
	return shortId.decode(encodedShortId);
}

function isValid(possibleShortId) {
	return shortId.isValid(possibleShortId);
}

function seed(seedValue) {
	shortId.alphabet.seed(seedValue);
}

function characters(newCharacters) {
	return shortId.characters(newCharacters);
}

function generate() {
	var newId;
	var n;
	var acceptable = false;

	while (! acceptable) {
		acceptable = true;
		newId = shortId.generate();

		for (n = 0; n < badWordsList.array.length; n++) {
			if (newId.indexOf(badWordsList.array[n]) !== -1) {
				acceptable = false;
				break;
			}
		}
	}

	return newId;
};



// TODO others...

module.exports = generate;
module.exports.generate = generate;
module.exports.seed = seed;
module.exports.characters = characters;
module.exports.decode = decode;
module.exports.isValid = isValid;