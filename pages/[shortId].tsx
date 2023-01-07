import { ReactElement } from 'react'
import { PrismaClient } from '@prisma/client'

export default function ShortIdPage (): ReactElement {
  return (
    <>
      <div>Redirect...</div>
    </>
  )
}

export async function getServerSideProps ({ params }: any): Promise<object> {
  const prisma = new PrismaClient()
  const { shortId } = params
  let url: string = '/'

  const data = await prisma.shortener_Link.findUnique({
    where: { shortUrl: shortId }
  })

  if (data != null) url = data.url

  return { redirect: { destination: url } }
}
