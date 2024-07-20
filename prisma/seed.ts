import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.tasks.createMany({
    data: [
      {
        id: '1',
        icon: '⏰',
        title: 'Task in Progress',
        status: './Time_atack_duotone.svg',
        backgroundColor: 'in-process',
      },
      {
        id: '2',
        icon: '🏋️‍♂️',
        title: 'Task Completed',
        status: './Done_round_duotone.svg',
        backgroundColor: 'completed',
      },
      {
        id: '3',
        icon: '☕',
        title: 'Task Won’t Do',
        status: './close_ring_duotone.svg',
        backgroundColor: 'failed',
      },
      {
        id: '4',
        icon: '📚',
        title: 'Task To Do',
        description: 'lorem ipsum iasdasd as fasf sdf sd fsd fsdfsdfasfa',
        backgroundColor: 'task',
      },
    ],
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
