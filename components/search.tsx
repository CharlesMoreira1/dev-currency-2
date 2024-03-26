'use client'
import { useRouter } from 'next/navigation'
import React, { FormEvent, useState } from 'react'
import { BiSearch } from 'react-icons/bi'

const Search = () => {
  const [inputValue, setInputValue] = useState('')
  const router = useRouter()

  function handleSearch(e: FormEvent) {
    e.preventDefault()
    if (inputValue === '') return

    router.push(`/detail/${inputValue}`)
  }

  return (
    <form className="flex w-full gap-3.5" onClick={handleSearch}>
      <input
        className="h-11 w-full rounded border px-2 text-black outline-none"
        placeholder="Digite o símbolo da moeda: BTC..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit">
        <BiSearch size={30} />
      </button>
    </form>
  )
}

export default Search
