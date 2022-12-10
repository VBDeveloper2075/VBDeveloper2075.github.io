var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Quiero Ver Una Demostración')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Fácil de Implementar y ...')
    .pauseFor(2500)
    .deleteChars(3)
    .typeString('<strong>GRATIS!</strong>')
    .pauseFor(2500)
    .start();