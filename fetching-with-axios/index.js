const axios = require('axios');

const getAllHarryPotterCharacters = async () => {
  try {
    const response = await axios.get(
      'https://hp-api.onrender.com/api/characters'
    );
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

// getAllHarryPotterCharacters();

const getCharactersInHouse = async house => {
  try {
    const response = await axios.get(
      `https://hp-api.onrender.com/api/characters/house/${house}`
    );
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

getCharactersInHouse('slytherin');
