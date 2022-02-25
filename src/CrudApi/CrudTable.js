import React from 'react';
import CrudTableRow from './CrudTableRow';
import { Table } from 'react-bootstrap';

const CrudTable = ({data, setDataToEdit, deleteData}) => {
    return (
        <div>
            <h3>Tabla de datos</h3>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Telefono</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 ?( 
                    data.map(el=> (
                        <CrudTableRow 
                            /* el.id para trabajar con el array como var, cambiamos segun api*/
                            key={el.id_contacto} el={el} 
                            setDataToEdit={setDataToEdit} 
                            deleteData={deleteData}
                        />
                    ))
                    ):(
                        <tr>
                            <td colSpan="3">Sin datos</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    )
}

export default CrudTable
