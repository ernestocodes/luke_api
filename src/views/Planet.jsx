import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Planet = () => {

    const { id } = useParams()
    const [planet, setPlanet] = useState()

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then(response => {
                console.log(response.data)
                setPlanet(response.data)
            })
            .catch(err => {
                console.log(err)
                setPlanet()
            })
    }, [id])

    return (
        <div className="container bg-dark text-warning w-50 p-3 d-flex justify-content-center">
            {
                planet ?
                    <div className="w-75 card bg-secondary text-light">
                        <div className="card-header">
                            <h2>{planet.name}</h2>
                        </div>
                        <div className="card-body">
                            <h2 className="card-title"></h2>
                            <div className="card-text">
                                <ul>
                                    <li>Climate: {planet.climate}</li>
                                    <li>Terrain: {planet.terrain}</li>
                                    <li>Surface Water: {planet.surface_water>=0?<span>True</span>:<span>False</span>
                                }</li>
                                    <li>Population: {planet.population}</li>
                                </ul>
                            </div>
                            <a href={planet.url} className="btn btn-warning">Find out more!</a>
                        </div>
                        <div className="card-footer text-light">
                            <p>Number of Film Appearances: {planet.films.length}</p>
                        </div>
                    </div>
                    :
                    <h3>These are not the droids you're looking for.</h3>
            }
        </div>
    )
}

export default Planet