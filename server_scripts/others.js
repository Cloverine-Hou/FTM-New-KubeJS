ServerEvents.recipes(ftm => {
    //FTB任务书
    ftm.remove({output:'ftbquests:book'})
    ftm.shapeless(Item.of('ftbquests:book'),['#c:rods/wooden'])
    //传送石碑
    ftm.remove({output:'waystones:waystone'})
    ftm.shaped('waystones:waystone',
    [
        ' A ',
        'ABA',
        'CCC'
    ],
    {
        A : 'minecraft:stone_bricks',
        B : 'minecraft:diamond',
        C : 'minecraft:obsidian'
    })
})