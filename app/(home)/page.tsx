import Search from '@/components/search'
import Link from 'next/link'
import { getCoinList } from '../api/coins'

const HomePage = async () => {
  const coins = await getCoinList()
  return (
    <main className="mx-3.5">
      <Search />

      <table className="m-0 w-full table-fixed border-separate border-spacing-x-0 border-spacing-y-3.5 p-0 max-sm:border-0">
        <thead className="max-sm:absolute max-sm:-m-0.5 max-sm:h-0.5 max-sm:w-0.5 max-sm:overflow-hidden max-sm:border-none max-sm:p-0">
          <tr className="max-sm:mb-3.5 max-sm:block max-sm:border-b-2 max-sm:border-b-gray-400">
            <th
              className="font-size p-3.5 text-center text-sm uppercase tracking-widest text-white"
              scope="col"
            >
              Moeda
            </th>
            <th
              className="font-size p-3.5 text-center text-sm uppercase tracking-widest text-white"
              scope="col"
            >
              Valor mercado
            </th>
            <th
              className="font-size p-3.5 text-center text-sm uppercase tracking-widest text-white"
              scope="col"
            >
              Preço
            </th>
            <th
              className="font-size p-3.5 text-center text-sm uppercase tracking-widest text-white"
              scope="col"
            >
              Volume
            </th>
          </tr>
        </thead>

        <tbody>
          {coins.map((coin) => (
            <tr
              key={coin.name}
              className="bg-gray-800 max-sm:before:float-start"
            >
              <td
                data-label="Moeda"
                className="p-3.5 text-center
      text-gray-400 max-sm:mb-3.5 max-sm:block max-sm:border-b-2 max-sm:border-solid max-sm:border-b-gray-700 max-sm:text-right max-sm:text-sm max-sm:before:float-start max-sm:before:uppercase max-sm:before:text-white max-sm:before:content-[attr(data-label)]"
              >
                <Link
                  className="transition duration-500 hover:text-blue-400"
                  href={`/detail/${coin.symbol}`}
                >
                  <span className="mr-1 text-lg font-bold text-white">
                    {coin.name}
                  </span>
                  | {coin.symbol}
                </Link>
              </td>
              <td
                data-label="Mercado"
                className="p-3.5 text-center text-gray-400 max-sm:mb-3.5 max-sm:block max-sm:border-b-2 max-sm:border-solid max-sm:border-b-gray-700 max-sm:text-right max-sm:text-sm max-sm:before:float-start max-sm:before:uppercase max-sm:before:text-white max-sm:before:content-[attr(data-label)]"
              >
                {coin.formatedMarket}
              </td>
              <td
                data-label="Preço"
                className="p-3.5 text-center text-gray-400 max-sm:mb-3.5 max-sm:block max-sm:border-b-2 max-sm:border-solid max-sm:border-b-gray-700 max-sm:text-right max-sm:text-sm max-sm:before:float-start max-sm:before:uppercase max-sm:before:text-white max-sm:before:content-[attr(data-label)]"
              >
                {coin.formatedPrice}
              </td>
              <td
                data-label="Volume"
                className="p-3.5 text-center max-sm:block max-sm:border-b-2 max-sm:text-right max-sm:text-sm  max-sm:before:float-start max-sm:before:uppercase max-sm:before:text-white max-sm:before:content-[attr(data-label)]"
              >
                <span
                  className={
                    coin?.delta_24h.includes('-')
                      ? 'text-red-500'
                      : 'text-green-400'
                  }
                >
                  {coin.delta_24h}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}

export default HomePage
