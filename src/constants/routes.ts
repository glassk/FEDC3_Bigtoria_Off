export const ROUTES = {
  HOME: '/',
  NOT_FOUND: '/not-found',
  STORY_BOOK: '/story-book/:userId',
  SIGNUP: '/signup',
  FOLLOW: '/follow/:userId',
  SIGNIN: '/signin',
  NOTIFICATION: '/notification',
  STORY: '/story/:storyId',
  STORY_EDIT: '/story/edit/:storyId',
  STORY_CREATE: '/story/edit/new',
  CHAT: '/chat',
  FOLLOW_BY_USER_ID: (userId: string) => `/follow/${userId}`,
  STORY_BOOK_BY_USER_ID: (userId: string) => `/story-book/${userId}`,
  STORY_EDIT_BY_STORY_ID: (storyId: string) => `/story/edit/${storyId}`,
  STORY_BY_STORY_ID: (storyId: string) => `/story/${storyId}`,
};
