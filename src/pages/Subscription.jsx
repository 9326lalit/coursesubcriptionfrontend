import React, { useEffect, useState  } from "react";
import axios from "axios";
import "./Subscription.css";
import moment from "moment";
import { useNavigate } from 'react-router-dom';

const Subscription = () => {
  const [subscriptions, setSubscriptions] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  

  useEffect(() => {
    const fetchSubscriptions = async () => {
      try {
        const response = await axios.get("http://localhost:9000/all"); // Replace with your API endpoint
        setSubscriptions(response.data.subscriptions);
      } catch (error) {
        console.error("Error fetching subscriptions:", error);
        setError("Failed to load subscriptions.");
      }
    };

    fetchSubscriptions();
  }, []);

  
const handlesubmit = (selectedPlan) => 
{
  navigate("/purchase", { state: { selectedPlan } });
};

  return (
    <div className="subscription-container">
      <h1 className="heading">📜 Your Subscription Plans</h1>
      <p className="subtext">Manage, renew, and explore new plans with exclusive offers!</p>

      {/* 🎉 Attractive Combo Pack Section */}
      <div className="combo-section">
        <div className="combo-content">
          <h2>🔥 Ultimate Learning Combo! 🔥</h2>
          <p>Subscribe to our <strong>Combo Plan</strong> and unlock <strong>multiple courses</strong> at a <strong>20% discount</strong>! 🚀</p>
          <button className="combo-btn">🔝 Get Combo Pack</button>
        </div>
        <div className="combo-image">
          <img src="https://i.imgur.com/JRd0ezc.png" alt="Combo Offer" />
        </div>
      </div>

      {/* 📝 Subscription Plans */}
      <div className="plans-grid">
        {subscriptions.length > 0 ? (
          subscriptions.map((sub) => (
            <div key={sub._id} className={`plan-card ${sub.status === "expired" ? "expired-plan" : ""}`}>
              <h2 className="plan-name">{sub.plan} Plan</h2>
              <p className="plan-price">💰 Price: ₹{sub.price}</p>
              <p className="plan-duration">
                <strong>📅 Start Date:</strong> {moment(sub.startDate).format("MMM DD, YYYY")}
              </p>
              <p className="plan-duration">
                <strong>⏳ Expiry Date:</strong> {moment(sub.expiryDate).format("MMM DD, YYYY")}
              </p>
              <p className={`plan-status ${sub.status === "active" ? "active" : "expired"}`}>
                {sub.status.toUpperCase()}
              </p>

              {/* 📚 Courses Included */}
              {sub.courses.length > 0 && (
                <div className="course-list">
                  <h4>📚 Courses Included:</h4>
                  <ul>
                    {sub.courses.map((course) => (
                      <li key={course._id}>
                        <strong>{course.title}</strong> - {course.description}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* 💳 Payment Info */}
              <p className="payment-id">💳 Payment ID: {sub.paymentId}</p>

              {/* 🔄 Renew or Active Button */}
              {sub.status === "expired" ? (
                <button className="renew-btn">🔄 Renew Plan</button>
              ) : (
                <button className="active-btn" disabled>
                  ✅ Active
                </button>
              )}

              <button className="renew-btn" type="submit" onClick={() => handlesubmit(sub)}>Purchase</button>
              
            </div>
          ))
        ) : (
          <p className="loading-text">No active subscriptions found.</p>
        )}
      </div>
    </div>
  );
};

export default Subscription;
