import Link from 'next/link'
import FlowerIcon from '@/app/flower-icon'

export function Header() {
  return (
    <header className="p-8 font-[family-name:var(--font-merchant-copy)]">
      <div className="flex justify-between items-start">
        <div className="space-y-8">
            <Link href="/" className="flex items-center gap-2 text-xl mb-12">
              <span> <FlowerIcon /> </span>floguo : site under construction
            </Link>
            <h1 className="text-5xl leading-none">
              Independent designer
              <br />
              pursuing play with pixels.
            </h1>
        </div>

        <nav className="subheading space-y-1 text-sm">
          <Link href="https://twitter.com/floguo" className="block hover:underline">
            TWITTER
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
    </header>
  )
}

