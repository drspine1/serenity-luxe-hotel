// import { SignUp } from "@clerk/nextjs";

// export default function Page() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#25003c] to-[#12001f]">
//       <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-lg">
//         <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
//       </div>
//     </div>
//   );
// }

"use client";
import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#25003c] via-[#36005a] to-[#12001f]">
      {/* Animated Waves */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
      </div>

      {/* Gradient Overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#25003c]/40 to-[#12001f]/80"></div>

      {/* SignUp Form */}
      <div className="relative z-10 bg-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-2xl w-[90%] max-w-md">
      <div className="-ml-5 md:ml-0">
           <SignUp path="/sign-up" routing="path" signInUrl="/sign-in"  />
      </div>
     
      </div>
    </div>
  );
}
