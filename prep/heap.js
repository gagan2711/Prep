function Heap() {
	var heap = [ null ];
	// left Child = 2*i
	// right Child = 2*i + 1

	this.insert = function(value) {
		heap.push(value);
		// hipyfy
		let idx = heap.length - 1;
		if (idx > 2) {
			while (heap[parseInt(idx / 2)] > heap[idx]) {
				//swap the content
				[ heap[parseInt(idx / 2)], heap[idx] ] = [ heap[id], heap[parseInt(idx / 2)] ];
				idx = parseInt(idx / 2);
				if (idx == 1) {
					break;
				}
			}
		}
	};
	this.remove = function() {
		let smallest = heap[1];
		if (heap.length > 2) {
			heap[1] = heap[heap.length - 1];
			heap.slice(heap.length - 1, 1);
			let i = 1;
			let left = i * 2;
			let right = i * 2 + 1;
			while (heap[left] > heap[i] || heap[right] > heap[i]) {
				if (heap[left] > heap[i]) {
					[ heap[left], heap[i] ] = [ heap[i], heap[left] ];
					i = left;
					left = i * 2;
					right = i * 2 + 1;
				} else {
					[ heap[right], heap[i] ] = [ heap[i], heap[right] ];
					i = right;
					left = i * 2;
					right = i * 2 + 1;
				}
				if (!heap[left] || !heap[right]) {
					break;
				}
			}
		} else if (heap.length == 2) {
			heap.slice(1, 1);
		} else {
			return null;
		}
		return smallest;
	};
}
