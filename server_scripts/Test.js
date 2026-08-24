ItemEvents.firstRightClicked("kubejs:warped_ender_pearl", event => {
    let name = event.player.getName().getString()
    let pearl = event.player.persistentData.getInt("pearl").toString()
    if (event.player.isSteppingCarefully()) {
        event.player.persistentData.putDouble("posx" + pearl, event.player.x)
        event.player.persistentData.putDouble("posy" + pearl, event.player.y)
        event.player.persistentData.putDouble("posz" + pearl, event.player.z)
        event.player.persistentData.putString("dim_b" + pearl, event.getLevel().getDimension())
        event.getServer().runCommandSilent(`playsound minecraft:entity.enderman.ambient ambient ${name} ${event.player.x} ${event.player.y} ${event.player.z}`)
        event.player.setStatusMessage("坐标已保存至该槽位")
    }
    if (!event.player.isSteppingCarefully()) {
        if (event.player.persistentData.getDouble("posx" + pearl) != null) {
            event.getServer().runCommandSilent(`execute in ${event.player.persistentData.getString("dim_b" + pearl)} run tp ${name} ${event.player.persistentData.getDouble("posx" + pearl)} ${event.player.persistentData.getDouble("posy" + pearl)} ${event.player.persistentData.getDouble("posz" + pearl)}`)
            event.getServer().runCommandSilent(`playsound minecraft:entity.enderman.teleport ambient ${name} ${event.player.x} ${event.player.y} ${event.player.z}`)
        }
    }
})
NetworkEvents.dataReceived("global.pearlKey.consumeClick", event => {
    if (event.player.getHeldItem("main_hand") == "kubejs:warped_ender_pearl") {
        let pearl = event.player.persistentData.getInt("pearl")
        if (event.player.isSteppingCarefully()) {
            if (pearl == 0) {
                event.player.persistentData.putInt("pearl", 10)
                event.player.setStatusMessage("坐标槽位：10")
            } else {
                event.player.persistentData.putInt("pearl", pearl - 1)
                event.player.setStatusMessage("坐标槽位：" + (pearl - 1))
            }
        } else {
            if (pearl == 10) {
                event.player.persistentData.putInt("pearl", 0)
                event.player.setStatusMessage("坐标槽位：0")
            } else {
                event.player.persistentData.putInt("pearl", pearl + 1)
                event.player.setStatusMessage("坐标槽位：" + (pearl + 1))
            }
        }
    }
})
ServerEvents.recipes((event) => {
    const gtr = event.recipes.gtceu

    event.shaped("kubejs:warped_ender_pearl", [
        "ABA",
        "BDB",
        "ABA"
    ], {
        A: "minecraft:bone_meal",
        B: "minecraft:blaze_powder",
        D: "minecraft:ender_pearl"
    })