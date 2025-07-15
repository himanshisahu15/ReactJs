import { useEffect, useState } from 'react';
import styles from './Home.module.css';
import {useParams} from 'react-router-dom'
import { useMemo } from 'react';

const Home = () => {

  const [users, setUsers] = useState([]); 
  const [search,setSearch]=useState('');
  
const {authorName}=useParams();


//for api fetching lazy loading
  useEffect(() => {
    fetch('https://picsum.photos/v2/list')
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error('Error fetching images:', err));
  }, []);

  //useparam
useEffect(()=>{
  if(authorName){
    setSearch(authorName);
  }
},[authorName]);


//usememo
const filterUser=useMemo(()=>{
  console.log("Filtering user");
  return users.filter((user)=>
    user.author.toLowerCase().includes(search.toLowerCase())
  );
},[search,users]);

  return (
    <div className={styles.container}>
      <h2>Image Gallery from API</h2>

      <input
        type="text"
        placeholder="Search by author..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={styles.search}
      />

      <div className={styles.grid}>
        {users.length > 0 ? (
          filterUser.map((user) => (
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
