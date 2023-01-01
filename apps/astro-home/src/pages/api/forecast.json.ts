import type { APIRoute } from 'astro'

const APP_ID = import.meta.env.OPEN_WEATHER_APP_ID
const ENDPOINT_PREFIX = 'http://api.openweathermap.org/data/2.5'
const MISSING_REQUIRED = 'Missing required city_id query parameter.'

const jsonHeaders = {
  'Content-Type': 'application/json',
}

export const get: APIRoute = async ({ url }) => {
  const cityId = url.searchParams.get('city_id') ?? ''
  if (!cityId) {
    return new Response(
      JSON.stringify({
        code: 'Bad Request',
        message: MISSING_REQUIRED,
      }),
      {
        status: 400,
        headers: { ...jsonHeaders },
      }
    )
  } else {
    const API_FORECAST_MSG = `${ENDPOINT_PREFIX}/forecast?id=${cityId}&units=imperial&appid=*****`
    const API_FORECAST = `${ENDPOINT_PREFIX}/forecast?id=${cityId}&units=imperial&appid=${APP_ID}`
    try {
      const fetchPromise = await fetch(API_FORECAST)
      if (fetchPromise.status !== 200) {
        return new Response(
          JSON.stringify({
            code: 'Unexpected Server Error',
            error: `Forecast for ${API_FORECAST_MSG} not available.`,
          }),
          {
            status: fetchPromise.status,
            headers: { ...jsonHeaders },
          }
        )
      }
      const buf = await fetchPromise.arrayBuffer()
      return new Response(buf, {
        status: 200,
        headers: { ...jsonHeaders },
      })
    } catch (reason: any) {
      if (
        // consider if errno is better
        // consider if hostname is useful off error or not
        reason?.cause?.code === 'ENOTFOUND' &&
        reason?.cause?.syscall === 'getaddrinfo'
      ) {
        return new Response(
          JSON.stringify({
            code: 'Bad Gateway',
            message: `${ENDPOINT_PREFIX} not available.`,
          }),
          {
            // TODO 502 or 504 which makes more sense here?
            status: 502,
            headers: { ...jsonHeaders },
          }
        )
      } else {
        return new Response(
          JSON.stringify({
            code: 'Internal Server Error',
            error: `Feed for ${API_FORECAST_MSG} not available.`,
          }),
          {
            status: 500,
            headers: { ...jsonHeaders },
          }
        )
      }
    }
  }
}
