import React, { useState } from "react";
import { Carousel } from "3d-react-carousal";
//import BeerRating from "./BeerRating";

export default function Product(props) {
  const [amount, setAmount] = useState(0);
  let onTap = false;

  /*
  const accordingHeaderH2 = document.querySelector("#accordionExample h2");
  const accordingHeaderBtn = document.querySelector("#accordionExample h2 button")

  if (accordingHeaderH2 != null) {
    if (props.name == "El Hefe") {
      accordingHeaderH2.setAttribute("id", "headingOne");
      accordingHeaderBtn.setAttribute("data-bs-target", "collapseOne");
      console.log(props.name);
      console.log("1");
    } else if (props.name == "Fairy Tale Ale") {
      accordingHeaderH2.setAttribute("id", "headingTwo");
      accordingHeaderBtn.setAttribute("data-bs-target", "collapseTwo");
      console.log(props.name);
      console.log("2");
    } else if (props.name == "GitHop") {
      accordingHeaderH2.setAttribute("id", "headingThree");
      accordingHeaderBtn.setAttribute("data-bs-target", "collapseThree");
      console.log(props.name);
      console.log("3");
    } else if (props.name == "Hollaback Lager") {
      accordingHeaderH2.setAttribute("id", "headingFour");
      accordingHeaderBtn.setAttribute("data-bs-target", "collapseFour");
      console.log(props.name);
      console.log("4");
    } else if (props.name == "Hoppily Ever After") {
      accordingHeaderH2.setAttribute("id", "headingFive");
      accordingHeaderBtn.setAttribute("data-bs-target", "collapseFive");
      console.log(props.name);
      console.log("5");
    } else if (props.name == "Mowintime") {
      accordingHeaderH2.setAttribute("id", "headingSix");
      accordingHeaderBtn.setAttribute("data-bs-target", "collapseSix");
      console.log(props.name);
      console.log("6");
    } else if (props.name == "Row 26") {
      accordingHeaderH2.setAttribute("id", "headingSeven");
      accordingHeaderBtn.setAttribute("data-bs-target", "collapseSeven");
      console.log(props.name);
      console.log("7");
    } else if (props.name == "Ruined Childhood") {
      accordingHeaderH2.setAttribute("id", "headingEight");
      accordingHeaderBtn.setAttribute("data-bs-target", "collapseEight");
      console.log(props.name);
      console.log("8");
    } else if (props.name == "Sleighride") {
      accordingHeaderH2.setAttribute("id", "headingNine");
      accordingHeaderBtn.setAttribute("data-bs-target", "collapseNine");
      console.log(props.name);
      console.log("9");
    } else if (props.name == "Steampunk") {
      accordingHeaderH2.setAttribute("id", "headingTen");
      accordingHeaderBtn.setAttribute("data-bs-target", "collapseTen");
      console.log(props.name);
      console.log("10");
    }
  }
  */

  function clickedPlus() {
    setAmount((prevState) => {
      return prevState + 1;
    });
  }

  function clickedMinus() {
    setAmount((prevState) => {
      return prevState - 1;
    });
  }

  function resetAmount() {
    setAmount((prevState) => {
      return prevState * 0;
    });
  }

  props.data.taps.forEach((tap) => {
    const tapBeer = tap.beer;
    if (tapBeer === props.name) {
      onTap = true;
      return onTap;
    }
  });

  let slides = [
    <div className="carousel" key={`${props.name}+1`}>
      <h2>Aroma</h2>
      <p>{props.description.aroma}</p>
    </div>,
    <div className="carousel" key={`${props.name}+2`}>
      <h2>Appearance</h2>
      <p>{props.description.appearance}</p>
    </div>,
    <div className="carousel" key={`${props.name}+3`}>
      <h2>Flavor</h2>
      <p>{props.description.flavor}</p>
    </div>,
    <div className="carousel" key={`${props.name}+4`}>
      <h2>Mouthfeel</h2>
      <p>{props.description.mouthfeel}</p>
    </div>,
  ];

  return (
    <article className="row pt-3">
      <div className="col-12 col-md-4">
        <img src="" alt=""></img>
      </div>
      <div className="col-12 col-md-8">
        <div className="row">
          <div className="col">
            <h2>{props.name}</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <p>{props.category}</p>
          </div>
          <div className="col-3">
            <p>Alc: {props.alc}</p>
          </div>
          <div className="col-3">
            <p>Hardcodet rating of 4.5</p>
          </div>
          <div className="col-3 text-end">
            <p>stk. 49,-</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>{props.description.overallImpression}</p>
          </div>
        </div>
        <div className="row">
          <div className="col d-flex justify-content-end">
            <button
              className="btn btn-primary"
              disabled={amount === 0}
              onClick={clickedMinus}
            >
              -
            </button>
            {amount}
            <button
              className="btn btn-primary"
              onClick={() => {
                clickedPlus();
              }}
              disabled={onTap === false}
            >
              +
            </button>
            <button
              onClick={() => {
                resetAmount();
                props.addToBasket(props, amount);
              }}
              disabled={amount === 0}
              className="btn btn-primary"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              View more
            </button>
          </h2>
          <ul className="dropdown-menu w-100"></ul>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <Carousel slides={slides} autoplay={false} interval={1000} />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
