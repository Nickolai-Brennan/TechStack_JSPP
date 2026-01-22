import { useState } from 'react';
import { useUsers, useCreateUser, useDeleteUser } from '../api/users';

function UsersList() {
  const [newUser, setNewUser] = useState({
    email: '',
    username: '',
    full_name: '',
  });

  const { data: users, isLoading, error } = useUsers();
  const createUser = useCreateUser();
  const deleteUser = useDeleteUser();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newUser.email.trim() || !newUser.username.trim()) return;

    createUser.mutate(newUser, {
      onSuccess: () => {
        setNewUser({ email: '', username: '', full_name: '' });
      },
      onError: (error) => {
        alert(error.response?.data?.detail || 'Error creating user');
      },
    });
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      deleteUser.mutate(id);
    }
  };

  if (isLoading) return <div className="loading">Loading users...</div>;
  if (error) return <div className="error">Error loading users: {error.message}</div>;

  return (
    <div className="users-container">
      <h2>Users</h2>
      
      <form onSubmit={handleSubmit} className="user-form">
        <input
          type="email"
          placeholder="Email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Username"
          value={newUser.username}
          onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Full Name (optional)"
          value={newUser.full_name}
          onChange={(e) => setNewUser({ ...newUser, full_name: e.target.value })}
        />
        <button type="submit" disabled={createUser.isPending}>
          {createUser.isPending ? 'Adding...' : 'Add User'}
        </button>
      </form>

      <div className="users-list">
        {users && users.length > 0 ? (
          users.map((user) => (
            <div key={user.id} className="user-card">
              <div className="user-content">
                <h3>{user.username}</h3>
                <p>{user.email}</p>
                {user.full_name && <p className="full-name">{user.full_name}</p>}
              </div>
              <button
                onClick={() => handleDelete(user.id)}
                className="delete-btn"
                disabled={deleteUser.isPending}
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p className="empty-state">No users yet. Add one above!</p>
        )}
      </div>
    </div>
  );
}

export default UsersList;
