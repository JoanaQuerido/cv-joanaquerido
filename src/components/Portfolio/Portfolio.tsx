import IMG1 from '../../assets/loja1.png'
import IMG2 from '../../assets/app.png'

import './portfolio.scss'

interface Project {
  id: number
  title: string
  img: string
  description: string
  technologies: string
  link: string
  github: string
}

const Portfolio = () => {
  const soloProjects: Project[] = [
    {
      id: 1,
      title: 'Online Store',
      img: IMG1,
      description:
        'GamingStore app that allows users to purchase gaming-related products and provides an administration backoffice. Users can easily browse the catalog, make purchases, and track their orders. The administration backoffice enables efficient management of inventory, order control, and other business operations.',
      technologies: 'React | Redux | Node.js | MongoDB | Express.js | CSS',
      link: '',
      github: '',
    },
    {
      id: 2,
      title: 'Automated Store Product Management',
      img: IMG2,
      description:
        'Automated Store Product Management app empowers users to effortlessly create and customize the product management section of an online store through a user-friendly form. With this app, users can easily set up and manage their products, enabling seamless operations for their online business.',
      technologies: 'React | Redux | Node.js | MongoDB | Express.js | CSS',
      link: '',
      github: '',
    },
  ]

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Portfolio
