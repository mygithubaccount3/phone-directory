import React from 'react';

export function SaveEntryForm({ closeForm, addEntry }) {

    function saveEntry(e) {
        e.preventDefault();

        document.getElementById("nameError").innerText = ""
        document.getElementById("phoneError").innerText = ""

        if(e.target.lastName.value.trim().length > 0 && e.target.phone.value.trim().length > 0) {
            const random = Math.floor(Math.random() * Math.floor(100000))
            addEntry({id: random, phone: e.target.phone.value, lastName: e.target.lastName.value})
            closeForm();
        } else {
            if(e.target.lastName.value.trim().length === 0) {
                document.getElementById("nameError").innerText = "Name required"
            }
            
            if(e.target.phone.value.trim().length === 0) {
                document.getElementById("phoneError").innerText = "Phone required"
            }
        }
    }

    return (
        <form onSubmit={saveEntry} id='saveEntryForm'>
            <label>
                Телефон: <input type='number' name='phone' />
            </label>
            <p id="phoneError" style={{color:"red"}}></p>
            <label>
                Фамилия: <input type='text' name='lastName' />
            </label>
            <p id="nameError" style={{color:"red"}}></p>
            <button type='submit'>Сохранить</button>
        </form>
    )
}
