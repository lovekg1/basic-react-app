import './About.scss'
import logo from '../../assets/image/logo.svg'
import { useState } from 'react'
import ListPeople from './ListPeople'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'



export default function About() {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [people, setPeople] = useState([])
    const navigate = useNavigate()

    const handleSubmit = () => {
        let newPerson = { id: Math.floor(Math.random() * 10000) + 1, name: name, age: age }
        if (!name || !age || !isNaN(parseInt(name)) || isNaN(parseInt(age))) {
            toast.error('Enter a valid info !')
            return
        }
        setPeople([...people, newPerson])
        setName('')
        setAge('')
        toast.success('🦄 Wow so easy!')
    }
    const handleDeletePerson = (person) => {
        let peopleCopy = [...people]
        let newPeople = peopleCopy.filter(item => item.id !== person.id)
        setPeople(newPeople)
    }

    return (
        <>
            <img src={logo} className="App-logo" alt="logo" />
            <div>Explore React Application... <br /> With HoangAnh ^^</div>
            <div className="container">
                <div className="row"><button className="btn" onClick={() => navigate('/basic-react-app/')}>&lt;&lt; Go Home</button></div>
                <form>
                    <div className="row">
                        <div className="col-25">
                            <label>Name</label>
                        </div>
                        <div className="col-75">
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name.." />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label>Age</label>
                        </div>
                        <div className="col-75">
                            <input type="text" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Your age.." />
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <button
                            className="btn"
                            type="button"
                            onClick={() => handleSubmit()}
                        >Submit</button>
                    </div>
                </form>
                <ListPeople
                    people={people}
                    handleDeletePerson={handleDeletePerson}
                />
            </div>

        </>
    )
}