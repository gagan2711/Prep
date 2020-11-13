Array.prototype.mySort = function(compFunc) {
	//if (this.sort) return this.sort(compFunc);

	this = merge(this);

	function merge(arr) {
		if (arr.length < 2) {
			return arr;
		}
		let mid = parseInt(arr.length / 2);
		let left = arr.slice(0, mid);
		let right = arr.slice(mid);
		return mergeSort(merge(left), merge(right));
	}
	function mergeSort(arr1, arr2) {
		let returnArr = [];
		while (arr1.length > 0 && arr2.length > 0) {
			let result = compFunc(arr1[0], arr2[0]);

			if (result < 0) {
				returnArr.push(arr1.shift());
			} else {
				returnArr.push(arr2.shift());
			}
		}
		while (arr1.length > 0) {
			returnArr.push(arr1.shift());
		}
		while (arr2.length > 0) {
			returnArr.push(arr2.shift());
		}
		return returnArr;
	}
};
