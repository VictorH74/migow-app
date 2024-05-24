enum VisibilityEnum {
    PUBLIC,
    FOLLOWERS,
    NOBODY
}

type PostType = {
    id: string
    owner: UserType
    createdAt: string, // ISO
    text: string,
    midiaURLs: string[],
}

// @unnique(userId, targetId)
type ReactionType = {
    id: string,
    
    userId: string,
    targetId: string, // post or comment
}

type CommentType = {
    // event: "reply" | "comment",
    user: UserType
    post?: PostType
    comment?: CommentType
    content: string
    createdAt: string; // ISO
}

enum NotificationTypeEnum {
    COMMENT_REPLAY,
    NEW_POST,
    POST_COMMENT,
    COMMENT_REACT,
    POST_REACT
}


type NotificationType = {
    id: string
    user: UserType,
    type: NotificationTypeEnum
    relatedUser?: UserType,
    relatedPost?: PostType,
    relatedComment?: CommentType,
    createdAt: string; // ISO
}

type UserType = {
    id: string,
    username: string
    name: string;
    email: string;
    profileImageUrl?: string
    bgImageUrl?: string
    bio?: string
    followers: UserType[],
    createdAt: string // ISO
}

type ActivityType = {
    id: string
    userId: string,
    commentId?: string,
    postId: string
}

type ProfileSettingsType = {
    id: string;
    activityVisibility: VisibilityEnum
    followersVisibility: VisibilityEnum
    nameVisibility: VisibilityEnum
    // activityVisibility: VisibilityEnum
}

export type {
    PostType,
    UserType,
    CommentType,
    ReactionType,
    NotificationType,
    ProfileSettingsType
}

export { VisibilityEnum, NotificationTypeEnum }