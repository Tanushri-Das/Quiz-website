import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Blog from "../Components/Blog/Blog";
import HeaderBack from "../Components/HeaderDown/HeaderDown";
import Statistics from "../Components/Statistics/Statistics";
import TopicDetails from "../Components/TopicDetails/TopicDetails";
import Topics from "../Components/Topics/Topics";
import "./routes.css";
import Main from "../layout/Main";
import Error from "../Components/Error/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        loader: async () => {
          return fetch("https://openapi.programming-hero.com/api/quiz");
        },
        element: <Topics></Topics>,
      },
      {
        path: "/topic/:topicId",
        loader: async ({ params }) => {
          return fetch(
            `https://openapi.programming-hero.com/api/quiz/${params.topicId}`
          );
        },
        element: <TopicDetails></TopicDetails>,
      },
      {
        path: "/statistics",
        loader: async () => {
          return fetch("https://openapi.programming-hero.com/api/quiz");
        },
        element: <Statistics></Statistics>,
      },
      { path: "/blog", element: <Blog></Blog> },
    ],
  },
]);
