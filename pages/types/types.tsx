export type IStatement = {
  id: number;
  number: string;
  sections?: ISections;
  unreadCount: number;
};

export type ISection = {
  id: string;
  name: string;
  statementId: number;
  unreadCount: number;
};

export type IMessage = {
  id: string;
  text: string;
  isUnread: boolean;
  isMy: boolean;
  sendDate: string;
  sectionId: number;
};

export type ISections = ISection[];
