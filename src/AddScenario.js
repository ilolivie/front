import React, {useState} from 'react'
import { Form, Modal, Button } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.css"


const AddScenario = props => {
    const initialFormState = { id: null, name: '', description: '' }
    const [scenario, setScenarios] = useState(initialFormState)

    const handleInputChange = event => {
        const { name, value } = event.currentTarget
        setScenarios({ ...scenario, [name]: value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (!scenario.name || !scenario.description) return
    props.addScen(scenario)
    setScenarios(initialFormState)
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



   
        return (
            <>
      <Button style= {{margin:10}} type="button" class="btn btn-outline-primary" onClick={handleShow}>
      Создать сценарий
      </Button>

      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>Создать сценарий</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Название</Form.Label>
            <Form.Control type="name" name="name" onChange={handleInputChange} placeholder="Введите название" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Описание</Form.Label>
            <Form.Control type="description"  name="description" onChange={handleInputChange} placeholder="Введите описание" />
            </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Закрыть
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Сохранить изменения
          </Button>
        </Modal.Footer>
      </Modal>
    
            
            </>
          );

    } 

  

 

export { AddScenario }