import React, {useContext} from "react";
import { Link } from "react-router-dom";
import Classes from './MainNavigation.module.css';
import FavouritesContext from "../../Store/fav-context";

function MainNavigation() {

  const favctx = useContext(FavouritesContext);

  return (
    <header className={Classes.header}>
      <div className={Classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new_meetups">Add Meetups</Link>
          </li>
          <li>
            <Link to="/fav">
              My Favourites 
              <span className={Classes.badge}>{favctx.totalfav}</span>
              </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
