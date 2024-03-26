import { getCoin } from '@/app/api/coins'

const DetailPage = async ({ params }: { params: { id: string } }) => {
  const coin = await getCoin(params.id)
  return (
    <div className="px-3.5 py-0">
      <h1 className="text mb-3.5 text-center text-xl font-bold">
        {coin?.name}
      </h1>
      <p className="text mb-3.5 text-center">{coin?.symbol}</p>

      <section className="mx-auto my-6 max-w-96 space-y-4 rounded-lg bg-gray-900 p-6">
        <p className="flex w-full justify-between">
          <strong>Preço: </strong> {coin?.formatedPrice}
        </p>
        <p className="flex w-full justify-between">
          <strong>Maior preço 24h:</strong> {coin?.formatedHighprice}
        </p>
        <p className="flex w-full justify-between">
          <strong>Menor preço 24h:</strong> {coin?.formatedLowprice}
        </p>
        <p className="flex w-full justify-between">
          <strong>Delta 24h: </strong>
          <span
            className={
              coin?.delta_24h.includes('-') ? 'text-red-500' : 'text-green-400'
            }
          >
            {coin?.delta_24h}
          </span>
        </p>
        <p className="flex w-full justify-between">
          <strong>Valor mercado:</strong> {coin?.formatedMarket}
        </p>
      </section>
    </div>
  )
}

export default DetailPage
