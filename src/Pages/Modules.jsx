import React, { useCallback } from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge } from 'reactflow';

import 'reactflow/dist/style.css';

const initialNodes = [
    { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
    { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
    { id: '3', position: { x: 0, y: 0 }, data: { label: '3' } },
    { id: '4', position: { x: 0, y: 100 }, data: { label: '4' } },
    { id: '5', position: { x: 0, y: 100 }, data: { label: '5' } },
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' },
{ id: 'e1-3', source: '1', target: '3' },
{ id: 'e1-4', source: '1', target: '4' },];

const Modules = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
            />
        </div>
    );
}

export default Modules;