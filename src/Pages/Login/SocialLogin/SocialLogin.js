import React from "react";
import img1 from "../../../images/social images/google.png";
import img2 from "../../../images/social images/facebook.png";
import img3 from "../../../images/social images/github.png";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  let errorElement;
  if (error) {
    errorElement = (
      <div>
        <p className="text-danger">Error: {error.message}</p>
      </div>
    );
  }
  if (user) {
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
        <button className="btn btn-info w-60 d-block mx-auto my-2">
          <img style={{ height: "30px", width: "55px" }} src={img3} alt="" />
          <span className="px-2">Github Sign In</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
