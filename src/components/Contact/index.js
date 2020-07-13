import React from 'react'
import {Parallax} from 'react-parallax'
import bgImage from '../../images/star-wars-backgrounds-26.png'
import './styles.css'

export default function Contact() {
    return (
      <Parallax bgImage={bgImage} strength={550}>
        <div className="row mb-200 bg-black opacity-80">
            <div class="col-lg-2 col-xl-3"></div>
        <div class="col-lg-8 col-xl-6 rounded bg-black mt-5">
          <div class="row">
            <div class="col m-2 h3 text-red">
              Contact Me
            </div>
          </div>
          <br />
          <form class="text-red" id="usrform">
            Name: <input class="rounded" type="text" name="usrname" />
          </form>
          <br />
          <form class="text-red" id="usrform">
            Email: <input class="rounded" type="text" name="usrname" />
          </form>
          <br />
          <p class="text-red">Message:</p>
          <p>
            <textarea class="pl-0 pt-0 w-100 rounded" rows="6" cols="50" name="comment" form="usrform">  Enter text here...</textarea>
          </p>
          <input type="submit" class="mb-4 bg-red"/>
        </div>
        <div class="col-lg-2 col-xl-3"></div>
        </div>
      </Parallax>
    )
}
