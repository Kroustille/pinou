import { createBrowserRouter } from 'react-router-dom'
import { MealCapturePage } from './module/meal-capture/page'
import { EventFeedRabbitPage } from './module/event-feed/rabbit/page'
import { Root } from './root'
import { IndexPage } from './page'

export const router = createBrowserRouter([
{
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <IndexPage />
      },
      {
        path: 'capture-meal',
        element: <MealCapturePage />
      },
      {
        path: 'rabbit/:rabbit_id',
        element: <EventFeedRabbitPage />
      }
    ]
  }
])
