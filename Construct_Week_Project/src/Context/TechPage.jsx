import React from 'react'
import { useState } from 'react';
import AllPages from '../Component/AllPages';
import styles from './Context.module.css' ; 

function TechPage() {
  const [endPoint,setEndPoint] = useState({category:"technology",country:'in'})

  return (
    <div className={styles.container}>
      <AllPages pageName={endPoint.category} endPoint={endPoint}/>
    </div>
  )
}

export default TechPage