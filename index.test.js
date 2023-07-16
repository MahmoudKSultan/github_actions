const getAvg = require("./index");


it("get average", () => {
	expect(getAvg(3, 3, 3)).toBe(3);
});