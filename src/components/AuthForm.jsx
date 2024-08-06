import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import Loader from './Loader'; // Assuming Loader is a separate component

const AuthForm = ({ isSignup }) => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);
  
  const onSubmit = data => {
    console.log(data);
    // Handle form submission logic here
  };

  return (
    <div className="flex-1 flex flex-col justify-center p-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-5xl font-semibold text-[#E74C3C] pb-2" style={{ fontFamily: 'Montserrat' }}>
          {isSignup ? 'Tell us about yourself' : 'Welcome back!'}
        </h1>
        <div className="h-0.5 w-1/3 mx-auto bg-[#ECF0F1]"></div>
        <h2 className="text-2xl md:text-4xl font-semibold pb-4 pt-4" style={{ fontFamily: 'Montserrat' }}>
          {isSignup ? 'Personal Information' : 'Your Credentials'}
        </h2>
        <div className="h-0.5 w-1/2 mx-auto bg-[#ECF0F1]"></div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-lg mx-auto w-full px-4">
        <div className="space-y-2">
          <label className="block text-base text-[#34495E]" htmlFor="email" style={{ fontFamily: 'Open Sans' }}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="border-2 p-2 rounded-md w-full"
            style={{ fontFamily: 'Open Sans' }}
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <p className="text-red-500" style={{ fontFamily: 'Open Sans' }}>{errors.email.message}</p>
          )}
        </div>

        {isSignup && (
          <>
            <div className="space-y-2">
              <label className="block text-base text-[#34495E]" htmlFor="fullName" style={{ fontFamily: 'Open Sans' }}>Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter your full name"
                className="border-2 p-2 rounded-md w-full"
                style={{ fontFamily: 'Open Sans' }}
                {...register("fullName", { required: "Full name is required" })}
              />
              {errors.fullName && (
                <p className="text-red-500" style={{ fontFamily: 'Open Sans' }}>{errors.fullName.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <label className="block text-base text-[#34495E]" htmlFor="phone" style={{ fontFamily: 'Open Sans' }}>Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                className="border-2 p-2 rounded-md w-full"
                style={{ fontFamily: 'Open Sans' }}
                {...register("phone", { 
                  required: "Phone number is required", 
                  pattern: {
                    value: /^(\+?\d{1,3}[- ]?)?\d{10,14}$/,
                    message: 'Invalid phone number',
                  },
                })}
              />
              {errors.phone && (
                <p className="text-red-500" style={{ fontFamily: 'Open Sans' }}>{errors.phone.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <label className="block text-base text-[#34495E]" htmlFor="profession" style={{ fontFamily: 'Open Sans' }}>Professional Activity (Optional)</label>
              <input
                type="text"
                id="profession"
                name="profession"
                placeholder="Enter your profession"
                className="border-2 p-2 rounded-md w-full"
                style={{ fontFamily: 'Open Sans' }}
                {...register("profession")}
              />
            </div>
          </>
        )}

        <div className="space-y-2">
          <label className="block text-base text-[#34495E]" htmlFor="password" style={{ fontFamily: 'Open Sans' }}>Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Enter your password"
              className="border-2 p-2 rounded-md w-full"
              style={{ fontFamily: 'Open Sans' }}
              {...register("password", { required: "Password is required",
                minLength: {
                  value: 8,
                  message: 'Password must be at least 8 characters long'
                }
              })}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 focus:outline-none"
            >
              {showPassword ? <Eye /> : <EyeOff />}
            </button>
          </div>
          {errors.password && (
            <p className="text-red-500" style={{ fontFamily: 'Open Sans' }}>{errors.password.message}</p>
          )}
        </div>

        {isSignup && (
          <div className="space-y-2">
            <label className="block text-base text-[#34495E]" htmlFor="confirmPassword" style={{ fontFamily: 'Open Sans' }}>Confirm Password</label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                placeholder="Confirm your password"
                className="border-2 p-2 rounded-md w-full"
                style={{ fontFamily: 'Open Sans' }}
                {...register("confirmPassword", { 
                  validate: value => value === watch('password') || 'Passwords do not match' 
                })}
              />
              <button
                type="button"
                onClick={toggleConfirmPasswordVisibility}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 focus:outline-none"
              >
                {showConfirmPassword ? <Eye /> : <EyeOff />}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="text-red-500" style={{ fontFamily: 'Open Sans' }}>{errors.confirmPassword.message}</p>
            )}
          </div>
        )}

        <div className="flex gap-x-4 justify-end items-center">
          <button type="button" className="px-4 py-2 border rounded-full">
            {isSignup ? 'Back' : <Link to="/signup">Back</Link>}
          </button>
          <button type="submit" className="px-4 py-2 bg-[#E74C3C] text-white rounded-full" style={{ fontFamily: 'Open Sans' }}>
            {isSignup ? 'Continue' : 'Login'}
          </button>
        </div>

        <p className="flex justify-end mt-4 gap-2" style={{ fontFamily: 'Open Sans' }}>
          {isSignup ? (
            <>
              Already have an account?
              <Link to="/login" className="text-[#E74C3C]">
                Login
              </Link>
            </>
          ) : (
            <>
              Don't have an account?
              <Link to="/signup" className="text-[#E74C3C]">
                Sign up
              </Link>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default AuthForm;
