import React from 'react'
import {Table,Button} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.css"
import './App.css';


const ScenarioForm = props => {
  //удаление сценария
  const handleDeleteScen = id => {
    let answer = window.confirm('Вы уверены?')

    if (answer) {
      props.deleteScen(id)
    }
  }
  
  return (
    <Table table table-bordered border-primary>
      <thead>
        <tr>
          <th>Название</th>
          <th>Описание</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {props.scenarios.length > 0 ? (
          props.scenarios.map(scenario => (
            <tr key={scenario.id}>
              <td>{scenario.name}</td>
              <td>{scenario.description}</td>
              <td>
              <div className="form-check">
              <input type="checkbox"
                  onChange={() => {
                    props.editRow(scenario)
                  }}
                  className="form-check-input"/>
                  <label class="form-check-label" for="flexCheckDefault">
                    Выбрать для просмотра
                  </label> 
                  </div>           
                  
                
                <Button variant="primary"
                    className="button muted-button"
                    onClick={() => handleDeleteScen(scenario.id)}>
                    Удалить
                  </Button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>Нет данных</td>
          </tr>
        )}
      </tbody>
    </Table>
  )
        }






export { ScenarioForm }