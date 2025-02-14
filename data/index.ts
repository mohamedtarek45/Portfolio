export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Building projects that merge creativity with technology.",
    description: "",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Let's Make Order",
    des: "A full-stack web application for a food ordering system where users can select and order food from various restaurants,  make payments securely using Visa, and track the status of their orders from payment to delivery. The platform includes authorization to ensure secure access for both users and restaurant owners. Additionally, restaurant owners can add their restaurant to the platform, create a custom menu for it, view incoming orders, and update their statuses in realtime to ensure smooth operations and customer satisfactions. ",
    img: "/p1.svg",
    iconLists: ["/re.svg","/tail.svg","/shadcn.svg","./nodejs.svg","./rest-api.svg","./typescript.svg","./mongodb.svg","./auth0.svg","./stripe.svg","./cloudinary.svg" ,"/re.svg","/tail.svg","/shadcn.svg","./nodejs.svg","./rest-api.svg","./typescript.svg","./mongodb.svg","./auth0.svg","./stripe.svg","./cloudinary.svg"  ],
    link: "https://food-project-frontend-iota.vercel.app/",
  },
  {
    id: 2,
    title: "Quick Chat",
    des: "QuickChat is a real-time chat application built with Next.js and Socket.io. It allows users to join chat rooms by entering  their name and room number. Once inside, they can send and receive messages instantly with others in the same room. The platform is designed for seamless and interactive communication, making it easy for multiple users to chat together",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/typescript.svg", "./socketio.svg"],
    link: "https://quickcaht.vercel.app/",
  },
  {
    id: 3,
    title: "Place share",
    des: "A web application where users can share places they’ve visited and liked by adding reviews, images, and the location displayed on a map. Only authenticated users can create and share places, ensuring content integrity. Regular users can browse the shared locations and read reviews without needing to log in, making it accessible for everyone to explore recommended spots",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/css.svg", "/nodejs.svg", "/rest-api.svg","./mongodb.svg","./cloudinary.svg","./jwt.svg" ,"/re.svg", "/css.svg", "/nodejs.svg", "/rest-api.svg","./mongodb.svg","./cloudinary.svg","./jwt.svg","/re.svg", "/css.svg", "/nodejs.svg", "/rest-api.svg","./mongodb.svg","./cloudinary.svg","./jwt.svg"],
    link: "https://place-share-client-five.vercel.app/",
  },
  {
    id: 4,
    title: "Tic-Tac-Toe Game",
    des: "Developed a responsive web-based Tic-Tac-Toe game using React, CSS, and JavaScript, optimized for seamless play on various devices",
    img: "/p4.svg",
    iconLists: ["/re.svg", "/css.svg",],
    link: "https://tic-tac-toe-eight-ashen.vercel.app/",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
