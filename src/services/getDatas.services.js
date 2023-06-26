import aplClubs from "../assets/data/leagues/apl.json" assert { type: "json" };
import aplMatches from "../assets/data/matches/apl.json" assert { type: "json" };
import { matchesResultOption } from "../constants/matches.constants.js";
import getClubsStat from "./matches.services.js";

export function getTable() {
  const clubStats = getClubsStat(aplMatches.matches, matchesResultOption);

  return Object.keys(clubStats)
    .map((clubName) => {
      const { code } = aplClubs.clubs.find(({ name }) => name === clubName);

      return {
        name: clubName,
        image: code,
        stats: clubStats[clubName],
      };
    })
    .sort((a, b) => b.stats.pts - a.stats.pts);
}
