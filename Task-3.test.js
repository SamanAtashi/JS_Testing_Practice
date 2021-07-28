const cal = require("./Task-3.js");

const instanceCal = new cal

describe("multiply",()=>{
    test('should return num_1 multiply by num_2', () => {
        expect(instanceCal.multiply(5,11)).toBe(55);
    })
})

describe("divide",()=>{
    test('should return num_1 divided by num_2', () => {
        expect(instanceCal.divide(180,2)).toBe(90);
    })
})

describe("addition",()=>{
    test('should return num_1 added to num_2', () => {
        expect(instanceCal.add(24,68)).toBe(92);
    })
})
describe("subtract",()=>{
    test('should return num_1 subtract by num_2', () => {
        expect(instanceCal.subtract(180,2)).toBe(178);
    })
})