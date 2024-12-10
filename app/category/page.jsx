"use client"

import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { createCategory, getAllCategories, updateCategory, deleteCategory } from '@/service/categoryService';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogFooter, DialogTitle } from '@/components/ui/dialog';
import { Table, TableRow, TableCell, TableHead, TableBody } from '@/components/ui/table';

const CategoryCRUD = () => {
  const [categories, setCategories] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    try {
      const data = await getAllCategories();
      setCategories(data);
    } catch (error) {
      console.error('Erro ao carregar categorias:', error);
    }
  };

  const onSubmit = async (data) => {
    try {
      if (editingCategory) {
        await updateCategory(editingCategory.id, data);
      } else {
        await createCategory(data);
      }
      reset();
      setModalOpen(false);
      setEditingCategory(null);
      loadCategories();
    } catch (error) {
      console.error('Erro ao salvar categoria:', error);
    }
  };

  const handleEdit = (category) => {
    setEditingCategory(category);
    reset(category);
    setModalOpen(true);
  };

  const handleDelete = async (id) => {
    try {
      await deleteCategory(id);
      loadCategories();
    } catch (error) {
      console.error('Erro ao excluir categoria:', error);
    }
  };

  return (
    <div className="p-6 w-10/12 mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Gerenciamento de Categorias</h1>
        <Button onClick={() => { setEditingCategory(null); reset(); setModalOpen(true); }}>Nova Categoria</Button>
      </div>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Nome</TableCell>
            <TableCell>Observação</TableCell>
            <TableCell>Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categories.map((category) => (
            <TableRow key={category.id}>
              <TableCell>{category.id}</TableCell>
              <TableCell>{category.name}</TableCell>
              <TableCell>{category.observation}</TableCell>
              <TableCell>
                <Button variant="outline" size="sm" onClick={() => handleEdit(category)}>Editar</Button>
                <Button variant="destructive" size="sm" onClick={() => handleDelete(category.id)}>Excluir</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog open={isModalOpen} onOpenChange={setModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editingCategory ? 'Editar Categoria' : 'Nova Categoria'}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="block text-sm font-medium">Nome</label>
              <Input {...register('name', { required: true })} placeholder="Nome da categoria" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Observação</label>
              <Input {...register('observation')} placeholder="Observação" />
            </div>
            <DialogFooter>
              <Button type="submit">{editingCategory ? 'Atualizar' : 'Criar'}</Button>
              <Button variant="ghost" onClick={() => setModalOpen(false)}>Cancelar</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CategoryCRUD;
