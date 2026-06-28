import { type ReactNode } from 'react'

type Props = {
  children?: ReactNode,
  title: string
}

export default function Card({ children, title }: Props) {
  return (
    <div className='bg-white rounded-lg shadow-md'>
      <div>{title}</div>
      <div>{children}</div>
    </div>
  )
}