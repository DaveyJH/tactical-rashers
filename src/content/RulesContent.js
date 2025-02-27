// a collection of objects that contain the content for the rules page, allowing for non-technical users to easily add new sections to the rules page
const RulesContent = {
  description: {
    title: "What is Backgammon?",
    type: "para",
    content:
      "Backgammon is a classic board game for two players that combines strategy and luck. The goal is to move all your checkers around the board and bear them off (remove them from the board) before your opponent does.",
  },
  requirements: {
    title: "What you need?",
    type: "list",
    ordered: false,
    short: 4,
    content: [
      "Backgammon board",
      "15 white checkers",
      "15 black checkers",
      "Two dice",
      "Optionally, a doubling block...but we won't be using that here.",
      "Of course, you could track all this using paper and a pencil!",
    ],
    image: "https://res.cloudinary.com/daveyjh/image/upload/v1721591492/backgammon/default/all-pieces_l22tdu.webp",
    alt: "backgammon board with 15 checkers of each color, two dice and a doubling block",
  },
  board: {
    title: "The board",
    type: "para",
    content:
    "The backgammon board consists of 24 triangles called points. The points are grouped into four quadrants of six triangles each. The board is divided in half by the bar. Each player has a home board and an outer board, and the points are numbered from 1 to 24. For this site, white starts at 1 and moves to 24, while black starts at 24 and moves to 1.",
    image: "https://res.cloudinary.com/daveyjh/image/upload/v1721591939/backgammon/default/board_ni2mcz.webp",
    alt: "a backgammon board",
  },
  // requires image
  setup: {
    title: "Setting up",
    type: "list",
    ordered: true,
    short: 6,
    content: [
      "Each player starts with all 15 checkers on the board.",
      "Two white checkers on the 1-point.",
      "Five white checkers on the 12-point.",
      "Three white checkers on the 17-point.",
      "Five white checkers on the 19-point.",
      "Two black checkers on the 24-point.",
      "Five black checkers on the 13-point.",
      "Three black checkers on the 8-point.",
      "Five black checkers on the 6-point.",
    ],
    image: "https://res.cloudinary.com/daveyjh/image/upload/v1721591492/backgammon/default/start-board_u8hbed.webp",
    alt: "a backgammon board with all checkers in their starting positions",
  },
  rules: {
    title: "Rules",
    content: [
      "Usually, each player rolls one die to determine who goes first. The player with the higher roll goes first, using the dice rolled. If the players roll the same number, they must roll again.",
      "In this version, the player that initiated the game will always have the first move.",
      "On your turn, roll the dice and move your checkers accordingly.",
      "The number shown on each die is the number of points a single piece can move toward their home.",
      "You may move the same piece again in the same turn.",
      'You may move to any blank point, or to a point occupied by your own checkers, or you may "hit" an opponents single piece (a blot) in one point.',
      "A hit piece is placed on the bar in the center of the board and must be re-entered into the opponent's home board before they can make any other moves.",
      'Points with two or more checkers are "safe" and cannot be hit by your opponent.',
      "If you roll doubles, you get to move four times instead of two.",
      "You must move the full value of each die if possible.",
      "If you cannot move the full value of each die, you must move the highest value possible.",
      "Remember to describe your moves well in your game chat to avoid confusion.",
    ],
    image: "https://res.cloudinary.com/daveyjh/image/upload/v1721591492/backgammon/default/play_ogwlz4.webp",
    alt: "a backgammon board in the middle of a game",
  },
  winning: {
    title: "Winning",
    type: "list",
    content: [
      "Once all your checkers are in your home board, you can start bearing them off.",
      "To bear off a piece, you must roll the number needed to move it off the board (beyond the final point).",
      "If you roll a number higher than the highest point with a piece on it, you must move a piece from the next highest point.",
      "Remember! You must have all checkers in your home board to bear off any checkers.",
      "The first player to bear off all their checkers wins the game. Simple as that!",
    ],
    image: "https://res.cloudinary.com/daveyjh/image/upload/v1721591492/backgammon/default/winner-board_pt27us.webp",
    alt: "a backgammon board with all white checkers borne off and some black checkers in their home board",
  },
  tips: {
    title: "Tips",
    type: "list",
    ordered: false,
    content: [
      "Don't worry if you don't win right away. Each game helps you learn and improve.",
      "Try to block your opponent's checkers to prevent them from moving.",
      "Like chess, try to anticipate your opponent's moves.",
      "Use your dice rolls wisely to move your checkers strategically.",
      "Remember that luck plays a big role in backgammon, so don't get discouraged if you lose a few games.",
      "Enjoy the game and the company of your opponent. Every game is a chance to make new friends and memories.",
    ],
  },
};

export default RulesContent;
