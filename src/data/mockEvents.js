export const mockWildfireEvents = [
  // California Wildfires
  {
    id: "EONET_6195",
    title: "Fairview Fire",
    description: "Major wildfire in Riverside County, California - 44,207 acres burned",
    link: "https://inciweb.nwcg.gov/incident/8307/",
    categories: [{ id: 8, title: "Wildfires" }],
    sources: [{ id: "InciWeb", url: "https://inciweb.nwcg.gov/incident/8307/" }],
    geometries: [{
      magnitudeValue: 44207,
      magnitudeUnit: "acres",
      date: "2022-09-05T00:00:00Z",
      type: "Point",
      coordinates: [-117.2, 33.7]
    }]
  },
  {
    id: "EONET_6196",
    title: "McKinney Fire",
    description: "Large wildfire near Yreka, California - 60,138 acres burned",
    link: "https://inciweb.nwcg.gov/incident/8316/",
    categories: [{ id: 8, title: "Wildfires" }],
    sources: [{ id: "InciWeb", url: "https://inciweb.nwcg.gov/incident/8316/" }],
    geometries: [{
      magnitudeValue: 60138,
      magnitudeUnit: "acres",
      date: "2022-07-29T00:00:00Z",
      type: "Point",
      coordinates: [-122.5, 41.8]
    }]
  },
  {
    id: "EONET_6197",
    title: "Oak Fire",
    description: "Destructive wildfire in Mariposa County, California - 19,244 acres",
    link: "https://inciweb.nwcg.gov/incident/8323/",
    categories: [{ id: 8, title: "Wildfires" }],
    sources: [{ id: "InciWeb", url: "https://inciweb.nwcg.gov/incident/8323/" }],
    geometries: [{
      magnitudeValue: 19244,
      magnitudeUnit: "acres",
      date: "2022-07-22T00:00:00Z",
      type: "Point",
      coordinates: [-119.7, 37.5]
    }]
  },
  {
    id: "EONET_6198",
    title: "Camp Fire",
    description: "Historic wildfire in Paradise, California - 153,336 acres",
    link: "https://inciweb.nwcg.gov/incident/6250/",
    categories: [{ id: 8, title: "Wildfires" }],
    sources: [{ id: "InciWeb", url: "https://inciweb.nwcg.gov/incident/6250/" }],
    geometries: [{
      magnitudeValue: 153336,
      magnitudeUnit: "acres",
      date: "2018-11-08T00:00:00Z",
      type: "Point",
      coordinates: [-121.4, 39.8]
    }]
  },
  {
    id: "EONET_6199", 
    title: "Thomas Fire",
    description: "Massive wildfire in Ventura County, California - 281,893 acres",
    link: "https://inciweb.nwcg.gov/incident/5670/",
    categories: [{ id: 8, title: "Wildfires" }],
    sources: [{ id: "InciWeb", url: "https://inciweb.nwcg.gov/incident/5670/" }],
    geometries: [{
      magnitudeValue: 281893,
      magnitudeUnit: "acres", 
      date: "2017-12-04T00:00:00Z",
      type: "Point",
      coordinates: [-119.3, 34.4]
    }]
  },

  // Oregon Wildfires
  {
    id: "EONET_6200",
    title: "Bootleg Fire",
    description: "Large wildfire in Klamath County, Oregon - 413,717 acres",
    link: "https://inciweb.nwcg.gov/incident/7609/",
    categories: [{ id: 8, title: "Wildfires" }],
    sources: [{ id: "InciWeb", url: "https://inciweb.nwcg.gov/incident/7609/" }],
    geometries: [{
      magnitudeValue: 413717,
      magnitudeUnit: "acres",
      date: "2021-07-06T00:00:00Z",
      type: "Point",
      coordinates: [-121.3, 42.6]
    }]
  },
  {
    id: "EONET_6201",
    title: "Dixie Fire", 
    description: "Record-breaking wildfire in Northern California - 963,309 acres",
    link: "https://inciweb.nwcg.gov/incident/7690/",
    categories: [{ id: 8, title: "Wildfires" }],
    sources: [{ id: "InciWeb", url: "https://inciweb.nwcg.gov/incident/7690/" }],
    geometries: [{
      magnitudeValue: 963309,
      magnitudeUnit: "acres",
      date: "2021-07-13T00:00:00Z",
      type: "Point",
      coordinates: [-121.1, 40.0]
    }]
  },

  // Washington Wildfires
  {
    id: "EONET_6202",
    title: "Cedar Creek Fire",
    description: "Wildfire in Washington State - 102,386 acres",
    link: "https://inciweb.nwcg.gov/incident/8340/",
    categories: [{ id: 8, title: "Wildfires" }],
    sources: [{ id: "InciWeb", url: "https://inciweb.nwcg.gov/incident/8340/" }],
    geometries: [{
      magnitudeValue: 102386,
      magnitudeUnit: "acres",
      date: "2022-08-01T00:00:00Z",
      type: "Point",
      coordinates: [-121.7, 46.8]
    }]
  },

  // Colorado Wildfires
  {
    id: "EONET_6203",
    title: "Marshall Fire",
    description: "Urban wildfire in Boulder County, Colorado - 6,026 acres",
    link: "https://inciweb.nwcg.gov/incident/7926/",
    categories: [{ id: 8, title: "Wildfires" }],
    sources: [{ id: "InciWeb", url: "https://inciweb.nwcg.gov/incident/7926/" }],
    geometries: [{
      magnitudeValue: 6026,
      magnitudeUnit: "acres",
      date: "2021-12-30T00:00:00Z",
      type: "Point",
      coordinates: [-105.2, 39.9]
    }]
  },
  {
    id: "EONET_6204",
    title: "Cameron Peak Fire",
    description: "Large wildfire in Larimer County, Colorado - 208,913 acres",
    link: "https://inciweb.nwcg.gov/incident/6964/",
    categories: [{ id: 8, title: "Wildfires" }],
    sources: [{ id: "InciWeb", url: "https://inciweb.nwcg.gov/incident/6964/" }],
    geometries: [{
      magnitudeValue: 208913,
      magnitudeUnit: "acres",
      date: "2020-08-13T00:00:00Z",
      type: "Point",
      coordinates: [-105.6, 40.6]
    }]
  },

  // Arizona Wildfires
  {
    id: "EONET_6205",
    title: "Telegraph Fire",
    description: "Wildfire in Gila County, Arizona - 180,757 acres",
    link: "https://inciweb.nwcg.gov/incident/7490/",
    categories: [{ id: 8, title: "Wildfires" }],
    sources: [{ id: "InciWeb", url: "https://inciweb.nwcg.gov/incident/7490/" }],
    geometries: [{
      magnitudeValue: 180757,
      magnitudeUnit: "acres", 
      date: "2021-06-04T00:00:00Z",
      type: "Point",
      coordinates: [-110.8, 33.3]
    }]
  },

  // Montana Wildfires
  {
    id: "EONET_6206",
    title: "Lick Creek Fire",
    description: "Wildfire in Glacier National Park, Montana - 33,908 acres",
    link: "https://inciweb.nwcg.gov/incident/8350/",
    categories: [{ id: 8, title: "Wildfires" }],
    sources: [{ id: "InciWeb", url: "https://inciweb.nwcg.gov/incident/8350/" }],
    geometries: [{
      magnitudeValue: 33908,
      magnitudeUnit: "acres",
      date: "2022-07-29T00:00:00Z",
      type: "Point",
      coordinates: [-113.8, 48.5]
    }]
  },

  // Texas Wildfires
  {
    id: "EONET_6207",
    title: "Eastland Complex",
    description: "Multiple wildfires in Eastland County, Texas - 54,015 acres",
    link: "https://inciweb.nwcg.gov/incident/8020/",
    categories: [{ id: 8, title: "Wildfires" }],
    sources: [{ id: "InciWeb", url: "https://inciweb.nwcg.gov/incident/8020/" }],
    geometries: [{
      magnitudeValue: 54015,
      magnitudeUnit: "acres",
      date: "2022-03-17T00:00:00Z",
      type: "Point",
      coordinates: [-98.8, 32.4]
    }]
  },

  // New Mexico Wildfires
  {
    id: "EONET_6208",
    title: "Hermits Peak/Calf Canyon Fire",
    description: "Largest wildfire in New Mexico history - 341,735 acres",
    link: "https://inciweb.nwcg.gov/incident/8049/",
    categories: [{ id: 8, title: "Wildfires" }],
    sources: [{ id: "InciWeb", url: "https://inciweb.nwcg.gov/incident/8049/" }],
    geometries: [{
      magnitudeValue: 341735,
      magnitudeUnit: "acres",
      date: "2022-04-06T00:00:00Z",
      type: "Point",
      coordinates: [-105.4, 35.7]
    }]
  },

  // Alaska Wildfires
  {
    id: "EONET_6209",
    title: "East Fork Fire",
    description: "Remote wildfire in Alaska - 125,000 acres",
    link: "https://inciweb.nwcg.gov/incident/8195/",
    categories: [{ id: 8, title: "Wildfires" }],
    sources: [{ id: "InciWeb", url: "https://inciweb.nwcg.gov/incident/8195/" }],
    geometries: [{
      magnitudeValue: 125000,
      magnitudeUnit: "acres",
      date: "2022-06-07T00:00:00Z",
      type: "Point",
      coordinates: [-150.2, 63.1]
    }]
  }
];
