import { Eye, ExternalLink } from "lucide-react";
import Image from "next/image";
import cms from '../../../../cms.json';

export const metadata = {
  title: 'Side projects',
}

export default async function SideProjects() {
  const data = cms["side-projects"];
  return(
    <div 
      className="absolute w-full grid grid-cols-3 py-4 h-full overflow-y-scroll scrollbar scrollbar-thumb-[#2B283B] scrollbar-track-transparent">
      { data.map(project => 
        <div 
          className="            
            bg-white 
            border 
            border-gray-200 
            rounded-lg 
            shadow 
            dark:bg-gray-800 
            dark:border-gray-700
            max-w-xs mb-12" key={project.id}>
          <div className="h-[150px] overflow-hidden">
            <Image className="rounded-t-lg" width={320} height={300} src={project.image} alt="" />
          </div>
          <div className="p-5">
              <a href={project.link} target="_blank" rel="noreferrer" >
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project.title}</h5>
              </a>
              <p className="h-[100px] mb-3 font-normal text-gray-700 dark:text-gray-400">{project.description}</p>
              <a target="_blank"         
                 rel="noreferrer" 
                 href={project.codelink} 
                 className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Check the code
                <Eye className="ml-2" size="15"/>
              </a>      
          </div>
        </div>
    )}
      
    </div>
  );
};
