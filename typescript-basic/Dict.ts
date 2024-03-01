/*
    add ok
    get 
    delete ok
    update ok
    showAll ok
    count
    upsert
    exists 존재하는지 알려줌 
    bulkAdd [{term: "kimchi",definition: "대박이네~"},{term:"아파트",definition:"비싸네"}]
    bulkDelete ["김치", "아파트"]


    if (this.words.hasOwnProperty(term)) {
        delete this.words[term];
    }

*/
/*
    Nulnu's Dict class code challenge :)
*/
type Words = {
	[key: string]: string;
};

class Word {
	constructor(public term: string, public definition: string) {}
}

class Dict {
	private words: Words;
	constructor() {
		this.words = {};
	}
	add(word: Word) {
		if (word.term in this.words) {
			console.log(`${word.term} is already in the dictionary`);
		} else {
			this.words[word.term] = word.definition;
			console.log(`${word.term} is added to the dictionary`);
		}
	}
	get(term: string) {
		return this.words[term];
	}

	delete(term: string) {
		if (term in this.words) {
			delete this.words[term];
			console.log(`${term} is deleted by delete function`);
		} else {
			console.log(`${term} does not exist in the dictionary. Try to modify the term.`);
		}
	}

	update(term: string, definition: string) {
		if (term in this.words) {
			this.words[term] = definition;
			console.log(`${term} is updated to ${definition}`);
		}
	}

	showAll() {
		return this.words;
	}

	count() {
		const total: number = Object.keys(this.words).length;
		const be: string = total > 1 ? "words are" : "word is";
		console.log(`${total} of ${be} in this dictionary`);
		return total;
	}

	upsert(term: string, definition: string) {
		this.words.hasOwnProperty(term) ? console.log(`${term} has been updated`) : console.log(`${term} has been inserted`);
		this.words[term] = definition;
	}

	exists(term: string) {
		if (this.words.hasOwnProperty(term)) {
			console.log(`${term} exists in the dictionary`);
		} else {
			console.log(`${term} does not exist in the dictionary. If you want to add it, try to add first :)`);
		}
	}
	bulkAdd(newWords: [{ term: string; definition: string }]) {
		newWords.forEach(({ term, definition }) => {
			this.upsert(term, definition);
		});

		console.log(`${newWords.length} has been added by bulkAdd`);
	}

	bulkDelete(terms: string[]) {
		terms.forEach(term => {
			if (term in this.words) {
				delete this.words[term];
				console.log(`${term} is deleted by bulkDelete`);
			} else {
				console.log(`${term} is not eliminated by bulkDelete since there is no such word in ${this}`);
				return;
			}
		});
	}
}
