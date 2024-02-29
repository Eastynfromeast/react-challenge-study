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
*/
type Words = {
	[key: string]: string;
};

class Dict {
	private words: Words;
	constructor() {
		this.words = {}; // initialize words == this.words is an object
	}
	add(word: Word) {
		if (this.words[word.term] === undefined) {
			this.words[word.term] = word.definition;
		}
	}
	get(term: string) {
		return this.words[term];
	}

	delete(term: string) {
		if (term in this.words) {
			delete this.words[term];
		} else {
			console.log(`${term}은 존재하지 않는 단어입니다. 삭제할 단어를 수정해 주세요`);
		}
	}

	update(term: string, definition: string) {
		if (this.words[term] !== undefined) {
			this.words[term] = definition;
		}
	}

	showAll() {
		return this.words;
	}

	count() {
		const total: number = Object.keys(this.words).length;
		const be: string = total > 1 ? "are" : "is";
		console.log(`${total} of words ${be} in this dictionary`);
		return Object.keys(this.words).length;
	}

	upsert(term: string, definition: string) {
		if (this.words[term] !== undefined) {
			this.words[term] = definition;
			console.log(`${term} has been updated`);
		} else {
			this.words[term] = definition;
			console.log(`${term} has been inserted`);
		}
	}

	exists(term: string) {
		if (this.words[term] !== undefined) {
			console.log(`${term} is in the dictionary`);
		} else {
			console.log(`${term} is not exist in the dictionary. If you want to add it, use add();`);
		}
	}
	bulkAdd([{}]: string) {}

	bulkDelete(terms: string[]) {
		terms.forEach((term: string) => {});
	}
}

class Word {
	constructor(public term: string, public definition: string) {}
}

const kimchi = new Word("kimchi", "Korean food");

const dict = new Dict();
dict.add(kimchi);
dict.get("kimchi");
