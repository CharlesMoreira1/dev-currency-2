'use client'
import Link from 'next/link'
import React from 'react'

const DetailNotFoundPage = () => {
  return (
    <div className="mx-auto my-0 flex max-w-5xl flex-col items-center justify-center">
      <h1 className="mb-3.5 mt-6 text-2xl font-bold text-white">
        Página não encontrada
      </h1>
      <Link
        className="rounded-lg bg-gray-400 px-6 py-2 transition-all duration-500 hover:scale-105 hover:bg-blue-400"
        href="/"
      >
        Acessar cripto moedas
      </Link>
    </div>
  )
}

export default DetailNotFoundPage
