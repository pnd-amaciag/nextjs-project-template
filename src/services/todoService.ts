
import { Todo, PrismaClient } from '../../generated/prisma/client'

const prisma = new PrismaClient()

const getAllTodos = (): Promise<Todo[]> => {
  return prisma.todo.findMany()
}

const createTodo = async (text: string): Promise<Todo> => {
  return await prisma.todo.create({data: {text}})
}

const deleteTodo = async (id: number): Promise<Todo> => {
  return await prisma.todo.delete({where: {id}})
}

const todoService = {
  deleteTodo,
  createTodo,
  getAllTodos
}

export default todoService