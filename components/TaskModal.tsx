import Image from 'next/image'

const TaskModal = ({ task }: { task: Task | undefined }) => {
  if (!task) return <>No changes</>
  return (
    <>
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">{task.title}</h2>
        <p className="text-gray-700">{task.description}</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
          Close
        </button>
      </div>
    </>
  )
}

export default TaskModal
