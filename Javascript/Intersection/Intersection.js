strArr = ['1, 3, 4, 7, 13', '1, 2, 4, 13, 15'];

function FindIntersection(strArr) {
	const arrA = strArr[0].split(',');
	const arrB = strArr[1].split(',');
	const intersection = arrA.filter((x) => arrB.includes(x));
	// code goes here
	return intersection;
}

constole.log(FindIntersection(strArr));
