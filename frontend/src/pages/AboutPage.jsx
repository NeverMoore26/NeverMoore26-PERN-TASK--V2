import { Card } from "../components/ui";

function AboutPage() {
  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold text-center my-8">About Us</h1>
      <div className="grid md:grid-cols-3 gap-4">
        <Card>
          <h2 className="text-2xl font-bold mb-2">Por qué se hizo</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, eius!</p>
        </Card>
        <Card>
          <h2 className="text-2xl font-bold mb-2">Para qué se hizo</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit.</p>
        </Card>
        <Card>
          <h2 className="text-2xl font-bold mb-2">Para quién se hizo</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.</p>
        </Card>
      </div>
    </div>
  )
}

export default AboutPage;
