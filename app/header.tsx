'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import Image from 'next/image'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="relative flex-shrink-0">
          <div className="absolute left-0 top-0 -z-10 flex h-16 w-16 items-center justify-center rounded-full border border-dashed border-zinc-300 bg-zinc-100 dark:border-zinc-600 dark:bg-zinc-800"></div>
          
          {/* Profile photo */}
          <Link href="/" className="z-10 cursor-pointer">
            <Image
              src={process.env.NEXT_PUBLIC_PROFILE_PHOTO_URL || "/IMG_2052.jpg"}
              alt="Triet Minh Le"
              width={300}
              height={300}
              className="pointer-events-none h-16 w-16 rounded-full object-cover"
              priority
            />
          </Link>
        </div>
        
        <div>
          <Link href="/" className="font-medium text-black dark:text-white">
            Triet Minh Le
          </Link>
          <TextEffect
            as="p"
            preset="fade"
            per="char"
            className="text-zinc-600 dark:text-zinc-500"
            delay={0.5}
          >
            Aspiring Software Engineer
          </TextEffect>
          <TextEffect
            as="p"
            preset="fade"
            per="char"
            className="text-zinc-300 dark:text-zinc-500"
            delay={0.8}
          >
            Looking for a meaningful way to combine passion and development
          </TextEffect>
        </div>
      </div>
    </header>
  )
}