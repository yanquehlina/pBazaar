import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Mail,
  Phone,
  Globe,
  User,
  Camera,
} from 'lucide-react';

const ProfileUpdate = () => {
  const navigate = useNavigate();
  
  // State to hold form data
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    location: 'Spintex, Accra',
    farmName: 'Green Valley Farms',
    farmSize: '10 Acres',
    bio: 'A brief bio about the farmer...',
    farmDetails: 'Information about the farm, products, and services...',
    email: 'farmer@example.com',
    phone: '+233 123 456 789',
    products: ['Eggs', 'Chicken'],
    certificate: '/path-to-certificate.pdf',
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Save profile data logic here (e.g., API call)
    console.log('Updated Profile Data:', profileData);
    navigate('/dashboard/profile');
  };

  return (
    <div className="min-h-screen text-gray-800 p-8">
      <div className="max-w-4xl mx-auto bg-white text-gray-800 p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6">Update Profile</h1>
        
        <form onSubmit={handleSubmit}>
          {/* Profile Picture */}
          <div className="flex items-center mb-6">
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
          </div>

          {/* Name */}
          <div className="mb-6">
            <label className="block text-lg font-semibold mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={profileData.name}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-lg bg-gray-200 text-gray-800"
            />
          </div>

          {/* Location */}
          <div className="mb-6">
            <label className="block text-lg font-semibold mb-2">Location</label>
            <div className="flex items-center">
              <Globe className="h-5 w-5 mr-2" />
              <input
                type="text"
                name="location"
                value={profileData.location}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-lg bg-gray-200 text-gray-800"
              />
            </div>
          </div>

          {/* Farm Name */}
          <div className="mb-6">
            <label className="block text-lg font-semibold mb-2">Farm Name</label>
            <div className="flex items-center">
              <User className="h-5 w-5 mr-2" />
              <input
                type="text"
                name="farmName"
                value={profileData.farmName}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-lg bg-gray-200 text-gray-800"
              />
            </div>
          </div>

          {/* Farm Size */}
          <div className="mb-6">
            <label className="block text-lg font-semibold mb-2">Farm Size</label>
            <div className="flex items-center">
              <User className="h-5 w-5 mr-2" />
              <input
                type="text"
                name="farmSize"
                value={profileData.farmSize}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-lg bg-gray-200 text-gray-800"
              />
            </div>
          </div>

          {/* Bio */}
          <div className="mb-6">
            <label className="block text-lg font-semibold mb-2">Bio</label>
            <textarea
              name="bio"
              value={profileData.bio}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-lg bg-gray-200 text-gray-800 resize-none"
              rows="4"
            />
          </div>

          {/* Farm Details */}
          <div className="mb-6">
            <label className="block text-lg font-semibold mb-2">Farm Details</label>
            <textarea
              name="farmDetails"
              value={profileData.farmDetails}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-lg bg-gray-200 text-gray-800 resize-none"
              rows="4"
            />
          </div>

          {/* Contact Information */}
          <div className="mb-6">
            <label className="block text-lg font-semibold mb-2">Contact Information</label>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <input
                  type="email"
                  name="email"
                  value={profileData.email}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-lg bg-gray-200 text-gray-800"
                />
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <input
                  type="tel"
                  name="phone"
                  value={profileData.phone}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-lg bg-gray-200 text-gray-800"
                />
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="mb-6">
            <label className="block text-lg font-semibold mb-2">Farm Products</label>
            <ul className="space-y-2">
              {profileData.products.map((product, index) => (
                <li key={index}>
                  <input
                    type="text"
                    name={`product${index}`}
                    value={product}
                    onChange={(e) => {
                      const newProducts = [...profileData.products];
                      newProducts[index] = e.target.value;
                      setProfileData((prevData) => ({
                        ...prevData,
                        products: newProducts,
                      }));
                    }}
                    className="w-full p-2 border rounded-lg bg-gray-200 text-gray-800"
                  />
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications */}
          <div className="mb-6">
            <label className="block text-lg font-semibold mb-2">Certifications</label>
            <div className="flex items-center">
              <a
                href={profileData.certificate}
                className="text-gray-800 underline"
                download
              >
                Download Current Certificate
              </a>
              <input
                type="file"
                name="certificate"
                onChange={(e) => {
                  const file = e.target.files[0];
                  const newCertificatePath = URL.createObjectURL(file);
                  setProfileData((prevData) => ({
                    ...prevData,
                    certificate: newCertificatePath,
                  }));
                }}
                className="ml-4 p-2 border rounded-lg bg-gray-200 text-gray-800"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileUpdate;
