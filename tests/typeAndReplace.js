const { Selector } = require("testcafe")

const nameInput = Selector('input#developer-name')
const populateBtn = Selector('input#populate')

fixture(`Css Selector`)
    .page(`https://devexpress.github.io/testcafe/example/`)
test(`Test one`, async t =>{
    await t
        .maximizeWindow()
        .typeText(nameInput, 'hi')
        .typeText(nameInput, 'Stack QA', {replace:true})
        .wait(4000)

})