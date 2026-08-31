ServerEvents.recipes(ftm =>{
    //把卓越前线合成表中的电池 大型电池换成实用拓展的二阶电池 四阶电池
    ftm.replaceInput
        ({mod:'superbwarfare',
        type:'crafting_shaped'},
        'superbwarfare:cell', 
        'actuallyadditions:double_battery')

    ftm.replaceInput
        ({mod:'superbwarfare',
        type:'crafting_shaped'},
        'superbwarfare:battery', 
        'actuallyadditions:quadruple_battery')
    //马达
    ftm.replaceInput(
    { input: 'superbwarfare:motor' },
    'minecraft:copper_ingot',            
    'mekanism:ingot_steel'         
    )
    ftm.replaceInput(
    { input: 'superbwarfare:motor' },
    'minecraft:lapis_lazuli',            
    'mekanism:ingot_osmium'         
    )
    //大型电动机
    ftm.replaceInput(
    { input: 'superbwarfare:large_motor' },
    'minecraft:copper_block',            
    'mekanism:block_steel'         
    )
    ftm.replaceInput(
    { input: 'superbwarfare:large_motor' },
    'minecraft:lapis_block',            
    'mekanism:block_osmium'   
    )
    //创造弹药盒
    ftm.shaped('superbwarfare:creative_ammo_box',
    [
        'BCB',
        'CAC',
        'BCB'
    ],
    {
        A : 'superbwarfare:ammo_box',
        B : 'mekanism:ingot_refined_obsidian',
        C : 'minecraft:nether_star'
    })
})