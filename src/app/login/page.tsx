'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError]       = useState('');
  const [loading, setLoading]   = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');

    const res = await signIn('credentials', {
      username,
      password,
      redirect: false,
    });

    setLoading(false);

    if (res?.ok) {
      router.push('/dashboard');
    } else {
      setError('Username atau password salah.');
    }
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] mb-4">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="1.5">
              <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h1 className="text-white text-xl font-semibold tracking-tight">Dashboard Survei</h1>
          <p className="text-[#6b7280] text-sm mt-1">Kepuasan Pemerintah Nasional</p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-[#9ca3af] text-xs font-medium mb-1.5 uppercase tracking-wider">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              required
              autoFocus
              className="
                w-full bg-[#111111] border border-[#2a2a2a] rounded-lg
                px-3 py-2.5 text-white text-sm
                placeholder:text-[#4b5563]
                focus:outline-none focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6]
                transition-colors
              "
              placeholder="Masukkan username"
            />
          </div>

          <div>
            <label className="block text-[#9ca3af] text-xs font-medium mb-1.5 uppercase tracking-wider">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              className="
                w-full bg-[#111111] border border-[#2a2a2a] rounded-lg
                px-3 py-2.5 text-white text-sm
                placeholder:text-[#4b5563]
                focus:outline-none focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6]
                transition-colors
              "
              placeholder="Masukkan password"
            />
          </div>

          {error && (
            <p className="text-red-400 text-sm">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="
              w-full bg-[#3b82f6] hover:bg-[#2563eb] disabled:bg-[#1d4ed8] disabled:opacity-50
              text-white text-sm font-medium
              py-2.5 rounded-lg
              transition-colors
              flex items-center justify-center gap-2
            "
          >
            {loading ? (
              <>
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Masuk...
              </>
            ) : 'Masuk'}
          </button>
        </form>
      </div>
    </main>
  );
}
