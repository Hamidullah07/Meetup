import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import MeetupLists from "../Components/Meetups/MeetupLists";
import Classes from "./AllMeetups.module.css";
import NewForm from "../Components/Meetups/NewMeetupForm";

function AllMeetups() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const addHandler = () => {
    setIsOpen(true);
  };

  const cancelHandler = () => {
    setIsOpen(false);
  };

  const history = useHistory();



  useEffect(() => {
    setIsLoading(true);
    fetch("https://meetup-hami-default-rtdb.firebaseio.com/meetups.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }

        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  const addMeetupHandler = (meetupData) => {
    fetch("https://meetup-hami-default-rtdb.firebaseio.com/meetups.json", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      history.push("/");
    });
  };

  if (isLoading) {
    <section>
      <p>...Loading...</p>
    </section>;
  }
  return (
    <section>
      <h1>All Meetups</h1>
      {isOpen ? (
        <span>
          <button className={Classes.cancel_btn} onClick={cancelHandler}>
            Cancel
          </button>
        </span>
      ) : (
        <button className={Classes.actions} onClick={addHandler}>
          Add New Post
        </button>
      )}
      {isOpen && <NewForm onAddMeetup={addMeetupHandler} />}
      <MeetupLists meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetups;
