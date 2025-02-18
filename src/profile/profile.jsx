import React from "react";
import { useLocation } from "react-router-dom";
import "./profile.css"; // Importing the custom CSS file for styling

// Function to format the date
const formatDate = (date) => {
  const d = new Date(date);
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return d.toLocaleDateString('en-US', options); // Format to "MMM DD, YYYY"
};

const Profile = () => {
  const location = useLocation();
  const { success, message, purchasedPlan } = location.state || {};

  // Get previous purchases from localStorage
  const previousPurchases = JSON.parse(localStorage.getItem("previousPurchases")) || [];

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>Profile Page</h1>
        <p>Welcome back! Here are your purchase details:</p>
      </div>

      

      {/* Current Purchase (New Combo Plan) */}
      {success && purchasedPlan && (
        <div className="purchase-card current-purchase">
          <div className="purchase-header">
            <h3>{message}</h3>
          </div>

          <div className="plan-details">
            <p><strong>💰 Price:</strong> ₹{purchasedPlan.price}</p>
            <p><strong>📅 Start Date:</strong> {formatDate(purchasedPlan.startDate)}</p> {/* Formatted Date */}
            <p><strong>⏳ Expiry Date:</strong> {formatDate(purchasedPlan.expiryDate)}</p> {/* Formatted Date */}
            <h4>📘 Subject: {purchasedPlan.subject}</h4>

            {/* 📚 Courses Included */}
            {purchasedPlan.courses && purchasedPlan.courses.length > 0 && (
              <div className="courses-list">
                <h5>📚 Courses Included:</h5>
                <ul>
                  {purchasedPlan.courses.map((course) => (
                    <li key={course._id}>
                      <strong>{course.title}</strong> - {course.description}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}

      {/* If no purchase details */}
      {!success && <p className="no-details">No purchase details found.</p>}
    </div>
  );
};

export default Profile;
