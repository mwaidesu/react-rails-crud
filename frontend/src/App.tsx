import { Route, Routes } from 'react-router';
import './App.css';
import Article from './features/posts/Article';
import Parent from './Parent';
import Navbar from './Nav';

function App() {
  return (
    // <div className="App">
    //   <Parent/>
    // </div>
    <>
    <Navbar/>
    <Routes>
      <Route path ="/" element={<Parent/>}/>
      <Route path ="/posts/:id" element ={<Article />}/>
    </Routes>
    </>
  );
}

export default App;
