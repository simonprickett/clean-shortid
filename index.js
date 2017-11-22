var shortId = require('shortid');
var badWordsList = require('badwords-list');

function seed(seedValue) {
	shortId.seed(seedValue);
	return module.exports;
}

function worker(workerId) {
	shortId.worker(workerId);
	return module.exports;
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

function decode(encodedShortId) {
	return shortId.decode(encodedShortId);
}

function isValid(possibleShortId) {
	return shortId.isValid(possibleShortId);
}

module.exports = generate;
module.exports.generate = generate;
module.exports.seed = seed;
module.exports.worker = worker;
module.exports.characters = characters;
module.exports.decode = decode;
module.exports.isValid = isValid;