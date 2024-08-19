import { User, Bell, Lock, Shield, Globe, Save } from "lucide-react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const Settings = () => {
  return (
    <div className="min-h-screen bg-background text-textPrimary">
      <Navbar />

      {/* Settings Header */}
      <section className="p-12 bg-white text-center">
        <h1 className="text-4xl font-heading text-primary mb-6">Settings</h1>
        <p className="text-lg md:text-xl text-textSecondary mb-8">
          Customize your experience by adjusting your account, notifications, privacy, and other settings.
        </p>
      </section>

      {/* Settings Options */}
      <section className="p-12 bg-lightGray text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Account Settings */}
          <div className="p-6 bg-white rounded shadow-md text-left">
            <User className="text-primary h-8 w-8 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-textPrimary mb-2">Account Settings</h3>
            <p className="text-lg text-textSecondary">
              Manage your account information, update your email or password, and control your profile visibility.
            </p>
            <a href="/settings/account" className="text-primary font-medium mt-4 block">
              Edit Account Settings
            </a>
          </div>

          {/* Notification Settings */}
          <div className="p-6 bg-white rounded shadow-md text-left">
            <Bell className="text-primary h-8 w-8 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-textPrimary mb-2">Notification Settings</h3>
            <p className="text-lg text-textSecondary">
              Customize your notification preferences. Choose what you want to be notified about and how you receive these notifications.
            </p>
            <a href="/settings/notifications" className="text-primary font-medium mt-4 block">
              Edit Notification Settings
            </a>
          </div>

          {/* Privacy Settings */}
          <div className="p-6 bg-white rounded shadow-md text-left">
            <Lock className="text-primary h-8 w-8 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-textPrimary mb-2">Privacy Settings</h3>
            <p className="text-lg text-textSecondary">
              Control who can see your activity and information. Adjust your privacy settings to keep your account secure.
            </p>
            <a href="/settings/privacy" className="text-primary font-medium mt-4 block">
              Edit Privacy Settings
            </a>
          </div>

          {/* Security Settings */}
          <div className="p-6 bg-white rounded shadow-md text-left">
            <Shield className="text-primary h-8 w-8 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-textPrimary mb-2">Security Settings</h3>
            <p className="text-lg text-textSecondary">
              Ensure your account is secure by managing your security settings. Set up two-factor authentication and review recent activities.
            </p>
            <a href="/settings/security" className="text-primary font-medium mt-4 block">
              Edit Security Settings
            </a>
          </div>

          {/* Language Settings */}
          <div className="p-6 bg-white rounded shadow-md text-left">
            <Globe className="text-primary h-8 w-8 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-textPrimary mb-2">Language Settings</h3>
            <p className="text-lg text-textSecondary">
              Select your preferred language for the platform. This will affect how information is displayed throughout the site.
            </p>
            <a href="/settings/language" className="text-primary font-medium mt-4 block">
              Edit Language Settings
            </a>
          </div>

          {/* Save Settings Button */}
          <div className="p-6 bg-white rounded shadow-md text-center">
            <Save className="text-primary h-12 w-12 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-textPrimary mb-2">Save Changes</h3>
            <p className="text-lg text-textSecondary">
              Once you have customized your settings, don't forget to save your changes to apply them.
            </p>
            <button className="bg-primary text-white py-2 px-4 rounded mt-4">
              Save Settings
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Settings;
