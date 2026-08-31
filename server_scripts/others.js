ServerEvents.recipes(ftm => {
    //番茄-->生物燃料
    ftm.recipes.mekanism.crushing('4x mekanism:bio_fuel', 'farmersdelight:tomato')
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
    //不打凋灵 直接合成下界之星
    ftm.shaped('minecraft:nether_star',
    [
        'AAA',
        'BBB',
        'CBD'
    ],
    {
        A : 'minecraft:wither_skeleton_skull',
        B : 'minecraft:soul_sand',
        C : 'mekanismtools:refined_obsidian_sword',
        D : 'minecraft:bow'
    })
    //岩浆块-->岩浆膏
    ftm.recipes.mekanism.crushing('4x minecraft:magma_cream', 'minecraft:magma_block')
})