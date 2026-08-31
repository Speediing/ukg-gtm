import Image from "next/image";

export function BrandLockup({
  size = "md",
}: {
  size?: "sm" | "md" | "lg";
}) {
  return (
    <div className={`brand-lockup brand-lockup-${size}`}>
      <Image
        src="/brand/ukg-wordmark.svg"
        alt="UKG"
        className="brand-ukg"
        width={336}
        height={134}
      />
      <span className="brand-times" aria-hidden>
        ×
      </span>
      <Image
        src="/brand/spacexai.svg"
        alt="SpaceXAI"
        className="brand-sxai"
        width={1294}
        height={158}
      />
    </div>
  );
}
