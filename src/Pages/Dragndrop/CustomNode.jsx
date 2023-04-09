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
            <ul className="customnodes">
                <li className='danger' style={{ width: "10%" }} >{data.input}</li>
                <li className='danger' style={{ width: "80%" }} >{data.name}</li>
                <li className='danger' style={{ width: "10%", border: "none" }}>{data.output}</li>
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
