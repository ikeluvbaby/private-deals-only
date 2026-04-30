import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[oklch(0.10_0.005_60)] flex items-center justify-center">
      <div className="container text-center flex flex-col items-center gap-8 py-24">
        <div className="gold-divider w-12 mx-auto" />
        <span
          className="text-[oklch(0.72_0.12_75)]"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "6rem",
            fontWeight: 400,
            lineHeight: 1,
            opacity: 0.3,
          }}
        >
          404
        </span>
        <h1
          className="text-[oklch(0.93_0.012_75)]"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "2rem",
            fontWeight: 400,
          }}
        >
          Page Not Found
        </h1>
        <p
          className="text-[oklch(0.50_0.007_75)] max-w-sm leading-relaxed"
          style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem" }}
        >
          The page you are looking for does not exist or has been moved.
        </p>
        <Link href="/">
          <span className="btn-gold text-[0.75rem]">Return Home</span>
        </Link>
      </div>
    </div>
  );
}
