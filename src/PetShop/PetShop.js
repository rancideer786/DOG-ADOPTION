import PetCard from "./PetCard";
import "./PetShop.css";
import Footer from "../About/footer";
function PetShop() {
  const dogs = [
    {
      weight: {
        imperial: "6 - 13",
        metric: "3 - 6",
      },
      height: {
        imperial: "9 - 11.5",
        metric: "23 - 29",
      },
      id: 1,
      name: "Affenpinscher",
      bred_for: "Small rodent hunting, lapdog",
      breed_group: "Toy",
      life_span: "10 - 12 years",
      temperament:
        "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving",
      origin: "Germany, France",
      image: require("./images/d1.png"),
    },
    {
      weight: {
        imperial: "50 - 60",
        metric: "23 - 27",
      },
      height: {
        imperial: "25 - 27",
        metric: "64 - 69",
      },
      id: 2,
      name: "Mickey",
      country_code: "AG",
      bred_for: "Coursing and hunting",
      breed_group: "Husky",
      life_span: "10 - 13 years",
      temperament: "Aloof, Clownish, Dignified, Independent, Happy",
      origin: "Afghanistan, Iran, Pakistan",
      image: require("./images/d2.png"),
    },
    {
      weight: {
        imperial: "44 - 66",
        metric: "20 - 30",
      },
      height: {
        imperial: "30",
        metric: "76",
      },
      id: 3,
      name: "John",
      bred_for: "A wild pack animal",
      life_span: "10 -11 years",
      temperament: "Wild, Hardworking, Dutiful",
      origin: "",
      image: require("./images/d4.png"),
    },
    {
      weight: {
        imperial: "40 - 65",
        metric: "18 - 29",
      },
      height: {
        imperial: "21 - 23",
        metric: "53 - 58",
      },
      id: 4,
      name: "Willow",
      bred_for: "Badger, otter hunting",
      breed_group: "Terrier",
      life_span: "10 - 13 years",
      temperament:
        "Outgoing, Friendly, Alert, Confident, Intelligent, Courageous",
      origin: "United Kingdom, England",
      image: require("./images/d6.png"),
    },
    {
      weight: {
        imperial: "90 - 120",
        metric: "41 - 54",
      },
      height: {
        imperial: "28 - 34",
        metric: "71 - 86",
      },
      id: 5,
      name: "Akbash",
      bred_for: "Sheep guarding",
      breed_group: "Working",
      life_span: "10 - 12 years",
      temperament: "Loyal, Independent, Intelligent, Brave",
      origin: "",
      image: require("./images/5.jpg"),
    },
    {
      weight: {
        imperial: "65 - 115",
        metric: "29 - 52",
      },
      height: {
        imperial: "24 - 28",
        metric: "61 - 71",
      },
      id: 6,
      name: "Akita",
      bred_for: "Hunting bears",
      breed_group: "Working",
      life_span: "10 - 14 years",
      temperament:
        "Docile, Alert, Responsive, Dignified, Composed, Friendly, Receptive, Faithful, Courageous",
      image: require("./images/6.jpeg"),
    },
    // {
    //   weight: {
    //     imperial: "55 - 90",
    //     metric: "25 - 41",
    //   },
    //   height: {
    //     imperial: "18 - 24",
    //     metric: "46 - 61",
    //   },
    //   id: 7,
    //   name: "Alapaha Blue Blood Bulldog",
    //   description:
    //     "The Alapaha Blue Blood Bulldog is a well-developed, exaggerated bulldog with a broad head and natural drop ears. The prominent muzzle is covered by loose upper lips. The prominent eyes are set well apart. The Alapaha's coat is relatively short and fairly stiff. Preferred colors are blue merle, brown merle, or red merle all trimmed in white or chocolate and white. Also preferred are the glass eyes (blue) or marble eyes (brown and blue mixed in a single eye). The ears and tail are never trimmed or docked. The body is sturdy and very muscular. The well-muscled hips are narrower than the chest. The straight back is as long as the dog is high at the shoulders. The dewclaws are never removed and the feet are cat-like.",
    //   bred_for: "Guarding",
    //   breed_group: "Mixed",
    //   life_span: "12 - 13 years",
    //   history: "",
    //   temperament: "Loving, Protective, Trainable, Dutiful, Responsible",
    //   image: require("./images/7.jpg"),
    // },
    {
      weight: {
        imperial: "38 - 50",
        metric: "17 - 23",
      },
      height: {
        imperial: "23 - 26",
        metric: "58 - 66",
      },
      id: 8,
      name: "Alaskan Husky",
      bred_for: "Sled pulling",
      breed_group: "Mixed",
      life_span: "10 - 13 years",
      temperament: "Friendly, Energetic, Loyal, Gentle, Confident",
      image: require("./images/8.jpg"),
    },
    {
      weight: {
        imperial: "65 - 100",
        metric: "29 - 45",
      },
      height: {
        imperial: "23 - 25",
        metric: "58 - 64",
      },
      id: 9,
      name: "Malamute",
      bred_for: "Hauling heavy freight, Sled pulling",
      breed_group: "Working",
      life_span: "12 - 15 years",
      temperament: "Friendly, Affectionate, Devoted, Loyal, Dignified, Playful",
      image: require("./images/9.jpg"),
    },
 

  ];

  return (
    <>
      <div className="Shop">
        <h1 className="PetShop-heading">Welcome to your dream shop!</h1>
        <div className="started">
        <p>Get Started</p>
        <ul>
          <li><b>Browse Available Dogs:</b> Click on a dog's profile to learn more about their background, personality traits, and any special needs or requirements they may have. Get to know them a little better before making your decision.</li>
          <li><b>Learn More:</b> Click on a dog's profile to learn more about their background, personality traits, and any special needs or requirements they may have. Get to know them a little better before making your decision.</li>
          <li><b>Make Your Choice: </b>Found the one? Great! Take your time to consider your decision carefully. Remember, adopting a dog is a lifelong commitment, so make sure you're ready to welcome a new furry family member into your home.</li>
          <li><b>Contact Us:</b>Ready to take the next step? Contact us to schedule a meet-and-greet with your chosen dog. We'll arrange a time for you to visit and spend some quality time getting to know each other.</li>
        </ul></div></div>
      
      <div>
        {dogs.map((val) => (
          <PetCard
            key={val.id}
            life={val.life_span}
            name={val.name}
            breed={val.breed_group}
            image={val.image} // Check if 'image' exists
            price={val.price}
            temperament={val.temperament}
          />
        ))}
      </div>
      <Footer />
      
    </>
  );
}

export default PetShop;
