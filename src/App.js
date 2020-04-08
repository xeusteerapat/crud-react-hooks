import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import UserTable from './components/UserTable';
import AddUserForm from './components/AddUserForm';
import EditUserForm from './components/EditUserForm';

const App = () => {
  const userData = [
    { id: uuid(), name: 'Teerapat', username: 'titleofparams' },
    { id: uuid(), name: 'Paul', username: 'demonicity' },
    { id: uuid(), name: 'Ben', username: 'amendius' }
  ];

  const initialFormState = { id: null, name: '', username: '' };

  const [users, setUsers] = useState(userData);
  const [currentUser, setCurrentUser] = useState(initialFormState);
  const [isEditing, setEditing] = useState(false);

  const addUser = newUser => {
    newUser.id = uuid();
    setUsers([...users, newUser]);
  };

  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id));
  };

  const editRow = user => {
    setEditing(!isEditing);
    setCurrentUser({ id: user.id, name: user.name, username: user.username });
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map(user => (user.id === id ? updatedUser : user)));
  };

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {isEditing ? (
            <>
              <h2>Edit user</h2>
              <EditUserForm
                isEditing={isEditing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </>
          ) : (
            <>
              <h2>Add user</h2>
              <AddUserForm addUser={addUser} />
            </>
          )}
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
};

export default App;
