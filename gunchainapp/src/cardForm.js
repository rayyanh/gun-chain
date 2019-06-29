import React from "react";

function CardForm(props) {
  return (
    <div class="card text-left">
      <h5 class="card-header">{props.title}</h5>
      <div class="card-body">
        <h5 class="card-title">{props.head}</h5>
        <p class="card-text">{props.info}</p>
        <form>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Name</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder=""
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">
              Unique Serial for Gun
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder=""
            />
          </div>
        </form>

        <a href="#" class="btn btn-primary">
          Click Here
        </a>
      </div>
    </div>
  );
}

export default CardForm;
