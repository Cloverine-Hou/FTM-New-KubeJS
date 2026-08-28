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
    //MSETA蚀刻铸造台
    ftm.remove({output:'tacz:workbench_b[custom_data={BlockId:"sfms:ms_workbench"}]'})
    ftm.recipes.create.sequenced_assembly(
      // Outputs:
      [
        CreateItem.of('tacz:workbench_b[custom_data={BlockId:"sfms:ms_workbench"}]', 1), // Main output, will appear in JEI as the result
      ],
      // Input:
      'tacz:gun_smith_table', 
      // Sequence:
      [
        // The transitional item set by `transitionalItem('create:incomplete_large_cogwheel')` is the item used during the intermediate stages of the assembly
        // Like a normal recipe function, it's used as a sequence step in this array. Input and output have the transitional item
        ftm.recipes.create.deploying('tacz:gun_smith_table', ['tacz:gun_smith_table', 'mekanism:block_steel',]),
        ftm.recipes.create.deploying('tacz:gun_smith_table', ['tacz:gun_smith_table', 'actuallyadditions:empowered_emeradic_crystal_block',]),
        ftm.recipes.create.deploying('tacz:gun_smith_table', ['tacz:gun_smith_table', 'mekanism:laser',]),
        ftm.recipes.create.pressing('tacz:gun_smith_table', 'tacz:gun_smith_table'),
      ]
    )
    .transitionalItem('tacz:gun_smith_table') // Set the transitional item
    .loops(1) // Set the number of loops
    //沃芬数控加工台
    ftm.remove({output:'tacz:workbench_b[custom_data={BlockId:"fmic:fmic_workbench"}]'})
    ftm.recipes.create.sequenced_assembly(
      // Outputs:
      [
        CreateItem.of('tacz:workbench_b[custom_data={BlockId:"fmic:fmic_workbench"}]', 1), // Main output, will appear in JEI as the result
      ],
      // Input:
      'tacz:gun_smith_table', 
      // Sequence:
      [
        // The transitional item set by `transitionalItem('create:incomplete_large_cogwheel')` is the item used during the intermediate stages of the assembly
        // Like a normal recipe function, it's used as a sequence step in this array. Input and output have the transitional item
        ftm.recipes.create.deploying('tacz:gun_smith_table', ['tacz:gun_smith_table', 'enderio:dark_steel_block',]),
        ftm.recipes.create.deploying('tacz:gun_smith_table', ['tacz:gun_smith_table', 'actuallyadditions:empowered_restonia_crystal_block',]),
        ftm.recipes.create.deploying('tacz:gun_smith_table', ['tacz:gun_smith_table', 'mekmm:elite_lathing_factory',]),
        ftm.recipes.create.pressing('tacz:gun_smith_table', 'tacz:gun_smith_table'),
      ]
    )
    .transitionalItem('tacz:gun_smith_table') // Set the transitional item
    .loops(1) // Set the number of loops
})