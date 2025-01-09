import React, { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import {
  Eye,
  EyeOff,
  LoaderCircle,
  Lock,
  Mail,
  MessageSquare,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";
import AuthImagePattern from "../components/AuthImagePattern";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { login, isLoggingIn } = useAuthStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div className="flex flex-col justify-center items-center p-6 sm:p-12 ">
        <div className="w-full max-w-md space-y-8 p-4 bg-green-300 rounded-lg">
          <div className="text-center mb-8">
            <div className="flex flex-col items-center gap-2 group">
              <div className="size-12 rounded-xl bg-slate-400 flex items-center justify-center group-hover:bg-slate-600 transition-colors">
                <MessageSquare className="size-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold mt-2">Login Account</h1>
              <p className="text-base">Welcome back!</p>
            </div>
          </div>
          {/* input full name */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* input email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="size-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  placeholder="youremail@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className={`input input-border w-full pl-10`}
                />
              </div>
            </div>
            {/* input password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="size-5 text-gray-400" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="******"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  className={`input input-border w-full pl-10`}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="size-5 text-gray-400 hover:size-6  " />
                  ) : (
                    <Eye className="size-5 text-gray-400 hover:size-6" />
                  )}
                </button>
              </div>
            </div>
            {/* submit button / loading */}
            <button
              typeof="button"
              className="w-full btn btn-accent"
              disabled={isLoggingIn}
            >
              {isLoggingIn ? (
                <>
                  <LoaderCircle className="size-6 text-white animate-spin" />
                  Loading ...
                </>
              ) : (
                "Create Account"
              )}
            </button>
          </form>

          <div className="text-center">
            <p className="text-base">
              Don't have an account? {""}
              <Link to="/signup" className="text-blue-600">
                Signup
              </Link>
            </p>
          </div>
        </div>
      </div>

      <AuthImagePattern
        title="Join our community"
        subtitle="Connect with friends, share moments and stay in touch."
      />
    </div>
  );
};

export default LoginPage;
