import React from "react";
import img1 from "../../../images/social images/google.png";
import img2 from "../../../images/social images/facebook.png";
import img3 from "../../../images/social images/github.png";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";
import Loading from "../../../Shared/Loading/Loading";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
  const navigate = useNavigate();
  if (loading || loading1) {
    return <Loading></Loading>;
  }

  let errorElement;
  if (error || error1) {
    errorElement = (
      <p className="text-danger">
        Error: {error?.message} {error1?.message}{" "}
      </p>
    );
  }
  if (user || user1) {
    navigate("/home");
  }
  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <p className="px-2 mt-2">or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
      </div>
      {errorElement}
      <div>
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-info w-60 d-block mx-auto my-2"
        >
          <img style={{ height: "30px", width: "50px" }} src={img1} alt="" />
          <span className="px-2">Google Sign In</span>
        </button>
        <button className="btn btn-info w-60 d-block mx-auto my-2">
          <img style={{ height: "30px", width: "38px" }} src={img2} alt="" />
          <span className="px-2">FaceBook Sign In</span>
        </button>
        <button
          onClick={() => signInWithGithub()}
          className="btn btn-info w-60 d-block mx-auto my-2"
        >
          <img style={{ height: "30px", width: "55px" }} src={img3} alt="" />
          <span className="px-2">Github Sign In</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
