import { Routes, Route } from 'react-router-dom';
import Users from './pages/Users';
import User from './pages/User';
import Posts from './pages/Posts';
import Todos from './pages/Todos';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/:id" element={<User />}>
          <Route path="posts" element={<Posts />} />
          <Route path="todos" element={<Todos />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
