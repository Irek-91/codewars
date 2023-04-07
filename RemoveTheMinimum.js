function removeSmallest(numbers) {
    let indexMin = numbers.indexOf(Math.min(...numbers));
    return [...numbers.slice(0, indexMin), ...numbers.slice(indexMin + 1)];
    }
    removeSmallest([1, 2, 3, 4, 5])