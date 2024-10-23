export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" }
  ];
  
  export const aboutItems = [
      {
        id: 1,
        title: "",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vestibulum ligula nulla, nec blandit sapien eleifend scelerisque. Aliquam venenatis, enim non feugiat finibus, leo eros pellentesque diam, ut commodo est risus vel turpis. Phasellus eu volutpat ex. Integer non dui sed sem pulvinar laoreet. Nullam ut lorem est. Proin tempor malesuada egestas. Nam lacus magna, facilisis eu felis vitae, ornare molestie est. Nam posuere cursus nulla, non congue magna posuere sed. Curabitur malesuada sem eget posuere scelerisque. Maecenas ultricies magna nisi, a porta arcu porta in. Phasellus at rhoncus magna, in blandit neque. Maecenas vel elit id metus hendrerit pulvinar.",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "text-2xl justify-start pb-2",
        img: "",
        spareImg: "",
      },
      {
        id: 2,
        title: "",
        description: "",
        className: "lg:col-span-3 md:col-span-3 md:row-span-4 lg:min-h-[60vh]",
        imgClassName: "w-full h-full",
        titleClassName: "justify-end",
        img: "/ProfilePicture.jpg",
        spareImg: "",
      },
      {
        id: 3,
        title: "Tech Stack",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-center",
        img: "",
        spareImg: "",
      },
    ];
  
  export const projects = [
    {
      id: 1,
      title: "NotiKube",
      des: "Kubernetes incident management platform accelerated under OSlabs",
      img: "/NotiKube.jpeg",
      iconLists: ["/next.svg", "/ts.svg", "/tail.svg", "/postgres.svg","/prometheus.svg"],
      link: "https://www.notikube.com",
      live: true
    },
    {
      id: 2,
      title: "Emojify",
      des: "Hear what you feel - Use emojis to explore new music genres and songs!",
      img: "/Emojify.png",
      iconLists: ["/re.svg", "/ts.svg", "/tail.svg", "/express.svg", "/webpack.svg", "/spotify.svg"],
      link: "https://github.com/BattleshipDragonite/emojify",
      live: false
    },
    {
      id: 3, 
      title: "ePlant", 
      des: "A gene-centric visualization tool for plant genomes", 
      img: "/ePlant.png", 
      iconLists: ["/re.svg", "/ts.svg", "/materialui.svg"], 
      link: "https://bioanalyticresource.github.io/ePlant/", 
      live: true
    },
    {
      id: 4,
      title: "Park Nest",
      des: "Airbnb for Parking - a parking lot booking platform for both renters and owners",
      img: "/ParkNest.png",
      iconLists: ["/re.svg", "/express.svg", "/materialui.svg", "/awsS3.svg", "/passport.svg", "/postgres.svg"],
      link: "https://github.com/Park-Nest/Park-Nest",
      live: false
    },
    {
      id: 4,
      title: "Pod 2.0",
      des: "An E-commerce application with a real payment system via the Stripe API",
      img: "/Pod2.png",
      iconLists: ["/re.svg", "/redux.svg", "express.svg", "/passport.svg", "/postgres.svg","/stripe.svg"],
      link: "https://github.com/Pod-2-0/Pod",
      live: false
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
      img: "/link.svg",
      link: "https://www.linkedin.com/in/apiraam-selvabaskaran/"
    },
    {
      id: 2,
      img: "/email.svg",
      link: "mailto:apiraam96@gmail.com"
    },
    {
      id: 3,
      img: "/git.svg",
      link: "https://github.com/apiraam96"
    },
  ];

  export const techListLeft = [
    {
      name: 'React', 
    }, 
    {
      name: 'TypeScript', 
    }, 
    {
      name: 'Redux', 
    }
  ]

  export const techListRight = [
    {
      name: 'NextJS', 
    }, 
    {
      name: 'Express', 
    }, 
    {
      name: 'AWS S3', 
    }
  ]