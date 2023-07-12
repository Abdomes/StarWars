import { useSelector } from 'react-redux';
import PeopleList from '@components/PeoplePage/PeopleList'
import styles from './FavoritePage.module.css';
import { useEffect, useState } from 'react';

const FavoritePage = () => {
   const storeDate = useSelector(state => state.favoriteReducer);
   const [people, setPeople] = useState([]);

   useEffect(() => {
      const arr = Object.entries(storeDate);
      if (arr.length) {
         const res = arr.map(item => {
            return {
               id: item[0],
               name: item[1].name,
               img: item[1].img
            }
         })
         setPeople(res);
      }
   }, []);

   return (
      <>
         <h1 className='header__text'>FavoritePage</h1>
         {people.length
            ? <PeopleList people={people} />
            : <h2 className={styles.comment}>No data</h2>
         }
      </>
   )
}

export default FavoritePage;