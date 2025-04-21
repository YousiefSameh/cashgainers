import Loading from "@components/feedback/Loading";
import PageSuspenseFallback from "@components/feedback/PageSuspenseFallback";
import ProtectedRoute from "@components/feedback/ProtectedRoute";
import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Templates
const MainTemplate = lazy(() => import("@templates/MainTemplate"));
const ProfileTemplate = lazy(() => import("@templates/ProfileTemplate"))

// Pages
const Home = lazy(() => import("@pages/Home"));
const Earn = lazy(() => import("@pages/Earn"));
const Cashout = lazy(() => import("@pages/Cashout"));
const Checkout = lazy(() => import("@pages/Checkout"));
const CashoutHistory = lazy(() => import("@pages/CashoutHistory"));
const Register = lazy(() => import("@pages/Register"));
const Login = lazy(() => import("@pages/Login"));
const Ranking = lazy(() => import("@pages/Ranking"));
const About = lazy(() => import("@pages/Profile/sections/About"));
const Update = lazy(() => import("@pages/Profile/sections/Update"));
const ChangePassword = lazy(() => import("@pages/Profile/sections/ChangePassword"));
const TwoFactor = lazy(() => import("@pages/Profile/sections/TwoFactor"));
const AccountSettings = lazy(() => import("@pages/Profile/sections/AccountSettings"));
const Coupons = lazy(() => import("@pages/Coupons"));
const RewardsHistory = lazy(() => import("@pages/RewardsHistory"));
const Referral = lazy(() => import("@pages/Referral"));
const Orders = lazy(() => import("@pages/Orders"));
const Notifications = lazy(() => import("@pages/Notifications"));
const FAQ = lazy(() => import("@pages/FAQ"));
const TermsOfService = lazy(() => import("@pages/TermsOfService"));
const PrivacyPolicy = lazy(() => import("@pages/PrivacyPolicy"));
const ForgotPassword = lazy(() => import("@pages/ForgotPassword"));
const ResetPassword = lazy(() => import("@pages/ResetPassword"));
const Support = lazy(() => import("@pages/Support"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PageSuspenseFallback>
        <Home />
      </PageSuspenseFallback>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <Suspense fallback={<Loading />}>
        <MainTemplate />
      </Suspense>
    ),
    children: [
      {
        path: "earn",
        element: (
          <PageSuspenseFallback>
            <ProtectedRoute>
              <Earn />
            </ProtectedRoute>
          </PageSuspenseFallback>
        ),
      },
      {
        path: "cashout",
        element: (
          <PageSuspenseFallback>
            <ProtectedRoute>
              <Cashout />
            </ProtectedRoute>
          </PageSuspenseFallback>
        ),
      },
      {
        path: "cashout/confirm",
        element: (
          <PageSuspenseFallback>
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          </PageSuspenseFallback>
        ),
      },
      {
        path: "cashout/history",
        element: (
          <PageSuspenseFallback>
            <ProtectedRoute>
              <CashoutHistory />
            </ProtectedRoute>
          </PageSuspenseFallback>
        ),
      },
      {
        path: "register",
        element: (
          <PageSuspenseFallback>
            <ProtectedRoute restrictedForAuthenticated>
              <Register />
            </ProtectedRoute>
          </PageSuspenseFallback>
        ),
      },
      {
        path: "login",
        element: (
          <PageSuspenseFallback>
            <ProtectedRoute restrictedForAuthenticated>
              <Login />
            </ProtectedRoute>
          </PageSuspenseFallback>
        ),
      },
      {
        path: "ranking",
        element: (
          <PageSuspenseFallback>
            <ProtectedRoute>
              <Ranking />
            </ProtectedRoute>
          </PageSuspenseFallback>
        ),
      },
      {
        path: "coupons",
        element: (
          <PageSuspenseFallback>
            <ProtectedRoute>
              <Coupons />
            </ProtectedRoute>
          </PageSuspenseFallback>
        ),
      },
      {
        path: "rewards-history",
        element: (
          <PageSuspenseFallback>
            <ProtectedRoute>
              <RewardsHistory />
            </ProtectedRoute>
          </PageSuspenseFallback>
        ),
      },
      {
        path: "referral",
        element: (
          <PageSuspenseFallback>
            <ProtectedRoute>
              <Referral />
            </ProtectedRoute>
          </PageSuspenseFallback>
        ),
      },
      {
        path: "notifications",
        element: (
          <PageSuspenseFallback>
            <ProtectedRoute>
              <Notifications />
            </ProtectedRoute>
          </PageSuspenseFallback>
        ),
      },
      {
        path: "orders/:category",
        element: (
          <PageSuspenseFallback>
            <ProtectedRoute>
              <Orders />
            </ProtectedRoute>
          </PageSuspenseFallback>
        ),
      },
      {
        path: "forgot-password",
        element: (
          <PageSuspenseFallback>
            <ForgotPassword />
          </PageSuspenseFallback>
        ),
      },
      {
        path: "reset-password/:token",
        element: (
          <PageSuspenseFallback>
            <ResetPassword />
          </PageSuspenseFallback>
        ),
      },
      {
        path: "support",
        element: (
          <PageSuspenseFallback>
            <ProtectedRoute>
              <Support />
            </ProtectedRoute>
          </PageSuspenseFallback>
        ),
      },
      {
        path: "profile",
        element: (
          <PageSuspenseFallback>
            <ProtectedRoute>
              <ProfileTemplate />
            </ProtectedRoute>
          </PageSuspenseFallback>
        ),
        children: [
          {
            index: true,
            element: (
              <PageSuspenseFallback>
                <ProtectedRoute>
                  <About />
                </ProtectedRoute>
              </PageSuspenseFallback>
            ),
          },
          {
            path: "update",
            element: (
              <PageSuspenseFallback>
                <ProtectedRoute>
                  <Update />
                </ProtectedRoute>
              </PageSuspenseFallback>
            ),
          },
          {
            path: "password",
            element: (
              <PageSuspenseFallback>
                <ProtectedRoute>
                  <ChangePassword />
                </ProtectedRoute>
              </PageSuspenseFallback>
            ),
          },
          {
            path: "twofactor",
            element: (
              <PageSuspenseFallback>
                <ProtectedRoute>
                  <TwoFactor />
                </ProtectedRoute>
              </PageSuspenseFallback>
            ),
          },
          {
            path: "account",
            element: (
              <PageSuspenseFallback>
                <ProtectedRoute>
                  <AccountSettings />
                </ProtectedRoute>
              </PageSuspenseFallback>
            ),
          },
        ],
      },
    ],
  },
  {
    path: "faq",
    element: (
      <PageSuspenseFallback>
        <FAQ />
      </PageSuspenseFallback>
    ),
  },
  {
    path: "terms-of-service",
    element: (
      <PageSuspenseFallback>
        <TermsOfService />
      </PageSuspenseFallback>
    ),
  },
  {
    path: "privacy-policy",
    element: (
      <PageSuspenseFallback>
        <PrivacyPolicy />
      </PageSuspenseFallback>
    ),
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
