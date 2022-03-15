$(document).ready(function () 
{

    function modalMante(boton)
    {
        $(boton).click
        (
            function()
            {
                $('.modal').modal('show')
                $('.modal-title').text('Tipos de mantenimiento')
                $('.modal-body').html('<img src="img/modal/mantenimiento.png" alt="" style="width: 100%;"> <p class="card-text text-secondary">El objetivo del mantenimiento informático es lograr que los equipos de trabajo estén en funcionamiento el mayor tiempo posible – el indicador relevante entonces es el “uptime”, operando eficazmente y con el máximo nivel de seguridad para los usuarios que lo utilizan. </p>')
            }
        )
    }
    modalMante('#cMante')
    modalMante('#aMante')

    function modalRam(boton)
    { 
        $(boton).click
        (

            function()
            {
                $('.modal').modal('show')
                $('.modal-title').text('Evolución de la ram')
                $('.modal-body').html('<div style="width: 100%;"><div style="position: relative; padding-bottom: 56.25%; padding-top: 0; height: 0;"><iframe frameborder="0" width="1200" height="675" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" src="https://view.genial.ly/62030990dfd2eb001cc4aec5" type="text/html" allowscriptaccess="always" allowfullscreen="true" scrolling="yes" allownetworking="all"></iframe> </div> </div> <p class="card-text text-secondary">El inicio de la gran evolución de las memorias RAM vino con la generación de computadoras 386 y 486, las cuales utilizaban memorias con velocidades de 80 ns ó 12.5 MHz. La gran ventaja de estas memorias es que venían agrupadas en módulos, tenían por nombre memorias SIMM y contaban con contactos de 30 pines. Estas memorias eran sensiblemente más baratas que la generación anterior y mucho más simple de instalarlas en la placa madre, lo que facilitaba su mantenimiento. Contaban con 8 bits de ancho de banda, lo único malo es que eran mucho más lentas que la velocidad del procesador, lo que tendía a desmejorar el rendimiento del equipo. </p>')
            }

        )
    }

    modalRam('#cRam')
    modalRam('#aRam')

    function modalEmergente(boton)
    {

        $(boton).click
        (

            function()
            {
                $('.modal').modal('show');
                $('.modal-title').text('Tecnólogias emergentes')
                $('.modal-body').html('<iframe width="760px" height="500px" src="https://sway.office.com/s/9rPeLIa9vkVZzu3e/embed" frameborder="0" marginheight="0" marginwidth="0" max-width="100%" sandbox="allow-forms allow-modals allow-orientation-lock allow-popups allow-same-origin allow-scripts" scrolling="no" style="border: none; max-width: 100%; max-height: 100vh" allowfullscreen mozallowfullscreen msallowfullscreen webkitallowfullscreen></iframe>')
            }

        )
    }

    modalEmergente('#cTEmergentes')
    modalEmergente('#aEmergente')

    function modalUnity(boton)
    {

        $(boton).click
        (

            function()
            {
                $('.modal').modal('show');
                $('.modal-title').text('Visual Studio Code vs Unity')
                $('.modal-body').html('<p class="card-text text-secondary">Visual Studio Code puede ser un gran compañero de Unity para editar y depurar archivos de C#. Todas las características de C# son compatibles y más.</p><a  href="https://prezi.com/view/oD9oI70jrzoFyGAGjiy6/" class="btn btn-primary" target="_blank">Ver más</a>')
            }

        )
    }

    modalUnity('#cUnity')
    modalUnity('#aUnity')

    function modalC(boton)
    {

        $(boton).click
        (

            function()
            {
                $('.modal').modal('show');
                $('.modal-title').text('Historia C#')
                $('.modal-body').html('<p class="card-text text-secondary">Te suena su nombre, pero… ¿sabes qué es C#? ¿Para qué se utiliza? ¿Por qué aprender a utilizarlo? Si te has planteado alguna de estas cuestiones da click en ver más porque te interesa.</p><a  href="/historia-csharp.html" class="btn btn-primary" target="_blank">Ver más</a>')
            }

        )
    }

    modalC('#cC')
    modalC('#aC')
})