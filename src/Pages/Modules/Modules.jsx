import React from 'react'
import Workflow from '../Workflow/Workflow'
import './Modules.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
const Modules = () => {
    const [mods, setmods] = useState([])
    const fetchmodules = async () => {
        const { data } = await axios.get("https://64307b10d4518cfb0e50e555.mockapi.io/workflow");
        setmods(data);
    }
    useEffect(() => {
        fetchmodules();
    }, [])
    return (
        <div className='box'>
            <h2>{`Workflow Name:`}</h2>
            <div className='container'>
                <div className='leftside'>
                    <span>Modules</span>
                    {mods.map((c) => {
                        <ul>
                            <li>{c.name}</li>
                        </ul>
                    })}
                </div>
                {/* <Workflow /> */}
            </div>
        </div>
    )
}

export default Modules