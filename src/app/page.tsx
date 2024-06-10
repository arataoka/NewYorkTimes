import { MemorizedPageContainer } from '@/app/container';
import { NYTApiResponse } from '@/interface/nyt';
import { API_PATH, BASE_URL } from '@/lib/api/articleApi';

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { q, fq } = searchParams;
  const queryQ = q ? `&q=${q}` : '';
  const queryFq = fq ? `&fq=${fq}` : '';
  const fetchResponse = await fetch(
    `${BASE_URL}${API_PATH}?api-key=${process.env.NEXT_PUBLIC_NYT_API_KEY}${queryQ}${queryFq}`
  );
  const data = await fetchResponse.json();
  const { response } = data as NYTApiResponse;
  if (!response?.docs)
    return 'Something went wrong. Please try it again later.';
  return (
    <main>
      <MemorizedPageContainer response={response}></MemorizedPageContainer>
    </main>
  );
}
