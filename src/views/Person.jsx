import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Person = () => {

    const { id } = useParams()
    const [person, setPerson] = useState()

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(response => {
                console.log(response.data)
                setPerson(response.data)
            })
            .catch(err => setPerson())
    }, [id])

    return (
        <div className="container bg-dark text-warning w-50 p-3 d-flex justify-content-center">
            {
                person ?
                    <div className="w-75 card bg-secondary text-light">
                        <div className="card-header">
                            <h2>{person.name}</h2>
                        </div>
                        <div className="card-body">
                            <h2 className="card-title"></h2>
                            <div className="card-text">
                                <ul>
                                    <li>Height: {person.height} cm</li>
                                    <li>Mass: {person.mass} kg</li>
                                    <li>Hair Color: {person.hair_color}</li>
                                    <li>Skin Color: {person.skin_color}</li>
                                </ul>
                            </div>
                            <a href={person.url} className="btn btn-warning">Find out more!</a>
                        </div>
                        <div className="card-footer text-light">
                            <p>Born: {person.birth_year}, Gender: {person.gender}</p>
                        </div>
                    </div>
                    :
                    <h3>These are not the droids you're looking for.</h3>
            }
        </div>
    )
}

export default Person