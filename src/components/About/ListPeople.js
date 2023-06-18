import './About.scss'
import { useState } from 'react'

export default function ListPeople({ people, handleDeletePerson }) {
    const handleDelete = (person) => {
        handleDeletePerson(person)
    }
    const [isShow, setIsShow] = useState(true)

    return (<div>

        {!isShow ? <div className="row list-people-content"><button className="btn" onClick={() => setIsShow(true)}>Show</button></div>
            :
            <>
                {!Array.isArray(people) || !people.length ?
                    <div className="row">
                        <span style={{ flexGrow: '1', opacity: '0.8', fontStyle: 'oblique' }}>Data is empty. <br /> Please enter information in the form above</span>
                        <button className="btn" onClick={() => setIsShow(false)}>Hide</button>
                    </div>
                    :
                    <>
                        <div className="list-people-content">
                            {people.map((item, index) => {
                                return (
                                    <>
                                        <div className="list-people-item" key={item.id}>
                                            {index + 1}. {item.name} - {item.age} Years old
                                            <button className="btn-delete" onClick={() => handleDelete(item)}>X</button>
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                        <div className="row"><button className="btn" onClick={() => setIsShow(false)}>Hide</button></div>
                    </>
                }

            </>
        }
    </div>)
}