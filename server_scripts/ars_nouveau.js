ServerEvents.recipes(ftm =>{
    //创造魔源罐
    ftm.shaped('ars_nouveau:creative_source_jar',
    [
        'BAB',
        'ACA',
        'BAB'
    ],
    {
        A : 'ars_nouveau:source_gem_block',
        B : 'ars_nouveau:archmage_spell_book',
        C : 'ars_nouveau:source_jar'
    })
    //把新生魔艺合成表中的金锭变成黄铜锭 金粒变成充能合金粒
    ftm.replaceInput
        ({mod:'ars_nouveau',
        type:'crafting_shaped'},
        '#c:ingots/gold', 
        '#c:ingots/brass')

    ftm.replaceInput
        ({mod:'ars_nouveau',
        type:'crafting_shaped'},
        '#c:nuggets/gold', 
        '#c:nuggets/energetic_alloy')
})