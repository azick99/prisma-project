import Image from 'next/image'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card'

const Task = ({ emoji, title, description, icon, backgroundColor }: Task) => {
  return (
    <Card className={`flex gap-5 p-5 bg-[var(--${backgroundColor})]`}>
      <CardHeader>{emoji}</CardHeader>
      <CardTitle className="text-task-title">{title}</CardTitle>
      {description && <CardDescription>{description}</CardDescription>}
      {icon && (
        <CardFooter>
          <Image src={icon} alt="icon" width={28} height={28} />
        </CardFooter>
      )}
    </Card>
  )
}

export default Task
