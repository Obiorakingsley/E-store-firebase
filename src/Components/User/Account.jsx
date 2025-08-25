import { useAuth } from "../Contexts/AuthContext";
import "./User.css";

const UserProfile = () => {
  const { currentUser } = useAuth();

  return (
    <div className="profile-container">
      <h2>Profile Information</h2>
      <div className="profile-details">
        <p>
          <strong>Email:</strong> {currentUser.email}
        </p>
        <p>
          <strong>Name:</strong> {currentUser.displayName || "Not set"}
        </p>
        <p>
          <strong>User ID:</strong> {currentUser.uid}
        </p>
        <p>
          <strong>Email Verified:</strong>{" "}
          {currentUser.emailVerified ? "Yes" : "No"}
        </p>
        <p>
          <strong>Account Created:</strong>{" "}
          {new Date(currentUser.metadata.creationTime).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default UserProfile;
