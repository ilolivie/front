import React, {useState}from 'react'
import { Button } from 'react-bootstrap'
import Login from './Login'
import './App.css'
import { AddScenario } from './AddScenario'
import { ScenarioForm } from './ScenarioForm'
import {UpdateScenario} from './UpdateScenario'
import useToken from './Token'

  
function App() { 

  const { token, setToken } = useToken();

  const usersData = []
  const [scenarios, setScenarios] = useState(usersData)
  const [editing, setEditing] = useState(false)
  const initialFormState = { id: null, name: '', description: '' }
  const [currentUser, setCurrentUser] = useState(initialFormState)

  //добавление сценария
  const addScen = scenario => {
    scenario.id = scenarios.length + 1
    setScenarios([ ...scenarios, scenario ])
  }

  //удаление сценария
  const deleteScen = id => {
    setEditing(false)
    setScenarios(scenarios.filter(scenario => scenario.id !== id))
  }

  //изменение сценария
  const updateScen = (id, updatedscen) => {
    setEditing(false)
    setScenarios(scenarios.map(scenario => (scenario.id === id ? updatedscen : scenario)))
  }

  const editRow = scenario => {
    setEditing(true)
    setCurrentUser({ id: scenario.id, name: scenario.name, description: scenario.description })
  } 


  //отображение логина 
  if (!token){
    return <Login setToken={setToken}/>
  }

 //разлог 
  const logout = () =>{
    localStorage.clear();
    window.location.href = '/';
}

  return ( 
    
      <div className="wrapper">
        <h1>Мои сценарии</h1> 
        <div className="flex-row">    
        
      
          <Button type="button" class="btn btn-outline-success" onClick={logout}>Выйти</Button>
        
          <AddScenario addScen={addScen}/>
          <UpdateScenario 
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateScen={updateScen}
              />
        </div>              
        
          <ScenarioForm scenarios={scenarios} deleteScen={deleteScen} editRow={editRow} />
       
      </div>    
    
    
  );
}

export default App  ;