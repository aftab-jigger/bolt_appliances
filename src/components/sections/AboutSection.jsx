// AboutUsSection.jsx
import TechImg from "../../assets/illustrationIamges/worker.png";
import StaffImg from "../../assets/illustrationIamges/staff.png";
import ApplianceImg from "../../assets/illustrationIamges/appliances.png";
const cards = [
  {
    img: TechImg,
    number: "10+",
    title: "Years of Experience",
  },
  {
    img: StaffImg,
    number: "50+",
    title: "Expert Staff",
  },
  {
    img: ApplianceImg,
    number: "5000+",
    title: "Appliances Serviced",
  },
];

const AboutUsSection = () => {
  return (
    <section className="text-gray-700 py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          We are a trusted appliance service company with years of experience
          and a professional team ready to serve you.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">
          {cards.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm p-8 flex flex-col items-center hover:shadow-md transition border border-gray-300 hover:border-2 hover:border-blue-200"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-70 h-40 object-contain mb-6"
              />
              <h3 className="text-4xl font-bold text-blue-500 mb-3">
                {item.number}
              </h3>
              <div className="sm:w-20 md:w-50 h-0.5 bg-gray-400 mb-3 w-80" />
              <p className="text-gray-500 font-medium text-xl mb-1.5">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// const AboutUsSection = () => {
//   return (
//     <section className="bg-gray-50 py-16">
//       <div className="max-w-6xl mx-auto px-4 text-center">
//         {/* Heading */}
//         <h2 className="text-3xl font-bold mb-4">About Us</h2>
//         <p className="text-gray-700 mb-12">
//           We are a trusted appliance service company with years of experience
//           and a team of expert staff ready to serve you.
//         </p>

//         {/* Stats / Features */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           <div className="bg-white shadow-md rounded-lg p-6">
//             <h3 className="text-4xl font-bold text-blue-600 mb-2">10+</h3>
//             <p></p>
//             <p className="text-gray-600">Years of Experience</p>
//           </div>
//           <div className="bg-white shadow-md rounded-lg p-6">
//             <h3 className="text-4xl font-bold text-blue-600 mb-2">50+</h3>
//             <p className="text-gray-600">Expert Staff</p>
//           </div>
//           <div className="bg-white shadow-md rounded-lg p-6">
//             <h3 className="text-4xl font-bold text-blue-600 mb-2">5000+</h3>
//             <p className="text-gray-600">Appliances Serviced</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

export default AboutUsSection;
