function getArrayParams(...arr) {
  let max = 0;
	let min = 0;
	let sum = 0;

	max = Math.max(...arr);
	min = Math.min(...arr);
	sum = arr.reduce((summ, current) => summ + current, 0);

	return {
	  min,
		max,
		avg: Number(parseFloat(sum / arr.length).toFixed(2)),
	}
}

function summElementsWorker(...arr) {
  if (arr.length == 0) {
    return 0;
  }

  let sum = 0;
  sum = arr.reduce((summ, current) => summ + current, 0);

  return sum;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length == 0) {
    return 0;
	}

  max = Math.max(...arr);
	min = Math.min(...arr);

	return max - min;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length == 0) {
    return 0;
	}

  let sumEvenElement = 0;
	let sumOddElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }

  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length == 0) {
    return 0;
	} 

  let sumEvenElement = 0;
	let countEvenElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sumEvenElement += arr[i];
      countEvenElement += 1;
    }
  }

  return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;

	for (let i = 0; i < arrOfArr.length; i++) {
		const currentResult = func(...arrOfArr[i]);

		if (maxWorkerResult < currentResult) {
		  maxWorkerResult = currentResult;
		}
	}

	return maxWorkerResult;
}
