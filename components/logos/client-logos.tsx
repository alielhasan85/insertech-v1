import Image from "next/image"

export function OgeroLogo() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative w-8 h-8 overflow-hidden">
        <Image src="/logos/ogero-logo.png" alt="Ogero" fill className="object-contain" />
      </div>
      <span className="font-bold">Ogero</span>
    </div>
  )
}

export function CarrefourLogo() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative w-8 h-8 overflow-hidden">
        <Image src="/logos/carrefour-logo.png" alt="Carrefour" fill className="object-contain" />
      </div>
      <span className="font-bold">Carrefour</span>
    </div>
  )
}

export function MaliksLogo() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative w-8 h-8 overflow-hidden">
        <Image src="/logos/maliks-bookstore-logo.png" alt="Malik's Bookstore" fill className="object-contain" />
      </div>
      <span className="font-bold">Malik&apos;s</span>
    </div>
  )
}

export function VirginLogo() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative w-8 h-8 overflow-hidden">
        <Image src="/logos/virgin-megastore-logo.png" alt="Virgin Megastore" fill className="object-contain" />
      </div>
      <span className="font-bold">Virgin</span>
    </div>
  )
}
