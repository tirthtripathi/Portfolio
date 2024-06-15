import React from "react";
import img1 from "../assets/projects/Project1.webp";
import img2 from "../assets/projects/Project2.webp";
import GitHubIcon from "@mui/icons-material/GitHub";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

export default function Projects({ setModal, setProjectNo }) {
  const navigateToLinksHandler = (value) => {
    window.location.href = value;
  };
  const ViewProjectHandler = (projectno) => {
    setProjectNo(projectno);
    setModal((value) => !value);
  };

  return (
    <div
      id="projects"
      className="px-[10%] max-[1300px]:px-[5%]  py-20 max-[455px]:py-10 bg-black text-white w-[100%]"
    >
      <div className=" font-bold text-4xl max-[1300px]:text-3xl max-[992px]:text-2xl">
        Projects
      </div>
      <div className="flex max-[940px]:flex-col mt-10 gap-4">
        <div className="relative max-[940px]:flex max-[940px]:justify-start">
          <img
            alt="Project"
            className="h-80 w-max max-[1500px]:h-64 max-[1140px]:h-52 max-[455px]:h-44 rounded-xl"
            src={img1}
          ></img>
          <div className="absolute bottom-0 max-[800px]:hidden  left-0">
            <Tooltip title="View Repository">
              <IconButton
                onClick={navigateToLinksHandler.bind(
                  this,
                  "https://github.com/tirthtripathi/Chatapp"
                )}
              >
                <GitHubIcon />
              </IconButton>
            </Tooltip>
          </div>
        </div>
        <div className="relative max-[940px]:flex max-[940px]:justify-end">
         <a href="https://panchayat-frn1.onrender.com/" target="_blank"><h1 className=" underline underline-offset-2 font-semibold text-2xl text-yellow-400">Panchayat</h1></a> 
          <p>Real time Chat app using MERN stack, Socket.io and ChakraUI</p><br/>
          <ul>
            <li>Real-timechat <b className=" text-yellow-500">(one-to-one and groupchats)</b></li>
            <li>Token based <b className=" text-yellow-500"> User authentication</b> using <b className=" text-yellow-500">JWT</b> .</li>
            <li>Admin capabilities to <b className=" text-yellow-500">add/remove members</b> from groups.</li>
            <li><b className=" text-yellow-500">Real-time notifications</b> and <b className=" text-yellow-500">typing status</b> for users.</li>
          </ul>
        </div>
      </div>
      
      <div className=" flex gap-4 max-[940px]:flex-col  mt-10 overflow-auto">
        <div className="relative max-[940px]:flex">
        <a href="https://miniproject-frontend-theta.vercel.app/" target="_blank">   <h1 className=" underline underline-offset-2 font-semibold text-2xl text-yellow-400">Schedule Buddy</h1> </a>
          <p>Time Table Generation using React.js, React-Router-Dom, TailwindCSS, Axios </p><br/> 
          <ul>
          
            <li><b className=" text-yellow-500">Dynamic</b> timetable generation tool.</li>
            <li> I was mainly working on frontend part where i created  <b className=" text-yellow-500">Responsive</b> and modern frontend design.</li>
            
            <li><b className=" text-yellow-500"> API handling </b>for adding departments, courses, teachers and sessions.</li>
          </ul>
        </div>
        <div className="relative max-[940px]:flex max-[940px]:justify-end">
          <img
            alt="Project"
            className="h-72 rounded-xl max-[1500px]:h-64 max-[1140px]:h-52 max-[455px]:h-44"
            src={img2}
          ></img>
          <div className="absolute bottom-0 max-[800px]:hidden ">
            <Tooltip title="View Repository">
              <IconButton
                onClick={navigateToLinksHandler.bind(
                  this,
                  "https://github.com/tirthtripathi/miniproject-frontend"
                )}
              >
                <GitHubIcon />
              </IconButton>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
}
