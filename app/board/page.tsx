import Task from '@/components/Task'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
export default async function Board() {
  const tasks = await prisma.task.findMany()
  const task = tasks.find((task) => task.id === '1')
  return (
    <main className="flex flex-col mt-5 gap-6">
      {tasks.map((task) => (
        <Task key={task.id} {...task} />
      ))}

    </main>
  )
}
