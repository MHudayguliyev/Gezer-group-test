'use client'
import { GetCharacters } from '@app/api/Queries/Get'
import Character from '@app/api/QueryReturnTypes/Character'
import CardComponent from '@app/components/Card/Card'
import useObserve from '@app/hooks/useObserver'
import { CheckObjOrArrForNull } from '@app/utils/helpers'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'
import { useMemo, useRef } from 'react'

export default function HomeClient() {
  const observer = useRef(null)
  const searchParams = useSearchParams()
  const status = searchParams.get('status') ?? undefined
  const gender = searchParams.get('gender') ?? undefined

  const { data, fetchNextPage, hasNextPage, isFetching, isLoading } =
    useInfiniteQuery({
      queryKey: ['characters', status, gender],
      queryFn: ({ pageParam = 0 }) =>
        GetCharacters({
          page: pageParam + 1,
          gender,
          status,
        }),
      initialPageParam: 0,
      getNextPageParam: (lastPage, allPages) => {
        if (lastPage.info.next) return allPages.length
        return undefined
      },
    })
  const characters = useMemo(() => {
    return data?.pages.reduce<Character[]>((acc, page) => {
      if (CheckObjOrArrForNull(page.results)) {
        return [...acc, ...page.results]
      }
      return acc
    }, [])
  }, [data])
  const lastCharacter = useObserve({
    fetchNextPage,
    hasNextPage,
    isFetching,
    isLoading,
    observer,
  })

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {characters?.map((character) => {
          return (
            <CardComponent
              ref={lastCharacter}
              key={character.id}
              {...character}
            />
          )
        })}
      </div>
    </>
  )
}
