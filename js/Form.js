class Form {
constructor() {
    this.playButton = createButton("Play");
    this.infoButton = createButton("?")
    this.titleImg = createImg("Images/Game Title.png", "game title");
    this.userIcon = createImg("Images/UserIcon.png")

}
setElementsPosition() {
this.playButton.position(width/2, height/1-100);
this.infoButton.position(width/8,height/1-100)
this.titleImg.position(width/2,height/2)
this.userIcon.position(width/2,height/10)
}
setElementsStyle() {
this.playButton.class("Button1")
this.infoButton.class("Button2")
this.titleImg.class("gameTitle")
this.userIcon.class("User")
}
hide() {
this.playButton.hide()
this.infoButton.hide()
this.titleImg.hide()
this.userIcon.hide()
}
handleMousePressed() {
    this.playButton.mousePressed(() => {
    gameState=BUILD;
    this.playButton.hide()
    this.infoButton.hide()
    this.titleImg.hide()
    this.userIcon.hide()
});
}
display() {
    this.setElementsPosition();
    this.setElementsStyle();
    this.handleMousePressed();
}
}