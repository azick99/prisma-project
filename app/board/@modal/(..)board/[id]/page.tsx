import ModalComponent from '@/components/ModelComponent'
import TaskModal from '@/components/TaskModal'
import tasks from '@/lib/data'

export default function SingleTask({ params }: { params: { id: string } }) {
  const task = tasks.find((task) => task.id === params.id)
  return (
    <div className='mt-5'>

    <ModalComponent>
      <TaskModal task={task} />
    </ModalComponent>
    </div>
  )
}
