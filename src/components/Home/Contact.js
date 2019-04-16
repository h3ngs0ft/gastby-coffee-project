import React from "react"
import Title from "../Globals/Title"

export default function Contact() {
  return (
    <section className="contact py-5">
      <Title title="Contact" />
      <div className="row">
        <div className="col-10 col-sm-8 col-md-6 mx-auto">
          <form action="https://formspree.io/h3ngs0ft@gmail.com" method="POST">
            {/* name */}
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                placeholder="john smith"
              />
            </div>
            {/* email */}
            <div className="form-group">
              <label htmlFor="email">email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                placeholder="john@email.com"
              />
            </div>
            {/* description */}
            <div className="form-group">
              <label htmlFor="description">Description</label>
             <textarea className="form-control" 
             name="description" id="description" 
             row="5" placeholder="your description here ..."></textarea>
            </div>
             {/* submit */}
             <button type="submit" className="btn btn-yellow
             btn-block text-capitalize mt-5">submit</button>
          </form>
        </div>
      </div>
    </section>
  )
}
