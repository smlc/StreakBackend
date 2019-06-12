const env = require("../constantes");
const winston = require("winston");
const fetch = require("node-fetch");

const getFromAPI = endpoint => cb =>
  fetch(`${env.RIOT_API_URL}${endpoint}`, {
    headers: {
      "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
      "X-Riot-Token": `${env.RIOT_API_KEY}`,
      "Accept-Language": "fr,fr-FR;q=0.8,en-US;q=0.5,en;q=0.3"
    }
  })
    .then(res => res.json())
    .then(data => cb(data))
    .catch(err => {
      winston.log("error", err.message);
    });

/**
 * Search for the given summoner his last win streak of at least 3 games
 * @param {string} summonerName
 */
const searchLastWinStreak = function(summonerName) {};

/**
 * Get the summoner id of the given summoner name
 * @param {*} summonerName
 * @returns {string} summonerId
 */
const getSummonerIdByName = function(summonerName) {
  const getSummonerId = getFromAPI(
    `/lol/summoner/v4/summoners/by-name/${summonerName}`
  );
    
   getSummonerId(data => {
    winston.log("info", data.puuid);
  });
};
/**
 * Get the games of the given summoner id
 * @param {*} summonerId
 */
var getGamesBySummonerId = function(summonerId) {
  return "id";
};
