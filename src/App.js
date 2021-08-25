/*import logo from './logo.svg';*/
/*import './App.css';*/
import { useState } from 'react';
import Header from "./component/Header";
import Tasks from './component/Tasks'
import AddTask from './component/AddTask';


function App() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Learn JS',
            day: 'Monday',
            reminder: true
        },
        {
            id: 2,
            text: 'Learn React',
            day: 'Tuesday',
            reminder: true
        },
        {
            id: 3,
            text: 'Learn Nodejs',
            day: 'Wednesday',
            reminder: false
        }

    ])
/*  const name = 'Ali'
  const gender = true*/

    //Add Task
    const addTask = (task) => {
        const id = Math.floor(Math.random()*1000)+1;
        const newTask ={id, ...task};
        setTasks([...tasks, newTask])
    }

    //Delete Task
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) =>
            task.id !== id
        ))
    };

    const fooTest = (id) => {
        return tasks.map((task) => task.id === id ? {...task, reminder : !task.reminder} : task)

    };
    const toggleReminder = (id) => {
        setTasks( fooTest(id))
    };


  return (
    <div className="container">
{/*      <Title name={'ALI BIG POOPA'}/>
      <Title name={'HARD'}/>*/}
        <Header title={'Task Tracker'}/>
        <AddTask onAdd={addTask}/>
        {tasks.length > 0 ?
            (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>) :
            ('Congrats! You are now a MERN Stack Developer.')}
{/*    <h1>Hello World {name}</h1>
      <h2>gender: {gender ? 'Gay': 'Gays'}</h2>*/}

    </div>

  );
};
/*
import React from 'react';

class App extends React.Component {
    render() {
        return <h1> Hello from a class</h1>
    };
};
*/

export default App;
