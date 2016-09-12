var game = new Phaser.Game(1280, 736, Phaser.CANVAS, '', {
    preload: preload,
    create: create,
    update: update,
    render: render
});

function preload() { //function preload () {

}

function create() { //function create () {

    var socket = io.connect();
    socket.on("connect", onSocketConnected);
    socket.on("disconnect", onSocketDisconnect);

}

function update() { //function update () {

}

function render() { //function render () {

}

function onSocketConnected() { //function onSocketConnected() {
    console.log('onSocketConnected');
}

function onSocketDisconnect() { //function onSocketDisconnect() {
    console.log('onSocketDisconnect');
}