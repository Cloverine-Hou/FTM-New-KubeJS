StartupEvents.init(() => {
    const $KeyMapping = Java.loadClass("net.minecraft.client.KeyMapping")
    const $GLFWkey = Java.loadClass("org.lwjgl.glfw.GLFW")
    const $KeyMappingRegistry = Java.loadClass("dev.architectury.registry.client.keymappings.KeyMappingRegistry")
    global.pearlKey = new $KeyMapping("key.kubejs.pearl", $GLFWkey.GLFW_KEY_Y, "key.keybinding.kubejs")
    $KeyMappingRegistry.register(global.pearlKey)
})