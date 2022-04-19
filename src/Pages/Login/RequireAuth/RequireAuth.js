import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../../firebase.init";
import Loading from "../../../Shared/Loading/Loading";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  const [sendEmailVerification, sending, error] =
    useSendEmailVerification(auth);
  if (loading) {
    return <Loading></Loading>;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if (!user.emailVerified) {
    return (
      <div>
        <h3 className="text-danger">your Email is not verified.</h3>
        <h3 className="text-success">Please verify your email.</h3>
        <button
          className="btn w-50 btn-success"
          onClick={async () => {
            await sendEmailVerification();
            toast("Sent email");
          }}
        >
          send Verification email again
        </button>
        <ToastContainer />
      </div>
    );
  }
  return children;
};

export default RequireAuth;
