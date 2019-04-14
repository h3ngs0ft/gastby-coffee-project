import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"
export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
      <Title title="our story"/>
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted md-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Doloribus libero, tempore quas eveniet sint sit voluptates quos
              unde officia vero harum, atque soluta. Fugit deleniti, quaerat
              quos dignissimos nihil eum sit repellat dicta aspernatur
              recusandae repudiandae tempora velit earum doloremque commodi
              praesentium iusto qui, eveniet ipsam blanditiis est perferendis?
              Reiciendis id, architecto obcaecati omnis dolore doloremque
              possimus at, adipisci, cum ipsa voluptatum. Nihil exercitationem
              quaerat odit eum ullam fuga recusandae repellendus aut adipisci
              ad, asperiores porro vero reiciendis impedit quibusdam corrupti
              natus, maxime tempore, minus enim autem cupiditate? Rerum
              inventore odio officia fugiat pariatur commodi distinctio delectus
              deserunt incidunt dolor.
            </p>
            <Link to="/about/">
            <button className="btn text-uppercase btn-yellow">about page</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
