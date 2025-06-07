import React, { useMemo } from 'react'
import { useRabbitsQuery } from '../../rabbit-profile/query'
import { FetchEventFeedEntry } from '@pinou/api'
import { EventFeedMealIngredientList } from '../meal/ingredient/list'
import { Link } from 'react-router-dom'

interface Props {
  rabbit: FetchEventFeedEntry['rabbits'][number]
}

export const EventFeedRabbitItem: React.FC<Props> = ({ rabbit }) => {
  const { data: rabbit_details } = useRabbitsQuery()
  const rabbit_detail = useMemo(() => {
    return rabbit_details?.find(detail => detail.id === rabbit.rabbit_id)
  }, [rabbit_details, rabbit]) 

  return <article>
    <h3><Link to={`/rabbit/${rabbit.rabbit_id}`}>{rabbit_detail?.name}</Link></h3>
    <h4>Repas</h4>
    <EventFeedMealIngredientList meal={rabbit.meal} />
  </article>
}