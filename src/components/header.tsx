import Link from 'next/link'
// import { FlowerIcon } from './icons'

export function Header() {
  return (
    <header className="p-8 font-[family-name:var(--font-merchant-copy)]">
      <div className="flex justify-between items-start">
        <div className="space-y-8">
          <div className="space-y-2">
            <Link href="/" className="flex items-center gap-2 text-xl">
              <span className="text-blue-600">❋</span> FLOGUO
            </Link>
            <p className="text-sm">
              Independent designer
              <br />
              pursuing play with pixels.
            </p>
          </div>
          
          <nav className="space-y-4">
            <div>
              <div className="text-xs text-gray-500 mb-1">CURRENTLY</div>
              <p className="text-sm">
                Running an independent design practice in Toronto.
                <br />
                Studying information & design at UofT's iSchool.
                <br />
                Seeking Summer 2025 design roles.
              </p>
            </div>
            
            <div>
              <div className="text-xs text-gray-500 mb-1">PREVIOUSLY</div>
              <p className="text-sm">
                Produced a rap video to fight brain drain.
                <br />
                Left Waterloo engineering to do crypto things.
                <br />
                Designed dashboards for COVID-19 serology data.
              </p>
            </div>
            
            <div>
              <div className="text-xs text-gray-500 mb-1">CONTACT</div>
              <p className="text-sm">
                Have an interesting idea? Please get in touch :)
              </p>
            </div>
          </nav>
        </div>

        <nav className="space-y-1 text-sm">
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

