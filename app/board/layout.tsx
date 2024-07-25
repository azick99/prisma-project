import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Board',
  description: 'Board',

}

export default function BoardLayout({
  children,
  modal,
}: {
  children: React.ReactNode
  modal: React.ReactNode
}) {
  return (
    <>
      {children}
      {modal}
    </>
  )
}
