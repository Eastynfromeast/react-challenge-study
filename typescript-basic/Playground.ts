/*
	- last(arr): 이 함수는 배열의 마지막 요소를 반환해야 합니다.
	- prepend(arr, item): 이 함수는 배열의 시작 부분에 item을 넣고 return해야 합니다.

	- mix(arr,arr) : 두개의 배열을 매개변수로 받아, 매개변수로 받은 두 배열을 하나의 배열로 섞어서 하나의 배열로 반환합니다.
	
	- count(arr) : 배열을 매개변수로 받아, 매개변수로 받아온 배열의 길이를 반환하면됩니다.
	
	- findIndex(arr, item) : 첫번째 매개변수로 배열을, 두번째 매개변수로 받아온 item이 첫번째 매개변수 arr배열의 몇번째 index로 존재하는지 체크한후 존재한다면 몇번째 index인지 반환하고 존재하지않는다면 null을 반환합니다.
	
	- slice(arr, startIndex, endIndex): 첫번째 매개변수로 배열 arr을 받고, 두번째 매개변수로 숫자 startIndex, 세번째 매개변수 숫자 endIndex를 받습니다. 첫번째 매개변수 arr을 두번째 매개변수로 받은 startIndex부터 세번째 매개변수로 받은 인덱스까지 자른 결과를 반환하면됩니다. 이때 세번째 매개변수는 필수 매개변수가 아닙니다.
 */

type Last = {
	<Last>(arr: Last[]): Last;
};

const last: Last = arr => {
	let lastIndex = arr.length - 1;
	return arr[lastIndex];
};

const lastA = last([1, 2, 3, 4]);

type PrependType = <P>(arr: P[], item: P) => P[];

const prepend: PrependType = (arr, item) => {
	arr.unshift(item);
	return arr;
};

const prependA = prepend([3, true, "hey"], "right");
const prependB = prepend([1, 2, 3], 4);

function mix<M>(arr1: M[], arr2: M[]): M[] {
	return [...arr1, ...arr2];
}

type Mix = <T, M>(a: T[], b: M[]) => (T | M)[];
