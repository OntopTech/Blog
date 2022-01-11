import Link from 'next/link'
import { ReactNode } from 'react'

export const A = (props: { url: string; children: ReactNode }) => {
  return (
    <Link href={props.url}>
      <a>{props.children}</a>
    </Link>
  )
}
