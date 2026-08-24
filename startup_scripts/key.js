StartupEvents.init(() => {
    global.pearlKey = new $KeyMapping("key.kubejs.pearl", $GLFWkey.GLFW_KEY_Y, "key.keybinding.kubejs")
    $KeyMappingRegistry.register(global.pearlKey)
})