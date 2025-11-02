// Import ceiling fan images
import OrientBrownCeiling from './OrientBrownCeiling.png';
import OrientFan from './OrientFan.png';
import UshaCeiling from './UshaCeiling.png';
import UshaFourBlades from './UshaFourBlades.png';
import OrientsmallCelling from './OrientsmallCelling.png';

// Ceiling fan products list
const ceilingProducts = [
  {
    name: "Orient Brown Ceiling Fan",
    price: 3500,
    image: OrientBrownCeiling,
    description: "Elegant brown finish ceiling fan from Orient offering smooth performance and powerful air delivery.",
    category: "ceilingfan" // ✅ added
  },
  {
    name: "Orient Fan (Standard Model)",
    price: 3000,
    image: OrientFan,
    description: "Reliable Orient fan with superior air thrust and long-lasting copper winding motor.",
    category: "ceilingfan"
  },
  {
    name: "Usha Ceiling Fan",
    price: 2800,
    image: UshaCeiling,
    description: "Stylish Usha ceiling fan with excellent airflow and silent operation, perfect for home or office.",
    category: "ceilingfan"
  },
  {
    name: "Usha Four-Blade Fan",
    price: 5000,
    image: UshaFourBlades,
    description: "Premium four-blade Usha fan ensuring maximum air coverage with elegant modern design.",
    category: "ceilingfan"
  },
  {
    name: "Orient Small Ceiling Fan",
    price: 3100,
    image: OrientsmallCelling,
    description: "Compact Orient ceiling fan ideal for small rooms, providing efficient air circulation.",
    category: "ceilingfan"
  }
];

export default ceilingProducts;
