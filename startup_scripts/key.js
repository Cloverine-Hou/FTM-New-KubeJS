StartupEvents.init(() => {
    const $GLFWkey = Java.loadClass("org.lwjgl.glfw.GLFW")
    global.pearlKey = new $KeyMapping("key.kubejs.pearl", $GLFWkey.GLFW_KEY_Y, "key.keybinding.kubejs")
    $KeyMappingRegistry.register(global.pearlKey)
})