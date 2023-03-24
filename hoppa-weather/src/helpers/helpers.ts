const weatherConditions = [
    {
      name: "sun",
      id: "001",
      image: require("../../assets/Sunny.png"),
      color: ["#36d1dc", "#5b86e5"],
    },
    {
      name: "rainy",
      id: "002",
      image: require("../../assets/Rainy.png"),
      color: ["#373b44", "#4286f4"],
    },
    {
      name: "cloudy",
      id: "003",
      image: require("../../assets/Cloudy.png"),
      color: ["#ffe259", "#ffa751"],
    },
    {
      name: "thunder",
      id: "004",
      image: require("../../assets/Thunder.png"),
      color: ["#42275a", "#734b6d"],
    },
    {
      name: "clear",
      id: "004",
      image: require("../../assets/Sun.png"),
      color: ["#BDFFF3", "#4AC29A"],
    },
  ];

export const days = [
  "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
    
  ];


export const getDayIndex = (date: string) => {
    const newDate = new Date(date);
    const day = newDate.getDay();

    return days[day] ;
  };
export const returnImage = (condition: string) => {
    if (condition?.toLowerCase().includes("sunny")) return weatherConditions[0].image;
    if (condition?.toLowerCase().includes("rain")) return weatherConditions[1].image;
    if (condition?.toLowerCase().includes("cloud")) return weatherConditions[2].image;
    if (condition?.toLowerCase().includes("overcast")) return weatherConditions[3].image;
    if (condition?.toLowerCase().includes("clear")) return weatherConditions[4].image;
    return weatherConditions[0].image
  };

 export const returnColor = (condition: string) => {
    if (condition?.toLowerCase().includes("sunny")) return weatherConditions[0].color;
    if (condition?.toLowerCase().includes("rain")) return weatherConditions[1].color;
    if (condition?.toLowerCase().includes("cloud")) return weatherConditions[2].color;
    if (condition?.toLowerCase().includes("overcast")) return weatherConditions[3].color;
    if (condition?.toLowerCase().includes("clear")) return weatherConditions[4].color;

    else return ["#ffe259", "#ffa751"]
  };