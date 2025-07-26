import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import {resumes} from "../../constants";
import ResumeCard from "~/components/ResumeCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Smart feedback for your dream job!" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar/>
    <section className="main-section">
      <div className="page-heading">
        <h1>Smart feedback for your dream job</h1>
        <h2>Drop your resume for an ATS score and improvement tips.</h2>
      </div>

    {resumes.length > 0 && (
        <div className="resumes-section">
          {resumes.map((resume) => (
              <ResumeCard key={resume.id} resume={resume}/>
          ))}
        </div>
    )}
    </section>



  </main>
}
