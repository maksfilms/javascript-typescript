import {sum} from "./01";
import {mult} from "./01";
import {splitIntoWords} from "./01";


let a: number;
let b: number;


// each test get this data before start
beforeEach(() => {
    a = 1;
    b = 2;
})

// creating a test
test('should be correct', () => {
    //actions
    const result = sum(a, b);

    /*we can change value of variable inside the test, but
    a next test will get start data from beforeEach callback function*/
    a = 100;
    const result2 = mult(a, b);

    //expect results (function test)
    expect(result).toBe(3);
    expect(result2).toBe(200);
})

test('splitting into words shold be correct', () => {

    //data
    const sent1 = 'HELLO MY FRIEND';

    //action (function test)
    const result = splitIntoWords(sent1);

    //expect result
    expect(result.length).toBe(3);
    expect(result[0]).toBe('hello')
    expect(result[1]).toBe('my')
    expect(result[2]).toBe('friend')
})

