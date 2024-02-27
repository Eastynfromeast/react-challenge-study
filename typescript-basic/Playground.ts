type Config = {
	path: string;
	state: object;
};

type Push = {
	(path: string): void;
	(config: Config): void;
};

type Add = {
	(a: number, b: number);
	(a: number, b: string);
};
const add = (a, b) => {
	return a + b;
};
