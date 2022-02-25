import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const initialForm={
    artist:"",
    song:""
};

const SongForms = ({handleSearch}) =>{

    const [form, setForm] = useState(initialForm);

    const handleChange= (e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        });
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        if(!form.artist || !form.song){
            alert("Datos incompletos")
            return;
        }

        handleSearch(form);
        setForm(initialForm);
    }

    return(
        <div className="mb-2">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Nombre artista</Form.Label>
                    <Form.Control
                        type="text" 
                        name="artist" 
                        placeholder="Nombre Interprete" 
                        onChange={handleChange} 
                        value={form.artist}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Cancion</Form.Label>
                    <Form.Control
                        type="text" 
                        name="song" 
                        placeholder="Nombre Cancion" 
                        onChange={handleChange} 
                        value={form.song}>
                    </Form.Control>
                </Form.Group>
                <Button
                    variant="primary"
                    type="submit">
                    Search
                </Button>{'  '}
                <Button
                    variant="primary"
                    type="reset"  
                    /* onClick={handleReset} */
                >Limpiar</Button>
            </Form>
        </div>
    )
}

export default SongForms;