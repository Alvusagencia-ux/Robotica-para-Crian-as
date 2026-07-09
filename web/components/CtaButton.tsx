import { HOTMART_CHECKOUT_URL } from '@/lib/config'

export function CtaButton({ label }: { label: string }) {
  return (
    <a
      href={HOTMART_CHECKOUT_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block rounded-full bg-[#E8A33D] px-8 py-4 text-lg font-black text-[#062F2C] shadow-[0_18px_36px_rgba(232,163,61,0.32)] transition hover:-translate-y-0.5 hover:bg-[#F0B456] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F6F1E7]"
    >
      {label}
    </a>
  )
}
