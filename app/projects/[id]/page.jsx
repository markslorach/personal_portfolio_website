import { NavBar } from "@/app/components/NavBar";
import config from "@/app/config";
import ImageSlider from "@/app/components/ImageSlider";

async function getProject(id) {
    const requestOptions = {
      Headers: {
        Authorization: `Bearer ${process.env.API_TOKEN}`,
      },
    };
  
    const res = await fetch(
        `${config.api}/api/portfolios/${id}?populate=*`, { next: { revalidate: 60 } },
        requestOptions
      );
      return res.json(); 
  }

export default async function ProjectDetails({params}) {
    const project = await getProject(params.id)

  return (
    <main>
        <div className="flex justify-center px-16">
        <div className="w-[680px] flex flex-col">
          <NavBar/>
          <div className="flex justify-center flex-col">
            <ImageSlider featureImage={`${config.api}${project.data.attributes.FeatureImage.data.attributes.url}`}/>
          <div className="pt-20 pb-10">
          </div>
          <h1 className="text-2xl font-semibold mb-1 text-black/70 dark:text-white/80 tracking-wide">{project.data.attributes.Title}</h1>
          <p className="py-5 text-base font-light tracking-wide leading-relaxed	text-white/80">{project.data.attributes.Content}</p>
          </div>
        </div>
      </div>  
    </main> 
  )
};