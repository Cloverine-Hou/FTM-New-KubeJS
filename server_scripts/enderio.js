ServerEvents.recipes(ftm => {
    ftm.remove({output:'enderio:basic_capacitor'})
        ftm.shaped('enderio:basic_capacitor',
    [
        ' AC',
        'ABA',
        'CA '
    ],
    {
        A : '#c:nuggets/gold',
        B : '#c:dusts/grains_of_infinity',
        C : 'create:electron_tube'
    })
})