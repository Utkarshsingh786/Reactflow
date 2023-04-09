import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Custompagination from '../Pagination/Custompagination';
export default () => {
    const [mods, setmods] = useState([])
    const [page, setpage] = useState(1);
    const fetchmodules = async () => {
        const { data } = await axios.get(`https://64307b10d4518cfb0e50e555.mockapi.io/modules?page=${page}&limit=5`);
        setmods(data);
    }
    useEffect(() => {
        fetchmodules();
    }, [page]);

    const onDragStart = (event, Data) => {
        var dummy = JSON.stringify(Data);
        event.dataTransfer.setData('application/reactflow', dummy);
        event.dataTransfer.effectAllowed = 'move';
    };
    return (
        <aside>
            <span><h1>Modules</h1></span>
            {mods &&
                mods.map((c, index) => (
                    <ul key={c.id} className="dndnode" onDragStart={(event) => onDragStart(event, mods[index])} draggable>
                        <li style={{
                            width: "10%", padding: '13px', borderRight: '1px ridge skyblue'
                        }}> {c.input_type}</li>
                        <li style={{ width: "80%", padding: '13px', borderRight: '1px ridge skyblue' }}>{c.name}</li>
                        <li style={{ width: "10%", border: "none", padding: '13px' }}>{c.output_type}</li>
                    </ul>
                ))}
            <Custompagination setPage={setpage} />
        </aside >
    );
};
