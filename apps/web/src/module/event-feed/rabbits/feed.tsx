import React from 'react'
import { EventFeedRabbitList } from '../rabbit/list'
import { useEventFeedQuery } from '../query'

export const EventFeedRabbitsFeed: React.FC = () => {
  const { data: feed } = useEventFeedQuery()
  if (!feed) {
    return <>Loading...</>
  }

  return <>
    <h1>Derniers évènements</h1>
    {feed.entries.map((entry) => {
      return <div key={entry.date}>
        <h2>{new Date(entry.date).toLocaleDateString()}</h2>
        <EventFeedRabbitList rabbits={entry.rabbits} />
      </div>
    })}
  </>
}