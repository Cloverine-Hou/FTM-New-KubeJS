ServerEvents.recipes(ftm =>{
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