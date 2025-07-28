// Example data structure
const operators = [
  {
    id: 1,
    name: "Ash",
    role: "Attacker",
    speed: "3 speed",
    armor: "1 armor",
    ability: "Breaching Rounds",
    description: "Ash uses a launcher to fire explosive breaching rounds at walls.",
    imageUrl: "/images/operators/ash/ash_half.png",
    abilityImage: "/images/operators/ash/ash_ability.png",
    weapons: [
      {
        name: "R4-C",
        image: "/images/operators/ash/r4c.webp",
        sketchfabEmbedUrl: "https://sketchfab.com/models/11b5e53dfb98481e84760cc500abc868/embed?autostart=1&camera=0&preload=1&transparent=0"
      },
      { name: "G36C", image: "/images/operators/ash/g36c.webp", model: "/models/g36c.glb" }
    ]
  }
  // Add more operators as needed
];

export default operators;
