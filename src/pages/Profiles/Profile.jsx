import React, { useEffect, useState } from "react";
import axios from "axios";
import { User, Edit3, List, ShoppingBag } from "lucide-react"; // Icons from Lucide

const Profile = () => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch profile data
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get("/user/auth/profile");
        setProfileData(response.data);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="p-8 bg-light-gray">
      {/* Profile Summary */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="flex items-center">
          <User className="text-3xl text-primary mr-4" />
          <div>
            <h2 className="text-xl font-semibold">{profileData.name}</h2>
            <p className="text-gray-600">{profileData.email}</p>
            <p className="text-gray-600 capitalize">{profileData.role}</p>
          </div>
          <button className="ml-auto bg-secondary text-white px-4 py-2 rounded">
            <Edit3 className="inline-block mr-2" /> Edit Profile
          </button>
        </div>
      </div>

      {/* Personal Information */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <p>
            <span className="font-bold">Phone:</span> {profileData.phone}
          </p>
          <p>
            <span className="font-bold">Location:</span> {profileData.location}
          </p>
          <p>
            <span className="font-bold">Joined:</span>{" "}
            {new Date(profileData.createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>

      {/* Conditional Section: Poultry Products or Orders */}
      {profileData.role === "farmer" && (
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h3 className="text-lg font-semibold mb-4">My Poultry Products</h3>
          <ul>
            {profileData.products.length > 0 ? (
              profileData.products.map((product) => (
                <li
                  key={product.id}
                  className="flex justify-between py-2 border-b"
                >
                  <span>{product.name}</span>
                  <span>${product.price}</span>
                </li>
              ))
            ) : (
              <p>You have not listed any poultry products yet.</p>
            )}
          </ul>
        </div>
      )}

      {profileData.role === "consumer" && (
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h3 className="text-lg font-semibold mb-4">My Orders</h3>
          <ul>
            {profileData.orders.length > 0 ? (
              profileData.orders.map((order) => (
                <li
                  key={order.id}
                  className="flex justify-between py-2 border-b"
                >
                  <span>{order.productName}</span>
                  <span>${order.totalPrice}</span>
                </li>
              ))
            ) : (
              <p>You have not placed any orders yet.</p>
            )}
          </ul>
        </div>
      )}

      {profileData.role === "supplier" && (
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h3 className="text-lg font-semibold mb-4">My Supply History</h3>
          <ul>
            {profileData.supplies.length > 0 ? (
              profileData.supplies.map((supply) => (
                <li
                  key={supply.id}
                  className="flex justify-between py-2 border-b"
                >
                  <span>{supply.productName}</span>
                  <span>{supply.quantity} kg</span>
                </li>
              ))
            ) : (
              <p>You have not supplied any products yet.</p>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Profile;
