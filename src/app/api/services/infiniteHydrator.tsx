import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query'
interface HydaratorProps {
  children: React.ReactNode
  queryKey: string[]
  queryFn: () => void
}

export default async function InfiniteHydrator(props: HydaratorProps) {
  const { children, queryKey, queryFn } = props
  const queryClient = new QueryClient()
  await queryClient.prefetchInfiniteQuery({
    queryKey,
    queryFn,
    initialPageParam: 0,
    pages: 0,
    getNextPageParam: () => {
      return undefined
    },
  })
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  )
}
