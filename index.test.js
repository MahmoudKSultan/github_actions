const {getAvg, getSum} = require("./index");


it("get average of numbers", () => {
	expect(getAvg(3, 3, 3)).toBe(3);
});

it("get sum of numbers", () => {
	expect(getSum(3, 3, 5)).toBe(11);
});