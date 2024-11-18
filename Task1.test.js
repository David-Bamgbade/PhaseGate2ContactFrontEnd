const update = require("./update");

test("testToWorkingCode", ()=> {

    expect(update(testScores)).toequal(console.log(testScores.filter(check => check > 70)))
})