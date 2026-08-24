StartupEvents.registry("item", event => {
    event.create("warped_ender_pearl")
    })
ItemEvents.modification(event => {
    event.modify("minecraft:diamond", modification => {
        modification.setBurnTime(1280000)
    })
    event.modify("minecraft:diamond_block", modification => {
        modification.setBurnTime(12800000)
    })
})