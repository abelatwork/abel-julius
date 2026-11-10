// @copyright 2026 Abel-Julius
// @license Apache-2.0

import Header from "./components/Header";
import Hero from "./components/Hero";
import Welcome from "./components/Welcome";
import ProfileCard from "./components/ProfileCard";
import Work from "./components/Work";
import Stack from "./components/Stack";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Container from "./components/ui/Container";

const App = () => (
  <>
    <Header />

    <main>
      <div id="welcome">
        <Hero />
        <Welcome />
      </div>

      <Container className="py-8 lg:pt-10">
        <div className="grid gap-6 lg:grid-cols-[336px_minmax(0,1fr)] lg:items-start">
          <ProfileCard />
          <Work />
        </div>

        <Stack />
        <Reviews />
        <Contact />
      </Container>
    </main>

    <Footer />
  </>
);

export default App;
