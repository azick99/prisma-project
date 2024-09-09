import AddNewTask from '@/components/AddNewTask'
import Task from '@/components/Task'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
export default async function Board() {
  const tasks = await prisma.task.findMany()
    console.log(tasks)
  return (
    <main className="flex flex-col mt-5 gap-6">
      {tasks.map((task) => (
        <Task key={task.id} {...task} />
      ))}
      <AddNewTask />
    </main>
  )
}
