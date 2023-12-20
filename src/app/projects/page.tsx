import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export default function Projects() {
  return (
    <div>
        <h1 className="text-3xl font-extrabold uppercase">Projects of Things</h1>

        <Link href="/projects/calculator">
          <div className="max-w-sm rounded overflow-hidden shadow-lg transform transition duration-500 hover:scale-105">
            <Image className="w-full" src="/Calc.jpeg" height={500} width={500} alt="Abstract picture of a calculator" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Calculator App</div>
              <p className="text-gray-700 text-base">
                Under Construction
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#calculator</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#firstproject</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#practice</span>
            </div>
          </div>
        </Link>
        <Link href="/projects/DnD">
          <div className="max-w-sm rounded overflow-hidden shadow-lg transform transition duration-500 hover:scale-105">
            <Image className="w-full" src="/DnD.jpg" height={500} width={500} alt="Abstract picture of a calculator" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Dungeons & Dragons</div>
              <p className="text-gray-700 text-base">
                Coming Soon.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#DnD</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#bigproject</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#advancedpractice</span>
            </div>
          </div>
        </Link>
        
    </div>
  )
}
