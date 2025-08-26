import { FaArrowAltCircleLeft } from "react-icons/fa";
import { useAuth } from "../Contexts/AuthContext";
import "./User.css";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const { currentUser, logOut } = useAuth();

  const navigate = useNavigate();

  return (
    <div className="profile-container">
      <div>
        <div className="profile-flex">
          <button
            onClick={() => {
              navigate(-1) || navigate("/");
            }}
            className="profile-return-btn"
          >
            <FaArrowAltCircleLeft color="#f58618" size={25} />
          </button>
          <h1>Account</h1>
        </div>
        <div className="profile-card">
          <div className="profile">
            <img
              src={currentUser?.photoURL || "/user2.png"}
              alt=""
              width={50}
              height={50}
            />
            <p className="user-name">{currentUser?.displayName || ""}</p>
            <p className="user-email">{currentUser?.email}</p>
            <p>
              <strong>User ID:</strong> {currentUser?.uid}
            </p>
          </div>
          <div className="profile-details">
            <p className="user-name">
              <b>Name</b> <br />
              {currentUser?.displayName || "Not set"}
            </p>
            <p className="user-name">
              <b>Email</b> <br />
              {currentUser?.email}
            </p>

            <p>
              <strong>Joined </strong>
              {new Date(
                currentUser?.metadata.creationTime
              ).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
      <button
        onClick={async () => {
          navigate("/");
          await logOut(auth);
        }}
        className="logout"
      >
        Sign out
      </button>
    </div>
  );
};

export default UserProfile;
