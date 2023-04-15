const { Selector } = require("testcafe")

const checkBox = Selector('input#remote-testing')

fixture(`Css Selector`)
    .page(`https://devexpress.github.io/testcafe/example/`)
test(`Test one`, async t =>{
    await t
        .maximizeWindow()
        .click(checkBox)
        .wait(4000)

})