import HomeContainer from '../Containers/HomeContainer/HomeContainer';
import AboutContainer from '../Containers/AboutContainer/AboutContainer';
import NewsContainer from '../Containers/NewsContainer/NewsContainer';
import HomeworkContainer from '../Containers/HomeworkContainer/HomeworkContainer';
import PostContainer from '../Containers/PostContainer/PostContainer';

const PATHS = {
  HOME: '/',
  ABOUT: '/about',
  ARTICLES: '/articles',
  HOMEWORK: '/homeworks',
  POST: '/post/:postId'
};

const ROUTES = [
  {
    path: PATHS.HOME,
    exact: true,
    component: HomeContainer
  },
  {
    path: PATHS.ABOUT,
    exact: true,
    component: AboutContainer
  },
  {
    path: PATHS.ARTICLES,
    exact: true,
    component: NewsContainer
  },
  {
    path: PATHS.HOMEWORK,
    exact: true,
    component: HomeworkContainer
  },
  {
    path: PATHS.POST,
    exact: true,
    component: PostContainer
  }
];

export default {
  PATHS,
  ROUTES
};
