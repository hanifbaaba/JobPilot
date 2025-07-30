import Guide from "./Components/Guide/page";
import Header from "./Components/Header/page";
import Hero from "./Components/Hero/page";
import Navbar from "./Components/Navbar/page";
import Vacancies from "./Components/Vacancies/page";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Header />
      <Hero />
      <Vacancies />
      <Guide />
    </>
  );
}
