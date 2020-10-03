export type ResourceState = {
  id: string;
  uri: string;
  pagetitle: string;
  createdAt: string;
  introtext?: string;
  image?: string;
  formatted_date?: string;
}

export type BlogPostState = ResourceState;

export type PeopleState = ResourceState & {
  user_avatar: string;
  user_year_old: number
  user_work_experience: string;
  user_region: string;
  user_rating: number;
}
