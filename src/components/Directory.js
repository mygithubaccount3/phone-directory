import React, {useState} from 'react'
import { SaveEntryForm } from './AddEntryForm'
import { EditEntryForm } from './EditEntryForm'

function openEditEntryForm(id, phone, lastName) {
    return function() {
        document.getElementById('overlay').style.display = 'block'
        document.getElementById('editEntryForm').style.display = 'flex'
        document.getElementById('editEntryForm').hiddenId.value = id
        document.getElementById('editEntryForm').phone.value = phone
        document.getElementById('editEntryForm').lastName.value = lastName
    }
}

export function Directory({ closeForm }) {
    let [directory, setDirectory] = useState({list: []})

    function addEntry(entry) {
        setDirectory({list: [...directory.list, entry]})
      }

      function editEntry(id, entry) {
        const ind = directory.list.findIndex(el => el.id == id)
        let items = [...directory.list]
        let item = {...items[ind]}
        item.phone = entry.phone
        item.lastName = entry.lastName
        items[ind] = item
        setDirectory({list: items})
      }

      function removeItem(id) {
          return function() {
            const ind = directory.list.findIndex(el => el.id == id)
            let items = [...directory.list]
            items.splice(ind, 1);
            setDirectory({list: items})
          }
      }

    let rows = directory.list.map(el => {
        return <tr key={el.id}
                id={el.id}>
                <td style={{textAlign: 'center'}}>{el.phone}</td>
                <td style={{textAlign: 'center'}}>{el.lastName}</td>
                <td style={{textAlign: 'center'}}>
                    <button onClick={openEditEntryForm(el.id, el.phone, el.lastName)}>
                        Изменить
                    </button>
                    <button onClick={removeItem(el.id)}>
                        Удалить
                    </button>
                </td>
            </tr>
    })

    return (
        <React.Fragment>
            <SaveEntryForm closeForm={closeForm} addEntry={addEntry} />
            <EditEntryForm closeForm={closeForm} edit={editEntry}/>
            <table className={`directory__items`} style={{width: '100%'}}>
            <thead>
                <tr>
                    <th scope="col">Номер телефона</th>
                    <th scope="col">Фамилия</th>
                    <th scope="col">Действие</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
        </React.Fragment>
    )
}
