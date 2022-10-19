import { flatten } from "./flatten";

describe("flatten works correctly when the input is", () => {
  describe("not an array and is", () => {
    test("null", () => {
      expect(() => flatten(null)).toThrow(new Error("Input is not an array!"));
    });

    test("undefined", () => {
      expect(() => flatten(undefined)).toThrow(
        new Error("Input is not an array!")
      );
    });

    test("a number", () => {
      expect(() => flatten(1)).toThrow(new Error("Input is not an array!"));
    });

    test("a string", () => {
      expect(() => flatten("a")).toThrow(new Error("Input is not an array!"));
    });

    test("an object", () => {
      expect(() => flatten({})).toThrow(new Error("Input is not an array!"));
    });

    test("a set", () => {
      expect(() => flatten(new Set())).toThrow(
        new Error("Input is not an array!")
      );
    });
  });

  describe("an array", () => {
    test("of numbers", () => {
      expect(flatten([1, [2, [3]], 4])).toStrictEqual([1, 2, 3, 4]);
    });

    test("of primitives", () => {
      expect(flatten([1, ["a", [false]], 4])).toStrictEqual([1, "a", false, 4]);
    });

    test("of primitives and objects", () => {
      expect(flatten([1, ["a", [false], { a: "b" }], 4])).toStrictEqual([
        1,
        "a",
        false,
        { a: "b" },
        4,
      ]);
    });

    test("of primitives and empty arrays", () => {
      expect(flatten([1, ["a", [], [false]], [], 4, []])).toStrictEqual([
        1,
        "a",
        false,
        4,
      ]);
    });
  });

  test("an empty array", () => {
    expect(flatten([])).toStrictEqual([]);
  });

  test("a very nested array", () => {
    expect(
      flatten([
        [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[1]]]]]]], 2]]]]]]], 3]]]]]]]]]]]]]]]],
      ])
    ).toStrictEqual([1, 2, 3]);
  });
});
