import Task from '@/components/Task'
import tasks from '@/lib/data'

export default function Board() {
  return (
    <main className="flex flex-col mt-5 gap-6">
      {tasks.map((task) => (
        <Task key={task.id} {...task} />
      ))}
    </main>
  )
}
