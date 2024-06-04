import { Article } from '@/interface/nyt';

const DUMMY_IMAGE_URL =
  'https://images.unsplash.com/photo-1623039405147-547794f92e9e?q=80&w=2389&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const getImageUrl = (url: string) =>
  url ? `https://nytimes.com/` + url : DUMMY_IMAGE_URL;

export const createDocProps = (doc: Article) => ({
  url: doc.web_url,
  title: doc.headline.main,
  description: doc.lead_paragraph,
  imageUrl: getImageUrl(doc.multimedia[0]?.url),
});
