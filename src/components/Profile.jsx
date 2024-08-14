// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import {
//   Mail,
//   Phone,
//   MapPin,
//   Edit3,
//   Camera,
//   Plus,
// } from "lucide-react";

// // Simulating different user roles
// const USER_ROLES = {
//   CONSUMER: 'consumer',
//   FARMER: 'farmer',
//   SUPPLIER: 'supplier',
//   LOGISTICS: 'logistics',
//   ADMIN: 'admin',
//   SUPER_ADMIN: 'super-admin',
// };

// // Example data passed as props (replace with dynamic data fetching later)
// const Profile = ({ user }) => {
//   const navigate = useNavigate();
  
//   // Function to render specific sections based on user role
//   const renderRoleSpecificContent = (role) => {
//     switch (role) {
//       case USER_ROLES.FARMER:
//         return (
//           <>
//             <div className="mb-6 bg-gray-100 p-4 rounded-lg relative">
//               <h2 className="text-2xl font-bold">Farm Products</h2>
//               <ul className="mt-2 list-disc pl-5">
//                 <li>
//                   <input
//                     type="text"
//                     className="bg-gray-200 p-1 rounded-md text-black"
//                     defaultValue="Fresh Chicken - Wholesale & Retail"
//                   />
//                 </li>
//                 <li>
//                   <input
//                     type="text"
//                     className="bg-gray-200 p-1 rounded-md text-black"
//                     defaultValue="Eggs - Organic"
//                   />
//                 </li>
//               </ul>
//             </div>

//             <div className="mb-6 bg-gray-100 p-4 rounded-lg relative">
//               <h2 className="text-2xl font-bold">Delivery Information</h2>
//               <textarea
//                 className="w-full mt-2 p-2 border rounded-lg bg-gray-200 text-black resize-none"
//                 defaultValue="We deliver across Ghana. Express delivery available."
//                 rows="4"
//               />
//             </div>
//           </>
//         );
//       case USER_ROLES.SUPPLIER:
//         return (
//           <>
//             <div className="mb-6 bg-gray-100 p-4 rounded-lg relative">
//               <h2 className="text-2xl font-bold">Feed Supplies</h2>
//               <ul className="mt-2 list-disc pl-5">
//                 <li>
//                   <input
//                     type="text"
//                     className="bg-gray-200 p-1 rounded-md text-black"
//                     defaultValue="Organic Chicken Feed"
//                   />
//                 </li>
//                 <li>
//                   <input
//                     type="text"
//                     className="bg-gray-200 p-1 rounded-md text-black"
//                     defaultValue="Corn Meal - 100kg"
//                   />
//                 </li>
//               </ul>
//             </div>

//             <div className="mb-6 bg-gray-100 p-4 rounded-lg relative">
//               <h2 className="text-2xl font-bold">Delivery Options</h2>
//               <textarea
//                 className="w-full mt-2 p-2 border rounded-lg bg-gray-200 text-black resize-none"
//                 defaultValue="Delivery across all regions. Bulk orders only."
//                 rows="4"
//               />
//             </div>
//           </>
//         );
//       case USER_ROLES.LOGISTICS:
//         return (
//           <>
//             <div className="mb-6 bg-gray-100 p-4 rounded-lg relative">
//               <h2 className="text-2xl font-bold">Logistics Management</h2>
//               <textarea
//                 className="w-full mt-2 p-2 border rounded-lg bg-gray-200 text-black resize-none"
//                 defaultValue="Route optimization for Accra-Kumasi region."
//                 rows="4"
//               />
//             </div>
//           </>
//         );
//       case USER_ROLES.ADMIN:
//       case USER_ROLES.SUPER_ADMIN:
//         return (
//           <>
//             <div className="mb-6 bg-gray-100 p-4 rounded-lg relative">
//               <h2 className="text-2xl font-bold">Admin Tools</h2>
//               <p className="mt-2">Manage users, roles, and permissions for the platform.</p>
//             </div>
//           </>
//         );
//       default:
//         return (
//           <>
//             <div className="mb-6 bg-gray-100 p-4 rounded-lg relative">
//               <h2 className="text-2xl font-bold">Order History</h2>
//               <p>No recent purchases.</p>
//             </div>
//           </>
//         );
//     }
//   };

//   return (
//     <div className="min-h-screen text-black p-8">
//       <div className="max-w-4xl mx-auto bg-white text-black p-6 rounded-lg shadow-lg">
//         <div className="flex items-center justify-between mb-6">
//           <h1 className="text-3xl font-bold">{user.role === USER_ROLES.CONSUMER ? "Your Profile" : "Business Profile"}</h1>
//           <Link
//             to="/dashboard/profile/add"
//             className="flex items-center justify-center bg-black hover:bg-gray-700 text-white font-semibold rounded-full h-12 w-12"
//           >
//             <Plus className="h-6 w-6" />
//           </Link>
//         </div>

//         {/* Profile Header */}
//         <div className="flex flex-col md:flex-row items-center space-x-4 mb-6">
//           <div className="relative">
//             <img
//               src={user.profilePicture}
//               alt="Profile"
//               className="w-32 h-32 rounded-full object-cover border-4 border-black"
//             />
//             <input type="file" id="profilePicUpload" className="hidden" />
//             <label
//               htmlFor="profilePicUpload"
//               className="absolute bottom-0 right-0 p-2 bg-black rounded-full cursor-pointer"
//             >
//               <Camera className="h-5 w-5 text-white" />
//             </label>
//           </div>
//           <div className="mt-4 md:mt-0">
//             <h1 className="text-3xl font-bold">{user.name}</h1>
//             <p className="text-lg flex items-center mt-2">
//               <MapPin className="h-5 w-5 mr-2" /> Location: {user.location}
//             </p>
//             <button className="mt-4 text-black hover:text-gray-700 flex items-center">
//               <Edit3 className="h-5 w-5 mr-2" /> Edit Profile
//             </button>
//           </div>
//         </div>

//         {/* Role-Specific Section */}
//         {renderRoleSpecificContent(user.role)}
        
//         {/* Contact Information */}
//         <div className="mb-6 bg-gray-100 p-4 rounded-lg relative">
//           <h2 className="text-2xl font-bold">Contact Information</h2>
//           <p className="mt-2 flex items-center">
//             <Mail className="h-5 w-5 mr-2" /> Email:{" "}
//             <input
//               type="email"
//               className="bg-gray-200 p-1 rounded-md text-black"
//               defaultValue={user.email}
//             />
//           </p>
//           <p className="mt-2 flex items-center">
//             <Phone className="h-5 w-5 mr-2" /> Phone:{" "}
//             <input
//               type="tel"
//               className="bg-gray-200 p-1 rounded-md text-black"
//               defaultValue={user.phone}
//             />
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;
