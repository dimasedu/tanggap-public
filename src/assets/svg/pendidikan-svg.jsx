import { cn } from "@/lib/tailwind-utils";

export const PendidikanSVG = ({ className }) => {
  return (
    <svg
      viewBox="0 0 111 110"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-10 h-10 fill-[rgba(0,_163,_232,_1)]", className)}
    >
      <path d="M18.565 44L55.25 66L110.25 33L55.25 0L0.25 33H55.25V44H18.565ZM0.25 44V88L11.25 75.79V50.6L0.25 44ZM55.25 110L27.75 93.5L16.75 86.9V53.9L55.25 77L93.75 53.9V86.9L55.25 110Z" />
    </svg>
  );
};
