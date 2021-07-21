/* Skills Icons */
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
//import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import psIcon from "./images/ps-icon.svg"
import aiIcon from "./images/ai-icon.svg"
import designIcon from "./images/design.svg"
import codeIcon from "./images/code.svg"

/* Social Icon */
import githubIcon from "./images/github.svg"
//import codepenIcon from "./images/codepen.svg"
//import dribbbleIcon from "./images/dribbble.svg"
//import instagramIcon from "./images/instagram.svg"

/* Work Images */
import * as psArt1 from "./images/arts/digitalArt1.jpg"
import * as psArt2 from "./images/arts/digitalArt2.jpg"
import * as psArt3 from "./images/arts/digitalArt3.jpg"
import * as psArt4 from "./images/arts/digitalArt4.jpg"

// Adobe Illustrator
import * as aiArt1 from "./images/arts/aiArt1.jpg"

// Hand Drawn Arts
import * as hdArt1 from "./images/arts/hdArt1.png"

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Jana",
  headerTagline: [
    //Line 1 For Header
    "Digital Artist,",
    //Line 2 For Header
    "Graphic Desiner",
    //Line 3 For Header
    "and a Marketer",
  ],
  //   Header Paragraph
  headerParagraph:
    "I love creating masterpiece out of different mediums and technology ",

  //Contact Email
  contactEmail: "https://www.linkedin.com/in/janalyn-quizana/",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    /* ------Photoshop Arts------ */
    {
      title: "Photoshop Art", //Project Title - Add Your Project Title Here
      para:
        "", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: psArt1.default,
      //Project URL - Add Your Project Url Here
      url: "#",
    },
    {
      title: "Photoshop Art", //Project Title - Add Your Project Title Here
      para:
        "", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: psArt2.default,
      //Project URL - Add Your Project Url Here
      url: "#",
    },
    {
      title: "Photoshop Art", //Project Title - Add Your Project Title Here
      para:
        "", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: psArt3.default,
      //Project URL - Add Your Project Url Here
      url: "#",
    },
    {
      title: "Photoshop Art", //Project Title - Add Your Project Title Here
      para:
        "", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: psArt4.default,
      //Project URL - Add Your Project Url Here
      url: "#",
    },

    /* ------Illustrator Arts------ */
    {
      title: "Adobe Illustrator Art", //Project Title - Add Your Project Title Here
      para:
        "", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: aiArt1.default,
      //Project URL - Add Your Project Url Here
      url: "#",
    },

    /* ------Hand Drawn Arts------ */
    {
      title: "Hand Drawn Art", //Project Title - Add Your Project Title Here
      para:
        "", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: hdArt1.default,
      //Project URL - Add Your Project Url Here
      url: "#",
    },

    /*
    If You Want To Add More Project just Copy and Paste This At The End
    ,{
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "I'm a freelance graphics designer and I already created logos, covers, video presentations, and posters for clients. I did commissions and made sure that my clients are satisfied with my works. Seeing my clients happy is a motivation to continue my journey in making arts and design. ",
  aboutParaTwo:
    "At a young age, people around me already saw my potential in the field of arts. I always draw whenever I have free time and if ever needed for school stuff. I participated in a lot of art related competitions when I was studying and I continued my hobby as years passed by. I tried different kinds of mediums to find out which particular medium I am comfortable with but I realized that sticking to one medium will not help me grow, it will make me stuck. One day I started exploring both traditional and digital art in which people started seeing my worth. I know in myself that I love arts and I will never stop making arts.",
  aboutParaThree:
    "My passion for art is something that runs in my blood and a reflection of my soul. In this changing world, being skilled in both traditional and digital art is an advantage. I am glad to show the world, the universe rather, that I am a living masterpiece with a heart. ",
  aboutImage:
    "https://image.shutterstock.com/image-vector/beautiful-hipster-fashion-style-graphic-260nw-180503726.jpg",

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: designIcon,
      para:
        "Excellent Designer, Certified Visual Graphics Designer under TESDA.",
    },
    {
      img: psIcon,
      para:
        "Excellent and Certified in Photoshop, photoshop is where I sketch and finalize my designs."
    },
    {
      img: aiIcon,
      para:
        "Highly Experienced in Adobe Illustrator, where I design whenever necessary."
    },
    {
      img: htmlIcon,
      para:
        "Knowledgeable in HTML, have great experience coding in html. Creating this portfolio has been a great experience.",
    },
    {
      img: cssIcon,
      para:
        "Knowledgeable in CSS, been using css as my style sheet ever since. I also have experience with SCSS.",
    },
    {
      img: jsIcon,
      para:
        "Knowledgeable in JavaScript, my main programming language for web programming. Also have good experience in other programming languages.",
    },  
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "",
  promotionPara:
    "Need a great designer at low cost? I might be the one you are looking for!~",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Let's make Business Better!",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/esseflux" },
    
  ],

  // End Contact Section ---------------
}