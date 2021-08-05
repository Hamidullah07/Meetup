import { createContext, useState } from 'react'

const FavouritesContext = createContext({
    favourites : [],
    totalfav : 0,
    addFav: (favMeetup) => {},
    removeFav : (meetupId)=> {},
    itemIsfav : (meetupId) => {}
});

export function FavContext(props) {

    const [ userFav, setUserFav ] = useState([]);

    const addFavHandler = (favMeetup) =>{
        setUserFav((preUserFav) =>{
            return preUserFav.concat(favMeetup);
        });
    }

    const removeFavHandler = (meetupId) =>{
        setUserFav(preUserFav =>{
            return preUserFav.filter(meetup => meetup.id !== meetupId );
        });
    }

    const itemIsFavHandler = (meetupId) =>{
        return userFav.some(meetup => meetup.id === meetupId);
    }

    const context = {
        favourites : userFav,
        totalfav : userFav.length,
        addFav : addFavHandler,
        removeFav : removeFavHandler,
        itemIsfav : itemIsFavHandler
    }

    return <FavouritesContext.Provider value={context}>
        {props.children}
    </FavouritesContext.Provider>
}

export default FavouritesContext