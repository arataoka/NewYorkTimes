export interface NYTApiResponse {
  status: string;
  copyright: string;
  response: NYTResponse;
}

export interface NYTResponse {
  docs: Article[];
  meta: Meta;
}

export interface Article {
  abstract: string;
  web_url: string;
  snippet: string;
  lead_paragraph: string;
  print_section: string;
  print_page: string;
  source: string;
  multimedia: Multimedia[];
  headline: Headline;
  keywords: Keyword[];
  pub_date: string;
  document_type: string;
  news_desk: string;
  section_name: string;
  subsection_name: string;
  byline: Byline;
  type_of_material: string;
  _id: string;
  word_count: number;
  uri: string;
}

interface Multimedia {
  rank: number;
  subtype: string;
  caption: string | null;
  credit: string | null;
  type: string;
  url: string;
  height: number;
  width: number;
  legacy?: Legacy;
  subType: string;
  crop_name: string;
}

interface Legacy {
  xlarge?: string;
  xlargewidth?: number;
  xlargeheight?: number;
  thumbnail?: string;
  thumbnailwidth?: number;
  thumbnailheight?: number;
}

interface Headline {
  main: string;
  kicker: string | null;
  content_kicker: string | null;
  print_headline: string;
  name: string | null;
  seo: string | null;
  sub: string | null;
}

interface Keyword {
  name: string;
  value: string;
  rank: number;
  major: string;
}

interface Byline {
  original: string;
  person: Person[];
  organization: string | null;
}

interface Person {
  firstname: string;
  middlename: string | null;
  lastname: string;
  qualifier: string | null;
  title: string | null;
  role: string;
  organization: string;
  rank: number;
}

interface Meta {
  hits: number;
  offset: number;
  time: number;
}

// エラー詳細の型
interface RateLimitErrorDetail {
  errorcode: string;
}

interface RateLimitFault {
  faultstring: string;
  detail: RateLimitErrorDetail;
}

export interface RateLimitErrorResponse {
  status: number;
  data: {
    fault: RateLimitFault;
  };
}
