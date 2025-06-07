import { createBrowserRouter } from 'react-router-dom'
import { PageMealCapture } from './page/capture-meal'
import { PageRabbitEventFeed } from './page/rabbit/event-feed'
import { Root } from './root'
import { PageIndex } from './page'

export const router = createBrowserRouter([
{
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <PageIndex />
      },
      {
        path: 'capture-meal',
        element: <PageMealCapture />
      },
      {
        path: 'rabbit/:rabbit_id',
        element: <PageRabbitEventFeed />
      }
    ]
  }
])
