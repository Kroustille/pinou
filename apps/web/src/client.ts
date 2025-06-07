import { PinouClient } from '@pinou/client'

const BASE_URL = import.meta.env.PROD ? import.meta.env.VITE_API_URL : 'http://localhost:3000'

export const client = new PinouClient(BASE_URL)
