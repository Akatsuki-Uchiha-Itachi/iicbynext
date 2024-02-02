import Image from "next/image";
import Navbar from './components/Navbar';
import Title from './components/Title';
import Footer from "./components/Footer";
import MeetTeam from "./components/MeetTeam";



export default function Home() {
  return (
    <main>
      <Navbar/>
      <Title/>
      <MeetTeam/>
      <Footer/>
    </main>
);
}
