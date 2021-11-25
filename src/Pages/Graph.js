import { NeoGraph, ResponsiveNeoGraph} from './NeoGraph'
import { NEOVIS_DEFAULT_CONFIG } from 'neovis.js'; 
import { configure } from '@testing-library/dom';

const NEO4J_URI = "neo4j://localhost:7687";
const NEO4J_USER = "neo4j";
const NEO4J_PASSWORD = "testing";


const GraphGraph = () => {
  return (
    <div className="App" style={{ fontFamily: "Quicksand" }}>
      <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet" />
      <h1>React Neovis Example</h1>
      <ResponsiveNeoGraph
        containerId={"id0"}
        neo4jUri={NEO4J_URI}
        neo4jUser={NEO4J_USER}
        neo4jPassword={NEO4J_PASSWORD}
      />
      <NeoGraph
        width={400}
        height={300}
        containerId={"id1"}
        neo4jUri={NEO4J_URI}
        neo4jUser={NEO4J_USER}
        neo4jPassword={NEO4J_PASSWORD}
        backgroundColor={"#b2beb5"}
      />
    </div>
  );
};
export default GraphGraph;