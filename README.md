DeluxeStay – Luxury Hotel Booking App

A full-stack hotel booking platform built with Next.js, Clerk Authentication, and Stripe Payments.
It allows guests to explore hotel amenities, make room bookings, process test payments, and manage their bookings — all within a sleek, responsive UI.

✨ Features
🧭 Public Pages

Home Page – Welcomes users with a luxury-themed intro and CTA to Sign In / Sign Up.

Authentication Pages –

/sign-in → Clerk-powered login page

/sign-up → Clerk-powered registration page
Both redirect users to /home upon successful authentication.

🔒 Protected Routes

Accessible only after signing in:

/home – Authenticated user landing page

/about – Learn more about the hotel’s story and values

/amenities – View available facilities (pool, spa, gym, etc.)

/contact – Get in touch via form or contact info

/booking-details – Displays user-specific bookings fetched from MongoDB

Protected routes are enforced using Clerk middleware.

💳 Payment System

Integrated Stripe (Test Mode) for safe, fake payments.

After successful payment, users are redirected to:

/payment-success?bookingId=123
This page shows booking details like:

Room name

Check-in / Check-out dates

Number of guests

Total price

User email & name (from Clerk database)

🗂️ Booking Management

View all personal bookings under “My Bookings”

Delete bookings with a confirmation modal

Dynamic fetching from /api/bookings/user/[userId]

MongoDB backend for room & booking persistence

🔑 Authentication

Powered by Clerk

Middleware ensures only authenticated users access protected pages

Uses NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY and CLERK_SECRET_KEY

After logout, users are redirected back to /

💅 Styling & UI

Built with Tailwind CSS

Fully responsive for all devices

Consistent purple & orangered theme

Animated transitions using Framer Motion

Skeleton loaders and modals for improved UX

⚙️ Tech Stack
Layer	Technology
Frontend	Next.js 14 (App Router)
Styling	Tailwind CSS
Authentication	Clerk
Database	MongoDB
Payment	Stripe (Test Mode)
Animation	Framer Motion
Deployment	Vercel
 Environment Variables

Create a .env.local file in the root directory:

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_BASE_URL=http://localhost:3000


When deploying to Vercel, update:

NEXT_PUBLIC_BASE_URL → your production domain (e.g. https://deluxstay.vercel.app)

##Middleware Protection
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher(["/", "/sign-in(.*)", "/sign-up(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  if (!isPublicRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)", "/(api|trpc)(.*)"],
};


 ##Testing Stripe Payments

Use the following test card credentials:

Card Number: 4242 4242 4242 4242
Exp Date: Any future date
CVC: Any 3 digits
ZIP: Any 5 digits




*Deployment*

Push your project to GitHub.

Import it into Vercel.

Set up environment variables under Settings → Environment Variables.

Deploy!
Your app will be live at:
https://your-vercel-domain.vercel.app

 AUTHOR
 Developed by: Idris Mutolib
Role: Frontend Developer
Focus: Next.js | React | Clerk | Stripe | Tailwind CSS
portfolio:https://taleeb-portfolio.vercel.app/