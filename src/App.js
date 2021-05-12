import React from 'react';

import { Directory } from './components/Directory';
import './App.scss';

function App() {
    function openForm() {
        document.getElementById('overlay').style.display = 'block';
        document.getElementById('saveEntryForm').style.display = 'flex';
    }

    function closeForm() {
        const form = document.getElementById('saveEntryForm');
        const editForm = document.getElementById('editEntryForm');
        form.reset();
        editForm.reset();
        form.style.display = 'none';
        editForm.style.display = 'none';
        document.getElementById('overlay').style.display = 'none';
    }

    return (
        <div className="App">
            <div id='overlay' onClick={closeForm}></div>
            <h1 style={{textAlign: "center"}}>Телефонный справочник</h1>
            <button onClick={openForm}>Добавить</button>
            <div className='directory'>
              <Directory closeForm={closeForm} />
            </div>
        </div>
    );
}

export default App;
