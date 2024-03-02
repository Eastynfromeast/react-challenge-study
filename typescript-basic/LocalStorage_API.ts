/*
    Use abstract classes and generics.
        localStorage.setItem(<key>, <value>)
        localStorage.getItem(<key>)
        localStorage.clearItem(<key>)
        localStorage.clear()

    overloading
        geolocation.getCurrentPosition(successFn);
        geolocation.getCurrentPosition(successFn, errorFn);
        geolocation.getCurrentPosition(successFn, errorFn, optionsObj);
            navigator.geolocation.getCurrentPosition(success, error, [options]);
        geolocation.watchPosition(success);
        geolocation.watchPosition(success, error);
        geolocation.watchPosition(success, error, options);
        
        geolocation.clearWatch(id)        
*/

// Local Storage API
abstract class SStorage<T> {
	protected storage: { [key: string]: T } = {};
	abstract setItem(key: string, value: T): void;
	abstract clearItem(key: string): void;
	abstract clear(): void;
	abstract getItem(key: string): T | undefined;
}

class LocalStorage<T> extends SStorage<T> {
	// LocalStroage for any type you want
	setItem(key: string, value: T) {
		if (key in this.storage) {
			console.log(`${key} is aleready in this stroage`);
		} else {
			this.storage[key] = value;
			console.log(`${key} is set in this stroage`);
		}
	}
	clearItem(key: string) {
		if (key in this.storage) {
			delete this.storage[key];
			console.log(`${key} is deleted`);
		} else {
			console.log(`There is no ${key} in this storage`);
		}
	}
	getItem(key: string) {
		if (key in this.storage) {
			return this.storage[key];
		} else {
			console.log(`There is no ${key} in this storage`);
			return;
		}
	}
	clear() {
		this.storage = {};
		console.log(`The storage gets clear`);
	}
}

const stringsStorage = new LocalStorage<string>();
stringsStorage.getItem("love");
stringsStorage.setItem("hello", "bye");

const booleansStorage = new LocalStorage<boolean>();
booleansStorage.setItem("nuri", true);
