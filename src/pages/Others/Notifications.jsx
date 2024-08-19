import { Bell, CheckCircle, AlertCircle, ArrowLeft } from "lucide-react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";

const Notifications = () => {
  const unreadNotifications = [
    { id: 1, message: "Your order #12345 has been shipped!", time: "2 hours ago" },
    { id: 2, message: "New message from Maame Yankeh Cornelius", time: "5 hours ago" },
  ];

  const readNotifications = [
    { id: 3, message: "Welcome to Poultry Connect!", time: "1 day ago" },
    { id: 4, message: "Your password has been successfully changed.", time: "3 days ago" },
  ];

  return (
    <div className="min-h-screen bg-background text-textPrimary">
      <Navbar />
      <Link to="/dashboard/farmer"><ArrowLeft className=""/></Link>
      
      
      {/* Notifications Header */}
      <section className="p-12 bg-white text-center">
        <h1 className="text-4xl font-heading text-primary mb-6">Notifications</h1>
        <p className="text-lg md:text-xl text-textSecondary mb-8">
          Stay updated with your latest notifications.
        </p>
      </section>

      {/* Unread Notifications Section */}
      <section className="p-12 bg-lightGray text-center">
        <h2 className="text-3xl font-heading text-primary mb-6">Unread Notifications</h2>
        {unreadNotifications.length > 0 ? (
          <div className="space-y-4">
            {unreadNotifications.map((notification) => (
              <div key={notification.id} className="p-4 bg-white rounded shadow-md flex items-center justify-between">
                <div className="flex items-center">
                  <AlertCircle className="text-warning h-8 w-8 mr-4" />
                  <div className="text-left">
                    <p className="text-lg font-semibold text-textPrimary">{notification.message}</p>
                    <p className="text-sm text-textSecondary">{notification.time}</p>
                  </div>
                </div>
                <CheckCircle className="text-accent h-6 w-6 cursor-pointer" />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-lg text-textSecondary">You have no unread notifications.</p>
        )}
      </section>

      {/* Read Notifications Section */}
      <section className="p-12 bg-white text-center">
        <h2 className="text-3xl font-heading text-primary mb-6">Read Notifications</h2>
        {readNotifications.length > 0 ? (
          <div className="space-y-4">
            {readNotifications.map((notification) => (
              <div key={notification.id} className="p-4 bg-lightGray rounded shadow-md flex items-center justify-between">
                <div className="flex items-center">
                  <Bell className="text-primary h-8 w-8 mr-4" />
                  <div className="text-left">
                    <p className="text-lg font-semibold text-textPrimary">{notification.message}</p>
                    <p className="text-sm text-textSecondary">{notification.time}</p>
                  </div>
                </div>
                <CheckCircle className="text-accent h-6 w-6 cursor-pointer" />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-lg text-textSecondary">You have no read notifications.</p>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default Notifications;
