import { MemorizedPageContainer } from '@/app/components/PageContainer';
import { NYTApiResponse } from '@/interface/nyt';

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { q, fq } = searchParams;
  const queryQ = q ? `&q=${q}` : '';
  const queryFq = fq ? `&fq=${fq}` : '';
  const fetchResponse = await fetch(
    `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${process.env.NEXT_PUBLIC_NYT_API_KEY}${queryQ}${queryFq}`
  );
  const data = await fetchResponse.json();
  const { response } = data as NYTApiResponse;
  return (
    <main>
      {data.status === 'OK' ? (
        <MemorizedPageContainer response={response}></MemorizedPageContainer>
      ) : (
        <div>{data.status}</div>
      )}
    </main>
  );
}
