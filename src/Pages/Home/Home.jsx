import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";

import './Home.css';
const Home = () => {
    const [col, setcol] = useState([]);
    const fetchapi = async () => {
        const { data } = await axios.get("https://64307b10d4518cfb0e50e555.mockapi.io/workflow");
        setcol(data);
    }
    let navigate = useNavigate();
    const goto = () => {
        navigate('/modules');
    }


    useEffect(() => {
        fetchapi();
    }, [])

    return (
        <div className='Home'>
            <div className='header'>Workflows</div>
            <div className='entries'>
                <table className='center'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Input Type</th>
                            <th>Created At</th>
                        </tr>
                    </thead>
                    <tbody>
                        {col &&
                            col.map((c) => (
                                <tr >
                                    <td><span onClick={goto} className='router'>{c.name}</span></td>
                                    <td>{c.input_type}</td>
                                    <td>{c.createdAt.substring(0, 10)}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div >
    )
}

export default Home