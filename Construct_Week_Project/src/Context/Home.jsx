import styles from "./Context.module.css";
import { useState } from "react";
import AllPages from "../Component/AllPages";

function Home() {
  const [endPoint, setEndPoint] = useState({
    category: "politics,business,entertainment,world,top",
    country: "in",
  });

  // useEffect(()=>{
  //     getData2()
  //     .then(res=>{
  //         console.log(res)
  //     })
  // })

  return (
    <div className={styles.container}>
      <AllPages pageName={"The Big"} endPoint={endPoint} />
    </div>
  );
}
export default Home;
