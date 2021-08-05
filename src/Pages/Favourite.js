import React, { useContext } from "react";
import MeetupLists from "../Components/Meetups/MeetupLists";
import FavouritesContext from "../Store/fav-context";

function Favourite() {
  const favctx = useContext(FavouritesContext);

  let content;
  if (favctx.totalfav === 0) {
    content = <p>You got no favourites yet. Start adding some ?</p>;
  } else {
   content = <MeetupLists meetups={favctx.favourites} />;
  }
  return (
    <section>
      <h1>My Favourites</h1>
      {content}
    </section>
  );
}

export default Favourite;
