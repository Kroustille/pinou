import React, { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { EventFeedMealIngredientList } from '../../module/event-feed/meal/ingredient/list'
import { useRabbitEventFeedQuery } from '../../module/event-feed/query'
import { useRabbitsQuery } from '../../module/rabbit-profile/query'

export const PageRabbitEventFeed: React.FC = () => {
  const { rabbit_id } = useParams();
  const { data: rabbits } = useRabbitsQuery()
  const { data: feed } = useRabbitEventFeedQuery(rabbit_id)

  const rabbit = useMemo(() => {
    return (rabbits ?? []).find(r => r.id === rabbit_id)
  }, [rabbits, rabbit_id])


  if (!feed || !rabbits) {
    return <>Loading...</>
  }

  return <>
    <h1>{rabbit?.name}</h1>
    {feed.entries.map((entry) => {
      return <article key={entry.date}>
        <h2>{new Date(entry.date).toLocaleDateString()}</h2>
        <h3>Repas</h3>
        <EventFeedMealIngredientList meal={entry.meal}/>
      </article>
    })}
  </>
}
