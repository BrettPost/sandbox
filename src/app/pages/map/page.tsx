'use client'
import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'
import MapBox from '../../Components/Maps/MapBox'

export default function Map() {
  return (
    <div>
        <div className='flex'>
          <MapBox />
        </div>
    </div>
  )
}
