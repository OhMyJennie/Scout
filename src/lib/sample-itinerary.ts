import type { Itinerary } from "@/types";

export const parisItinerary: Itinerary = {
  id: "itinerary-paris-midnight",
  city: "Paris",
  title: "Midnight in Paris & Jazz",
  subtitle: "One day, Left Bank — film locations, a jazz cellar, and a Hemingway detour.",
  stops: [
    {
      id: "stop-cafe-de-flore",
      time: "09:30",
      name: "Café de Flore",
      neighborhood: "Saint-Germain-des-Prés",
      brief: "Open the day where Sartre and Beauvoir wrote — read a few pages while the espresso lands.",
      deepDive:
        "Café de Flore was the unofficial office of postwar French intellectual life. Sartre and Beauvoir spent so many hours here that the staff used to take their phone messages.",
      anchors: [
        {
          type: "book",
          id: "book-moveable-feast",
          title: "A Moveable Feast",
          author: "Ernest Hemingway",
          excerpt:
            "If you are lucky enough to have lived in Paris as a young man, then wherever you go for the rest of your life, it stays with you, for Paris is a moveable feast.",
          goodreadsUrl: "https://www.goodreads.com/book/show/4472.A_Moveable_Feast",
          posterTone: "from-amber-100 to-amber-200",
        },
      ],
    },
    {
      id: "stop-shakespeare-co",
      time: "11:00",
      name: "Shakespeare and Company",
      neighborhood: "Latin Quarter",
      brief: "The English-language bookshop where the Lost Generation drifted through and slept in beds upstairs.",
      deepDive:
        "Sylvia Beach published Joyce's Ulysses out of the original storefront in 1922. The current shop, opened in 1951, kept the lineage alive — including the tradition of letting writers sleep upstairs in exchange for a few hours of work.",
      anchors: [
        {
          type: "book",
          id: "book-sun-also-rises",
          title: "The Sun Also Rises",
          author: "Ernest Hemingway",
          excerpt:
            "I can't stand it to think my life is going so fast and I'm not really living it.",
          goodreadsUrl: "https://www.goodreads.com/book/show/3876.The_Sun_Also_Rises",
          posterTone: "from-emerald-100 to-emerald-200",
        },
      ],
    },
    {
      id: "stop-pont-neuf",
      time: "13:30",
      name: "Pont Neuf",
      neighborhood: "Île de la Cité",
      brief: "Stand where Gil's Peugeot pulls up at midnight. The Seine still does the same trick.",
      deepDive:
        "Woody Allen shot the film's pivotal late-night sequences along the right-bank stretch of Pont Neuf. The bridge has carried writers across the Seine since 1607 — Hugo, Balzac, and de Beauvoir all walked this exact span.",
      anchors: [
        {
          type: "film",
          id: "film-midnight-paris",
          title: "Midnight in Paris",
          director: "Woody Allen",
          year: 2011,
          imdbRating: 7.7,
          reviewSource: "Letterboxd",
          reviewExcerpt:
            "A love letter to the City of Light — every frame is honey-lit and a little homesick for an era nobody actually lived through.",
          sceneNote: "Pont Neuf & Left Bank night drives",
          posterTone: "from-amber-200 to-orange-300",
        },
      ],
    },
    {
      id: "stop-musee-rodin",
      time: "15:30",
      name: "Musée Rodin Garden",
      neighborhood: "7th Arrondissement",
      brief: "Walk the rose garden with Piaf in your ears. The Thinker has heard this song before.",
      deepDive:
        "Rodin's old studio garden is one of the rare quiet pockets in central Paris — three hectares of rose beds, sculpture, and benches that face away from the street.",
      anchors: [
        {
          type: "music",
          id: "music-vie-en-rose",
          title: "La Vie en rose",
          artist: "Édith Piaf",
          album: "La Vie en rose (1947)",
          durationPreview: 30,
          spotifyUrl: "https://open.spotify.com/track/2uhBJgvD1QxQwKHa9LzVCn",
          posterTone: "from-rose-200 to-rose-300",
        },
      ],
    },
    {
      id: "stop-caveau-huchette",
      time: "21:00",
      name: "Le Caveau de la Huchette",
      neighborhood: "Latin Quarter",
      brief: "A 16th-century cellar that's been pouring jazz since 1949. Stay until your feet hurt.",
      deepDive:
        "The vaulted stone cellar dates to the 1500s and has hosted everyone from Sidney Bechet to Lionel Hampton. Damien Chazelle filmed La La Land's opening club scene here as a quiet tribute.",
      anchors: [
        {
          type: "music",
          id: "music-take-five",
          title: "Take Five",
          artist: "The Dave Brubeck Quartet",
          album: "Time Out (1959)",
          durationPreview: 30,
          spotifyUrl: "https://open.spotify.com/track/1YQWosTIljIvxAgHWTp7KP",
          posterTone: "from-rose-300 to-rose-500",
        },
      ],
    },
  ],
};
