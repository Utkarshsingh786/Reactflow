import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';

export default memo(({ data, isConnectable }) => {
    return (
        <div className='Cnode custom'>
            <Handle
                type="source"
                position={Position.Bottom}
                style={{ background: '#555' }}
                onConnect={(params) => console.log('handle onConnect', params)}
                isConnectable={isConnectable}
            />
            <ul style={{ display: "flex", justifyContent: "space-around", height: '100%' }}>
                <li className='input'>▶️</li>
                <li className='input'>Input</li>
                <li className='input' style={{ width: "20%", border: "none" }}>A</li>
            </ul>
        </div>
    );
});
