type ValueOrArray<T> = T | ValueOrArray<T>[];
type NestedValuesArray = ValueOrArray<any>;

const flattenArray = (value: NestedValuesArray) =>
  value.reduce(
    (acc, el) =>
      Array.isArray(el) ? [...acc, ...flattenArray(el)] : [...acc, el],
    []
  );

export const flatten = (
  value: NestedValuesArray | any
): NestedValuesArray | Error => {
  if (!Array.isArray(value)) throw Error("Input is not an array!");

  return flattenArray(value);
};
