import {BrowserRouter, Routes, Route} from "react-router-dom";
import UserList from "./commponent/UserList";
import AddUser from "./commponent/AddUser";
import EditUser from "./commponent/EditUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList/>}/>
        <Route path="add" element={<AddUser/>}/>
        <Route path="edit/:id" element={<EditUser/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
