// see e16.md

// DO NOT USE `any` for this, you will need to use generics in order to pass both the vitest tests and the tsc compiler
export function find<T>(array: Array<T>, callback: (input: T) => boolean) {
  for (let query of array) {
    if (callback(query)) {
      return query;
    }
  }
}
