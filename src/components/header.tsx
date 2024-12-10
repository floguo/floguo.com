import Link from 'next/link'
import FlowerIcon from '@/app/icon'

export function Header() {
  return (
    <header className="p-8 font-[family-name:var(--font-merchant-copy)]">
      <div className="flex justify-between items-start">
        <div className="space-y-8">
          <div className="space-y-2">
            <Link href="/" className="flex items-center gap-2 text-xl mb-8">
              <span><FlowerIcon /></span>floguo
            </Link>
            <h1 className="text-5xl leading-none">
              Independent designer
              <br />
              pursuing play with pixels.
            </h1>
          </div>
        </div>

        <nav className="subheading space-y-1 text-sm">
          <Link href="https://twitter.com/floguo" className="block hover:underline">
            X (TWITTER)
          </Link>
          <Link href="mailto:hello@floguo.com" className="block hover:underline">
            EMAIL
          </Link>
          <Link href="https://github.com/floguo" className="block hover:underline">
            GITHUB
          </Link>
          <Link href="https://read.cv/floguo" className="block hover:underline">
            CV
          </Link>
        </nav>
      </div>

      {/* <div className="mt-8">
        <FlowerIcon className="w-48 h-auto" />
      </div> */}
    </header>
  )
}

