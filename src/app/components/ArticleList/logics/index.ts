import { DUMMY_IMAGE_URL } from '@/constants';
import { Article } from '@/interface/nyt';

const getImageUrl = (url: string) =>
  url ? `https://nytimes.com/` + url : DUMMY_IMAGE_URL;

export const createDocProps = (doc: Article) => ({
  url: doc.web_url,
  title: doc.headline.main,
  description: doc.lead_paragraph,
  imageUrl: getImageUrl(doc.multimedia[0]?.url),
});
