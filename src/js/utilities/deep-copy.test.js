import { deepCopy, isArray, isObject, copyArray, deepCopyArray, copyObject } from "./deep-copy"

const grid = [[{ "x": 0, "y": 0, "r": 0, "g": 235, "b": 255, "a": 255, "rdA": 1, "rdB": 2 }, { "x": 0, "y": 1, "r": 0, "g": 176, "b": 255, "a": 255, "rdA": 1, "rdB": 2 }, { "x": 0, "y": 2, "r": 0, "g": 93, "b": 255, "a": 255, "rdA": 1, "rdB": 2 }, { "x": 0, "y": 3, "r": 0, "g": 155, "b": 255, "a": 255, "rdA": 1, "rdB": 2 }, { "x": 0, "y": 4, "r": 0, "g": 95, "b": 255, "a": 255, "rdA": 1, "rdB": 2 }, { "x": 0, "y": 5, "r": 0, "g": 201, "b": 255, "a": 255, "rdA": 1, "rdB": 2 }], [{ "x": 1, "y": 0, "r": 0, "g": 198, "b": 255, "a": 255, "rdA": 1, "rdB": 2 }, { "x": 1, "y": 1, "r": 0, "g": 58, "b": 255, "a": 255, "rdA": 1, "rdB": 2 }, { "x": 1, "y": 2, "r": 0, "g": 136, "b": 255, "a": 255, "rdA": 1, "rdB": 2 }, { "x": 1, "y": 3, "r": 0, "g": 223, "b": 255, "a": 255, "rdA": 1, "rdB": 2 }, { "x": 1, "y": 4, "r": 0, "g": 100, "b": 255, "a": 255, "rdA": 1, "rdB": 2 }, { "x": 1, "y": 5, "r": 0, "g": 224, "b": 255, "a": 255, "rdA": 1, "rdB": 2 }], [{ "x": 2, "y": 0, "r": 0, "g": 36, "b": 255, "a": 255, "rdA": 1, "rdB": 2 }, { "x": 2, "y": 1, "r": 0, "g": 230, "b": 255, "a": 255, "rdA": 1, "rdB": 2 }, { "x": 2, "y": 2, "r": 0, "g": 215, "b": 255, "a": 255, "rdA": 1, "rdB": 2 }, { "x": 2, "y": 3, "r": 0, "g": 224, "b": 255, "a": 255, "rdA": 1, "rdB": 2 }, { "x": 2, "y": 4, "r": 0, "g": 142, "b": 255, "a": 255, "rdA": 1, "rdB": 2 }, { "x": 2, "y": 5, "r": 0, "g": 12, "b": 255, "a": 255, "rdA": 1, "rdB": 2 }], [{ "x": 3, "y": 0, "r": 0, "g": 33, "b": 255, "a": 255, "rdA": 1, "rdB": 2 }, { "x": 3, "y": 1, "r": 0, "g": 88, "b": 255, "a": 255, "rdA": 1, "rdB": 2 }, { "x": 3, "y": 2, "r": 0, "g": 21, "b": 255, "a": 255, "rdA": 1, "rdB": 2 }, { "x": 3, "y": 3, "r": 0, "g": 7, "b": 255, "a": 255, "rdA": 1, "rdB": 2 }, { "x": 3, "y": 4, "r": 0, "g": 118, "b": 255, "a": 255, "rdA": 1, "rdB": 2 }, { "x": 3, "y": 5, "r": 0, "g": 134, "b": 255, "a": 255, "rdA": 1, "rdB": 2 }], [{ "x": 4, "y": 0, "r": 0, "g": 196, "b": 255, "a": 255, "rdA": 1, "rdB": 2 }, { "x": 4, "y": 1, "r": 0, "g": 204, "b": 255, "a": 255, "rdA": 1, "rdB": 2 }, { "x": 4, "y": 2, "r": 0, "g": 252, "b": 255, "a": 255, "rdA": 1, "rdB": 2 }, { "x": 4, "y": 3, "r": 0, "g": 122, "b": 255, "a": 255, "rdA": 1, "rdB": 2 }, { "x": 4, "y": 4, "r": 0, "g": 184, "b": 255, "a": 255, "rdA": 1, "rdB": 2 }, { "x": 4, "y": 5, "r": 0, "g": 5, "b": 255, "a": 255, "rdA": 1, "rdB": 2 }], [{ "x": 5, "y": 0, "r": 0, "g": 238, "b": 255, "a": 255, "rdA": 1, "rdB": 2 }, { "x": 5, "y": 1, "r": 0, "g": 32, "b": 255, "a": 255, "rdA": 1, "rdB": 2 }, { "x": 5, "y": 2, "r": 0, "g": 103, "b": 255, "a": 255, "rdA": 1, "rdB": 2 }, { "x": 5, "y": 3, "r": 0, "g": 7, "b": 255, "a": 255, "rdA": 1, "rdB": 2 }, { "x": 5, "y": 4, "r": 0, "g": 201, "b": 255, "a": 255, "rdA": 1, "rdB": 2 }, { "x": 5, "y": 5, "r": 0, "g": 171, "b": 255, "a": 255, "rdA": 1, "rdB": 2 }]]

describe("isArray", () => {
    it("Sould recognise an Array.", () => {
        const arr = [1, 2, 3, 4, 5]
        const st = "[1,2,3,4,5]"
        const obj = { a: 1, b: 2 }
        expect(isArray(arr)).toEqual(true);
        expect(isArray(st)).toEqual(false);
        expect(isArray(obj)).toEqual(false);
    });
});

describe('Is object', () => {
    it("Should recognise an Object", () => {
        const arr = [1, 2, 3, 4, 5]
        const st = "[1,2,3,4,5]"
        const obj = { a: 1, b: 2 }
        expect(isObject(arr)).toEqual(false);
        expect(isObject(st)).toEqual(false);
        expect(isObject(obj)).toEqual(true);
    })
});

describe("deep-copy", () => {
    describe("copyArray", () => {
        it("Should reurn clones - not references to nested arrays and objects", () => {
            const obj = {a:1, b:2}
            const newGrid = copyArray(grid);
            const newObj = copyArray(obj);
                expect(newGrid === grid).toEqual(false);
                expect(newObj === obj).toEqual(true);
        });
    });
    //--
    describe("copyObject", ()=>{
        it("Should creat a clone anot a reference to an Object", ()=>{
            const obj = {value: "one", hello: "world"}
            const clone = copyObject(obj);
            expect(clone.value).toEqual(obj.value)
            expect(clone === obj).toEqual(false)
        });
    });

    describe("deepCopyArray", ()=>{
        const clone = deepCopyArray(grid);
        it("Should create clones - not references to of nested arrays ", ()=>{
            expect(grid).toEqual(clone)
            expect(grid[0]).toEqual(clone[0])
            expect(grid[0] === clone[0]).toEqual(false)
            expect(grid[0][0]).toEqual(clone[0][0])
            expect(grid[0][0] === clone[0][0]).toEqual(false)
        })
    })
    
});