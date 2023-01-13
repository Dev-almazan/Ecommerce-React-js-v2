


/*Exporto acrhivo a modulo principal */

     const cargando = (e) =>
    {
        alert('cargando');
    }

     const validar = () =>
    {
        console.log('validar');
    }

     const enviar = (e) =>
    {
        e.preventDefault();
        alert('You clicked submit.');
    }

export  {cargando , validar, enviar};
