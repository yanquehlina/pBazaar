import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Mail,
  Phone,
  Download,
  Globe,
  User,
  Edit3,
  Trash,
  Camera,
  Plus,
} from 'lucide-react';

const Profile = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen text-gray-800 p-8">
      <div className="max-w-4xl mx-auto bg-white text-gray-800 p-6 rounded-lg shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Farmer Profile</h1>
          <Link
            to="/dashboard/profile/add"
            className="flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full h-12 w-12"
          >
            <Plus className="h-6 w-6" />
          </Link>
        </div>

        {/* Profile Header */}
        <div className="flex flex-col md:flex-row items-center space-x-4 mb-6">
          <div className="relative">
            <img
              src="/path-to-profile-picture.jpg"
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-green-600"
            />
            <input type="file" id="profilePicUpload" className="hidden" />
            <label
              htmlFor="profilePicUpload"
              className="absolute bottom-0 right-0 p-2 bg-green-600 rounded-full cursor-pointer"
            >
              <Camera className="h-5 w-5 text-white" />
            </label>
          </div>
          <div className="mt-4 md:mt-0">
            <h1 className="text-3xl font-bold">John Doe</h1>
            <p className="text-lg flex items-center mt-2">
              <Globe className="h-5 w-5 mr-2" /> Location: Spintex, Accra
            </p>
            <p className="text-lg flex items-center mt-2">
              <User className="h-5 w-5 mr-2" /> Farm Name: Green Valley Farms
            </p>
            <p className="text-lg flex items-center mt-2">
              <User className="h-5 w-5 mr-2" /> Farm Size: 10 Acres
            </p>
            <button className="mt-4 text-green-600 hover:text-green-800 flex items-center">
              <Edit3 className="h-5 w-5 mr-2" /> Edit Profile
            </button>
          </div>
        </div>

        {/* Bio Section */}
        <div className="mb-6 bg-gray-100 p-4 rounded-lg relative">
          <div className="absolute top-2 right-2 flex space-x-2">
            <button className="text-green-600 hover:text-green-800">
              <Edit3 className="h-5 w-5" />
            </button>
            <button className="text-red-500 hover:text-red-700">
              <Trash className="h-5 w-5" />
            </button>
          </div>
          <h2 className="text-2xl font-bold">Bio</h2>
          <textarea
            className="w-full mt-2 p-2 border rounded-lg bg-gray-200 text-gray-800 resize-none"
            defaultValue="A brief bio about the farmer..."
            rows="4"
          />
        </div>

        {/* About Section */}
        <div className="mb-6 bg-gray-100 p-4 rounded-lg relative">
          <div className="absolute top-2 right-2 flex space-x-2">
            <button className="text-green-600 hover:text-green-800">
              <Edit3 className="h-5 w-5" />
            </button>
            <button className="text-red-500 hover:text-red-700">
              <Trash className="h-5 w-5" />
            </button>
          </div>
          <h2 className="text-2xl font-bold">Farm Details</h2>
          <textarea
            className="w-full mt-2 p-2 border rounded-lg bg-gray-200 text-gray-800 resize-none"
            defaultValue="Information about the farm, products, and services..."
            rows="4"
          />
        </div>

        {/* Contact Information Section */}
        <div className="mb-6 bg-gray-100 p-4 rounded-lg relative">
          <div className="absolute top-2 right-2 flex space-x-2">
            <button className="text-green-600 hover:text-green-800">
              <Edit3 className="h-5 w-5" />
            </button>
            <button className="text-red-500 hover:text-red-700">
              <Trash className="h-5 w-5" />
            </button>
          </div>
          <h2 className="text-2xl font-bold">Contact Information</h2>
          <p className="mt-2 flex items-center">
            <Mail className="h-5 w-5 mr-2" /> Email:{" "}
            <input
              type="email"
              className="bg-gray-200 p-1 rounded-md text-gray-800"
              defaultValue="farmer@example.com"
            />
          </p>
          <p className="mt-2 flex items-center">
            <Phone className="h-5 w-5 mr-2" /> Phone:{" "}
            <input
              type="tel"
              className="bg-gray-200 p-1 rounded-md text-gray-800"
              defaultValue="+233 123 456 789"
            />
          </p>
        </div>

        {/* Farm Products Section */}
        <div className="mb-6 bg-gray-100 p-4 rounded-lg relative">
          <div className="absolute top-2 right-2 flex space-x-2">
            <button className="text-green-600 hover:text-green-800">
              <Edit3 className="h-5 w-5" />
            </button>
            <button className="text-red-500 hover:text-red-700">
              <Trash className="h-5 w-5" />
            </button>
          </div>
          <h2 className="text-2xl font-bold">Farm Products</h2>
          <ul className="mt-2 list-disc pl-5">
            <li>
              <input
                type="text"
                className="bg-gray-200 p-1 rounded-md text-gray-800"
                defaultValue="Product 1: Eggs"
              />
            </li>
            <li>
              <input
                type="text"
                className="bg-gray-200 p-1 rounded-md text-gray-800"
                defaultValue="Product 2: Chicken"
              />
            </li>
          </ul>
        </div>

        {/* Certifications Section */}
        <div className="bg-gray-100 p-4 rounded-lg relative">
          <div className="absolute top-2 right-2 flex space-x-2">
            <button className="text-green-600 hover:text-green-800">
              <Edit3 className="h-5 w-5" />
            </button>
            <button className="text-red-500 hover:text-red-700">
              <Trash className="h-5 w-5" />
            </button>
          </div>
          <h2 className="text-2xl font-bold">Certifications</h2>
          <a
            href="/path-to-certificate.pdf"
            className="text-gray-800 flex items-center mt-2"
          >
            <Download className="h-5 w-5 mr-2" />{" "}
            <input
              type="text"
              className="bg-gray-200 p-1 rounded-md text-gray-800"
              defaultValue="Download Certificate"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;



// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { User, Edit3, List, ShoppingBag } from "lucide-react"; // Icons from Lucide

// const Profile = () => {
//   const [profileData, setProfileData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Fetch profile data
//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const response = await axios.get("/user/auth/profile");
//         setProfileData(response.data);
//       } catch (error) {
//         console.error("Error fetching profile data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProfile();
//   }, []);

//   if (loading) return <div>Loading...</div>;

//   return (
//     <div className="p-8 bg-light-gray">
//       {/* Profile Summary */}
//       <div className="bg-white p-6 rounded-lg shadow-md mb-8">
//         <div className="flex items-center">
//           <User className="text-3xl text-primary mr-4" />
//           <div>
//             <h2 className="text-xl font-semibold">{profileData.name}</h2>
//             <p className="text-gray-600">{profileData.email}</p>
//             <p className="text-gray-600 capitalize">{profileData.role}</p>
//           </div>
//           <button className="ml-auto bg-secondary text-white px-4 py-2 rounded">
//             <Edit3 className="inline-block mr-2" /> Edit Profile
//           </button>
//         </div>
//       </div>

//       {/* Personal Information */}
//       <div className="bg-white p-6 rounded-lg shadow-md mb-8">
//         <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <p>
//             <span className="font-bold">Phone:</span> {profileData.phone}
//           </p>
//           <p>
//             <span className="font-bold">Location:</span> {profileData.location}
//           </p>
//           <p>
//             <span className="font-bold">Joined:</span>{" "}
//             {new Date(profileData.createdAt).toLocaleDateString()}
//           </p>
//         </div>
//       </div>

//       {/* Conditional Section: Poultry Products or Orders */}
//       {profileData.role === "farmer" && (
//         <div className="bg-white p-6 rounded-lg shadow-md mb-8">
//           <h3 className="text-lg font-semibold mb-4">My Poultry Products</h3>
//           <ul>
//             {profileData.products.length > 0 ? (
//               profileData.products.map((product) => (
//                 <li
//                   key={product.id}
//                   className="flex justify-between py-2 border-b"
//                 >
//                   <span>{product.name}</span>
//                   <span>${product.price}</span>
//                 </li>
//               ))
//             ) : (
//               <p>You have not listed any poultry products yet.</p>
//             )}
//           </ul>
//         </div>
//       )}

//       {profileData.role === "consumer" && (
//         <div className="bg-white p-6 rounded-lg shadow-md mb-8">
//           <h3 className="text-lg font-semibold mb-4">My Orders</h3>
//           <ul>
//             {profileData.orders.length > 0 ? (
//               profileData.orders.map((order) => (
//                 <li
//                   key={order.id}
//                   className="flex justify-between py-2 border-b"
//                 >
//                   <span>{order.productName}</span>
//                   <span>${order.totalPrice}</span>
//                 </li>
//               ))
//             ) : (
//               <p>You have not placed any orders yet.</p>
//             )}
//           </ul>
//         </div>
//       )}

//       {profileData.role === "supplier" && (
//         <div className="bg-white p-6 rounded-lg shadow-md mb-8">
//           <h3 className="text-lg font-semibold mb-4">My Supply History</h3>
//           <ul>
//             {profileData.supplies.length > 0 ? (
//               profileData.supplies.map((supply) => (
//                 <li
//                   key={supply.id}
//                   className="flex justify-between py-2 border-b"
//                 >
//                   <span>{supply.productName}</span>
//                   <span>{supply.quantity} kg</span>
//                 </li>
//               ))
//             ) : (
//               <p>You have not supplied any products yet.</p>
//             )}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Profile;
