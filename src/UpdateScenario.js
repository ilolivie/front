import React, {useState, useEffect} from 'react'
import { Form, Modal, Button } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.css"
import './App.css';


const UpdateScenario = props => {

    const [scenario, setScenarios] = useState(props.currentUser)
    useEffect(
        () => {
          setScenarios(props.currentUser)
        },
        [props] 
      )
    

  const handleInputChange = event => {
    const { name, value } = event.target

    setScenarios({ ...scenario, [name]: value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (!scenario.name || !scenario.description) return
    props.updateScen(scenario.id, scenario)
  } 

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
   
    return (
            <>
      <Button style= {{margin:10}} type="button" class="btn btn-outline-primary" onClick={handleShow}>
        Просмотр
      </Button>

      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>Просмотр</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Название</Form.Label>
            <Form.Control type="name" name="name" value={scenario.name} onChange={handleInputChange} placeholder="Введите имя" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Описание</Form.Label>
            <Form.Control type="description"  name="description" value={scenario.description} onChange={handleInputChange} placeholder="Описание" />
            </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmit}>
            Сохранить изменения
          </Button>
        </Modal.Footer>
      </Modal>
    
            
            </>
          );

    } 

  

 

export { UpdateScenario }