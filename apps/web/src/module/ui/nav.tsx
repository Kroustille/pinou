import React, { useMemo } from 'react'
import { useRabbitsQuery } from '../rabbit-profile/query'
import { Link } from 'react-router-dom'

export const Nav: React.FC = () => {
  const { data: rabbits } = useRabbitsQuery()

  const rabbits_list = useMemo(() => {
    return (rabbits ??[]).map(rabbit => <li key={rabbit.id}>
        <Link to={`/rabbit/${rabbit.id}`}>
          {rabbit.name}
        </Link>
      </li>
    )
  }, [rabbits])
  
  return <nav>
    <h1>Navigation</h1>
    <h2>Lapins</h2>
    <ul>{rabbits_list}</ul>

    <h2>Fonctionnalités</h2>
    <ul>
      <li><Link to="/">Accueil</Link></li>
      <li><Link to="/capture-meal">Enregistrer un repas</Link></li>
    </ul>
  </nav>
}