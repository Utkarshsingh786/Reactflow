import React, { useState, useRef, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import ReactFlow, {
    ReactFlowProvider,
    addEdge,
    useNodesState,
    useEdgesState,
    getIncomers,
    getOutgoers,
    getConnectedEdges,
} from 'reactflow';
import 'reactflow/dist/style.css';
import CustomNode from './CustomNode';
import InputNode from './InputNode';
import Sidebar from './Sidebar';
import './index.css';


const nodeTypes = {
    selectorNode: CustomNode,
    firstNode: InputNode,
};

const initialNodes = [
    {
        id: '1',
        type: 'firstNode',
        position: { x: 250, y: 5 },
    },
];
let id = 0;
const getId = () => `dndnode_${id++}`;
const DnDFlow = () => {
    const { name } = useParams();
    const reactFlowWrapper = useRef(null);
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);
    const [reactFlowInstance, setReactFlowInstance] = useState(null);
    const onConnect = useCallback((params) =>
        setEdges((eds) =>
            addEdge(params, eds)
        ), []);
    const onDragOver = useCallback((event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }, []);
    const onDrop = useCallback(
        (event) => {
            event.preventDefault();
            const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
            const Text = JSON.parse(event.dataTransfer.getData('application/reactflow'));
            const position = reactFlowInstance.project({
                x: event.clientX - reactFlowBounds.left,
                y: event.clientY - reactFlowBounds.top,
            });
            const newNode = {
                id: getId(),
                type: 'selectorNode',
                position,
                data: {
                    input: `${Text.input_type}`,
                    name: `${Text.name}`,
                    output: `${Text.output_type}`,
                },
            };
            setNodes((nds) => nds.concat(newNode));
        },
        [reactFlowInstance]
    );

    const onNodesDelete = useCallback(
        (deleted) => {
            setEdges(
                deleted.reduce((acc, node) => {
                    const incomers = getIncomers(node, nodes, edges);
                    const outgoers = getOutgoers(node, nodes, edges);
                    const connectedEdges = getConnectedEdges([node], edges);

                    const remainingEdges = acc.filter((edge) => !connectedEdges.includes(edge));

                    const createdEdges = incomers.flatMap(({ id: source }) =>
                        outgoers.map(({ id: target }) => ({ id: `${source}->${target}`, source, target }))
                    );

                    return [...remainingEdges, ...createdEdges];
                }, edges)
            );
        },
        [nodes, edges]
    );
    return (
        <>
            <h2>{`Workflow Name:${name}`}</h2>
            <div className="dndflow">
                <ReactFlowProvider>
                    <Sidebar />
                    <div className="reactflow-wrapper" ref={reactFlowWrapper}>
                        <ReactFlow
                            nodes={nodes}
                            edges={edges}
                            onNodesChange={onNodesChange}
                            onEdgesChange={onEdgesChange}
                            onConnect={onConnect}
                            onInit={setReactFlowInstance}
                            onDrop={onDrop}
                            onDragOver={onDragOver}
                            fitView
                            nodeTypes={nodeTypes}
                            onNodesDelete={onNodesDelete}
                        >
                        </ReactFlow>
                    </div>
                </ReactFlowProvider>
            </div>
        </>
    );
};

export default DnDFlow;
