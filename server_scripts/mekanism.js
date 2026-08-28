ServerEvents.recipes(ftm => {
    //番茄-->生物燃料
    ftm.recipes.mekanism.crushing('4x mekanism:bio_fuel', 'farmersdelight:tomato')
    //数控轧机 板
    //铁板
    ftm.custom(
    {
    "type": "mekmm:rolling_mill",
    "input": {
    "count": 1,
    "item": 'minecraft:iron_ingot'
    },
    "output": {
    "count": 1,
    "id": 'create:iron_sheet'
    }
    }  
    )
    ftm.custom(
    {
    "type": "mekmm:rolling_mill",
    "input": {
    "count": 1,
    "item": 'create:zinc_ingot'
    },
    "output": {
    "count": 1,
    "id": 'createaddition:zinc_sheet'
    }
    }  
    )
    //金板
    ftm.custom(
    {
    "type": "mekmm:rolling_mill",
    "input": {
    "count": 1,
    "item": 'minecraft:gold_ingot'
    },
    "output": {
    "count": 1,
    "id": 'create:golden_sheet'
    }
    }
    )
    //铜板
    ftm.custom(
    {
    "type": "mekmm:rolling_mill",
    "input": {
    "count": 1,
    "item": 'minecraft:copper_ingot'
    },
    "output": {
    "count": 1,
    "id": 'create:copper_sheet'
    }
    }
    )
    //黄铜板
    ftm.custom(
    {
    "type": "mekmm:rolling_mill",
    "input": {
    "count": 1,
    "item": 'create:brass_ingot'
    },
    "output": {
    "count": 1,
    "id": 'create:brass_sheet'
    }
    }
    )
    //钨板
    ftm.custom(
    {
    "type": "mekmm:rolling_mill",
    "input": {
    "count": 1,
    "item": 'northstar:tungsten_ingot'
    },
    "output": {
    "count": 1,
    "id": 'northstar:tungsten_sheet'
    }
    }
    )
    //火星钢板
    ftm.custom(
    {
    "type": "mekmm:rolling_mill",
    "input": {
    "count": 1,
    "item": 'northstar:martian_steel_ingot'
    },
    "output": {
    "count": 1,
    "id": 'northstar:martian_steel_sheet'
    }
    }
    )
    
    //数控轧机 线
    //铁线
    ftm.custom(
    {
    "type": "mekmm:rolling_mill",
    "input": {
    "count": 1,
    "item": 'create:iron_sheet'
    },
    "output": {
    "count": 2,
    "id": 'createaddition:iron_wire'
    }
    }
    )
    //金线
    ftm.custom(
    {
    "type": "mekmm:rolling_mill",
    "input": {
    "count": 1,
    "item": 'create:golden_sheet'
    },
    "output": {
    "count": 2,
    "id": 'createaddition:gold_wire'
    }
    }
    )
    //琥珀金线
    ftm.custom(
    {
    "type": "mekmm:rolling_mill",
    "input": {
    "count": 1,
    "item": 'createaddition:electrum_sheet'
    },
    "output": {
    "count": 2,
    "id": 'createaddition:electrum_wire'
    }
    }
    )
    //铜线
    ftm.custom(
    {
    "type": "mekmm:rolling_mill",
    "input": {
    "count": 1,
    "item": 'create:copper_sheet'
    },
    "output": {
    "count": 2,
    "id": 'createaddition:copper_wire'
    }
    }
    )

    //数控车床 铁杆
    ftm.custom(
    {
    "type": "mekmm:lathe",
    "input": {
    "count": 1,
    "item": 'minecraft:iron_ingot'
    },
    "output": {
    "count": 2,
    "id": 'createaddition:iron_rod'
    }
    }
    )
})