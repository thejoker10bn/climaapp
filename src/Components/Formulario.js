import React from 'react';
import Error from './Error';
import PropTypes from 'prop-types';


const Formulario =({busquedac, guardarBusquedac, guardarConsultar}) =>{

    // eslint-disable-next-line no-undef
    const  [error , guardarError ] = useState(false);

    const {ciudad, pais} = busquedac;
    
    const handleChange = e => {
    
        guardarBusquedac({
            ...busquedac,
            [e.target.name] : e.target.value
        });
    
    
    }
     const handleSubmit = e => {
         e.preventDefault();

         if (ciudad.trim()===''||  pais.trim() ===''){
             guardarError(true);
             return;
         }

         guardarError(false);
         guardarConsultar(true);

     } 
     
return (

    <form onSubmit={handleSubmit}>
        
        {error ? <Error mensaje="No se pueden dejar los campops vacios" />:null}


        <div className="input field col s12">
            <input
                 type= "text"
                 name = "ciudad"
                 id ="ciudad"
                 value = {ciudad}
                 onChange ={handleChange}            
            
            
            />

            <label htmlFor="ciudad" >Ciudad:</label>


        </div>

        <div  className="input-field col s12">
        
        <select
            name = "pais"
            id = "pais"
            value = {pais}
            onChange = {handleChange}
        
        
        >
            <option value =""> -- Seleccione un pais --</option>
            <option value ="CO">Colombia</option>
            <option value ="AR">Argentina</option>
            <option value ="PA">Panama</option>
            <option value ="RD">Republica dominicana</option>
            <option value ="MX">Mexico</option>


        </select>
        
        <label htmlFor="pais">Pais:</label>
        </div>

        <div className="input-field col s12">

            <input 
                type ="submit"
                value ="Buscar temperatura actual del pais"
                className = "waves-effect waves-light btn-large btn-block yellow accent-4"
            
            >

                
            
            </input>




        </div>


    </form>

);

}

    
    Formulario.propTypes = {
    busquedac : PropTypes.object.isRequired,
    guardarBusquedac : PropTypes.func.isRequired,
    guardarConsultar : PropTypes.func.isRequired
}

export default Formulario;