import {user_anonym, user_male, user_female} from './svgImages';

/**
 * If there is a connected user configures it's data to display
 * otherwise creates data to display an anonymous user
 * @param {object} user 
 * @returns {object} displayUser
 */
const createDisplayUser = (user) => {
  const displayUser = {
    first_name: 'Anonymous',
    family_name: '',
    gender: '',
    photo_url: user_anonym,
  };

  if (user && user.email) {
    displayUser.first_name = user.first_name;
    displayUser.family_name = user.family_name;
    
    if (user.photo_url) {
      displayUser.photo_url = user.photo_url;
    } else if (user.gender) {
      displayUser.gender = user.gender;
      displayUser.photo_url = user.gender === 'male' 
        ? user_male
        : user_female;
    }
  }

  return displayUser;
}

export default createDisplayUser;