



"use client";

import { Suspense } from "react";
import PaymentSuccessContent from "../../components/paymentComponents/paymentSuccess";

export default function PaymentSuccessPage() {
  return (
    <Suspense fallback={<p className="text-center mt-10">Loading payment details...</p>}>
      <PaymentSuccessContent />
    </Suspense>
  );
}
