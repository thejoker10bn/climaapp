import React, {Fragment, useState, useEffect} from 'react';
import Header from './Components/Header';
import Formulario from './Components/Formulario';
import Clima from './Components/Clima';
import Error from './Components/Error'
import clima from './Components/Clima';


function App() {
     const [busquedac , guardarBusquedac] = useState({
         ciudad:'',
         pais :''
     });

     const [consultar, guardarConsultar] = useState(false);
     const [resultado, guardarResultado] = useState({});
     const [error, guardarError] = useState(false);


     const {ciudad, pais} = busquedac;

     useEffect (() => {

        const consultarAPI = async () =>{

            if (consultar){

                const appld = 'c11a5e2033f0f29d1b7944c7a5563668';
                const url = 'http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`';

                const respuesta = await fetch(url);
                const resultado = await respuesta.json();

                guardarResultado(resultado);
                guardarConsultar(false);

                if(resultado.cod === "404") {
                    guardarError(true);
                } else {
                    guardarError(false);
                }


            }
        }

        consultarAPI();
    
        
     },[consultar]);
    
     let componente;

     if (error){
         componente = <Error mensaje="No hay resultados"/>
     } else {<Clima
            resultado={resultado}
            />
        } 



     return(

        <Fragment>

        <Header

            titulo= 'clima ciudades'
            />


        <div className=" contenedor form">
            <div className ="container">

                <div className ="col m5 s12">

                <Formulario 

                busquedac={busquedac}
                guardarBusquedac={guardarBusquedac}
                guardarConsultar={guardarConsultar}

                />
                </div>
                <div className ="col m5 s12">{componente}</div>
            </div>





        </div>









        </Fragment>










     );

        
}

export default App;
