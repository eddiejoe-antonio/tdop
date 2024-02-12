import React from "react";
import {
  BanknotesIcon,
  BuildingLibraryIcon,
  CurrencyDollarIcon,
  GlobeAltIcon,
  ListBulletIcon,
  BookOpenIcon,
  DevicePhoneMobileIcon,
  LockClosedIcon,
  PresentationChartBarIcon,
  PencilIcon,
} from "@heroicons/react/24/outline";

export const uiData = [
  {
    id: "focus",
    name: "Type Of Service",
    explanation: `Looking for information on services such as local computer access? Click on “Computer Device
    Access“ to see resources that provide this service. You may select more than one type of service to
    search for.`,
    options: [
      {
        type: "Type Of Service",
        label: "Affordability and Adoption",
        checked: false,
        icon: <CurrencyDollarIcon className="w-5 h-5 text-bold" />,
        color: "#df3636",
      },
      {
        type: "Type Of Service",
        label: "Broadband Access",
        checked: false,
        icon: <GlobeAltIcon className="w-5 h-5 text-bold" />,
        color: "#df3636",
      },
      {
        type: "Type Of Service",
        label: "Computer Device Access",
        checked: false,
        icon: <DevicePhoneMobileIcon className=" w-5 h-5 text-bold" />,
        color: "#df3636",
      },
      {
        type: "Type Of Service",
        label: "Cybersecurity and Privacy Training",
        checked: false,
        icon: <LockClosedIcon className=" w-5 h-5 text-bold" />,
        color: "#df3636",
      },
      {
        type: "Type Of Service",
        label: "Digital Opportunity Program Funding",
        checked: false,
        icon: <BanknotesIcon className=" w-5 h-5 text-bold" />,
        color: "#df3636",
      },
      {
        type: "Type Of Service",
        label: "Digital Opportunity Research",
        checked: false,
        icon: <PresentationChartBarIcon className=" w-5 h-5 text-bold" />,
        color: "#df3636",
      },
      {
        type: "Type Of Service",
        label: "Digital Skills and Technical Support",
        checked: false,
        icon: <BookOpenIcon className=" w-5 h-5 text-bold" />,
        color: "#df3636",
      },
      {
        type: "Type Of Service",
        label: "Planning or Organizing",
        checked: false,
        icon: <ListBulletIcon className=" w-5 h-5 text-bold" />,
        color: "#df3636",
      },
      {
        type: "Type Of Service",
        label: "Public Computer Center",
        checked: false,
        icon: <ListBulletIcon className=" w-5 h-5 text-bold" />,
        color: "#df3636",
      },
      {
        type: "Type Of Service",
        label: "Publicly Accessible Online Services",
        checked: false,
        icon: <BuildingLibraryIcon className=" w-5 h-5 text-bold" />,
        color: "#df3636",
      },
      {
        type: "Type Of Service",
        label: "Workforce Development",
        checked: false,
        icon: <PencilIcon className=" w-5 h-5 text-bold" />,
        color: "#df3636",
      },
    ],
  },
  {
    id: "type",
    name: "Type of Organization",
    explanation: `Looking for information on organizations that provide services and resources, such as a school?
    Click on “K-12 School“ in this filter to see K-12 Schools that provide digital opportunity resources.
    You may select more than one type of organization.`,
    options: [
      {
        type: "Type of Organization",
        checked: false,
        color: "#1ba331",
        label: "City Government",
      },
      {
        type: "Type of Organization",
        checked: false,
        color: "#1ba331",
        label: "Community Support or Community Based Organization",
      },
      {
        type: "Type of Organization",
        checked: false,
        color: "#1ba331",
        label: "Community College",
      },
      {
        type: "Type of Organization",
        checked: false,
        color: "#1ba331",
        label: "Council or Metropolitan Planning Organization",
      },
      {
        type: "Type of Organization",
        checked: false,
        color: "#1ba331",
        label: "County Government",
      },
      {
        type: "Type of Organization",
        checked: false,
        color: "#1ba331",
        label: "County Office of Education",
      },
      {
        type: "Type of Organization",
        checked: false,
        color: "#1ba331",
        label: "For Profit Corporation or Business",
      },
      {
        type: "Type of Organization",
        checked: false,
        color: "#1ba331",
        label: "Foundation Philanthropic Organization",
      },
      {
        type: "Type of Organization",
        checked: false,
        color: "#1ba331",
        label: "Health Clinic or Health Center",
      },
      {
        type: "Type of Organization",
        checked: false,
        color: "#1ba331",
        label: "Hospital or Other Medical Provider",
      },
      {
        type: "Type of Organization",
        checked: false,
        color: "#1ba331",
        label: "Internet Service Provider",
      },
      {
        type: "Type of Organization",
        checked: false,
        color: "#1ba331",
        label: "Labor Organization",
      },
      {
        type: "Type of Organization",
        checked: false,
        color: "#1ba331",
        label: "Library",
      },
      {
        type: "Type of Organization",
        checked: false,
        color: "#1ba331",
        label: "Local or Regional Authority",
      },
      {
        type: "Type of Organization",
        checked: false,
        color: "#1ba331",
        label: "Non Profit Organization",
      },
      {
        type: "Type of Organization",
        checked: false,
        color: "#1ba331",
        label: "Private University",
      },
      {
        type: "Type of Organization",
        checked: false,
        color: "#1ba331",
        label: "Public Housing or Affordable Housing Organization",
      },
      {
        type: "Type of Organization",
        checked: false,
        color: "#1ba331",
        label: "Public or State University",
      },
      {
        type: "Type of Organization",
        checked: false,
        color: "#1ba331",
        label: "Public Safety Entity Government",
      },
      {
        type: "Type of Organization",
        checked: false,
        color: "#1ba331",
        label: "Public Safety Entity Non Government",
      },
      {
        type: "Type of Organization",
        checked: false,
        color: "#1ba331",
        label: "School K-12",
      },
      {
        type: "Type of Organization",
        checked: false,
        color: "#1ba331",
        label: "Special District",
      },
      {
        type: "Type of Organization",
        checked: false,
        color: "#1ba331",
        label: "State Government",
      },
      {
        type: "Type of Organization",
        checked: false,
        color: "#1ba331",
        label: "Tribal Government",
      },
      {
        type: "Type of Organization",
        checked: false,
        color: "#1ba331",
        label: "Workforce Development Organization",
      },
    ],
  },

  {
    id: "covered-populations",
    name: "Population Served",
    explanation: `Looking for information on who is served by digital opportunity programs, such as low-income
    individuals? Click on “low-income” to see results for resources that provide services for this
    population. You may select more than one population group.`,
    options: [
      {
        type: "Population Served",
        label: "Aging Individuals (Age 60+)",
        checked: false,
        color: "#0D78C9",
      },
      {
        type: "Population Served",
        label: "Incarcerated Individuals",
        checked: false,
        color: "#0D78C9",
      },
      {
        type: "Population Served",
        label: "Individuals with Disabilities",
        checked: false,
        color: "#0D78C9",
      },
      {
        type: "Population Served",
        label: "Limited English Proficiency Individuals",
        checked: false,
        color: "#0D78C9",
      },
      {
        type: "Population Served",
        label: "Low-Income Households",
        checked: false,
        color: "#0D78C9",
      },
      {
        type: "Population Served",
        label: "Minority Communities",
        checked: false,
        color: "#0D78C9",
      },
      {
        type: "Population Served",
        label: "Rural Communities",
        checked: false,
        color: "#0D78C9",
      },
      {
        type: "Population Served",
        label: "Veterans",
        checked: false,
        color: "#0D78C9",
      },
    ],
  },
];

export const countyFilter = {
  id: "County",
  name: "County",
  explanation: "The county in which this resource is located.",
  options: [
    {
      value: "Anderson",
      label: "Anderson",
      checked: false,
      type: "County",
    },
    {
      value: "Andrews",
      label: "Andrews",
      checked: false,
      type: "County",
    },
    {
      value: "Angelina",
      label: "Angelina",
      checked: false,
      type: "County",
    },
    {
      value: "Aransas",
      label: "Aransas",
      checked: false,
      type: "County",
    },
    {
      value: "Archer",
      label: "Archer",
      checked: false,
      type: "County",
    },
    {
      value: "Armstrong",
      label: "Armstrong",
      checked: false,
      type: "County",
    },
    {
      value: "Atascosa",
      label: "Atascosa",
      checked: false,
      type: "County",
    },
    {
      value: "Austin",
      label: "Austin",
      checked: false,
      type: "County",
    },
    {
      value: "Bailey",
      label: "Bailey",
      checked: false,
      type: "County",
    },
    {
      value: "Bandera",
      label: "Bandera",
      checked: false,
      type: "County",
    },
    {
      value: "Bastrop",
      label: "Bastrop",
      checked: false,
      type: "County",
    },
    {
      value: "Baylor",
      label: "Baylor",
      checked: false,
      type: "County",
    },
    {
      value: "Bee",
      label: "Bee",
      checked: false,
      type: "County",
    },
    {
      value: "Bell",
      label: "Bell",
      checked: false,
      type: "County",
    },
    {
      value: "Bexar",
      label: "Bexar",
      checked: false,
      type: "County",
    },
    {
      value: "Blanco",
      label: "Blanco",
      checked: false,
      type: "County",
    },
    {
      value: "Borden",
      label: "Borden",
      checked: false,
      type: "County",
    },
    {
      value: "Bosque",
      label: "Bosque",
      checked: false,
      type: "County",
    },
    {
      value: "Bowie",
      label: "Bowie",
      checked: false,
      type: "County",
    },
    {
      value: "Brazoria",
      label: "Brazoria",
      checked: false,
      type: "County",
    },
    {
      value: "Brazos",
      label: "Brazos",
      checked: false,
      type: "County",
    },
    {
      value: "Brewster",
      label: "Brewster",
      checked: false,
      type: "County",
    },
    {
      value: "Briscoe",
      label: "Briscoe",
      checked: false,
      type: "County",
    },
    {
      value: "Brooks",
      label: "Brooks",
      checked: false,
      type: "County",
    },
    {
      value: "Brown",
      label: "Brown",
      checked: false,
      type: "County",
    },
    {
      value: "Burleson",
      label: "Burleson",
      checked: false,
      type: "County",
    },
    {
      value: "Burnet",
      label: "Burnet",
      checked: false,
      type: "County",
    },
    {
      value: "Caldwell",
      label: "Caldwell",
      checked: false,
      type: "County",
    },
    {
      value: "Calhoun",
      label: "Calhoun",
      checked: false,
      type: "County",
    },
    {
      value: "Callahan",
      label: "Callahan",
      checked: false,
      type: "County",
    },
    {
      value: "Cameron",
      label: "Cameron",
      checked: false,
      type: "County",
    },
    {
      value: "Camp",
      label: "Camp",
      checked: false,
      type: "County",
    },
    {
      value: "Carson",
      label: "Carson",
      checked: false,
      type: "County",
    },
    {
      value: "Cass",
      label: "Cass",
      checked: false,
      type: "County",
    },
    {
      value: "Castro",
      label: "Castro",
      checked: false,
      type: "County",
    },
    {
      value: "Chambers",
      label: "Chambers",
      checked: false,
      type: "County",
    },
    {
      value: "Cherokee",
      label: "Cherokee",
      checked: false,
      type: "County",
    },
    {
      value: "Childress",
      label: "Childress",
      checked: false,
      type: "County",
    },
    {
      value: "Clay",
      label: "Clay",
      checked: false,
      type: "County",
    },
    {
      value: "Cochran",
      label: "Cochran",
      checked: false,
      type: "County",
    },
    {
      value: "Coke",
      label: "Coke",
      checked: false,
      type: "County",
    },
    {
      value: "Coleman",
      label: "Coleman",
      checked: false,
      type: "County",
    },
    {
      value: "Collin",
      label: "Collin",
      checked: false,
      type: "County",
    },
    {
      value: "Collingsworth",
      label: "Collingsworth",
      checked: false,
      type: "County",
    },
    {
      value: "Colorado",
      label: "Colorado",
      checked: false,
      type: "County",
    },
    {
      value: "Comal",
      label: "Comal",
      checked: false,
      type: "County",
    },
    {
      value: "Comanche",
      label: "Comanche",
      checked: false,
      type: "County",
    },
    {
      value: "Concho",
      label: "Concho",
      checked: false,
      type: "County",
    },
    {
      value: "Cooke",
      label: "Cooke",
      checked: false,
      type: "County",
    },
    {
      value: "Coryell",
      label: "Coryell",
      checked: false,
      type: "County",
    },
    {
      value: "Cottle",
      label: "Cottle",
      checked: false,
      type: "County",
    },
    {
      value: "Crane",
      label: "Crane",
      checked: false,
      type: "County",
    },
    {
      value: "Crockett",
      label: "Crockett",
      checked: false,
      type: "County",
    },
    {
      value: "Crosby",
      label: "Crosby",
      checked: false,
      type: "County",
    },
    {
      value: "Culberson",
      label: "Culberson",
      checked: false,
      type: "County",
    },
    {
      value: "Dallam",
      label: "Dallam",
      checked: false,
      type: "County",
    },
    {
      value: "Dallas",
      label: "Dallas",
      checked: false,
      type: "County",
    },
    {
      value: "Dawson",
      label: "Dawson",
      checked: false,
      type: "County",
    },
    {
      value: "Deaf Smith",
      label: "Deaf Smith",
      checked: false,
      type: "County",
    },
    {
      value: "Delta",
      label: "Delta",
      checked: false,
      type: "County",
    },
    {
      value: "Denton",
      label: "Denton",
      checked: false,
      type: "County",
    },
    {
      value: "DeWitt",
      label: "DeWitt",
      checked: false,
      type: "County",
    },
    {
      value: "Dickens",
      label: "Dickens",
      checked: false,
      type: "County",
    },
    {
      value: "Dimmit",
      label: "Dimmit",
      checked: false,
      type: "County",
    },
    {
      value: "Donley",
      label: "Donley",
      checked: false,
      type: "County",
    },
    {
      value: "Duval",
      label: "Duval",
      checked: false,
      type: "County",
    },
    {
      value: "Eastland",
      label: "Eastland",
      checked: false,
      type: "County",
    },
    {
      value: "Ector",
      label: "Ector",
      checked: false,
      type: "County",
    },
    {
      value: "Edwards",
      label: "Edwards",
      checked: false,
      type: "County",
    },
    {
      value: "Ellis",
      label: "Ellis",
      checked: false,
      type: "County",
    },
    {
      value: "El Paso",
      label: "El Paso",
      checked: false,
      type: "County",
    },
    {
      value: "Erath",
      label: "Erath",
      checked: false,
      type: "County",
    },
    {
      value: "Falls",
      label: "Falls",
      checked: false,
      type: "County",
    },
    {
      value: "Fannin",
      label: "Fannin",
      checked: false,
      type: "County",
    },
    {
      value: "Fayette",
      label: "Fayette",
      checked: false,
      type: "County",
    },
    {
      value: "Fisher",
      label: "Fisher",
      checked: false,
      type: "County",
    },
    {
      value: "Floyd",
      label: "Floyd",
      checked: false,
      type: "County",
    },
    {
      value: "Foard",
      label: "Foard",
      checked: false,
      type: "County",
    },
    {
      value: "Fort Bend",
      label: "Fort Bend",
      checked: false,
      type: "County",
    },
    {
      value: "Franklin",
      label: "Franklin",
      checked: false,
      type: "County",
    },
    {
      value: "Freestone",
      label: "Freestone",
      checked: false,
      type: "County",
    },
    {
      value: "Frio",
      label: "Frio",
      checked: false,
      type: "County",
    },
    {
      value: "Gaines",
      label: "Gaines",
      checked: false,
      type: "County",
    },
    {
      value: "Galveston",
      label: "Galveston",
      checked: false,
      type: "County",
    },
    {
      value: "Garza",
      label: "Garza",
      checked: false,
      type: "County",
    },
    {
      value: "Gillespie",
      label: "Gillespie",
      checked: false,
      type: "County",
    },
    {
      value: "Glasscock",
      label: "Glasscock",
      checked: false,
      type: "County",
    },
    {
      value: "Goliad",
      label: "Goliad",
      checked: false,
      type: "County",
    },
    {
      value: "Gonzales",
      label: "Gonzales",
      checked: false,
      type: "County",
    },
    {
      value: "Gray",
      label: "Gray",
      checked: false,
      type: "County",
    },
    {
      value: "Grayson",
      label: "Grayson",
      checked: false,
      type: "County",
    },
    {
      value: "Gregg",
      label: "Gregg",
      checked: false,
      type: "County",
    },
    {
      value: "Grimes",
      label: "Grimes",
      checked: false,
      type: "County",
    },
    {
      value: "Guadalupe",
      label: "Guadalupe",
      checked: false,
      type: "County",
    },
    {
      value: "Hale",
      label: "Hale",
      checked: false,
      type: "County",
    },
    {
      value: "Hall",
      label: "Hall",
      checked: false,
      type: "County",
    },
    {
      value: "Hamilton",
      label: "Hamilton",
      checked: false,
      type: "County",
    },
    {
      value: "Hansford",
      label: "Hansford",
      checked: false,
      type: "County",
    },
    {
      value: "Hardeman",
      label: "Hardeman",
      checked: false,
      type: "County",
    },
    {
      value: "Hardin",
      label: "Hardin",
      checked: false,
      type: "County",
    },
    {
      value: "Harris",
      label: "Harris",
      checked: false,
      type: "County",
    },
    {
      value: "Harrison",
      label: "Harrison",
      checked: false,
      type: "County",
    },
    {
      value: "Hartley",
      label: "Hartley",
      checked: false,
      type: "County",
    },
    {
      value: "Haskell",
      label: "Haskell",
      checked: false,
      type: "County",
    },
    {
      value: "Hays",
      label: "Hays",
      checked: false,
      type: "County",
    },
    {
      value: "Hemphill",
      label: "Hemphill",
      checked: false,
      type: "County",
    },
    {
      value: "Henderson",
      label: "Henderson",
      checked: false,
      type: "County",
    },
    {
      value: "Hidalgo",
      label: "Hidalgo",
      checked: false,
      type: "County",
    },
    {
      value: "Hill",
      label: "Hill",
      checked: false,
      type: "County",
    },
    {
      value: "Hockley",
      label: "Hockley",
      checked: false,
      type: "County",
    },
    {
      value: "Hood",
      label: "Hood",
      checked: false,
      type: "County",
    },
    {
      value: "Hopkins",
      label: "Hopkins",
      checked: false,
      type: "County",
    },
    {
      value: "Houston",
      label: "Houston",
      checked: false,
      type: "County",
    },
    {
      value: "Howard",
      label: "Howard",
      checked: false,
      type: "County",
    },
    {
      value: "Hudspeth",
      label: "Hudspeth",
      checked: false,
      type: "County",
    },
    {
      value: "Hunt",
      label: "Hunt",
      checked: false,
      type: "County",
    },
    {
      value: "Hutchinson",
      label: "Hutchinson",
      checked: false,
      type: "County",
    },
    {
      value: "Irion",
      label: "Irion",
      checked: false,
      type: "County",
    },
    {
      value: "Jack",
      label: "Jack",
      checked: false,
      type: "County",
    },
    {
      value: "Jackson",
      label: "Jackson",
      checked: false,
      type: "County",
    },
    {
      value: "Jasper",
      label: "Jasper",
      checked: false,
      type: "County",
    },
    {
      value: "Jeff Davis",
      label: "Jeff Davis",
      checked: false,
      type: "County",
    },
    {
      value: "Jefferson",
      label: "Jefferson",
      checked: false,
      type: "County",
    },
    {
      value: "Jim Hogg",
      label: "Jim Hogg",
      checked: false,
      type: "County",
    },
    {
      value: "Jim Wells",
      label: "Jim Wells",
      checked: false,
      type: "County",
    },
    {
      value: "Johnson",
      label: "Johnson",
      checked: false,
      type: "County",
    },
    {
      value: "Jones",
      label: "Jones",
      checked: false,
      type: "County",
    },
    {
      value: "Karnes",
      label: "Karnes",
      checked: false,
      type: "County",
    },
    {
      value: "Kaufman",
      label: "Kaufman",
      checked: false,
      type: "County",
    },
    {
      value: "Kendall",
      label: "Kendall",
      checked: false,
      type: "County",
    },
    {
      value: "Kenedy",
      label: "Kenedy",
      checked: false,
      type: "County",
    },
    {
      value: "Kent",
      label: "Kent",
      checked: false,
      type: "County",
    },
    {
      value: "Kerr",
      label: "Kerr",
      checked: false,
      type: "County",
    },
    {
      value: "Kimble",
      label: "Kimble",
      checked: false,
      type: "County",
    },
    {
      value: "King",
      label: "King",
      checked: false,
      type: "County",
    },
    {
      value: "Kinney",
      label: "Kinney",
      checked: false,
      type: "County",
    },
    {
      value: "Kleberg",
      label: "Kleberg",
      checked: false,
      type: "County",
    },
    {
      value: "Knox",
      label: "Knox",
      checked: false,
      type: "County",
    },
    {
      value: "Lamar",
      label: "Lamar",
      checked: false,
      type: "County",
    },
    {
      value: "Lamb",
      label: "Lamb",
      checked: false,
      type: "County",
    },
    {
      value: "Lampasas",
      label: "Lampasas",
      checked: false,
      type: "County",
    },
    {
      value: "La Salle",
      label: "La Salle",
      checked: false,
      type: "County",
    },
    {
      value: "Lavaca",
      label: "Lavaca",
      checked: false,
      type: "County",
    },
    {
      value: "Lee",
      label: "Lee",
      checked: false,
      type: "County",
    },
    {
      value: "Leon",
      label: "Leon",
      checked: false,
      type: "County",
    },
    {
      value: "Liberty",
      label: "Liberty",
      checked: false,
      type: "County",
    },
    {
      value: "Limestone",
      label: "Limestone",
      checked: false,
      type: "County",
    },
    {
      value: "Lipscomb",
      label: "Lipscomb",
      checked: false,
      type: "County",
    },
    {
      value: "Live Oak",
      label: "Live Oak",
      checked: false,
      type: "County",
    },
    {
      value: "Llano",
      label: "Llano",
      checked: false,
      type: "County",
    },
    {
      value: "Loving",
      label: "Loving",
      checked: false,
      type: "County",
    },
    {
      value: "Lubbock",
      label: "Lubbock",
      checked: false,
      type: "County",
    },
    {
      value: "Lynn",
      label: "Lynn",
      checked: false,
      type: "County",
    },
    {
      value: "McCulloch",
      label: "McCulloch",
      checked: false,
      type: "County",
    },
    {
      value: "McLennan",
      label: "McLennan",
      checked: false,
      type: "County",
    },
    {
      value: "McMullen",
      label: "McMullen",
      checked: false,
      type: "County",
    },
    {
      value: "Madison",
      label: "Madison",
      checked: false,
      type: "County",
    },
    {
      value: "Marion",
      label: "Marion",
      checked: false,
      type: "County",
    },
    {
      value: "Martin",
      label: "Martin",
      checked: false,
      type: "County",
    },
    {
      value: "Mason",
      label: "Mason",
      checked: false,
      type: "County",
    },
    {
      value: "Matagorda",
      label: "Matagorda",
      checked: false,
      type: "County",
    },
    {
      value: "Maverick",
      label: "Maverick",
      checked: false,
      type: "County",
    },
    {
      value: "Medina",
      label: "Medina",
      checked: false,
      type: "County",
    },
    {
      value: "Menard",
      label: "Menard",
      checked: false,
      type: "County",
    },
    {
      value: "Midland",
      label: "Midland",
      checked: false,
      type: "County",
    },
    {
      value: "Milam",
      label: "Milam",
      checked: false,
      type: "County",
    },
    {
      value: "Mills",
      label: "Mills",
      checked: false,
      type: "County",
    },
    {
      value: "Mitchell",
      label: "Mitchell",
      checked: false,
      type: "County",
    },
    {
      value: "Montague",
      label: "Montague",
      checked: false,
      type: "County",
    },
    {
      value: "Montgomery",
      label: "Montgomery",
      checked: false,
      type: "County",
    },
    {
      value: "Moore",
      label: "Moore",
      checked: false,
      type: "County",
    },
    {
      value: "Morris",
      label: "Morris",
      checked: false,
      type: "County",
    },
    {
      value: "Motley",
      label: "Motley",
      checked: false,
      type: "County",
    },
    {
      value: "Nacogdoches",
      label: "Nacogdoches",
      checked: false,
      type: "County",
    },
    {
      value: "Navarro",
      label: "Navarro",
      checked: false,
      type: "County",
    },
    {
      value: "Newton",
      label: "Newton",
      checked: false,
      type: "County",
    },
    {
      value: "Nolan",
      label: "Nolan",
      checked: false,
      type: "County",
    },
    {
      value: "Nueces",
      label: "Nueces",
      checked: false,
      type: "County",
    },
    {
      value: "Ochiltree",
      label: "Ochiltree",
      checked: false,
      type: "County",
    },
    {
      value: "Oldham",
      label: "Oldham",
      checked: false,
      type: "County",
    },
    {
      value: "Orange",
      label: "Orange",
      checked: false,
      type: "County",
    },
    {
      value: "Palo Pinto",
      label: "Palo Pinto",
      checked: false,
      type: "County",
    },
    {
      value: "Panola",
      label: "Panola",
      checked: false,
      type: "County",
    },
    {
      value: "Parker",
      label: "Parker",
      checked: false,
      type: "County",
    },
    {
      value: "Parmer",
      label: "Parmer",
      checked: false,
      type: "County",
    },
    {
      value: "Pecos",
      label: "Pecos",
      checked: false,
      type: "County",
    },
    {
      value: "Polk",
      label: "Polk",
      checked: false,
      type: "County",
    },
    {
      value: "Potter",
      label: "Potter",
      checked: false,
      type: "County",
    },
    {
      value: "Presidio",
      label: "Presidio",
      checked: false,
      type: "County",
    },
    {
      value: "Rains",
      label: "Rains",
      checked: false,
      type: "County",
    },
    {
      value: "Randall",
      label: "Randall",
      checked: false,
      type: "County",
    },
    {
      value: "Reagan",
      label: "Reagan",
      checked: false,
      type: "County",
    },
    {
      value: "Real",
      label: "Real",
      checked: false,
      type: "County",
    },
    {
      value: "Red River",
      label: "Red River",
      checked: false,
      type: "County",
    },
    {
      value: "Reeves",
      label: "Reeves",
      checked: false,
      type: "County",
    },
    {
      value: "Refugio",
      label: "Refugio",
      checked: false,
      type: "County",
    },
    {
      value: "Roberts",
      label: "Roberts",
      checked: false,
      type: "County",
    },
    {
      value: "Robertson",
      label: "Robertson",
      checked: false,
      type: "County",
    },
    {
      value: "Rockwall",
      label: "Rockwall",
      checked: false,
      type: "County",
    },
    {
      value: "Runnels",
      label: "Runnels",
      checked: false,
      type: "County",
    },
    {
      value: "Rusk",
      label: "Rusk",
      checked: false,
      type: "County",
    },
    {
      value: "Sabine",
      label: "Sabine",
      checked: false,
      type: "County",
    },
    {
      value: "San Augustine",
      label: "San Augustine",
      checked: false,
      type: "County",
    },
    {
      value: "San Jacinto",
      label: "San Jacinto",
      checked: false,
      type: "County",
    },
    {
      value: "San Patricio",
      label: "San Patricio",
      checked: false,
      type: "County",
    },
    {
      value: "San Saba",
      label: "San Saba",
      checked: false,
      type: "County",
    },
    {
      value: "Schleicher",
      label: "Schleicher",
      checked: false,
      type: "County",
    },
    {
      value: "Scurry",
      label: "Scurry",
      checked: false,
      type: "County",
    },
    {
      value: "Shackelford",
      label: "Shackelford",
      checked: false,
      type: "County",
    },
    {
      value: "Shelby",
      label: "Shelby",
      checked: false,
      type: "County",
    },
    {
      value: "Sherman",
      label: "Sherman",
      checked: false,
      type: "County",
    },
    {
      value: "Smith",
      label: "Smith",
      checked: false,
      type: "County",
    },
    {
      value: "Somervell",
      label: "Somervell",
      checked: false,
      type: "County",
    },
    {
      value: "Starr",
      label: "Starr",
      checked: false,
      type: "County",
    },
    {
      value: "Stephens",
      label: "Stephens",
      checked: false,
      type: "County",
    },
    {
      value: "Sterling",
      label: "Sterling",
      checked: false,
      type: "County",
    },
    {
      value: "Stonewall",
      label: "Stonewall",
      checked: false,
      type: "County",
    },
    {
      value: "Sutton",
      label: "Sutton",
      checked: false,
      type: "County",
    },
    {
      value: "Swisher",
      label: "Swisher",
      checked: false,
      type: "County",
    },
    {
      value: "Tarrant",
      label: "Tarrant",
      checked: false,
      type: "County",
    },
    {
      value: "Taylor",
      label: "Taylor",
      checked: false,
      type: "County",
    },
    {
      value: "Terrell",
      label: "Terrell",
      checked: false,
      type: "County",
    },
    {
      value: "Terry",
      label: "Terry",
      checked: false,
      type: "County",
    },
    {
      value: "Throckmorton",
      label: "Throckmorton",
      checked: false,
      type: "County",
    },
    {
      value: "Titus",
      label: "Titus",
      checked: false,
      type: "County",
    },
    {
      value: "Tom Green",
      label: "Tom Green",
      checked: false,
      type: "County",
    },
    {
      value: "Travis",
      label: "Travis",
      checked: false,
      type: "County",
    },
    {
      value: "Trinity",
      label: "Trinity",
      checked: false,
      type: "County",
    },
    {
      value: "Tyler",
      label: "Tyler",
      checked: false,
      type: "County",
    },
    {
      value: "Upshur",
      label: "Upshur",
      checked: false,
      type: "County",
    },
    {
      value: "Upton",
      label: "Upton",
      checked: false,
      type: "County",
    },
    {
      value: "Uvalde",
      label: "Uvalde",
      checked: false,
      type: "County",
    },
    {
      value: "Val Verde",
      label: "Val Verde",
      checked: false,
      type: "County",
    },
    {
      value: "Van Zandt",
      label: "Van Zandt",
      checked: false,
      type: "County",
    },
    {
      value: "Victoria",
      label: "Victoria",
      checked: false,
      type: "County",
    },
    {
      value: "Walker",
      label: "Walker",
      checked: false,
      type: "County",
    },
    {
      value: "Waller",
      label: "Waller",
      checked: false,
      type: "County",
    },
    {
      value: "Ward",
      label: "Ward",
      checked: false,
      type: "County",
    },
    {
      value: "Washington",
      label: "Washington",
      checked: false,
      type: "County",
    },
    {
      value: "Webb",
      label: "Webb",
      checked: false,
      type: "County",
    },
    {
      value: "Wharton",
      label: "Wharton",
      checked: false,
      type: "County",
    },
    {
      value: "Wheeler",
      label: "Wheeler",
      checked: false,
      type: "County",
    },
    {
      value: "Wichita",
      label: "Wichita",
      checked: false,
      type: "County",
    },
    {
      value: "Wilbarger",
      label: "Wilbarger",
      checked: false,
      type: "County",
    },
    {
      value: "Willacy",
      label: "Willacy",
      checked: false,
      type: "County",
    },
    {
      value: "Williamson",
      label: "Williamson",
      checked: false,
      type: "County",
    },
    {
      value: "Wilson",
      label: "Wilson",
      checked: false,
      type: "County",
    },
    {
      value: "Winkler",
      label: "Winkler",
      checked: false,
      type: "County",
    },
    {
      value: "Wise",
      label: "Wise",
      checked: false,
      type: "County",
    },
    {
      value: "Wood",
      label: "Wood",
      checked: false,
      type: "County",
    },
    {
      value: "Yoakum",
      label: "Yoakum",
      checked: false,
      type: "County",
    },
    {
      value: "Young",
      label: "Young",
      checked: false,
      type: "County",
    },
    {
      value: "Zapata",
      label: "Zapata",
      checked: false,
      type: "County",
    },
    {
      value: "Zavala",
      label: "Zavala",
    },
  ],
};
