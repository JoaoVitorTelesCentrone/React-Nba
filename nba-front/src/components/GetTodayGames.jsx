
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GetTodayGames = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const today = new Date().toISOString().split('T')[0];
        const response = await axios.get(`https://www.balldontlie.io/api/v1/games?start_date=${today}&end_date=${today}`);
        setGames(response.data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='flex flex-col'>
      <h2 className='text-3xl'>Today's NBA Games</h2>
      <ul>
        {games.map(game => (
          <li key={game.id}>{game.home_team.full_name} vs {game.visitor_team.full_name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GetTodayGames;
