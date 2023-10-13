const jsonData = {
    "name": "John",
    "age": "30",
    "occupation": "Developer"
  };
  
  //for in
  
  for (let key in jsonData) {
    console.log(`${key}: ${jsonData[key]}`);
  }
  
  //for of
  
  const entries = Object.entries(jsonData);
  
  for (let [key, value] of entries) {
    console.log(`${key}: ${value}`);
  }
  
  //for each
  
  Object.keys(jsonData).forEach((key) => {
    console.log(`${key}: ${jsonData[key]}`);
  });
  
  //for loop
  
  const keys = Object.keys(jsonData);
  
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    console.log(`${key}: ${jsonData[key]}`);
  }
  
  // My resume data in JSON format 
  
  {
    "name": "Rohit Sengupta",
    "email": "rohitsengupta1997@gmail.com",
    "phone": "7735723980",
    "address": "1/270, Ashiana Apartment, Naktala, Kolkata, 700047, India",
    "nationality": "India",
    "dateOfBirth": "22/01/1998",
    "skills": [
      "HTML",
      "CSS",
      "Bootstrap",
      "Javascript",
      "Jquery",
      "Data Object Manipulation",
      "React js",
      "SQL",
      "Figma",
      "Balsamiq",
      "Draw.io",
      "Product roadmap and strategy",
      "Market research",
      "Product Design",
      "Jira",
      "SaaS",
      "MS Office",
      "Articulate Storyline"
    ],
    "languages": ["English", "Bengali", "Hindi", "Odia"],
    "profile": "An innovative, creative, and responsible individual who has explored multiple fields of work including tech, non-tech, and also techno-functional domains. I am a keen contributor to the creative development of groundbreaking products along with taking responsibility for their growth. Currently looking for opportunities in Product management roles so that I can use my knowledge and experience in the development of great products.",
    "education": [
      {
        "degree": "B.Tech in Information Technology",
        "school": "ITER, SOA University, Bhubaneshwar",
        "dates": "Aug 2016 - Jul 2020",
        "cgpa": 8.67
      },
      {
        "degree": "AISSCE (XII)",
        "school": "Dalmia Vidya Mandir, Rajgangpur",
        "dates": "May 2014 - May 2016",
        "percentage": "82.4% Aggregate"
      },
      {
        "degree": "AISSE (X)",
        "school": "Dalmia Vidya Mandir, Rajgangpur",
        "dates": "May 2013 - May 2014",
        "cgpa": 9.8
      }
    ],
    "experience": [
      {
        "title": "Technical Content Developer 1",
        "company": "Dell Technologies (Parent Company: SP Software), Bangalore",
        "dates": "Jan 2022",
        "description": "Produced innovative technical content for Dell's cutting-edge products, catering to diverse audiences such as end-users, tech support agents, and technicians. Conceptualized and developed e-learning materials to train new hires and internal support teams, ensuring high-quality and comprehensive content delivery. Created compelling storyline simulations to explain product features and functionality, both for internal and external users, resulting in increased comprehension and user adoption. Collaborated with stakeholders to update and maintain accurate information in PRDs, demonstrating excellent communication and project management skills."
      },
      {
        "title": "Tech Consultant",
        "company": "Deloitte India, Bangalore",
        "dates": "May 2021 - Sep 2021",
        "description": "Demonstrated proficiency as a Salesforce Administrator by expertly creating objects and fields tailored to project requirements. Aptly implemented permission sets and data security measures to ensure data integrity and confidentiality. Skillfully applied validation rules in adherence to project specifications. Successfully designed Lightning Web Components (LWC) user interfaces to enhance user experience."
      },
      {
        "title": "Junior Product Analyst",
        "company": "Datafoundry AI, Bangalore",
        "dates": "Oct 2020 - May 2021",
        "description": "Conducted wireframing for product UI utilizing Balsamiq. Performed manual testing to ensure quality of product. Conducted market research and competitor analysis to inform product development. Developed engaging product summaries using ActivePresenter tool for clients. Groomed user stories and acceptance criteria in JIRA tool."
      }
    ],
    "internships": [
      {
        "title": "Product intern",
        "company": "Racetrack.ai, Bangalore",
        "dates": "Aug 2019 - May 2020",
        "description": "Conducted product analysis, prepared business rules, test cases, and UI/UX. Attended business meetings with clients and worked on a project of conversational AI for insurance agents from scratch for M/s Bharti Axa. Actively worked towards product side implementation of the project starting from ideation, framework design, market research and analysis, UI/UX, BSD documentation, FSD documentation, test case development, and testing with the team. Efficiently managed the testing of other simultaneous projects for clients namely M/s Salarpuria Satva, M/s Mantri, and M/s Lodha."
      }
    ],
    "projects": [
      {
        "title": "Conversation AI for Insurance Agents",
        "description": "Handled this project as a Product Management Intern at Racetrack.ai for the client, M/s Bharti Axa. Carried out market research, product framework design, UI/UX, FRD documentation, test cases, business rules, testing, etc."
      },
      {
        "title": "Generic Label Review",
        "description": "Responsible for the wireframing, testing, error detection and reporting, and research for this project. It was a smart tool for detecting compliance issues between innovator and generic label for drugs and rectification."
      },
      {
        "title": "Furrybit",
        "description": "Pet care marketplace providing services like doorstep grooming, online vets, boarding along with an integrated social platform to chat with experts. Responsible for product design, mockup creation, product roadmap and strategy, testing."
      }
    ],
    "certificates": [
      {
        "title": "Product Management from insideiim",
        "dates": "Dec 2022 - Apr 2023",
        "description": "Trained by industry-level experts on topics such as user research, Design thinking, concepts of wireframing and UI/UX, KPIs for a winning product, Product strategy and testing."
      }
    ]
  }