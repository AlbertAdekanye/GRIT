import { useEffect, useState } from "react";
import {
  CheckCircle2,
  LoaderCircle,
  XCircle,
} from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import useCart from "../hooks/useCart";
import { formatCurrency } from "../utils/formatCurrency";

const PaymentVerify = () => {
  const [searchParams] = useSearchParams();
  const reference =
    searchParams.get("reference") ||
    searchParams.get("trxref");

  const { clearCart } = useCart();

  const [status, setStatus] = useState("loading");
  const [payment, setPayment] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const verifyPayment = async () => {
      if (!reference) {
        setStatus("error");
        setMessage("No payment reference was provided.");
        return;
      }

      try {
        const response = await fetch(
          `/api/verify-payment?reference=${encodeURIComponent(
            reference,
          )}`,
        );

        const result = await response.json();

        if (!response.ok || !result.verified) {
          throw new Error(
            result.message || "Payment verification failed.",
          );
        }

        setPayment(result);
        setStatus("success");
        clearCart();
      } catch (error) {
        setStatus("error");
        setMessage(error.message);
      }
    };

    verifyPayment();
  }, [reference]);

  if (status === "loading") {
    return (
      <main className="flex min-h-[70vh] flex-col items-center justify-center bg-grit-cream px-5 text-center">
        <LoaderCircle
          size={40}
          className="animate-spin text-grit-red"
        />

        <h1 className="mt-6 font-display text-6xl uppercase">
          Verifying payment
        </h1>

        <p className="mt-3 text-sm text-grit-earth">
          Please don’t close this page.
        </p>
      </main>
    );
  }

  if (status === "error") {
    return (
      <main className="flex min-h-[70vh] flex-col items-center justify-center bg-grit-cream px-5 text-center">
        <XCircle size={48} className="text-grit-red" />

        <h1 className="mt-6 font-display text-7xl uppercase">
          Payment unconfirmed
        </h1>

        <p className="mt-4 max-w-md text-sm leading-7 text-grit-earth">
          {message}
        </p>

        <Link
          to="/checkout"
          className="mt-8 bg-grit-black px-7 py-4 text-xs font-bold tracking-[0.16em] text-white uppercase"
        >
          Return to checkout
        </Link>
      </main>
    );
  }

  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-grit-cream px-5 py-16">
      <div className="w-full max-w-xl bg-grit-black p-7 text-center text-grit-cream sm:p-12">
        <CheckCircle2
          size={52}
          className="mx-auto text-grit-tan"
        />

        <p className="mt-7 text-xs font-semibold tracking-[0.3em] text-grit-tan uppercase">
          Payment confirmed
        </p>

        <h1 className="mt-4 font-display text-7xl leading-none uppercase">
          Thank you
        </h1>

        <p className="mt-5 text-sm leading-7 text-white/60">
          Your GRIT order has been received. We’ll contact you with delivery
          updates.
        </p>

        <div className="mt-8 space-y-4 border-y border-white/15 py-6 text-sm">
          <div className="flex justify-between gap-5">
            <span className="text-white/50">Reference</span>
            <span className="break-all text-right">
              {payment.reference}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-white/50">Amount paid</span>
            <span>{formatCurrency(payment.amount)}</span>
          </div>
        </div>

        <Link
          to="/shop"
          className="mt-8 inline-flex bg-grit-cream px-7 py-4 text-xs font-bold tracking-[0.16em] text-grit-black uppercase transition-colors hover:bg-grit-tan"
        >
          Continue shopping
        </Link>
      </div>
    </main>
  );
};

export default PaymentVerify;