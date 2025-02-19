import HomeClient from './page.client'
import { GetCharacters } from '@app/api/Queries/Get'
import InfiniteHydrator from '@app/api/services/infiniteHydrator'
export default async function Home(props: {
  searchParams: Promise<{ status: string; gender: string }>
}) {
  const searchParams = await props.searchParams
  const status = searchParams?.status ?? undefined
  const gender = searchParams?.gender ?? undefined
  return (
    <InfiniteHydrator
      queryFn={() => GetCharacters({ page: 1, status, gender })}
      queryKey={['characters', status, gender]}
    >
      <HomeClient />
    </InfiniteHydrator>
  )
}
