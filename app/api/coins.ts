type CoinsProps = {
  name: string
  delta_24h: string
  low_24h?: string
  high_24h?: string
  price: string
  symbol: string
  volume_24h: string
  market_cap: string
  formatedPrice: string
  formatedMarket: string
  formatedLowprice?: string
  formatedHighprice?: string
}

type DataProps = {
  coins: CoinsProps[]
}

const baseUrl: string = 'https://sujeitoprogramador.com/api-cripto/'
const key: string = 'e688f8a72d8faf7f'

export async function getCoinList(): Promise<CoinsProps[]> {
  return fetch(`${baseUrl}?key=${key}`, { cache: 'no-store' })
    .then((response) => response.json())
    .then((data: DataProps) => {
      const coinsData = data.coins.slice(0, 15)
      const price = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      })
      const formatResult = coinsData.map((item) => ({
        ...item,
        formatedPrice: price.format(Number(item.price)),
        formatedMarket: price.format(Number(item.market_cap)),
      }))
      return formatResult
    })
}

export async function getCoin(symbol: string): Promise<CoinsProps> {
  return fetch(`${baseUrl}/coin/?key=${key}&symbol=${symbol}`, {
    cache: 'no-store',
  })
    .then((response) => response.json())
    .then((data: CoinsProps) => {
      const price = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      })
      const formatResult = {
        ...data,
        formatedPrice: price.format(Number(data.price)),
        formatedMarket: price.format(Number(data.market_cap)),
        formatedLowprice: price.format(Number(data.low_24h)),
        formatedHighprice: price.format(Number(data.high_24h)),
      }
      return formatResult
    })
}
