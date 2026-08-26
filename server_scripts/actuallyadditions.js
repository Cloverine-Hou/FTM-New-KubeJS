ServerEvents.recipes(ftm => {
    //铁质外壳
    ftm.remove({output:'actuallyadditions:iron_casing'})
    ftm.shaped('actuallyadditions:iron_casing', 
        [
        'ABA', 
        'BCB', 
        'ABA'
        ], 
        {
        A: 'minecraft:iron_ingot',
        B: 'create:shaft',
        C: 'mekanism:steel_casing'
    })
    //幻灵接口
    ftm.replaceInput(
    { output: 'actuallyadditions:phantom_itemface' },
    'minecraft:phantom_membrane',
    '#c:circuits/elite'
    )
})