import Image from "next/image";

export function OgeroLogo() {
  return (
    <div className="relative w-24 h-12 sm:w-24 sm:h-16 overflow-hidden">
      <Image
        src="/logos/ogero-logo.png"
        alt="Ogero"
        fill
        className="object-contain"
      />
    </div>
  );
}

export function CarrefourLogo() {
  return (
    <div className="relative w-24 h-12 sm:w-16 sm:h-16 overflow-hidden">
      <Image
        src="/logos/carrefour-logo.png"
        alt="Carrefour"
        fill
        className="object-contain"
      />
    </div>
  );
}

export function MaliksLogo() {
  return (
    <div className="relative w-24 h-12 sm:w-16 sm:h-16 overflow-hidden">
      <Image
        src="/logos/maliks-bookstore-logo.png"
        alt="Malik's Bookstore"
        fill
        className="object-contain"
      />
    </div>
  );
}

export function VirginLogo() {
  return (
    <div className="relative w-24 h-12 sm:w-16 sm:h-16 overflow-hidden">
      <Image
        src="/logos/virgin-megastore-logo.png"
        alt="Virgin Megastore"
        fill
        className="object-contain"
      />
    </div>
  );
}
