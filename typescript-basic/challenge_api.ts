/*
    Nulnu's LocalStorage API & Geolocation API 
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

// GeoLocation
type GeoPosition = {
	coords: {
		latitude: number;
		longitude: number;
		accuracy?: number;
	};
};
type GeoPositionError = {
	code: number;
	message: string;
};
type GeoPositionOptions = {
	enableHighAccuracy?: boolean;
	timeout?: number;
	maximumAge?: number;
};
// 이 친구들 이름을 뭐라 하지
type GetPositionTypes = {
	(success: (position: GeoPosition) => void): void;
	(success: (position: GeoPosition) => void, error?: (error: GeoPositionError) => void): void;
	(success: (position: GeoPosition) => void, error?: (position: GeoPositionError) => void, options?: GeoPositionOptions): void;
};
type WatchPositionTypes = {
	(success: (position: GeoPosition) => void): number;
	(success: (position: GeoPosition) => void, error?: (error: GeoPositionError) => void): number;
	(success: (position: GeoPosition) => void, error?: (position: GeoPositionError) => void, options?: GeoPositionOptions): number;
};

class GeoLocation {
	// 이미 선언되어있다..?
	private watchId: number | null = null;
	getCurrentPosition: GetPositionTypes = (success, error?, options?) => {
		return navigator.geolocation.getCurrentPosition(success, error as PositionErrorCallback, options as PositionOptions);
	};

	watchPosition: WatchPositionTypes = (success, error?, options?) => {
		this.watchId = navigator.geolocation.watchPosition(success, error as PositionErrorCallback, options as PositionOptions);
		return this.watchId;
	};

	clearWatch = (): void => {
		if (this.watchId !== null) {
			console.log(`${this.watchId} has been cleared`);
			navigator.geolocation.clearWatch(this.watchId);
			this.watchId = null;
		}
	};
}
const onGetSuccess = (position: GeoPosition) => {
	console.log(`Here's your geolocation information. Your latitude is ${position.coords.latitude} and your longitude is ${position.coords.longitude}`);
};
const onError = (error: GeoPositionError) => {
	console.log(`Error Code: ${error.code} - ${error.message}`);
};
const onWatchSuccess = (position: GeoPosition) => {
	console.log(
		`Watching your geolocation has begun. Your current latitude is ${position.coords.latitude} and your current longitude is ${position.coords.longitude}`
	);
};

const options: GeoPositionOptions = {
	enableHighAccuracy: true,
	timeout: 1000,
};

const geo = new GeoLocation();
geo.getCurrentPosition(onGetSuccess);
geo.getCurrentPosition(onGetSuccess, onError, options);

geo.watchPosition(onWatchSuccess, onError);
