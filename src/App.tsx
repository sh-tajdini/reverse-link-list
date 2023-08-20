import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Node } from './schema'

function App() {
const node1:Node = { value: 1, next: null };
const node2:Node = { value: 2, next: null };
const node3:Node = { value: 3, next: null };
const node4:Node = { value: 4, next: null };
const node5:Node = { value: 5, next: null };

// // Connect nodes to form a linked list: 1 -> 2 -> 3 -> 4 -> 5
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

// create an array with node1, node2, node3, node4, node5
const nodes = [node1, node2, node3, node4, node5];



  const reverse = (k:number, node?:Node)=> 
   {
    //Initialize prev, curr and next pointers as null
    let prev = null;
    let curr = node || null;
    let next = null;
    
    let count = 0;
    
    //Reverse the first k nodes
    while (curr && count < k) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
        count++;
    }
    
    //If there are remaining nodes, recursively reverse them
    if (next !== null && node !== undefined) {
        node.next = reverse(k,next);
    }
    
    //Return the new head of the reversed substrings
    return prev;
}
// print nodes
const print = () => {
  console.log('print')
  nodes.forEach(element => {
    let curr = element;
    let count = 0;
    const PrintedList= [];
    while (curr !== null) {
        count++;
        PrintedList.push(curr?.value);
        curr = curr.next as Node;
    }
    if(count === 5)
    console.log(PrintedList);
  });
    // let curr = node4 as Node;
    // while (curr !== null) {
    //     console.log(curr?.value);
    //     curr = curr.next;
    // }
}
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => reverse(2,node1)}>
          Revert the nodes
        </button>
        <button onClick={() => print()}>
          print the values
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
