import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { 
  HomeLayout, 
  Landing,
  Register, 
  Login, 
  DashboardLayout, 
  Error,
  AddJob,
  Stats,
  AllJobs,
  Profile,
  Admin
} from "./pages";

export const checkDefaultContext = () => {
  const isDarkTheme = localStorage.getItem("darkTheme") === "true";
  // vanilla JS
  document.body.classList.toggle("dark-theme", isDarkTheme);
  return isDarkTheme;
};

checkDefaultContext();

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />
      },
      {
        path: "register",
        element: <Register />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "dashboard",
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <AddJob />
          },
          {
            path: "stats",
            element: <Stats />
          },
          {
            path: "allJobs",
            element: <AllJobs />
          },
          {
            path: "profile",
            element: <Profile />
          },
          {
            path: "admin",
            element: <Admin />
          },
        ]
      },
    ]
  },
])

const App = () => {
  return <RouterProvider router={router} />;
}

export default App