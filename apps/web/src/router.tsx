import { createBrowserRouter } from 'react-router-dom'
import { PageMealCapture } from './page/capture-meal'
import { PageRabbit } from './page/rabbit'
import { Root } from './root'
import { PageIndex } from './page'
import { PageRabbitNote } from './page/rabbit/note'

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
        children: [
          {
            path: '',
            element: <PageRabbit />
          },
          {
            path: 'note',
            element: <PageRabbitNote />
          }
        ]
      },
    ]
  }
])
