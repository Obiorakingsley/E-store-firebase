import { FaArrowAltCircleLeft } from "react-icons/fa";
import { useAuth } from "../Contexts/AuthContext";
import "./User.css";
import { auth } from "../config/firebase";
import { useNavigate, Link } from "react-router-dom";
import { GrOrderedList } from "react-icons/gr";

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
            <p className="user-id">
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
            <Link to="/order">
              <h2
                style={{
                  display: "flex",
                  alignItems: "center",
                  paddingTop: ".5rem",
                  gap: ".2rem",
                  borderTop: "1px solid #3333337c",
                }}
              >
                <GrOrderedList /> Orders
              </h2>
            </Link>
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
