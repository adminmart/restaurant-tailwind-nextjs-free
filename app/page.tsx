import Banner from './components/Banner/index';
import Features from './components/Work/index';
import Cook from './components/Cook/index';
import Expert from './components/Expert/index';
import Gallery from './components/Gallery/index';
import Newsletter from './components/Newsletter/Newsletter';



export default function Home() {
  return (
    <main>
      <Banner />
      <Features />
      <Cook />
      <Expert />
      <Gallery />
      <Newsletter />
    </main>
  )
}
