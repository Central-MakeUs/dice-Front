export type ChatData = {
  id: number;
  createdAt: string;
  content: string;
  isMe: boolean;
};

export const dummyData: ChatData[] = [
  {
    id: 1,
    createdAt: '오전 9:20',
    content: '안녕하세요~',
    isMe: true,
  },
  {
    id: 2,
    createdAt: '오전 9:20',
    content: '대여 관련해서 문의 드릴게 있어 쪽지 드립니다 :)',
    isMe: true,
  },
  {
    id: 3,
    createdAt: '오전 9:42',
    content: '안녕하세요!',
    isMe: false,
  },
  {
    id: 4,
    createdAt: '오전 9:42',
    content: '어떤게 궁금하실까요?',
    isMe: false,
  },
];
