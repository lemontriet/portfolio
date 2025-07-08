'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import Image from 'next/image'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="relative flex-shrink-0">
          <div className="absolute left-0 top-0 -z-10 flex h-24 w-24 items-center justify-center rounded-full border border-dashed border-zinc-300 bg-zinc-100 dark:border-zinc-600 dark:bg-zinc-800"></div>
          <Link href="/" className="z-10 cursor-pointer">
            <Image
              src="/IMG_2052.jpg"
              alt="Triet Minh Le"
              width={1600}
              height={800}
              className="pointer-events-none h-24 w-24 rounded-full object-cover"
              priority
            />
          </Link>
        </div>
        
        <div>
          <Link href="/" className="font-medium text-black dark:text-white text-xl">
            Triet Minh Le
          </Link>
          <TextEffect
            as="p"
            preset="fade"
            per="char"
            className="text-zinc-600 dark:text-zinc-500 text-lg"
            delay={0.5}
          >
            Aspiring Software Engineer
          </TextEffect>
          <TextEffect
            as="p"
            preset="fade"
            per="char"
            className="text-zinc-600 dark:text-zinc-500 text-base"
            delay={0.8}
          >
            Looking for opportunities to explore and grow
          </TextEffect>
        </div>
      </div>
    </header>
  )
}