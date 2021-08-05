import React,{ useRef } from "react";
import Card from "../UI/Card";
import Classes from "./NewMeetupForm.module.css";

function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();


  const submitHandler = (event) =>{
      event.preventDefault();

      const enteredTitle = titleInputRef.current.value;
      const enteredImage = imageInputRef.current.value;
      const enteredAddress = addressInputRef.current.value;
      const enteredDescription = descriptionInputRef.current.value;

      const meetupData = {
        title : enteredTitle,
        image : enteredImage,
        address : enteredAddress,
        description : enteredDescription
      };

      props.onAddMeetup(meetupData);
  }

  return (
    <Card>
      <form className={Classes.form} onSubmit={submitHandler}>
        <div className={Classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef}/>
        </div>
        <div className={Classes.control}>
          <label htmlFor="img">Meetup Image</label>
          <input type="url" required id="img" ref={imageInputRef}/>
        </div>
        <div className={Classes.control}>
          <label htmlFor="address">Meetup Address</label>
          <input type="text" required id="address" ref={addressInputRef}/>
        </div>
        <div className={Classes.control}>
          <label htmlFor="description">Description</label>
          <textarea id="description" required rows="5" ref={descriptionInputRef}></textarea>
        </div>
        <div className={Classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
