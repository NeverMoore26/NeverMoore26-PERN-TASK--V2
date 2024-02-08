import { Card } from "../components/ui";

function AboutPage() {
  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold text-center my-8">About Us</h1>
      <div className="grid md:grid-cols-3 gap-4">
        <Card>
          <h2 className="text-2xl font-bold mb-2">Por qué se hizo</h2>
          <p>En el 2024, después de identificar una brecha significativa en el mercado de soluciones tecnológicas educativas durante sus estudios en Pucetec, Gonzalo Proaño decidió emprender un proyecto revolucionario. Observando cómo las instituciones educativas luchaban con plataformas en línea que no se adaptaban bien a las necesidades específicas de aprendizaje a distancia, Gonzalo vio una oportunidad. Su motivación era clara: desarrollar una plataforma educativa más intuitiva y accesible que pudiera personalizarse para satisfacer las variadas necesidades de estudiantes y profesores, mejorando así la experiencia de aprendizaje en línea. Este proyecto no solo era un desafío personal para Gonzalo, sino también una forma de contribuir significativamente al sector educativo, facilitando un entorno de aprendizaje más eficaz y agradable.!</p>
        </Card>
        <Card>
          <h2 className="text-2xl font-bold mb-2">Para qué se hizo</h2>
          <p>La plataforma, denominada EduTech, se diseñó con el propósito de transformar la educación en línea. Al integrar tecnologías avanzadas como la inteligencia artificial y el análisis de datos, EduTech busca personalizar la experiencia de aprendizaje, adaptándose a los estilos y ritmos individuales de los estudiantes. Además, proporciona herramientas valiosas para los docentes, permitiéndoles monitorear el progreso de sus estudiantes en tiempo real y ajustar sus métodos de enseñanza según sea necesario. La visión de Gonzalo era crear un sistema que no solo facilitara la gestión del contenido educativo sino que también incentivara una mayor interacción y compromiso entre estudiantes y profesores..</p>
        </Card>
        <Card>
          <h2 className="text-2xl font-bold mb-2">Para quién se hizo</h2>
          <p>EduTech fue diseñado pensando especialmente en las instituciones educativas de tamaño mediano que enfrentan dificultades para implementar soluciones de aprendizaje en línea debido a restricciones presupuestarias o falta de infraestructura tecnológica. Sin embargo, la flexibilidad de la plataforma la hace igualmente adecuada para una amplia gama de usuarios, desde escuelas primarias hasta universidades. La misión de Gonzalo era asegurar que EduTech fuera accesible no solo para las instituciones educativas establecidas sino también para los educadores independientes y los estudiantes autodidactas, proporcionando así una herramienta valiosa para mejorar el acceso a la educación de calidad para todos..</p>
        </Card>
      </div>
    </div>
  )
}

export default AboutPage;
