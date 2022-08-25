import styles from './Context.module.css' ; 
import { getData } from '../Api/api';
import { useEffect, useState } from 'react';
import AllPages from '../Component/AllPages';



function Home() {
    const [endPoint,setEndPoint] = useState({category:"top",country:'in,us,jp,ae,gb'})

    
    
    return(    
        <div className={styles.container}>
            <AllPages endPoint = {endPoint}/>
        </div>
    )

}
export default Home ; 