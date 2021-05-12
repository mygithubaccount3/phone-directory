import React from 'react';

export function EditEntryForm({ closeForm, edit }) {
    function editEntry(e) {
        e.preventDefault();

        document.getElementById("editNameError").innerText = ""
        document.getElementById("editPhoneError").innerText = ""

        if(e.target.lastName.value.trim().length > 0 && e.target.phone.value.trim().length > 0) {
            edit(e.target.hiddenId.value, {phone: e.target.phone.value, lastName: e.target.lastName.value})
            closeForm();
        } else {
            if(e.target.lastName.value.trim().length === 0) {
                document.getElementById("editNameError").innerText = "Name required"
            }
            
            if(e.target.phone.value.trim().length === 0) {
                document.getElementById("editPhoneError").innerText = "Phone required"
            }
        }
        
    }
    return (
        <form onSubmit={editEntry} id='editEntryForm'>
            <input type='hidden' id='hiddenId' name="hiddenId" />
            <label>
                Телефон: <input type='number' name='phone' />
            </label>
            <p id="editPhoneError" style={{color:"red"}}></p>
            <label>
                Фамилия: <input type='text' name='lastName' />
            </label>
            <p id="editNameError" style={{color:"red"}}></p>
            <button type='submit'>Изменить</button>
        </form>
    )
}
