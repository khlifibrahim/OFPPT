import './App.css'
import Ex1 from './Exercices/Ex - 1/ex1'
import Ex2 from './Exercices/Ex - 2/ex2'
import Ex3 from './Exercices/Ex - 3/ex3';
import Ex4 from './Exercices/Ex - 4/ex4';
import Ex5 from './Exercices/Ex - 5/ex5';

function App() {

  return (
      <div className='app' >
          
          <div className="container">
            <Ex1 />
          </div>
          
          <div className="container">
            <Ex2 />
          </div>
          
          <div className="container">
            <Ex3 />
          </div>
          
          <div className="container">
            <Ex4 />
          </div>
          
          <div className="container">
            <Ex5 />
          </div>
      </div>
  );
}

export default App;

