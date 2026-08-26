ServerEvents.recipes(ftm => {
    ftm.remove({output:'tacz:workbench_a[custom_data={BlockId:"sf_att:sf_att_workbench"}]'})
    ftm.remove({output:'tacz:workbench_b[custom_data={BlockId:"sf_att:sf_att_table"}]'})
    //奥数工作台·改
    ftm.recipes.ars_nouveau.enchanting_apparatus(
        [
            'ars_nouveau:archwood_planks',
            'ars_nouveau:archwood_planks',
            'ars_nouveau:archwood_planks',
            'ars_nouveau:archwood_planks',
            '#c:ingots/dark_steel',
            '#c:ingots/dark_steel',
            '#c:ingots/dark_steel',
            '#c:ingots/dark_steel'
        ], // input items
	    'ars_nouveau:source_gem_block', // reagent
	    'tacz:workbench_a[custom_data={BlockId:"sf_att:sf_att_workbench"}]', // output
	    1000, // source cost
	    // true // keep nbt of reagent, think like a smithing recipe
	);
    //"传奇"制杖台
    ftm.recipes.ars_nouveau.enchanting_apparatus(
        [
            'ars_nouveau:wilden_tribute',
            'ars_nouveau:archwood_planks',
            'ars_nouveau:archwood_planks',
            'ars_nouveau:archwood_planks',
            'ars_nouveau:archwood_planks',
            'ars_nouveau:source_gem_block',
            'ars_nouveau:source_gem_block',
            'ars_nouveau:source_gem_block'
        ], // input items
	    'minecraft:netherite_ingot', // reagent
	    'tacz:workbench_b[custom_data={BlockId:"sf_att:sf_att_table"}]', // output
	    5000, // source cost
	    // true // keep nbt of reagent, think like a smithing recipe
	);
})