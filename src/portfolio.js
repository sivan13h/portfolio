/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Sivan Hart",
  title: "Hi all, I'm Sivan",
  subTitle: emoji(
    "A dedicated Frontend Developer 🚀 with experience building dynamic platforms and web applications using React.js, Svelte, TYPO3, Laravel Blade, TailwindCSS, Alpine.js, and other modern tools and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1iW4tCC_YTo8cgPZzUZ1Ic72GvSL7eH_7/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/sivan-hart-5a31361a4/",
  gmail: "sivan13h@gmail.com",
  facebook: "https://www.facebook.com/sivan.hart/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "DEDICATED FRONTEND DEVELOPER WHO LOVES CREATING SMOOTH, USER-CENTRIC WEB EXPERIENCES",
  skills: [
    emoji(
      "⚡ I enjoy building clean, responsive interfaces using React, and modern tools like TailwindCSS and Alpine.js"
    ),
    emoji(
      "⚡  I care about the details — from accessibility to performance — making sure every product feels great to use"
    ),
    emoji(
      "⚡  I’ve worked on platforms and CMS-based websites, integrating APIs and third-party tools to bring ideas to life"
    ),
    emoji(
      "⚡  I'm a fast learner who quickly adapts to new tools, frameworks, and workflows — always eager to grow and stay up to date"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "redux",
      svgIcon:
        '<svg class="fab" fill="#868e96" viewBox="0 -6 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" fill="#868e96"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M177.381 169.733c9.447-.978 16.614-9.122 16.288-18.896-.325-9.773-8.47-17.592-18.243-17.592h-.651c-10.1.326-17.918 8.796-17.592 18.895.326 4.887 2.28 9.122 5.212 12.054-11.076 21.828-28.016 37.791-53.426 51.148-17.266 9.122-35.183 12.38-53.1 10.1-14.66-1.955-26.062-8.47-33.23-19.222-10.424-15.963-11.401-33.23-2.605-50.496 6.19-12.38 15.962-21.502 22.152-26.063-1.303-4.235-3.258-11.402-4.235-16.614-47.237 34.207-42.35 80.468-28.016 102.295 10.75 16.29 32.577 26.389 56.684 26.389 6.515 0 13.03-.652 19.546-2.28 41.699-8.145 73.299-32.905 91.216-69.718zm57.336-40.397c-24.759-28.995-61.245-44.958-102.944-44.958h-5.212c-2.932-5.864-9.122-9.774-15.963-9.774h-.652C99.848 74.93 92.03 83.4 92.355 93.5c.326 9.773 8.47 17.592 18.243 17.592h.651c7.167-.326 13.357-4.887 15.963-11.077h5.864c24.759 0 48.214 7.167 69.39 21.176 16.288 10.751 28.016 24.76 34.531 41.7 5.538 13.683 5.212 27.04-.652 38.443-9.121 17.266-24.432 26.714-44.63 26.714-13.031 0-25.41-3.91-31.926-6.842-3.583 3.258-10.099 8.47-14.66 11.729 14.009 6.515 28.343 10.099 42.025 10.099 31.274 0 54.404-17.267 63.2-34.533 9.447-18.896 8.795-51.474-15.637-79.165zM69.225 175.27c.326 9.774 8.47 17.592 18.243 17.592h.652c10.099-.325 17.917-8.796 17.591-18.895-.325-9.774-8.47-17.592-18.243-17.592h-.651c-.652 0-1.63 0-2.28.325-13.357-22.153-18.895-46.26-16.94-72.323 1.302-19.547 7.818-36.488 19.22-50.497 9.447-12.054 27.69-17.918 40.07-18.243 34.531-.652 49.19 42.351 50.168 59.618 4.235.977 11.402 3.258 16.289 4.887C189.434 27.366 156.857 0 125.584 0c-29.32 0-56.359 21.176-67.11 52.451-14.985 41.7-5.212 81.771 13.031 113.372-1.628 2.28-2.606 5.864-2.28 9.448z"></path></g></svg>'
    },
    {
      skillName: "svelte",
      svgIcon:
        '<svg class="fab" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2829 1.94409C14.2083 3.42511 14.046 5.27647 13.0128 6.56576C13.8628 8.37306 13.2462 10.5713 11.5104 11.656L7.27012 14.3056C5.39667 15.4763 2.92892 14.9066 1.75825 13.0331C0.832798 11.5521 0.99519 9.70071 2.02833 8.41145C1.17829 6.60415 1.79488 4.40587 3.53076 3.32117L7.771 0.671576C9.64446 -0.499089 12.1122 0.070635 13.2829 1.94409ZM8.30092 1.51962C9.70601 0.641625 11.5568 1.06892 12.4348 2.47401C13.0645 3.48168 13.023 4.71945 12.4301 5.66263C11.8046 4.92992 10.9523 4.46839 10.0447 4.31762L10.7691 3.86494L10.2392 3.0169L5.15088 6.19641L5.6808 7.04446L7.80091 5.71967C9.206 4.84167 11.0568 5.26899 11.9348 6.67408C12.8128 8.07918 12.3855 9.92999 10.9804 10.808L6.7402 13.4576C5.33511 14.3356 3.4843 13.9083 2.6063 12.5032C1.97665 11.4955 2.01814 10.2578 2.61103 9.31458C3.23653 10.0473 4.08885 10.5088 4.99651 10.6596L4.27222 11.1122L4.80214 11.9602L9.89043 8.78071L9.36051 7.93267L7.24023 9.25756C5.83514 10.1356 3.98429 9.70821 3.10629 8.30312C2.2283 6.89803 2.65559 5.04722 4.06068 4.16922L8.30092 1.51962Z" fill="#868e96"></path> </g></svg>'
    },
    {
      skillName: "wordpress",
      fontAwesomeClassname: "fab fa-wordpress"
    },
    {
      skillName: "typo3",
      svgIcon:
        '<svg class="fab" fill="#868e96" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M24.104 22.052c-0.474 0.141-0.849 0.193-1.349 0.193-4.063 0-10.031-14.203-10.031-18.932 0-1.74 0.417-2.318 0.995-2.818-4.974 0.583-10.943 2.406-12.849 4.729-0.417 0.578-0.667 1.49-0.667 2.651 0 7.38 7.875 24.125 13.432 24.125 2.573 0 6.906-4.224 10.469-9.948zM21.51 0c5.141 0 10.286 0.828 10.286 3.729 0 5.891-3.734 13.021-5.641 13.021-3.401 0-7.625-9.453-7.625-14.177 0-2.161 0.828-2.573 2.979-2.573z"></path> </g></svg>'
    },
    {
      skillName: "tailwindcss",
      svgIcon:
        '<svg class="fab" fill="#868e96" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>Tailwind CSS icon</title><path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"></path></g></svg>'
    },
    {
      skillName: "alpinejs",
      svgIcon:
        '<svg class="fab" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#868e96" fill-rule="evenodd" d="M98.444 35.562 126 62.997 98.444 90.432 70.889 62.997z" clip-rule="evenodd"/><path fill="#868e96" fill-rule="evenodd" d="m29.556 35.562 57.126 56.876H31.571L2 62.997z" clip-rule="evenodd"/></svg>'
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Harvard University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2017 - April 2019",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Stanford University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Frontend Developer",
      company: "Mogic",
      companylogo: require("./assets/images/mogic.png"),
      date: "July 2021 – May 2024",
      desc: "Mogic is a digital agency that delivers end-to-end solutions for clients across various industries. I was responsible for developing and implementing frontend features for multiple projects, ensuring responsive, user-friendly interfaces tailored to each client's needs."
    },
    {
      role: "Digital Marketing Consultant",
      company: "Concentrix",
      companylogo: require("./assets/images/concentrix.webp"),
      date: "April 2021 – July 2021",
      desc: "worked as a digital marketing advisor, supporting business marketing managers in optimizing their online strategies. I provided guidance on tools, best practices, and campaign performance to help improve their digital presence and achieve their marketing goals."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Projects you participated in in previous jobs
const participatedProjects = {
  title: "Public Projects",
  subtitle: "PLATFORMS I'VE BEEN PROUD TO HELP DEVELOP",
  projects: [
    {
      image: require("./assets/images/lde.webp"),
      projectName: "L.de",
      projectDesc:
        "Official Leipzig city website for services, traffic, and news.",
      technologies: ["TYPO3", "TailwindCSS", "AlpineJS", "JS", "HTML", "SCSS"],
      footerLink: [
        {
          name: "Visit Website",
          url: "http://l.de/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/immobilie1.webp"),
      projectName: "Immobilie1",
      projectDesc:
        "Real estate website for buying and renting property in Germany.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://immobilie1.de/"
        }
      ]
    },
    {
      image: require("./assets/images/ybpn.webp"),
      projectName: "YBPN",
      projectDesc:
        "Beauty and cosmetics website for products, tips, and trends.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://ybpn.de/"
        }
      ]
    }
  ]
};

// Some big projects you have worked on

const bigProjects = {
  title: "My Projects",
  subtitle: "PERSONAL PROJECTS I WORKED ON TO DEVELOP MY SKILLS",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: false, // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Have a project in mind or think I’d be a great fit for your team? Let’s talk. I’d love to hear from you.",
  email_address: "sivan13h@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  participatedProjects,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
