import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';

export default memo(({ data, isConnectable }) => {
    return (
        <div className='Cnode'>
            <Handle
                type="source"
                position={Position.Bottom}
                style={{ background: '#555' }}
                onConnect={(params) => console.log('handle onConnect', params)}
                isConnectable={isConnectable}
            />
            <ul style={{ display: "flex", justifyContent: "space-around", height: '100%' }}>
                <li style={{ width: "20%", borderRight: '1px ridge black' }}></li>
                <li style={{ width: "60%", borderRight: '1px ridge black' }}></li>
                <li style={{ width: "20%", border: "none" }}></li>
            </ul>
            <Handle
                type="target"
                position={Position.Top}
                style={{ background: '#555' }}
                onConnect={(params) => console.log('handle onConnect', params)}
                isConnectable={isConnectable}
            />
        </div>
    );
});
