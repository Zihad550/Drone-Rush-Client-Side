import NotFound from "components/App/NotFound";
import React from "react";
import store from "redux/store";

const {
  auth: { data },
} = store.getState();

// general routes
const Home = React.lazy(() => import("components/App/Home"));
const Login = React.lazy(() => import("components/App/Authentication/Login"));
const Register = React.lazy(
  () => import("components/App/Authentication/Register")
);
const UserDashboard = React.lazy(
  () => import("components/App/Dashboards/UserDashboard")
);

const AdminDashboard = React.lazy(
  () => import("components/App/Dashboards/AdminDashboard")
);
const Details = React.lazy(() => import("components/App/Details"));
const ContactUs = React.lazy(() => import("components/App/ContactUs"));
const AboutUs = React.lazy(() => import("components/App/AboutUs"));
const Drones = React.lazy(() => import("components/App/Drones"));
const Reviews = React.lazy(() => import("components/App/Reviews"));

// protected routes
const Cart = React.lazy(() => import("components/App/Cart"));
const Purchase = React.lazy(() => import("components/App/Purchase"));
const Pay = React.lazy(
  () => import("components/App/Dashboards/UserDashboard/Pay")
);

// user dashboard routes
const MyOrders = React.lazy(
  () => import("components/App/Dashboards/UserDashboard/MyOrders")
);
const Purchased = React.lazy(
  () => import("components/App/Dashboards/UserDashboard/Purchased")
);

// admin dashboard routes
const AddDrone = React.lazy(
  () => import("components/App/Dashboards/AdminDashboard/AddDrone")
);
const MakeAdmin = React.lazy(
  () => import("components/App/Dashboards/AdminDashboard/MakeAdmin")
);
const ManageDrones = React.lazy(
  () => import("components/App/Dashboards/AdminDashboard/ManageDrones")
);
const ManageAllOrders = React.lazy(
  () => import("components/App/Dashboards/AdminDashboard/ManageAllOrders")
);

const getRoleBasedDashboard = (role: string = "user") => {
  if (role === "user") return AdminDashboard;
  return UserDashboard;
};

export const generalRoutes = [
  {
    path: "/",
    name: "Home",
    element: Home,
  },
  {
    path: "/drones",
    name: "All Drones",
    element: Drones,
  },
  {
    path: "/reviews",
    name: "Reviews",
    element: Reviews,
  },

  {
    path: "/login",
    name: "Login",
    element: Login,
  },
  {
    path: "/register",
    name: "Register",
    element: Register,
  },
  {
    path: `/details/:id`,
    name: "Details",
    element: Details,
  },

  {
    path: "/contactUs",
    name: "Contact Us",
    element: ContactUs,
  },
  {
    path: "/aboutUs",
    name: "About Us",
    element: AboutUs,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    element: getRoleBasedDashboard(data?.role),
  },
  {
    path: "*",
    name: "Error",
    element: NotFound,
  },
];

export const protectedRoutes = [
  {
    path: "/cart",
    name: "Cart",
    element: Cart,
  },
  {
    path: "/purchase",
    name: "Purchase",
    element: Purchase,
  },
  {
    path: "/dashboard/pay",
    name: "Payment",
    element: Pay,
  },
];

export const userRoutes = [
  {
    path: "/dashboard/myOrders",
    name: "My Orders",
    element: MyOrders,
  },
  {
    path: "/dashboard/purchased",
    name: "Purchased Products",
    element: Purchased,
  },
];

export const adminRoutes = [
  {
    path: "/dashboard/addDrone",
    name: "Add Drone",
    element: AddDrone,
  },
  {
    path: "/dashboard/makeAdmin",
    name: "Make Admin",
    element: MakeAdmin,
  },
  {
    path: "/dashboard/manageDrones",
    name: "Manage Drones",
    element: ManageDrones,
  },
  {
    path: "/dashboard/manageAllOrders",
    name: "Manage All Orders",
    element: ManageAllOrders,
  },
];