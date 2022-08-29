let app= document.getElementById ('typewriter');

let typewriter= new Typewriter(app,{
    loop: true,
    delay: 75
});

typewritter
    .typeString('Estamos ahi mismo')
    .pauseFor(200)
    .start()