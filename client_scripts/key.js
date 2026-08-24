ClientEvents.tick(event => {
  if (global.pearlKey.consumeClick()) {
    event.player.sendData("global.pearlKey.consumeClick")
  }
})