'use server'

import { PrismaClient } from '@prisma/client'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'
const prisma = new PrismaClient()

export default async function addTask(
  prevState: {
    message: string
  },
  formData: FormData
) {
  const schema = z.object({
    title: z.string().min(1),
    icon: z.string().min(1), // Add validation for icon
    status: z.string().min(1), // Add validation for status
    description: z.string(),
  })

  const parse = schema.safeParse({
    title: formData.get('title') as string,
    description: formData.get('description') as string,
    icon: formData.get('icon') as string, // Retrieve icon from formData
    status: formData.get('status') as string, // Retrieve status from formData
  })

  if (!parse.success) {
    return { message: 'Failed to create todo' }
  }

  const data = parse.data


  try {
    await prisma.task.create({
      data: {
        title: data.title,
        description: data.description,
        icon: data.icon,
        status: data.status,
      },
    })
    revalidatePath('/')
    return { message: `Added Task ${data.title}` }
  } catch (error) {
    console.error('Error creating task:', error)
    return { message: `Failed to create task: ${error}` }
  }
}
