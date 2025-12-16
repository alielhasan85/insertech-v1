'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X, Quote } from 'lucide-react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react';

type NavItem = { name: string; link: string };

type NavbarProps = {
  navItems: NavItem[];
  visible: boolean;
};

export default function Navbar() {
  const pathname = usePathname();

  const navItems: NavItem[] = useMemo(
    () => [
      { name: 'Home', link: '/' },
      { name: 'About', link: '/about' },
      { name: 'Services', link: '/services' },
      { name: 'Blog', link: '/blog' },
      { name: 'Contact', link: '/contact' },
    ],
    [],
  );

  // Use global scroll (simpler + reliable)
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setVisible(latest > 80);
  });

  // Optional: ensure mobile menu closes on route change (handled inside MobileNav too)
  useEffect(() => {
    // Next.js already scrolls to top by default on navigation,
    // but keep your previous behavior if you like:
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-x-0 top-2 z-200 w-full"
    >
      <DesktopNav visible={visible} navItems={navItems} />
      <MobileNav visible={visible} navItems={navItems} />
    </motion.div>
  );
}

function NavbarLogo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
          <path d="M3 9L21 9" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>
      <span className="text-sm font-semibold tracking-tight text-black/90">Insertech</span>
    </Link>
  );
}

const DesktopNav = ({ navItems, visible }: NavbarProps) => {
  const pathname = usePathname();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const activeIndex = useMemo(() => {
    const idx = navItems.findIndex((i) =>
      i.link === '/' ? pathname === '/' : pathname.startsWith(i.link),
    );
    return idx;
  }, [navItems, pathname]);

  return (
    <motion.div
      onMouseLeave={() => setHoveredIndex(null)}
      animate={{
        width: visible ? '62%' : '86%',
        backgroundColor: visible ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.55)',
        backdropFilter: visible ? 'blur(12px)' : 'blur(6px)',
        y: visible ? 4 : 0,
        boxShadow: visible ? '0 10px 30px -10px rgba(0,0,0,0.12)' : '0 0 0 transparent',
      }}
      initial={{ width: '86%', scale: 0.98, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.25, ease: 'easeInOut' }}
      className={cn(
        'relative z-[100] mx-auto hidden items-center justify-between rounded-full px-6 py-3 lg:flex',
      )}
    >
      <NavbarLogo />

      <motion.div
        className="flex flex-1 items-center justify-center space-x-1 text-sm"
        animate={{ justifyContent: visible ? 'flex-end' : 'center' }}
      >
        {navItems.map((item, idx) => {
          const isActive = idx === activeIndex;
          const isHighlighted = hoveredIndex === idx || (hoveredIndex === null && isActive);

          return (
            <motion.div
              key={`nav-item-${idx}`}
              onHoverStart={() => setHoveredIndex(idx)}
              className="relative"
            >
              <Link
                href={item.link}
                onClick={(e) => {
                  // If already on same page, just scroll top
                  const same =
                    item.link === '/' ? pathname === '/' : pathname.startsWith(item.link);
                  if (same) {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className={cn(
                  'relative px-3 py-1.5 transition-colors',
                  isActive ? 'text-blue-600' : 'text-black/90 hover:text-black',
                )}
              >
                <span className="relative z-10">{item.name}</span>

                {isHighlighted && (
                  <motion.div
                    layoutId="nav-hover"
                    className="absolute inset-0 rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      background:
                        'linear-gradient(145deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.25) 100%)',
                      boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
                    }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.08 }}
                  />
                )}
              </Link>
            </motion.div>
          );
        })}
      </motion.div>

      {/* CTA: full when top, compact when scrolled (keeps the pill vibe) */}
      <div className="ml-3 flex items-center">
        <AnimatePresence mode="popLayout" initial={false}>
          {!visible ? (
            <motion.div
              key="cta-full"
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 16 }}
              transition={{ duration: 0.18 }}
            >
              <Button asChild className="bg-blue-600 hover:bg-blue-700 shadow-sm">
                <Link href="/contact?service=quote" className="flex items-center">
                  <Quote className="mr-2 h-4 w-4" />
                  Get a Quote
                </Link>
              </Button>
            </motion.div>
          ) : (
            <motion.div
              key="cta-compact"
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 16 }}
              transition={{ duration: 0.18 }}
            >
              <Button asChild size="icon" variant="outline" className="rounded-full">
                <Link href="/contact?service=quote" aria-label="Get a Quote">
                  <Quote className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const MobileNav = ({ navItems, visible }: NavbarProps) => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <motion.div
      animate={{
        backdropFilter: 'blur(16px)',
        background: visible ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.82)',
        width: visible ? '88%' : '92%',
        y: visible ? 4 : 0,
        borderRadius: open ? 24 : 9999,
        padding: '12px 18px',
        boxShadow: visible ? '0 10px 30px -10px rgba(0,0,0,0.12)' : '0 0 0 transparent',
      }}
      initial={{ width: '92%', scale: 0.98, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.25, ease: 'easeInOut' }}
      className={cn(
        'relative z-50 mx-auto flex w-full max-w-[calc(100vw-1.25rem)] flex-col items-center justify-between lg:hidden',
      )}
    >
      <div className="flex w-full items-center justify-between">
        <NavbarLogo />
        <button
          onClick={() => setOpen((s) => !s)}
          className="rounded-full p-2 text-black/90"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="absolute inset-x-0 top-16 z-50 flex flex-col gap-3 rounded-2xl bg-white/95 px-6 py-6 shadow-lg backdrop-blur-xl"
          >
            {navItems.map((item, idx) => {
              const isActive =
                item.link === '/' ? pathname === '/' : pathname.startsWith(item.link);

              return (
                <motion.div
                  key={`m-link-${idx}`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0, transition: { delay: idx * 0.04 } }}
                  whileHover={{ x: 4 }}
                >
                  <Link
                    href={item.link}
                    onClick={(e) => {
                      if (isActive) {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                      setOpen(false);
                    }}
                    className={cn(
                      'block text-base font-medium transition-colors',
                      isActive ? 'text-blue-600' : 'text-black/90 hover:text-black',
                    )}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              );
            })}

            <div className="pt-2">
              <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                <Link href="/contact?service=quote" onClick={() => setOpen(false)}>
                  <span className="flex items-center justify-center">
                    <Quote className="mr-2 h-4 w-4" />
                    Get a Quote
                  </span>
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
