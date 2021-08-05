import React, { useContext } from "react";
import Card from "../UI/Card";
import Classes from "./MeetupItems.module.css";
import FavouritesContext from "../../Store/fav-context";

function MeetupItems(props) {
  const favctx = useContext(FavouritesContext);
  const itemIsfav = favctx.itemIsfav(props.id);

  const toggleFavHandler = () => {
    if (itemIsfav) {
      favctx.removeFav(props.id);
    } else {
      favctx.addFav({
        id: props.id,
        title: props.title,
        image: props.image,
        address: props.address,
        description: props.description,
      });
    }
  };

  return (
    <li className={Classes.item}>
      <Card>
        <div className={Classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={Classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={Classes.actions}>
          <button onClick={toggleFavHandler}>
            {itemIsfav ? 'Remove from Favourite' : 'Add to Favourites'}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItems;
