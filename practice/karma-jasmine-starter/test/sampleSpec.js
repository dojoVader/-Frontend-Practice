describe("fail", function () {
  it("should always fail", function () {
    expect(false).toBe(true);
  });
  xit("fix this later", function () {
    expect(person).toBe(polite)
  });
});

describe("add", function() {
  it("Should be equal to four", function() {
    expect(addition(1, 3)).toBe(4);
  });
});

describe("Calc", function () {
  it("should have 1:1", function () {
    expect(Calc).toBeDefined();
    expect(Calc).toEqual({1: 1});
  })
})