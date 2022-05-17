import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'

const HeaderForm = () => {

    const [category, setCategory] = useState("")
    const [id, setId] = useState("")
    const history = useHistory()

    const handleSubmit=(e)=>{
        e.preventDefault()
        history.push(`/${category}/${id}`)
    }

    return (
        <div className="container bg-dark text-warning w-50 p-3 ">
            <form onSubmit={handleSubmit} className="d-flex flex-column w-100 p-3">
                <label className="form-label mt-3 me-2">Category</label>
                <select name="category" value={category} onChange={(e)=>setCategory(e.target.value)}>
                    <option hidden>Choose a category</option>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                </select>
                <label className="form-label mt-3 ms-2 me-2">ID:</label>
                <input type="text" value={id} onChange={(e)=>setId(e.target.value)}/>
                <button className="btn btn-warning mt-4 mb-3">Search</button>
            </form>
        </div>
    )
}

export default HeaderForm