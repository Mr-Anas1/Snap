import blackJeans from "../Assets/Images/black-jeans.png";
import blackOrangeTshirt from "../Assets/Images/black-orange-t-shirt.png";
import blackTshirt from "../Assets/Images/black-t-shirt.png";
import blueJeans from "../Assets/Images/blue-jeans.png";
import checkedShirt from "../Assets/Images/checked-shirt.png";
import greenShirt from "../Assets/Images/green-shirt.png";
import jeansTrouser from "../Assets/Images/jeans-trouser.png";
import orangeTshirt from "../Assets/Images/orange-t-shirt.png";

const topSellingDress = [
  {
    id: 1,
    heading: "Top Selling",
    title: "Black T-shirt",
    rating: 4,
    rate: "$120",
    img: blackTshirt,
    size: ["S", "M", "L", "XL"],
    category: ["Casual"]
  },
  {
    id: 2,
    title: "Black Orange T-shirt",
    rating: 5,
    rate: "$130",
    img: blackOrangeTshirt,
    size: ["S", "M", "L", "XL", "XXL"],
    category: ["Casual", "Party"]
  },
  {
    id: 3,
    title: "Black Jeans",
    rating: 4,
    rate: "$150",
    img: blackJeans,
    size: ["S", "M", "L", "XL"],
    category: ["Casual"]
  },
  {
    id: 4,
    title: "Blue Jeans",
    rating: 3,
    rate: "$140",
    img: blueJeans,
    size: ["S", "M", "L", "XL"],
    category: ["Casual"]
  }
];

const youMightLike = [
  {
    id: 5,
    heading: "You might like",
    title: "Checked Shirt",
    rating: 5,
    rate: "$110",
    img: checkedShirt,
    size: ["S", "M", "L", "XL", "XXL"],
    category: ["Casual"]
  },
  {
    id: 6,
    title: "Green Shirt",
    rating: 3,
    rate: "$100",
    img: greenShirt,
    size: ["S", "M", "L", "XL"],
    category: ["Casual"]
  },
  {
    id: 7,
    title: "Jeans Trouser",
    rating: 2,
    rate: "$160",
    img: jeansTrouser,
    size: ["S", "M", "L", "XL"],
    category: ["Gym"]
  },
  {
    id: 8,
    title: "Orange T-shirt",
    rating: 4,
    rate: "$90",
    img: orangeTshirt,
    size: ["S", "M", "L", "XL"],
    category: ["Casual", "Party"]
  }
]

const forYou = [
  {
    id: 9,
    heading: "For you",
    title: "Black T-shirt",
    rating: 4,
    rate: "$120",
    img: blackTshirt,
    size: ["S", "M", "L", "XL"],
    category: ["Casual"]
  },
  {
    id: 10,
    title: "Black Orange T-shirt",
    rating: 5,
    rate: "$130",
    img: blackOrangeTshirt,
    size: ["S", "M", "L", "XL", "XXL"],
    category: ["Casual", "Party"]
  },
  {
    id: 11,
    title: "Black Jeans",
    rating: 4,
    rate: "$150",
    img: blackJeans,
    size: ["S", "M", "L", "XL"],
    category: ["Casual"]
  },
  {
    id: 12,
    title: "Blue Jeans",
    rating: 3,
    rate: "$140",
    img: blueJeans,
    size: ["S", "M", "L", "XL"],
    category: ["Casual"]
  }
];

export { topSellingDress, youMightLike, forYou };
