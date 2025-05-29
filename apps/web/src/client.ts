import { PinouClient } from '@pinou/client'

const BASE_URL = import.meta.env.PROD ? 'http://83.228.197.122/api' : 'http://localhost:3000'

export const client = new PinouClient(BASE_URL)
