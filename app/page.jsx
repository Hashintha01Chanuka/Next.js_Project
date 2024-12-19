
import Feed from '@components/Feed';

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden"/>
        <span className="orange_gradient text-center">
            AI-Powered Prompts
        </span>
      </h1>
      <p className="desc text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, odio recusandae? Fuga nisi ducimus, nobis autem saepe ex accusamus incidunt? In corporis rem error odit culpa cum vero nisi cumque.
      </p>

      <Feed/>
    </section>
  )
}

export default Home
