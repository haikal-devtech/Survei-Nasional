export { default } from 'next-auth/middleware';

export const config = {
  // Semua route di bawah /dashboard diproteksi
  // Kalau belum login → redirect otomatis ke /login
  matcher: ['/dashboard/:path*'],
};
