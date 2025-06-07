import React, { useMemo } from 'react'
import { FetchEventFeedEntry } from '@pinou/api'
import { EventFeedRabbitItem } from './item'

interface Props {
  rabbits: FetchEventFeedEntry['rabbits']
}

export const EventFeedRabbitList: React.FC<Props> = ({ rabbits }) => {
  const list = useMemo(() => {
    return rabbits
      .filter(rabbit => rabbit.meal.ingredients.some(ingredient => ingredient.quantity > 0))
      .map(rabbit => <EventFeedRabbitItem key={rabbit.rabbit_id} rabbit={rabbit}/>)
  }, [rabbits])

  return list
}