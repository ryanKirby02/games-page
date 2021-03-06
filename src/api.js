
//BASE URL
const base_url = 'https://api.rawg.io/api/';
//key
const key = process.env.React_App_API_KEY

//Getting the date for varuables in the urls
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) return `0${month}`;
  else return month;
};
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) return `0${day}`;
  else return day;
};
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//building the second part of the urls to add onto the base
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10&key=${key}`;
const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10&key=${key}`;
const new_games = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10`

//creating url functions and exporting them

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`
export const newGamesURL = () => `${base_url}${new_games}`
export const gameDetailsURL = (id) => `${base_url}games/${id}`
export const gameScreenshotsURL = (id) => `${base_url}games/${id}/screenshots?key=${key}`

//custom search url
export const searchedGameURL = (game_name) => `${base_url}games?search=${game_name}`
