import { Dayjs } from "dayjs";

export type Article = {
  events: [];
  featured: boolean;
  id: number;
  image_url: string;
  launches: [];
  news_site: string;
  published_at: string;
  summary: string;
  title: string;
  updated_at: string;
  url: string;
};

export type FetchArticlesResponse = {
  count: number;
  next: string;
  previous: string;
  results: Article[];
};

export type FiltersProps = {
  searchFilter: string;
  setSearchFilter: (searchFilters: string) => void;
  dateFilter: DateFilterState;
  setDateFilter: (dateFilters: DateFilterState) => void;
};

export type FeedCardProps = {
  title: string;
  published_at: string;
  news_site: string;
  image_url: string;
};

export type DateFilterState = {
  from: Dayjs | null;
  to: Dayjs | null;
};
