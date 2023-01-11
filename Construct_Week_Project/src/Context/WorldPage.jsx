import React, { useState } from "react";
import AllPages from "../Component/AllPages";
import styles from "./Context.module.css";

function WorldPage() {
  const [endPoint, setEndPoint] = useState({
    category: "world",
    country: "in",
  });

  return (
    <div className={styles.container}>
      <AllPages pageName={"World"} endPoint={endPoint} />
    </div>
  );
}

export default WorldPage;
