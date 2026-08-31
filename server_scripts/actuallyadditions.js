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
    //把充能台配方先全部删掉
    ftm.remove({ type: "actuallyadditions:empowering" })
    //充能煤晶块
    ftm.recipes.actuallyadditions
        .empowering('actuallyadditions:empowered_void_crystal_block', 'actuallyadditions:void_crystal_block', [ //成品,中心方块
            '#c:dusts/coal',  //充能材料
            '#c:ingots/construction_alloy',
            '#c:gems/black_quartz',
            '#c:obsidians',
        ])
        .energy(400000)   //充能消耗的FE
        .color(Color.BLACK.argb) //充能光束的颜色
        .time(200) //充能所需的tick数
    //充能铁晶块
    ftm.recipes.actuallyadditions
        .empowering('actuallyadditions:empowered_enori_crystal_block', 'actuallyadditions:enori_crystal_block', [ //成品,中心方块
            'ars_nouveau:spell_prism',  //充能材料
            '#c:ingots/tin',
            'enderio_evolution:energetic_silver_ingot',
            'minecraft:quartz',
        ])
        .energy(600000)   //充能消耗的FE
        .color(Color.WHITE.argb) //充能光束的颜色
        .time(300) //充能所需的tick数
    //充能红石水晶块
    ftm.recipes.actuallyadditions
        .empowering('actuallyadditions:empowered_restonia_crystal_block', 'actuallyadditions:restonia_crystal_block', [ //成品,中心方块
            'mekanism:alloy_infused',  //充能材料
            'enderio:redstone_alloy_ingot',
            'ars_nouveau:wilden_spike',
            'ars_nouveau:fire_essence',
        ])
        .energy(300000)   //充能消耗的FE
        .color(Color.RED.argb) //充能光束的颜色
        .time(150) //充能所需的tick数
    //充能青金石水晶块
    ftm.recipes.actuallyadditions
        .empowering('actuallyadditions:empowered_palis_crystal_block', 'actuallyadditions:palis_crystal_block', [ //成品,中心方块
            '#c:ingots/prosperity',  //充能材料
            '#c:ingots/osmium',
            '#c:gems/certus_quartz',
            'ars_nouveau:water_essence',
        ])
        .energy(300000)   //充能消耗的FE
        .color(Color.BLUE.argb) //充能光束的颜色
        .time(150) //充能所需的tick数
    //充能钻石水晶块
    ftm.recipes.actuallyadditions
        .empowering('actuallyadditions:empowered_diamatine_crystal_block', 'actuallyadditions:diamatine_crystal_block', [ //成品,中心方块
            'northstar:polished_diamond',  //充能材料
            '#c:ingots/osmium',
            'ae2:engineering_processor',
            'mekanism:alloy_reinforced',
        ])
        .energy(800000)   //充能消耗的FE
        .color(Color.AQUA.argb) //充能光束的颜色
        .time(400) //充能所需的tick数
    //充能绿宝石水晶块
    ftm.recipes.actuallyadditions
        .empowering('actuallyadditions:empowered_emeradic_crystal_block', 'actuallyadditions:emeradic_crystal_block', [ //成品,中心方块
            'gateways:gate_pearl[gateways:gateway="gateways:emerald_grove"]',  //充能材料
            '#c:dusts/emerald',
            '#c:ingots/pulsating_alloy',
            '#c:ingots/uranium',
        ])
        .energy(1000000)   //充能消耗的FE
        .color(Color.GREEN.argb) //充能光束的颜色
        .time(500) //充能所需的tick数
})