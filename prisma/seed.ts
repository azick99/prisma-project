import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.task.createMany({
    data: [
      {
        id: '1',
        icon: '⏰',
        title: 'Task in Progress',
        imgSrc: './Time_atack_duotone.svg',
        status: 'in-process',
      },
      {
        id: '2',
        icon: '🏋️‍♂️',
        title: 'Task Completed',
        imgSrc: './Done_round_duotone.svg',
        status: 'completed',
      },
      {
        id: '3',
        icon: '☕',
        title: 'Task Won’t Do',
        imgSrc: './close_ring_duotone.svg',
        status: 'failed',
      },
      {
        id: '4',
        icon: '📚',
        title: 'Task To Do',
        description: 'lorem ipsum iasdasd as fasf sdf sd fsd fsdfsdfasfa',
        status: 'task',
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
