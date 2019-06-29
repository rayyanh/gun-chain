import React from "react";

function Card(props) {
  const propFinal = props.button;
  return (
    // <div
    //   className="card text-white bg-secondary mb-3"
    //   style={{ maxWidth: "18rem" }}
    // >
    //   <div className="card-header">{props.butt}</div>
    //   <div className="card-body">
    //     <h5 className="card-title">Success card title</h5>
    //     <p className="card-text">
    //       Some quick example text to build on the card title and make up the
    //       bulk of the card's content.
    //     </p>
    //   </div>
    // </div>

    <div class="card text-left">
      <h5 class="card-header">{props.title}</h5>
      <div class="card-body">
        <h5 class="card-title">{props.head}</h5>
        <p class="card-text">{props.info}</p>
        <button class="btn btn-primary" onClick={propFinal}>
          Click Here
        </button>
      </div>
    </div>
  );
}

export default Card;
