fixture(` Sample `)
    .page(`https://devexpress.github.io/testcafe/example/`)
test(`Test1`, async t =>{
    await t         
        .wait(2000);
});

test(`Test2 `, async t =>{
    await t
        .wait(3000);
});

test
    .page `https://devexpress.github.io/testcafe`
    (`Test3`, async t =>{
        await t
            .wait(4000);
    });
