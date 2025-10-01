import { betterAuth } from 'better-auth';
import { mongodbAdapter } from 'better-auth/adapters/mongodb';
import { connectToDatabase } from '@/database/mongoose';
import { nextCookies } from 'better-auth/next-js';

let authInstance: ReturnType<typeof betterAuth> | null = null;

export const getAuth = async () => {
  if (authInstance) return authInstance;

  const mongoose = await connectToDatabase();
  const db = mongoose.connection.db;

  if (!db) throw new Error('MongoDB connection not found');

  authInstance = betterAuth({
const db = mongoose.connection.db;

if (!db) throw new Error('MongoDB connection not found');
if (!process.env.BETTER_AUTH_SECRET)
  throw new Error('BETTER_AUTH_SECRET must be set in environment');
if (!process.env.BETTER_AUTH_URL)
  throw new Error('BETTER_AUTH_URL must be set in environment');

authInstance = betterAuth({
  database: mongodbAdapter(db),
  secret: process.env.BETTER_AUTH_SECRET,
  baseURL: process.env.BETTER_AUTH_URL,
  // …other configuration options
});
    emailAndPassword: {
      enabled: true,
      disableSignUp: false,
      requireEmailVerification: false,
      minPasswordLength: 8,
      maxPasswordLength: 128,
      autoSignIn: true,
    },
    plugins: [nextCookies()],
  });

  return authInstance;
};

export const auth = await getAuth();
