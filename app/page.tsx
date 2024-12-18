import Cards from "./components/cards";
import Footer from "./components/footer";
import Nav from "./components/nav"
import Top from "./components/top";

export default function Home() {
  return (
    <main className="h-screen">
      <Nav />
      <Top />
      <Cards />
      <Footer />
    </main>
  );
}
