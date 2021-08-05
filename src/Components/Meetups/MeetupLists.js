import React from "react";
import MeetupItems from "./MeetupItems";
import Classes from "./MeetupLists.module.css";

function MeetupLists(props) {
  return (
    <ul className={Classes.list}>
      {props.meetups.map((meetupdata) => (
        <MeetupItems
          key={meetupdata.id}
          id={meetupdata.id}
          image={meetupdata.image}
          title={meetupdata.title}
          address={meetupdata.address}
          description={meetupdata.description}
        />
      ))}
    </ul>
  )
}

export default MeetupLists;
