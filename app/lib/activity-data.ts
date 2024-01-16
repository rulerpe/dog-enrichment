export interface ActivityType {
  id: number;
  name: string;
  slug: string;
  cover: string;
  images: string[];
  description: string;
  keywords: string;
  instruction: string;
  type: string;
  level: number;
  easy: string;
  easyImages: string[];
  hard: string;
  hardImages: string[];
  mix: string;
}

const Activities: ActivityType[] = [
  {
    id: 1,
    name: "Rolled Towel",
    slug: "rolled-towel",
    cover: "/images/activities/rolled-towel-3.jpg",
    images: [
      "/images/activities/rolled-towel-1.jpg",
      "/images/activities/rolled-towel-2.jpg",
      "/images/activities/rolled-towel-3.jpg",
    ],
    description:
      "Enhance your pup's problem-solving skills with this simple yet engaging Rolled Towel Puzzle, perfect for mental stimulation.",
    keywords:
      "Dog enrichment ideas, mental stimulation for dogs, interactive dog games.",
    instruction:
      "Spread kibble and aromatic treats on a long bath towel. Fold the towel, then roll it up. Encourage your pup to sniff out the treats.",
    type: "paper",
    level: 1,
    easy: "Use a smaller towel and fold it only once for simpler access.",
    easyImages: [
      "/images/activities/rolled-towel-easy-1.jpg",
      "/images/activities/rolled-towel-easy-2.jpg",
    ],
    hard: "Incorporate less fragrant treats and more kibble.",
    hardImages: [],
    mix: "Introduce a toilet paper roll tube into the towel roll for added complexity.",
  },
  {
    id: 2,
    name: "Snuffle Mat",
    slug: "snuffle-mat",
    cover: "/images/activities/snuffle-mat-1.jpg",
    images: ["/images/activities/snuffle-mat-1.jpg"],
    description:
      "The Snuffle Mat Treasure Hunt is an excellent way for your dog to use their natural sniffing instincts, providing sensory and mental enrichment.",
    keywords: "Dog sensory play, snuffle mat games, nose work for dogs.",
    instruction:
      "Conceal treats and kibble within a snuffle mat, letting your pup use their sense of smell to discover the goodies.",
    type: "paper",
    level: 2,
    easy: "Grind dry treats or cookies into a powder and sprinkle it on top for easier tracking.",
    easyImages: [
      "/images/activities/snuffle-mat-easy-1.jpg",
      "/images/activities/snuffle-mat-easy-2.jpg",
    ],
    hard: "Hide the treats more thoroughly within the mat.",
    hardImages: [],
    mix: "Place the mat inside a box to increase the challenge.",
  },
  {
    id: 3,
    name: "Scatter Feeding",
    slug: "scatter-feeding",
    cover: "/images/activities/scatter-feeding.jpg",
    images: ["/images/activities/scatter-feeding.jpg"],
    description:
      "Mimic natural foraging behavior with the Scatter Feeding Challenge, a delightful way to engage your dog's hunting instincts.",
    keywords:
      "Natural dog feeding, canine hunting instincts, outdoor dog activities.",
    instruction:
      "Scatter kibble and treats on the ground, similar to feeding chickens, and let your pup sniff and find all the food.",
    type: "paper",
    level: 1,
    easy: "Spread the food on a hard floor indoors or on pavement or concrete outdoors, making it more visible for your pup",
    easyImages: [],
    hard: "Scatter the food on carpet indoors or on grass or in bushes outdoors, making it harder to spot.",
    hardImages: [],
    mix: "",
  },
  {
    id: 4,
    name: "Cardboard Box",
    slug: "cardboard-box",
    cover: "/images/activities/cardboard-box-1.jpg",
    images: [
      "/images/activities/cardboard-box-1.jpg",
      "/images/activities/cardboard-box-2.jpg",
    ],
    description:
      "Utilize everyday items like cardboard boxes to create a fun and budget-friendly enrichment puzzle for your furry friend.",
    keywords:
      "DIY dog games, cardboard puzzles for dogs, homemade dog enrichment.",
    instruction:
      "Fill a box with paper and scatter kibble or treats inside, encouraging your pup to sniff them out.",
    type: "paper",
    level: 2,
    easy: "Poke holes around the box to let the scent escape more easily and open the lid.",
    easyImages: ["/images/activities/cardboard-box-easy-1.jpg"],
    hard: "Place the box inside another box, potentially creating multiple layers, and close the lid without any holes.",
    hardImages: ["/images/activities/cardboard-box-hard-1.jpg"],
    mix: "Include a toilet paper roll tube or a snuffle mat inside the box for added fun.",
  },
  {
    id: 5,
    name: "Licking Mat",
    slug: "licking-mat",
    cover: "/images/activities/licking-mat.jpg",
    images: ["/images/activities/licking-mat.jpg"],
    description:
      "A Licking Mat can be a soothing and mentally engaging activity for dogs, perfect for reducing anxiety and boredom.",
    keywords:
      "Licking mat for dogs, calming dog activities, dog anxiety relief games.",
    instruction:
      "Spread peanut butter or other sticky food onto the mat, which usually comes with a suction cup to adhere to a wall.",
    type: "paper",
    level: 1,
    easy: "Attach some kibble or dry treats onto the mat.",
    easyImages: ["/images/activities/licking-mat-easy.jpg"],
    hard: "Freeze the mat for a longer-lasting licking challenge, or place it in a hard-to-reach location like behind a chair or desk.",
    hardImages: [],
    mix: "Combine this with a hide-and-seek element.",
  },
  {
    id: 6,
    name: "Hide and Seek",
    slug: "hide-seek",
    cover: "/images/activities/hide-seek-2.jpg",
    images: [
      "/images/activities/hide-seek-1.jpg",
      "/images/activities/hide-seek-2.jpg",
    ],
    description:
      "The classic Hide and Seek game is a fantastic way to engage your dog's mind and body, suitable for both indoor and outdoor play.",
    keywords:
      "Indoor dog games, outdoor dog enrichment, interactive play for dogs.",
    instruction:
      "Conceal treats in small containers and hide them throughout the house or yard for your pup to find.",
    type: "paper",
    level: 3,
    easy: "Start within a confined space, like a small room.",
    easyImages: [],
    hard: "Expand the search area to the entire house or yard.",
    hardImages: [],
    mix: "Hide boxes or toilet roll tubes instead of just treats.",
  },
  {
    id: 7,
    name: "Toilet Roll Tube",
    slug: "toilet-roll-tube",
    cover: "/images/activities/toilet-roll-tube-3.jpg",
    images: [
      "/images/activities/toilet-roll-tube-1.jpg",
      "/images/activities/toilet-roll-tube-2.jpg",
      "/images/activities/toilet-roll-tube-3.jpg",
    ],
    description:
      "Recycle toilet roll tubes into an eco-friendly puzzle that challenges your dog's problem-solving skills.",
    keywords:
      "Eco-friendly dog toys, dog puzzle games, recycling for dog enrichment.",
    instruction:
      "Fold one end of a tube, stuff it with food and treats, then fold the other side.",
    type: "paper",
    level: 2,
    easy: "Poke a few holes in the middle to let the smell escape, and use more aromatic treats to entice your dog.",
    easyImages: ["/images/activities/toilet-roll-tube-easy.jpg"],
    hard: "Pack the tube with paper to increase difficulty, or wrap it in larger packaging paper.",
    hardImages: [
      "/images/activities/toilet-roll-tube-hard-1.jpg",
      "/images/activities/toilet-roll-tube-hard-2.jpg",
    ],
    mix: "Place the tube in a box or hide it in a room for an added search element.",
  },
  {
    id: 8,
    name: "Frozen Kong",
    slug: "frozen-kong",
    cover: "/images/activities/frozen-kong-2.jpg",
    images: [
      "/images/activities/frozen-kong-1.jpg",
      "/images/activities/frozen-kong-2.jpg",
    ],
    description:
      "Keep your dog occupied with a Frozen Kong Treat, an ideal solution for prolonged engagement and slow feeding.",
    keywords:
      "Long-lasting dog treats, Kong filling ideas, slow feeding for dogs.",
    instruction:
      "Soak kibble in your pup's favorite broth. Seal the small hole of the Kong with soaked kibble or plastic wrap, then fill the Kong with a mix of soaked kibble and treats. Freeze for at least 2 hours.",
    type: "paper",
    level: 3,
    easy: "Insert a long treat, like a cookie or jerky, so it sticks out of the Kong.",
    easyImages: [],
    hard: "Use less treat and more kibble for a longer-lasting challenge.",
    hardImages: [],
    mix: "",
  },
  {
    id: 9,
    name: "Cupcake Pan",
    slug: "cupcake-pan",
    cover: "/images/activities/cupcake-pan-2.jpg",
    images: [
      "/images/activities/cupcake-pan-1.jpg",
      "/images/activities/cupcake-pan-2.jpg",
    ],
    description:
      "Turn mealtime into an exciting adventure with the Cupcake Pan Game, encouraging dogs to explore and discover their food.",
    keywords:
      "Interactive dog feeding, food puzzles for dogs, mental stimulation activities.",
    instruction:
      "Distribute kibble or treats into each cup of a cupcake pan, then cover each cup with a tennis ball. Encourage your dog to discover and remove the balls to find the treats.",
    type: "paper",
    level: 3,
    easy: "Leave a few cups uncovered, making it simpler for your dog to find some treats without effort.",
    easyImages: ["/images/activities/cupcake-pan-1.jpg"],
    hard: "Cover the cups with objects that are more challenging to remove, such as smaller balls, to increase the difficulty.",
    hardImages: ["/images/activities/cupcake-pan-hard.jpg"],
    mix: "Place the entire cupcake pan inside a box, adding an extra layer of discovery and exploration.",
  },
];

export default Activities;
