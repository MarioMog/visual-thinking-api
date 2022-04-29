const Reader = require("../../lib/utils/Reader");

describe("Suit test for Reader", () => {
    test("1) Testing empty string as param", () => {
        const res = Reader.readJsonFile("");
        expect(res).toMatch(/filePath cannot be an empty string/ );
    });
    test("2) Testing invalid params", () => {
        const res = Reader.readJsonFile(2);
        expect(res).toMatch(/filePath should be a string/ );
    });
    test("3) Test valid params", () => {
        const explorersArray = [
            {
                "id": "6264d5d8"
            },
            {
                "id": "6264d5d8"
            }
        ];
        const res = Reader.readJsonFile("./test/utils/visualpartnersCopy.json");
        expect(res).toEqual(explorersArray);
    });
});
