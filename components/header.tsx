import React from 'react'
import logoImg from '../public/logo.svg'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="flex h-32 w-full items-center justify-center">
      <div>
        <Link href="/">
          <Image src={logoImg} alt="" />
        </Link>
      </div>
    </header>
  )
}

export default Header
