import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { itemsApi } from './client';

// Query hook for fetching all items
export const useItems = () => {
  return useQuery({
    queryKey: ['items'],
    queryFn: itemsApi.getAll,
  });
};

// Query hook for fetching a single item
export const useItem = (id) => {
  return useQuery({
    queryKey: ['items', id],
    queryFn: () => itemsApi.getById(id),
    enabled: !!id,
  });
};

// Mutation hook for creating an item
export const useCreateItem = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: itemsApi.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['items'] });
    },
  });
};

// Mutation hook for updating an item
export const useUpdateItem = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ id, data }) => itemsApi.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['items'] });
    },
  });
};

// Mutation hook for deleting an item
export const useDeleteItem = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: itemsApi.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['items'] });
    },
  });
};
