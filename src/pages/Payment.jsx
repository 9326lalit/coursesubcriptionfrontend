// import { useLocation, useNavigate } from "react-router-dom";

// const Payment = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const selectedPlan = location.state?.selectedPlan;

//   const handlePaymentSuccess = () => {
//     // Assuming payment is successful, redirect to profile page with purchase details
//     navigate("/profile", {
//       state: {
//         success: true,
//         message: "You successfully purchased the Combo Plan!",
//         purchasedPlan: selectedPlan,
//       },
//     });
//   };

//   return (
//     <div>
//       <h1>Payment Page</h1>
//       {selectedPlan ? (
//         <div>
//           <h2>Selected Plan: {selectedPlan.plan}</h2>
//           <p>💰 Price: ₹{selectedPlan.price}</p>
//           <p>📅 Start Date: {selectedPlan.startDate}</p>
//           <p>⏳ Expiry Date: {selectedPlan.expiryDate}</p>
//           <p>💳 Payment ID: {selectedPlan.paymentId}</p>
//           <h3>📘 Subject: {selectedPlan.subject}</h3>

//           {/* 📚 Courses Included */}
//           {selectedPlan.courses && selectedPlan.courses.length > 0 && (
//             <div>
//               <h4>📚 Courses Included:</h4>
//               <ul>
//                 {selectedPlan.courses.map((course) => (
//                   <li key={course._id}>
//                     <strong>{course.title}</strong> - {course.description}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}

//           <button onClick={handlePaymentSuccess}>Proceed to Payment</button>
//         </div>
//       ) : (
//         <p>No plan selected.</p>
//       )}
//     </div>
//   );
// };

// export default Payment;


import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the toast CSS

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedPlan = location.state?.selectedPlan;

  const handlePaymentSuccess = () => {
    // Show toast notification
    toast.success("Payment Successful! 🎉 You purchased the Combo Plan!", {
      // position: toast.POSITION.TOP_RIGHT,
    });

    // Save purchase details to localStorage
    const previousPurchases = JSON.parse(localStorage.getItem("previousPurchases")) || [];
    previousPurchases.push(selectedPlan);
    localStorage.setItem("previousPurchases", JSON.stringify(previousPurchases));

    // Navigate to Profile Page with purchase details
    navigate("/profile", {
      state: {
        success: true,
        message: "You successfully purchased the Combo Plan!",
        purchasedPlan: selectedPlan,
        previousPurchases, // Pass all previous purchases
      },
    });
  };

  return (
    <div className="payment-container">
      <h1>Payment Page</h1>
      {selectedPlan ? (
        <div className="payment-details">
          <h2>Selected Plan: {selectedPlan.plan}</h2>
          <p>💰 Price: ₹{selectedPlan.price}</p>
          <p>📅 Start Date: {selectedPlan.startDate}</p>
          <p>⏳ Expiry Date: {selectedPlan.expiryDate}</p>
          <p>💳 Payment ID: {selectedPlan.paymentId}</p>
          <h3>📘 Subject: {selectedPlan.subject}</h3>

          {/* 📚 Courses Included */}
          {selectedPlan.courses && selectedPlan.courses.length > 0 && (
            <div>
              <h4>📚 Courses Included:</h4>
              <ul>
                {selectedPlan.courses.map((course) => (
                  <li key={course._id}>
                    <strong>{course.title}</strong> - {course.description}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <button className="payment-btn" onClick={handlePaymentSuccess}>
            Proceed to Payment
          </button>
        </div>
      ) : (
        <p>No plan selected.</p>
      )}
    </div>
  );
};

export default Payment;
