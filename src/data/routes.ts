export interface TestRoute {
  number: number;
  summary: string;
  keyRoads: string[];
  manoeuvres: string[];
}

export const testRoutes: TestRoute[] = [
  { number: 1, summary: "Cannock Street to Barkbythorpe Road via Humberstone Lane, returning through Thurmaston Lane.", keyRoads: ["Cannock Street", "Humberstone Lane", "Barkbythorpe Road", "Thurmaston Lane"], manoeuvres: ["Angle start", "Roundabout navigation", "Independent driving (follow signs to Peterborough A47)"] },
  { number: 2, summary: "East through Humberstone to Scraptoft Lane, returning via Uppingham Road.", keyRoads: ["Cannock Street", "Humberstone Lane", "Scraptoft Lane", "Uppingham Road"], manoeuvres: ["Hill start", "Parallel parking", "Mini roundabout navigation"] },
  { number: 3, summary: "North through Thurmaston Lane to Barkby Road, returning via Melton Road.", keyRoads: ["Cannock Street", "Thurmaston Lane", "Barkby Road", "Melton Road"], manoeuvres: ["Reverse exercise", "Roundabout exits", "Speed change practice"] },
  { number: 4, summary: "Via Victoria Road East to Uppingham Road, loop through residential areas.", keyRoads: ["Cannock Street", "Victoria Road East", "Uppingham Road", "Gipsy Lane"], manoeuvres: ["Bay parking", "Independent driving (follow signs to City Centre)"] },
  { number: 5, summary: "Through Humberstone to Scraptoft, returning via Gipsy Lane and Wenlock Way.", keyRoads: ["Cannock Street", "Humberstone Lane", "Scraptoft Lane", "Gipsy Lane", "Wenlock Way"], manoeuvres: ["Angle start", "Parallel parking", "Traffic light junctions"] },
  { number: 6, summary: "North along Thurmaston Road to Hamilton area, returning via Sandhills Avenue.", keyRoads: ["Cannock Street", "Thurmaston Road", "Hamilton area", "Sandhills Avenue"], manoeuvres: ["Hill start", "Roundabout navigation", "Independent driving (follow signs to Ring Road North)"] },
  { number: 7, summary: "East through Uppingham Road to Bushby, returning via Scraptoft Lane.", keyRoads: ["Cannock Street", "Uppingham Road", "Bushby", "Scraptoft Lane"], manoeuvres: ["Reverse exercise", "Speed change areas", "Mini roundabout navigation"] },
  { number: 8, summary: "Via Humberstone Lane to Barkbythorpe, loop through Thurmaston village.", keyRoads: ["Cannock Street", "Humberstone Lane", "Barkbythorpe Road", "Thurmaston village"], manoeuvres: ["Bay parking", "Independent driving (follow signs to Peterborough A47)", "Roundabout exits"] },
  { number: 9, summary: "South through Victoria Road East to Evington area, returning via Uppingham Road.", keyRoads: ["Cannock Street", "Victoria Road East", "Evington Road", "Uppingham Road"], manoeuvres: ["Parallel parking", "Traffic light junctions", "Angle start"] },
  { number: 10, summary: "North to Thurmaston, east to Hamilton, returning through Humberstone.", keyRoads: ["Cannock Street", "Thurmaston Lane", "Hamilton", "Humberstone Lane"], manoeuvres: ["Hill start", "Reverse exercise", "Independent driving (follow signs to City Centre)"] },
  { number: 11, summary: "Through Gipsy Lane to Scraptoft, returning via Uppingham Road.", keyRoads: ["Cannock Street", "Gipsy Lane", "Scraptoft", "Uppingham Road"], manoeuvres: ["Bay parking", "Roundabout navigation", "Speed change practice"] },
  { number: 12, summary: "Via Melton Road north to Thurmaston, returning through Barkbythorpe.", keyRoads: ["Cannock Street", "Melton Road", "Thurmaston", "Barkbythorpe Road"], manoeuvres: ["Angle start", "Mini roundabout navigation", "Independent driving (follow signs to Ring Road North)"] },
  { number: 13, summary: "East via Humberstone to Keyham Lane, returning through Scraptoft Lane.", keyRoads: ["Cannock Street", "Humberstone Lane", "Keyham Lane", "Scraptoft Lane"], manoeuvres: ["Parallel parking", "Traffic light junctions", "Roundabout exits"] },
  { number: 14, summary: "Through Uppingham Road to Stoughton, returning via Evington.", keyRoads: ["Cannock Street", "Uppingham Road", "Stoughton", "Evington Road"], manoeuvres: ["Reverse exercise", "Hill start", "Independent driving"] },
  { number: 15, summary: "North via Thurmaston Lane, east to Barkby, returning through Hamilton.", keyRoads: ["Cannock Street", "Thurmaston Lane", "Barkby", "Hamilton"], manoeuvres: ["Bay parking", "Angle start", "Roundabout navigation"] },
  { number: 16, summary: "Via Victoria Road East and Gipsy Lane to Scraptoft, returning via Wenlock Way.", keyRoads: ["Cannock Street", "Victoria Road East", "Gipsy Lane", "Scraptoft", "Wenlock Way"], manoeuvres: ["Parallel parking", "Speed change practice", "Independent driving (follow signs to Peterborough A47)"] },
];
