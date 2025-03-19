import React from "react";
import OrchidCard from "./OrchidCard"; 
import styles from "./Orchid.module.css";

const OrchidList = ({ orchids, onDetailClick }) => { 
  console.log("onDetailClick function:", onDetailClick); 

  return (
    <div className={styles["orchids-list"]}>
      {orchids.map((orchid) => (
        <OrchidCard key={orchid.id} orchid={orchid} onDetailClick={onDetailClick} />
      ))}
    </div>
  );
};

export default OrchidList;
