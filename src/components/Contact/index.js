import React from 'react'
import {Parallax} from 'react-parallax'
import bgImage from '../../images/star-wars-backgrounds-26.png'
import './styles.css'

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form onSubmit={this.submitForm} action="https://formspree.io/mnqgopvp" method="POST">
        {/* <!-- add your custom form HTML here --> */}
        <Parallax bgImage={bgImage} strength={547}>
          <div className="row mb-200 bg-black opacity-50">
              <div class="col-lg-2 col-xl-3 p-0"></div>
          <div class="col-lg-8 col-xl-6 rounded bg-black mt-5 mb-5">
            <div class="row">
              <div class="col m-2 h3 text-red">
                <a id="ContactMe">
                Contact Me
                </a>
              </div>
            </div>
            <br />
            <label class="text-red">
              Name: <input class="rounded" name="name" type="text"/>
            </label>
            <br />
            <label class="text-red">
              Email: <input class="rounded" type="email" name="email"/>
            </label>
            <br />
            <p class="text-red">Message:</p>
            <p>
              <textarea class="pl-0 pt-0 w-100 rounded" rows="6" cols="50" name="message" type="text" placeholder="  Enter text here..."></textarea>
            </p>
          {status === "SUCCESS" ? <p className="h5 text-white">Form has been submitted, Thanks!</p> : <button className="pl-5 pr-5 button rounded text-red bg-black">Submit</button>}
          {status === "ERROR" && <p className="h5 text-white">Ooops! There was an error.</p>}
          </div>
          <div class="col-lg-2 col-xl-3 p-0"></div>
          </div>
        </Parallax>
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
