import { useState } from "react";

import { useDispatch } from "react-redux";

import { useNavigate, Link } from "react-router-dom";

import toast from "react-hot-toast";

import api from "../services/api";

import { loginSuccess } from "../features/auth/authSlice";

const LoginPage = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await api.post(
        "/auth/login",
        formData
      );

      dispatch(
        loginSuccess({
          user: data.user,
          token: data.token,
        })
      );

      toast.success("Login successful");

      navigate("/");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Login failed"
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">
          Login
        </h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg mb-4"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg mb-4"
        />

        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-lg"
        >
          Login
        </button>

        <p className="mt-4 text-center">
          No account?{" "}
          <Link
            to="/register"
            className="text-blue-600"
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;