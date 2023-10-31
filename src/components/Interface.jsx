import { motion } from "framer-motion";
import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"
import { Button, CardActions, CardContent, Typography } from "@mui/material";
// import { CardActions } from "@mui/material";
// import CardContent from "@mui/material/CardContent";
import emailjs from "@emailjs/browser"
import { useRef } from "react";
import dotenv from 'dotenv'


const Section = (props) => {
  const { children } = props;

  return (
    <motion.section
      className={`h-screen
   w-screen p-8 max-w-screen-2xl mx-auto
  flex flex-col items-start justify-center 
  `} 
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.6,
        },
      }}
    >
      {children}
    </motion.section>
  );
};

export const Interface = (onSectionChange) => {
  const {section}=onSectionChange;
  return (
    <div className="flex flex-col items-center w-screen h-screen">
      <AboutSection props={section}/>
      <SkillsSection />
      <ProjectSection/>
      <ContactSection />
      <Certifications/>
    </div>
  );
};

const AboutSection = (props) => {
  // var onSectionChange=props
  var {section}=props;
  
  return (
    <Section>
      <h1 className="text-6xl font-extrabold leading-snug">
        Hi, I'm
        <br />
        <span className="bg-white px-1 italic rounded-2xl">Anandakrishnan</span>
      </h1>
      <motion.p
        className="text-lg text-justify p-2  font-semibold text-black bg-gray mt-20  "
        initial={{
          opacity: -3,
          y: 25,
          borderRadius:"20px",
          background:"linear-gradient(180deg,#da61ff, #0062ff)",
          
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 0.7,
        }}

        whileHover={{
          
          scale:1.2,
          font:"bold",
          background:"linear-gradient(90deg, #0062ff, #da61ff)",
          borderRadius:"30px",
          shadow:"0px 10px 10px 10px rgb(0,0,0)",

        }}

        style={{
          boxShadow:"3px 4px 10px 2px  black ",
          zIndex:"4",
          marginLeft:"50rem",
          marginTop:"18rem"

        }}
      >
       
        <br />

        I'm Anandakrishnan, a passionate individual who enjoys seeing <br /> the world from various perspectives. I'm a committed programmer <br /> and a lifelong student. 
Coding and technology have always piqued <br /> my  interest.
I really think that learning is learning is a continuous jou-<br />rney.  
 Outside of the realm of books and programming, I love to go on <br /> adventures. 
I like returning the favor to the community. I enjoy being <br />a part  of larger projects,whether it's volunteering, mentoring programmers,<br /> or taking part in open-source initiatives.




  
      </motion.p>
      {/* <motion.button
        className={`bg-indigo-600 text-white py-4 px-8 
      rounded-lg font-bold text-lg mt-16`}
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 2,
        }}
        onClick={()=>{section=5;}}
      >
        Contact me
      </motion.button> */}
    </Section>
  );
};

const skills = [
  {
    title: "Threejs / React Three Fiber",
    level: 80,
  },
  {
    title: "React ",
    level: 90,
  },
  {
    title: "Nodejs",
    level: 90,
  },
  {
title:"Django",
level:"70"

  },
  {
    title:"Nextjs",
    level:"80"
    
      },

  {
    title: "Typescript",
    level: 60,
  },
  {
    title:"Flutter",
    level:"70"
  },
  {
    title: "3D Modeling",
    level: 30,
  },
  {
    title:"Java,C,C#,JavScript,\nSolidity,Python,Html,Css",
    level:"80"
    
      },

      
  

];
const languages = [
  {
    title: "English",
    level: 95,
  },
  {
    title: "Malayalam",
    level: 100,
  },
  {
    title: "Hindi",
    level: 20,
  },
];

const SkillsSection = () => {
  return (
    <Section>
      <motion.div whileInView={"visible"}style={{marginTop:"30rem"}}>
        <h2 className="text-5xl font-bold">Skills</h2>
        <div className=" mt-8 space-y-4">
          {skills.map((skill, index) => (
            <div className="w-64" key={index}>
              <motion.h3
                className="text-xl font-bold text-gray-800"
                initial={{
                  opacity: 0,
                }}
                variants={{
                  visible: {
                    opacity: 1,
                    transition: {
                      duration: 1,
                      delay: 1 + index * 0.2,
                    },
                  },
                }}
              >
                {skill.title}
              </motion.h3>
              <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                <motion.div
                  className="h-full bg-indigo-500 rounded-full "
                  style={{ width: `${skill.level}%` }}
                  initial={{
                    scaleX: 0,
                    originX: 0,
                  }}
                  variants={{
                    visible: {
                      scaleX: 1,
                      transition: {
                        duration: 1,
                        delay: 1 + index * 0.2,
                      },
                    },
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        <div>
          <h2 className="text-5xl font-bold mt-10">Languages</h2>
          <div className=" mt-8 space-y-4">
            {languages.map((lng, index) => (
              <div className="w-64" key={index}>
                <motion.h3
                  className="text-xl font-bold text-gray-800"
                  initial={{
                    opacity: 0,
                  }}
                  variants={{
                    visible: {
                      opacity: 1,
                      transition: {
                        duration: 1,
                        delay: 2 + index * 0.2,
                      },
                    },
                  }}
                >
                  {lng.title}
                </motion.h3>
                <div className="h-2 w-full bg-gray-200 rounded-full mt-1">
                  <motion.div
                    className="h-full bg-indigo-500 rounded-full "
                    style={{ width: `${lng.level}%` }}
                    initial={{
                      scaleX: 0,
                      originX: 0,
                    }}
                    variants={{
                      visible: {
                        scaleX: 1,
                        transition: {
                          duration: 1,
                          delay: 2 + index * 0.2,
                        },
                      },
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

const ContactSection = () => {
  const form=useRef();


  const sendEmail=(e)=>{
    e.preventDefault();
    emailjs.sendForm('service_56vy98a','template_idfknha',form.current,'1VaWHdM1kjJShFLeb')
    .then((result)=>{
      console.log(result.text);
    },(error)=>{
      console.log(error.text);
    })
  }

  return (
    <Section>
      <h2 className="text-5xl font-bold " style={{marginTop:'46rem'}}>Contact me</h2>
      <div className=" p-8 rounded-md bg-white w-full max-w-full mt-10 h-96">
        <form ref={form} onSubmit={sendEmail}>
          <label for="name" className="font-medium text-gray-900 block mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
          />
          <label
            for="email"
            className="font-medium text-gray-900 block mb-1 mt-8"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
          />
          <label
            for="email"
            className="font-medium text-gray-900 block mb-1 mt-8"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            className="h-20 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
          />
          <button type="submit" className="bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16 ">
            Submit
          </button>
        </form>
      </div>
    </Section>
  );
};


const projects=[
  {
    title:"Blockchain EVoting",
    desc:"Block chain Based EVoting System using Hyper Ledger Fabric",
    link:" https://drive.google.com/file/d/1P8SquvY11QO6dufeVx6YFUAm-9SiHdZh/view?usp=sharing",
    git:"https://github.com/Anandakrishnan66/online-voting-system-main.git",

  },
  {
    title:"NFT Based Decentralized property raffle",
    desc:"Blockchain based property ownership transfer with the help of ethereum blockchain",
    link:"https://drive.google.com/file/d/1k8jjAdQ2BzNO8fye5TF4gGq-hoLvs0Va/view?usp=sharing",
    git:"https://github.com/College-Projects-CEK/OWN-IT"
    
  },


{
  title:"ECommerce WEbsite",
  desc:"A ecommerce wensite for clothing",
  link:"https://drive.google.com/file/d/1WuCHd3DVGDxUjPZsAe2bYQL6g-ILokGR/view?usp=sharing",
  git:"https://github.com/Anandakrishnan66/E_comm.git",


},
{
  title:"Gold App",
  desc:"App for gold trading",
  link:"https://drive.google.com/file/d/1MtqNAw_dMuNL7alwnqPfKnsxdfcXCixz/view?usp=drive_link",
  git:"https://github.com/Anandakrishnan66/GoldAPP.git"
}

]


const ProjectSection=()=>{
  return(
  <div className="flex "style={{marginTop:"42rem"}}  >
    <Section  >
    <h2 className="text-5xl font-bold mt-20">Projects</h2>
    <div 
    
    >
    { projects.map((proj,index)=>(
    <motion.div 
    whileHover={{
          
      scale:1.2,
      transition:{
        duration:1
      },
    }}
    whileTap={{
      scale:0.9
    }}
    
    >
  

      <Card sx={{maxWidth:500}} className="mt-10 bg-red-200 rounded " key={index} style={{borderRadius:"40px",boxShadow:"0px 10px 20px 2px teal"}}  >
        <CardMedia sx={{height:100,width:500}} 
        component='img'
        title={proj.title}
        src="forproj/evoting.png"
       
        
        
        
        />
        <CardContent style={{backgroundColor:"black",color:"white"}}>
          <Typography guttorBottom variant="h3" component="div" >
            {proj.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {proj.desc}
          </Typography>
        </CardContent>

        <CardActions  style={{backgroundColor:"black",color:"white"}}>
          <Button size="small" ><a href={proj.git}>Git</a></Button>
          <Button size="small" ><a href={proj.link}>ProjectVideo</a></Button>

        </CardActions>

        
      </Card>

</motion.div>
        ))}


</div>

    </Section>
    
    </div>
  )
}

const cert=[
  {
    img:"forproj/zindot.png",
    title:"Zindot Internship",
    desc:"Zindot Internship on web vulerability analysis"
  }
,
  {
    img:"forproj/Mirosoft.png",
    title:"Microsoft Student Certification",
    desc:"Microsoft certification for Ethical Hacking"
  },
  {
    img:"forproj/Internshala.png",
    title:"Internshala Ethical Hacking Training",
    desc:"Internship on Ethical Hacking"
  },
  {
    img:"forproj/devTown.png",
    title:"Server BootCamp",
    desc:"Server Authentication"
  },
 
]

const Certifications=()=>{
  return(
    <div className="flex flex-col" style={{marginTop:"35rem"}}  >
      
      
      <Section  >
      <h2 className="text-5xl font-bold mt-20">Certifications</h2>
      <div 
      >
      { cert.map((certificate,index)=>(
  
    
        <motion.div
        whileHover={{
          
          scale:1.3,
          transition:{
            duration:1.5
          },
        }}
        whileTap={{
          scale:0.9
        }}
         >
        <Card sx={{maxWidth:600}} className="mt-10 bg-red-200 rounded items-center " key={index} style={{borderRadius:"40px",boxShadow:"0px 10px 20px 2px teal"}} >
          <CardMedia sx={{height:200,width:300}} 
          component='img'
          title={certificate.title}
          src={certificate.img}
         
          
          
          
          />
          <CardContent style={{backgroundColor:"black",color:"white",height:"100px"}}>
            <Typography guttorBottom variant="h5" component="div" >
              {certificate.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {certificate.desc}
            </Typography>
          </CardContent>
  
      
  
          
        </Card>
        </motion.div>
  
          ))}

     <motion.div>
     {/* {
    img:"forproj/ITCES.png",
    title:"Paper Presentation",
    desc:`Paper presented on ITCES International <br/>
    conference on Blockchain E-voting using Hyperledger fabric`
  } */}

{/* <Card sx={{maxWidth:600}} className="mt-10 bg-red-200 rounded items-center " key={index} style={{borderRadius:"40px",boxShadow:"0px 10px 20px 2px teal"}} >
          <CardMedia sx={{height:200,width:300}} 
          component='img'
          title="Paper Presentation"
          src="forproj/ITCES.png"
         
          
          
          
          />
          <CardContent style={{backgroundColor:"black",color:"white",height:"100px"}}>
            <Typography guttorBottom variant="h5" component="div" >
            Paper Presentation Certificate
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Paper presented on ITCES International <br/>
              conference on Blockchain E-voting using Hyperledger fabric
            </Typography>
          </CardContent>
  
      
  
          
        </Card>
     </motion.div>
   */}

   </motion.div>

  </div>
  
      </Section>
      
      </div>
    )
      }