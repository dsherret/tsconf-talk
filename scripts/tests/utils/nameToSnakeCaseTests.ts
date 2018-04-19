import { expect } from "chai";
import { nameToSnakeCase } from "./../../utils";

describe("nameToSnakeCase", () => {
    function doTest(input: string, expectedOutput: string, message: string) {
        it(message, () => {
            expect(nameToSnakeCase(input)).to.equal(expectedOutput);
        });
    }

    doTest("TestTest", "test_test", "should convert for two words in pascal case");
    doTest("testTest", "test_test", "should convert for two words in camel case");
    doTest("test_test", "test_test", "should keep snake case the same");
    doTest("Test_Test", "test_test", "should make the upper case chars lower in snake case");
    doTest("Test", "test", "should make lower case for one word");
    doTest("T", "t", "should convert to lower case for a single character");
    doTest("Test32Test2Test24", "test32_test2_test24", "should handle numbers by grouping them together");
    doTest("TestThisHR", "test_this_hr", "should keep consecutive upper case letters together");
});