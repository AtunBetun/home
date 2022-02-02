// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Alberto",
  middleName: "",
  lastName: "De Saint Malo",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/atunbetun",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/adesaintmalo/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/alberto-de-saint-malo-a70415186/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/headshot.png"),
  imageSize: 375,
  message:
    "My name is Alberto De Saint Malo. I am a Panamanian student currently a senior at Florida State University and I love envisioning and bringing to life new projects. I believe in hard work, dedication, and that a united team of people can achieve anything they propose themselves.",
  resume: "https://drive.google.com/file/d/1TYElbcUdIzgLg3PFQZFki5JwvoNQMuSJ/view?usp=sharing", // CHANGE
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "AtunBetun", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ["Titanic", "Backgammon"],
};

// Leadership SECTION
const leadership = {
  show: true,
  heading: "Leadership",
  message:
    'I have always been a believer in hard work and setting goals with my team members. \
    During my time in Panama City, Panama I participated in the national sport "cayuco". In this sport teams of 4 paddle accros multiple"\
    races on a year-long season culminating in the 3-day "Ocean 2 Ocean" race in which we cross the Panama Canal.\
    With a great deal of sacrifice and over 50 hrs a week dedicated to the sport I managed to break records with my team Cayuco Chava and make\
    life-long friends! Moreover, I also participated in the Chinese traditional sport "Dragon Boat" and classified for the France 2020 IDBF World Championship.',
  images: [
    { 
      img: require("../assets/img/cinta.jpg"), 
      label: "Veracruz Race", 
      paragraph: "" 
    },

    { 
      img: require("../assets/img/trophies_crop.jpg"), 
      label: "Team Achievements", 
      paragraph: "" 
    },

  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 70 },
    { name: "VBA", value: 65 },
    { name: "Data Structures", value: 85 },
    { name: "C/C++", value: 65 },
    { name: "Jupyter Notebooks", value: 90 },
    { name: "Java", value: 65 },
    { name: "KNIME", value: 80 },
    { name: "Linux", value: 70 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for internships for Summer 2022 in Software Engineering, Data Analytics, or anything tech related! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "beto7299@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Financial Forecasting Intern',// Here Add Company Name
      companylogo: require('../assets/img/pg_resize.png'),
      date: 'May - August 2021',
    },
    {
      role: 'Financial Forecasting Intern',
      companylogo: require('../assets/img/pg_resize.png'),
      date: 'July – December 2020',
    },
    {
      role: 'Business Analyst',
      companylogo: require('../assets/img/copa_resize.png'),
      date: 'May – August 2019',
    },
    {
      role: 'Lifeguard - Volleyball Official',
      companylogo: require('../assets/img/campus_resize.png'),
      date: 'January 2021 – Present',
    },


  ]
}

// Blog SECTION
// const blog = {
//   show: true,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
