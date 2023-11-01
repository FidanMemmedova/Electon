import React from "react";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Slider from "./Slider/Slider";
import { BestProducts } from "./BestProducts";
import PopularProducts from "./PopularProducts/PopularProducts";
import { Banner } from "./Banner";

const Home = () => {
  return (
    <div>
      <Header />
      <Navbar/>
      <Slider/>
      <BestProducts/>
      <PopularProducts/>
      <Banner/>
    </div>
  );
};

export default Home;
















// const Home = () => {
//   const [data, setData] = useState([]);

//   // useEffect(() => {
//   //   fetch("https://northwind.vercel.app/api/categories", {
//   //     method: "GET",
//   //   })
//   //     .then((response) => response.json())
//   //     .then((res) => {
//   //       setData(res);
//   //       console.log(res);
//   //     })
//   //     .catch((error) => console.log(error));
//   // }, []);

//   // useEffect(() => {
//   //   fetch("https://northwind.vercel.app/api/categories", {
//   //     method: "GET",
//   //   })
//   //     .then((response) => response.json())
//   //     .then((res) => {
//   //       setData(res);
//   //       console.log(res);
//   //     });
//   // }, []);

//   // const [data, setData] = useState([]);
//   // useEffect(() => {
//   //   fetch("https://northwind.vercel.app/api/categories", {
//   //     method: "GET",
//   //   })
//   //     .then((response) => response.json())
//   //     .then((abc) => {
//   //       setData(abc);
//   //     });
//   // }, []);

//   // useEffect(() => {
//   //   axios.get("https://dummyjson.com/products").then((res) => {
//   //     setData(res.data.products);
//   //   });
//   // }, []);

//   useEffect(() => {
//     axios.get("https://northwind.vercel.app/api/categories").then((res) => {
//       setData(res.data);
//     });
//   }, []);

//   return (
//     <div>
//       <Header />
//       <div>
//         <h1>Names</h1>
//         <div>
//           {data &&
//             data.map((item) => {
//               return (
//                 <Card
//                   id={item.id}
//                   name={item.name}
//                   description={item.description}
//                 />
//               );
//             })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

// // const myFunction = () => {
// //   axios
// //     .post("https://northwind.vercel.app/api/categories", {
// //       firstName: "Fred",
// //       lastName: "aaaaaa",
// //     })
// //     .then(function (response) {
// //       console.log(response);
// //     })
// //     .catch(function (error) {
// //       console.log(error);
// //     });
// // };
