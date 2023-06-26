import { matchesResultOption } from "../constants/matches.constants.js";

export function calcClubStat(clubStat = {}, scores = [], matchResult) {
  const defaultStat = {
    ...clubStat,
    mp: clubStat.mp + 1,
    gf: clubStat.gf + scores[0],
    ga: clubStat.ga + scores[1],
  };

  defaultStat.gd = defaultStat.gf - defaultStat.ga;

  switch (matchResult) {
    case matchesResultOption.WIN:
      defaultStat.w = clubStat.w + 1;
      defaultStat.pts = clubStat.pts + 3;
      break;
    case matchesResultOption.LOSE:
      defaultStat.l = clubStat.l + 1;
      break;
    case matchesResultOption.DRAW:
      defaultStat.d = clubStat.d + 1;
      defaultStat.pts = clubStat.pts + 1;
      break;
  }

  return defaultStat;
}
