import React from "react";


const Blogs = () => {
  return (
    <div>
      <h1
        className="text-center shadow-sm w-50 p-3 mx-auto"
        style={{ backgroundColor: "whitesmoke" }}
      >
        {" "}
        Blog Section
      </h1>

      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-dark rounded p-3 my-2 ">
              <h3 className="text-white">
                Difference between javascript and nodejs{" "}
              </h3>
              <br />
              <p className="text-info">
                {" "}
                <b className="text-warning">Answer : </b>{" "}
                <small>
                  JavaScript is a simple programming language that runs in any
                  browser JavaScript Engine. Whereas Node JS is an interpreter
                  or running environment for a JavaScript programming language
                  that holds many excesses, it requires libraries that can
                  easily be accessed from JavaScript programming for better use.
                </small>
              </p>
            </div>

            <div className="col-md-12 bg-dark rounded p-3 my-2">
              <h3 className="text-white">
                When should you use nodejs and when should you use mongodb
              </h3>
              <br />
              <p className="text-info">
                {" "}
                <b className="text-warning">Answer : </b>{" "}
                <small>
                  MongoDB is a database engine. Code within some application or
                  server uses MongoDB to save, query or update data in a
                  database. There are many web servers built with nodejs that
                  will then use MongoDB for storing data.MongoDB offers an API
                  library that runs within a Nodejs application to give you
                  programmatic access to MongoDB so you can create databases and
                  then add, query, update or delete data from the MongoDB
                  database. MongoDB also has API libraries for other programming
                  environments such as Python, Java, etc...
                </small>
              </p>
            </div>

            <div className="col-md-12 bg-dark rounded p-3 my-2">
              <h3 className="text-white">
                What is the purpose of jwt and how does it work{" "}
              </h3>
              <br />
              <p className="text-info">
                {" "}
                <b className="text-warning">Answer : </b>
                <small>
                  JWT, or JSON Web Token, is an open standard used to share
                  security information between two parties — a client and a
                  server. Each JWT contains encoded JSON objects, including a
                  set of claims. JWTs are signed using a cryptographic algorithm
                  to ensure that the claims cannot be altered after the token is
                  issued.
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*
		 13.1 Difference between javascript and nodejs

13.2 When should you use nodejs and when should you use mongodb

13.3 Differences between sql and nosql databases.

13.4 What is the purpose of jwt and how does it work*/}
    </div>
  );
};
export default Blogs;
