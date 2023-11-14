let usuario
let bot = 0;
let opciones = ["Piedra", "Papel", "Tijeras", "Serpiente", "Spock"];
let victorias = 0;
let derrotas = 0;
Menu()
function Menu()
{
    let inputMenu = prompt("Jugarás piedra, papel, tijeras, serpiente o spock contra la computadora, elige tu opción:\n1.Piedra\n2.Papel\n3.Tijeras\n4.Serpiente\n5.Spock")
    inputMenu = parseInt(inputMenu - 1);
    if(inputMenu < 5 && inputMenu > -1)
    {
        usuario = opciones[inputMenu];
        console.log("user: "+usuario)
        Elección();
    }
    else
    {
        console.log("error")
        Menu();
    }
}
function Elección()
{
    bot = opciones[IA()];
    console.log(bot);
    //Empate
    if(usuario == bot)
    {
        console.log("Empate");
        Puntaje();
    }

    //Piedra
    if(usuario == "Piedra" && bot == "Tijeras" || bot == "Serpiente")
    {
        victorias++;
        Puntaje();
    }
    if(usuario == "Piedra" && bot == "Papel" || bot == "Spock")
    {
        derrotas++;
        Puntaje();
    }

    //Tijeras
    if(usuario == "Papel" && bot == "Piedra" || bot == "Spock")
    {
        victorias++;
        Puntaje();
    }
    if(usuario == "Papel" && bot == "Serpiente" || bot == "Tijeras")
    {
        derrotas++;
        Puntaje();
    }

    //Serpiente
    if(usuario == "Serpiente" && bot == "Papel" || bot == "Spock")
    {
        victorias++;
        Puntaje();
    }
    if(usuario == "Serpiente" && bot == "Piedra" || bot == "Tijeras")
    {
        derrotas++;
        Puntaje();
    }

    //Spock
    if(usuario == "Spock" && bot == "Piedra" || bot == "Tijeras")
    {
        victorias++;
        Puntaje();
    }
    if(usuario == "Spock" && bot == "Papel" || bot == "Serpiente")
    {
        derrotas++;
        Puntaje();
    }
}
function Puntaje()
{
    console.log("Victorias: " + victorias)
    console.log("Derrotas: " + derrotas)
    console.log("||||||||||||||||||||||||||||");
    let inputContinuar = prompt("¿quieres continuar?\n1.Si\n2.No");
    inputContinuar = parseInt(inputContinuar);
    switch (inputContinuar) {
        case 1:
            Menu();
            break;
        case 2:
            Salir();
            break;
    
        default:
            console.log("error");
            Puntaje();
            break;
    }
}
function Salir()
{
    console.log("gracias por jugar");
}
function IA()
{
    let randombot = Math.floor(Math.random() * 4);
    return randombot;
}
console.log("||||||||||||||||||||||||||||");