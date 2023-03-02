import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import Home from "./pages/home/Home.jsx"
import Profile from "./pages/profile/Profile.jsx"
import Navbar from "./components/navBar/Navbar.jsx";
import LeftBar from "./components/leftBar/LeftBar.jsx"
import Rightbar from "./components/rightBar/Rightbar.jsx"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate
} from "react-router-dom"

function App() {

  const currentUser = true;

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />
    }
    return children
  }

  const Layout = () => {
    return (
      <div>
        <Navbar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          <Rightbar />
        </div>
      </div>
    )
  }

  const router = createBrowserRouter([

    {
      path: "/",
      element: (

        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>

      ),

      children: [
        {
          path: "/",
          element: (

            <ProtectedRoute>
              <Home />
            </ProtectedRoute>

          )
        },
        {
          path: "/profile/:id",
          element: (

            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>

          )
        }
      ]
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "register",
      element: <Register />
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
