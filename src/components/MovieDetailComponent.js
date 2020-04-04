import React, { Component } from "react";
import BoxCommentComponent from "./BoxCommentComponent";

class MovieDetailComponent extends Component {
  render() {
    return (
      <div className="container">
        <h1 class="my-4">Ký Sinh Trùng</h1>

        <div class="row">
          <div class="col-md-8">
            <img class="img-fluid" src="https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX182_CR0,0,182,268_AL_.jpg" alt="" />
          </div>

          <div class="col-md-4">
            <h3 class="my-3">Movie information</h3>
            <p>
              A poor family, the Kims, con their way into becoming the servants of a rich family, the Parks. But their easy\n 
              life gets complicated when their deception is threatened with exposure.
            </p>
            <h3 class="my-3">Stars</h3>
            <ul>
              <li>Kang-ho Song</li>
              <li>Sun-kyun Lee</li>
              <li>Yeo-jeong Jo</li>
            </ul>
          </div>
        </div>
        <BoxCommentComponent />
      </div>
    );
  }
}
export default MovieDetailComponent;
