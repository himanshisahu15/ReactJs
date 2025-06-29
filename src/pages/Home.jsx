import { useEffect, useState } from 'react';
import styles from './Home.module.css';
import {useParams} from 'react-router-dom'

const Home = () => {

  const [users, setUsers] = useState([]); 
  
  useEffect(() => {
    fetch('https://picsum.photos/v2/list')
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error('Error fetching images:', err));
  }, []);

  return (
    <div className={styles.container}>
      <h2>Image Gallery from API</h2>
      <div className={styles.grid}>
        {users.length > 0 ? (
          users.map((user) => (
            <div className={styles.card} key={user.id}>
              <img
                src={user.download_url}
                alt={user.author}
                className={styles.image}
              />
              <h4>{user.author}</h4>
            </div>
          ))
        ) : (
          <p>Loading images...</p>
        )}
      </div>
    </div>
  );
};

export default Home;
