const { Selector } = require("testcafe")

const nameInput = Selector('input#developer-name')

fixture(`Css Selector`)
    .page(`https://devexpress.github.io/testcafe/example/`)
test(`Test one`, async t =>{
    await t
        .maximizeWindow()
        .typeText(nameInput, 'hi')
        .pressKey('home right . delete =')
        .wait(4000)

})