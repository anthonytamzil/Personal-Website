import { ProjectAbout, CanvasComp, ProjectNavbar } from "../components";

export default function Canvas() {
  return (
    <div className="relative z-0 bg-primary overflow-x-hidden">
      <div className="h-[80px]">
        <ProjectNavbar />
      </div>
      <ProjectAbout />
      <CanvasComp/>
      <p className="text-center text-xs mb-2 text-gray-500">Made by Anthony Tamzil</p>
    </div>
  )
}