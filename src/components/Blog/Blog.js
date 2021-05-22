import React from "react";
import Footer from "../Home/Footer/Footer";
import Navbar from "../Shared/Navbar";
import "../Blog/Blog.css";

const Blog = () => {
  return (
    <div>
      <Navbar></Navbar>
      <section className="about blog-responsive" id="aboutPage">
        <div className="container-fluid">
          <div>
            <div>
              <h1
                style={{
                  textAlign: "center",
                  marginTop: "200px",
                  color: "white",
                }}
              >
                blog will come soon
              </h1>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Blog;
