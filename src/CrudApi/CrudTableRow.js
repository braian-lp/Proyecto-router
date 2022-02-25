import React from 'react'
import {Button} from 'react-bootstrap'

const CrudTableRow = ({el, setDataToEdit, deleteData}) => {
    
    let {nombre_contacto, numero_contacto, id_contacto}=el;
    return (
        <tr>
            <td>{nombre_contacto}</td>
            <td>{numero_contacto}</td>
            <td>
                <Button variant="primary" onClick={()=> setDataToEdit({name:nombre_contacto,telephone:numero_contacto,id:id_contacto})}>Editar</Button>{' '}
                <Button variant="secondary" onClick={()=> deleteData(id_contacto)}>Eliminar</Button>
            </td>
        </tr>
    )
}

export default CrudTableRow
