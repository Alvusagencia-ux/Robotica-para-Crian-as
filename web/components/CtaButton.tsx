import { HOTMART_CHECKOUT_URL } from '@/lib/config'

export function CtaButton({ label }: { label: string }) {
  return (
    <a
      href={HOTMART_CHECKOUT_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block rounded-full bg-emerald-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-emerald-700"
    >
      {label}
    </a>
  )
}
