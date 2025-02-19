import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

interface HydaratorProps {
  children: React.ReactNode;
  queryKey: string[];
  queryFn: () => void;
}

export default async function Hydarator(props: HydaratorProps) {
  const { children, queryKey, queryFn } = props;
  const queryClient = new QueryClient();
    await queryClient.prefetchQuery({
      queryKey: queryKey ?? [],
      queryFn,
    });
  return <HydrationBoundary state={dehydrate(queryClient)}>{children}</HydrationBoundary>;
}