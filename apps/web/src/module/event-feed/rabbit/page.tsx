import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetRabbitEventFeedQuery } from '../infra/query'
import { useFoodsQuery } from '../../food-store/infra/query'

export const EventFeedRabbitPage: React.FC = () => {
  const { rabbit_id } = useParams();
  const { data: foods } = useFoodsQuery()
  const { data: feed } = useGetRabbitEventFeedQuery(rabbit_id)

  if (!feed) {
    return <>Loading...</>
  }

  return <>
    {feed.entries.map((entry) => {
      return <div key={entry.date}>
        {entry.date}
        <ul>
          {entry.meal.ingredients.map(ingredient => {
            const food = foods?.find(f => f.id === ingredient.food_id)
            return <li key={ingredient.food_id}>{food?.name ?? 'Not found'} {ingredient.quantity}g</li>
          })}
        </ul>
      </div>
    })}
  </>
}
