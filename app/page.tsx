import Task from '@/components/Task'
import Image from 'next/image'

const tasks: Task[] = [
  {
    emoji: '⏰',
    title: 'Task in Progress',
    icon: './Time_atack_duotone.svg',
    backgroundColor: 'in-process',
  },
  {
    emoji: '🏋️‍♂️',
    title: 'Task Completed',
    icon: './Done_round_duotone.svg',
    backgroundColor: 'completed',
  },
  {
    emoji: '☕',
    title: `Task Won’t Do`,
    icon: './close_ring_duotone.svg',
    backgroundColor: 'failed',
  },
  {
    emoji: '📚',
    title: 'Task To Do',
    description: 'lorem ipsum iasdasd as fasf sdf sd fsd fsdfsdfasfa',
    backgroundColor: 'task',
  },
  

]

export default function Home() {
  return (
    <div className="w-[50vw] mx-auto">
      <header>
        <div className="flex gap-3 items-start">
          <Image src="./Logo.svg" alt="logo" width={45} height={45} />
          <div className="flex flex-col gap-5">
            <h1 className="text-title pt-1">My Task Board</h1>
            <span className="text-descrition">Tasks to keep organised</span>
          </div>
          <Image
            src="./Edit_duotone.svg"
            alt="logo"
            width={28}
            height={28}
            className="mt-1"
          />
        </div>
      </header>
      <main className="flex flex-col mt-5">
        {tasks.map((task) => (
          <Task key={task.emoji} {...task} />
        ))}
      </main>
    </div>
  )
}
