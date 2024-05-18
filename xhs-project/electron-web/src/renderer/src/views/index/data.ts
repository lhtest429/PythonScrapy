export interface Note {
  id: number;
  note_id: string;
  title: string;
  desc: string;
  type: string;
  user: {
    avatar: string;
    user_id: string;
    nickname: string;
  };
  img_urls: string[]; // 注意这里是一个字符串数组
  video_url: string;
  tag_list: {
    id: string;
    name: string;
    type: string;
  }[];
  at_user_list: {
    user_id: string;
    nickname: string;
  }[];
  collected_count: number;
  comment_count: number;
  comment_list: string; // 注意这里是一个字符串，你可能需要解析成对象
  liked_count: number;
  share_count: number;
  time: string;
  last_update_time: string;
  keyword: string;
}

export interface Comment {
  id: number;
  keyword: string;
  user_id: string;
  comment_id: string;
  user_nick: string;
  ip: string;
  comment_desc: string;
  time: string;
}

