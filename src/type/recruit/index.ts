interface RecruitItem {
  id: number;
  city: string;
  source: string;
  title: string;
  isLiked: boolean;
  likedNum: number;
  target: string;
  startDate: string;
  endDate: string;
}

export type { RecruitItem };
