import { CommentType, NotificationType, NotificationTypeEnum, PostType, UserType } from "./types";

// temp 


export const usersMock: UserType[] = [
  {
    id: "aaa",
    email: "email@email.com",
    name: "Kent Dodds",
    username: "kent_D88",
    followers: [
      {
        id: "bbb",
        email: "email@email.com",
        name: "Jed Watson",
        username: "j_N77",
        followers: [],
        createdAt: "2024-03-19T22:50:00.098Z"
      },
      {
        id: "ccc",
        email: "email@email.com",
        name: "Tim Neutkens",
        username: "tim_N76",
        followers: [],
        createdAt: "2020-07-14T22:50:00.098Z"
      },
      {
        id: "ddd",
        email: "email@email.com",
        name: "Nikolas Teslas",
        username: "nickT778",
        followers: [],
        createdAt: "2020-07-14T22:50:00.098Z"
      },
    ],
    createdAt: "2023-02-11T22:50:00.098Z"
  },
  {
    id: "bbb",
    email: "email@email.com",
    name: "Jed Watson",
    username: "j_N77",
    followers: [],
    createdAt: "2024-03-19T22:50:00.098Z"
  },
  {
    id: "ccc",
    email: "email@email.com",
    name: "Tim Neutkens",
    username: "tim_N76",
    followers: [],
    createdAt: "2020-07-14T22:50:00.098Z"
  },
  {
    id: "ddd",
    email: "email@email.com",
    name: "Nikolas Teslas",
    username: "nickT778",
    followers: [],
    createdAt: "2020-07-14T22:50:00.098Z"
  },
]


export const postsMock: PostType[] = [
  {
    id: "sadf3g",
    owner: usersMock[0],
    createdAt: '2024-05-15T23:44:10.436Z',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime doloribus dicta, impedit inventore voluptates et dolores mollitia atque molestiae fugit qui eaque repellendus. Quos, distinctio adipisci soluta nemo amet a!',
    midiaURLs: [
      "https://picsum.photos/1080/1920?random=1",
    ],
  },
  {
    id: "dkgnmd4",
    owner: usersMock[1],
    createdAt: '2024-05-14T22:50:00.098Z',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime doloribus dicta, impedit inventore voluptates et dolores mollitia atque molestiae fugit qui eaque repellendus. Quos, distinctio adipisci soluta nemo amet a!',
    midiaURLs: [
      "https://picsum.photos/1080/1920?random=2",
      "https://picsum.photos/1920/1080?random=3",
      "https://picsum.photos/1920/1080?random=4",
      "https://picsum.photos/1920/1080?random=5",
    ],
  },
  {
    id: "sf9sj4",
    owner: usersMock[2],
    createdAt: '2023-05-15T22:51:00.098Z',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime doloribus dicta, impedit inventore voluptates et dolores mollitia atque molestiae fugit qui eaque repellendus. Quos, distinctio adipisci soluta nemo amet a!',
    midiaURLs: [
      "https://picsum.photos/1920/1080?random=6",
      "https://picsum.photos/1920/1080?random=7",
    ],
  },
]

export const commentsMock: CommentType[] = [
  {
    content: "nice bro!!",
    post: postsMock[0],
    createdAt: "2024-05-14T22:55:00.098Z",
    user: usersMock[1]
  },
  {
    content: "very good",
    post: postsMock[0],
    createdAt: "2024-05-14T23:01:00.098Z",
    user: usersMock[3]
  },
  {
    content: "nice!!!",
    post: postsMock[0],
    createdAt: "2024-05-14T24:55:00.098Z",
    user: usersMock[2]
  },
  {
    content: "awnsome!",
    post: postsMock[1],
    createdAt: "2024-05-14T24:55:00.098Z",
    user: usersMock[0],
  },
  {
    content: "fascinant",
    post: postsMock[1],
    createdAt: "2024-05-14T24:55:00.098Z",
    user: usersMock[3]
  },
  {
    content: "GG",
    post: postsMock[1],
    createdAt: "2024-05-14T24:55:00.098Z",
    user: usersMock[2]
  },
]

export const notificationsMock: NotificationType[] = [
  {
    id: "aa",
    createdAt: '2024-05-15T23:44:10.436Z',
    type: NotificationTypeEnum.NEW_POST,
    user: usersMock[0],
    relatedPost: postsMock[0]
  },
  {
    id: "bb",
    createdAt: '2024-05-14T22:50:00.098Z',
    type: NotificationTypeEnum.NEW_POST,
    user: usersMock[1],
    relatedPost: postsMock[1]
  },
  {
    id: "cc",
    createdAt: '2023-05-15T22:51:00.098Z',
    type: NotificationTypeEnum.NEW_POST,
    user: usersMock[2],
    relatedPost: postsMock[2]
  },

  {
    id: "dd",
    createdAt: '2024-05-14T22:55:00.098Z',
    type: NotificationTypeEnum.POST_COMMENT,
    user: usersMock[1],
    relatedPost: postsMock[0]
  },
  {
    id: "ee",
    createdAt: '2024-05-14T23:01:00.098Z',
    type: NotificationTypeEnum.POST_COMMENT,
    user: usersMock[3],
    relatedPost: postsMock[0]
  },
  {
    id: "ff",
    createdAt: '2024-05-14T22:55:00.098Z',
    type: NotificationTypeEnum.POST_COMMENT,
    user: usersMock[2],
    relatedPost: postsMock[0]
  },

  {
    id: "gg",
    createdAt: '2024-05-14T22:55:00.098Z',
    type: NotificationTypeEnum.POST_COMMENT,
    user: usersMock[0],
    relatedPost: postsMock[1]
  },
  {
    id: "hh",
    createdAt: '2024-05-14T23:01:00.098Z',
    type: NotificationTypeEnum.POST_COMMENT,
    user: usersMock[3],
    relatedPost: postsMock[1]
  },
  {
    id: "ii",
    createdAt: '2024-05-14T00:55:00.098Z',
    type: NotificationTypeEnum.POST_COMMENT,
    user: usersMock[2],
    relatedPost: postsMock[1]
  },
]