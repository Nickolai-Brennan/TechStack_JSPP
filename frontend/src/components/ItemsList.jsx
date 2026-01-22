import { useState } from 'react';
import { useItems, useCreateItem, useDeleteItem } from '../api/items';

function ItemsList() {
  const [newItemName, setNewItemName] = useState('');
  const [newItemDescription, setNewItemDescription] = useState('');

  const { data: items, isLoading, error } = useItems();
  const createItem = useCreateItem();
  const deleteItem = useDeleteItem();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItemName.trim()) return;

    createItem.mutate(
      {
        name: newItemName,
        description: newItemDescription,
        is_active: true,
      },
      {
        onSuccess: () => {
          setNewItemName('');
          setNewItemDescription('');
        },
      }
    );
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      deleteItem.mutate(id);
    }
  };

  if (isLoading) return <div className="loading">Loading items...</div>;
  if (error) return <div className="error">Error loading items: {error.message}</div>;

  return (
    <div className="items-container">
      <h2>Items</h2>
      
      <form onSubmit={handleSubmit} className="item-form">
        <input
          type="text"
          placeholder="Item name"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Description (optional)"
          value={newItemDescription}
          onChange={(e) => setNewItemDescription(e.target.value)}
        />
        <button type="submit" disabled={createItem.isPending}>
          {createItem.isPending ? 'Adding...' : 'Add Item'}
        </button>
      </form>

      <div className="items-list">
        {items && items.length > 0 ? (
          items.map((item) => (
            <div key={item.id} className="item-card">
              <div className="item-content">
                <h3>{item.name}</h3>
                {item.description && <p>{item.description}</p>}
                <span className={`status ${item.is_active ? 'active' : 'inactive'}`}>
                  {item.is_active ? 'Active' : 'Inactive'}
                </span>
              </div>
              <button
                onClick={() => handleDelete(item.id)}
                className="delete-btn"
                disabled={deleteItem.isPending}
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p className="empty-state">No items yet. Add one above!</p>
        )}
      </div>
    </div>
  );
}

export default ItemsList;
