'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';

export default function SignIn() {
  const router = useRouter();
  const { login, loading, error } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [formError, setFormError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!formData.email || !formData.password) {
      setFormError('Please fill in all fields');
      return;
    }

    try {
      await login(formData);
      router.push('/'); // Redirect to home page after successful login
    } catch (err: any) {
      setFormError(err?.error || 'Failed to sign in');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="bg-[#111111] rounded-lg p-8 shadow-xl border border-[#333333]">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-semibold text-white mb-2">Welcome back</h1>
        <p className="text-[#888888]">Sign in to your account</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[#888888] mb-1">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-[#1A1A1A] border border-[#333333] rounded-md text-white placeholder-[#666666] focus:outline-none focus:ring-2 focus:ring-[#5E6AD2] focus:border-transparent"
            placeholder="Enter your email"
            required
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-[#888888] mb-1">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-[#1A1A1A] border border-[#333333] rounded-md text-white placeholder-[#666666] focus:outline-none focus:ring-2 focus:ring-[#5E6AD2] focus:border-transparent"
            placeholder="Enter your password"
            required
          />
        </div>

        {(error || formError) && (
          <div className="text-red-500 text-sm mt-2">
            {error || formError}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#5E6AD2] text-white py-2 px-4 rounded-md hover:bg-[#4F5BC4] focus:outline-none focus:ring-2 focus:ring-[#5E6AD2] focus:ring-offset-2 focus:ring-offset-[#111111] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {loading ? 'Signing in...' : 'Sign in'}
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-[#888888]">
          Don't have an account?{' '}
          <Link href="/auth/signup" className="text-[#5E6AD2] hover:text-[#4F5BC4]">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
} 