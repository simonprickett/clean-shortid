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
	var lowerCaseNewId;
	var n;
	var acceptable;

	do {
		newId = shortId.generate();
		lowerCaseNewId = newId.toLowerCase();
		acceptable = true;

		for (n = 0; n < badWordsList.array.length; n++) {
			if (lowerCaseNewId.indexOf(badWordsList.array[n].toLowerCase()) !== -1) {
				acceptable = false;
				break;
			}
		}
	} while (! acceptable);

	return newId;
};

// There is one other function from shortId to expose here - worker?
module.exports = generate;
module.exports.generate = generate;
module.exports.seed = seed;
module.exports.characters = characters;
module.exports.decode = decode;
module.exports.isValid = isValid;