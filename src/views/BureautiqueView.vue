<template>
  <div>
    <main class="container">
      <section class="container__track">
        <div class="container__track__item">
          <h1>Formation</h1>
          <div class="container__track__item__content">
            <li>Chambery</li>
            <li>Annecy</li>
            <li>Savoie</li>
          </div>
          <div class="container__track__item__imageTxt">
            <div class="container__track__item__imageTxt__picture">
              <img src="@/assets/visuel_formation/icon/goal (1).png" alt="" />
              <p>Marketing</p>
            </div>
            <div class="container__track__item__imageTxt__picture">
              <img
                src="@/assets/visuel_formation/icon/online-marketing-red.png"
                alt=""
              />
              <p>Formation sur mesure</p>
            </div>
          </div>
          <div class="container__track__item__moovingTxt">
            <ul>
              <li>
                <div class="container__track__item__moovingTxt__container">
                  SUBSTANTIAL GAINFUL ACTIVITY<br />
                  <span>Are you making more than <strong>$1,260?</strong></span>
                </div>
              </li>
              <li>
                <div class="container__track__item__moovingTxt__container">
                  SEVERE?<br />
                  <span
                    >Do you have
                    <strong>Objective Medical Evidence?</strong></span
                  >
                </div>
              </li>
              <li>
                <div class="container__track__item__moovingTxt__container">
                  MEETS LESTING<br />
                  <span
                    >Are you properly matched to your work description?</span
                  >
                </div>
              </li>
              <li>
                <div class="container__track__item__moovingTxt__container">
                  PRESENT RELATIVE WORK<br />
                  <span
                    >Are you properly matched to your work description?</span
                  >
                </div>
              </li>
              <li>
                <div class="container__track__item__moovingTxt__container">
                  OTHER WORK<br />
                  <span>Can a Vocational Expert help you find other work?</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section class="container__track2">
        <div class="container__track2__bloxNpic">
          <div class="container__track2__bloxNpic__blox">
            <div class="container__track2__bloxNpic__blox__txt">
              <h2>
                Vous souhaitez acquérir des compétences et améliorer votre
                développement ?
              </h2>
              <hr />
              <p>
                Organisez vos données. Optimisez votre activité. Séduisez vos
                prospects grâce à une présentation efficace de vos produits.
                Fidélisez vos clients en créant vos outils de communication. La
                maitrise de la bureautique renforce votre productivité et votre
                efficacité professionnelle. Et la formation professionnelle
                continue vous permet de développer ces compétences, profitez-en
                !
              </p>
              <p>
                VF conseil & formation vous propose des formations au Pack
                Office, entièrement sur mesure, qui s'adaptent complètement à
                vos besoins spécifiques. Les sessions de formation sont
                organisées en inter, à Aix-les-Bains ou Chambéry, ou en intra,
                dans vos locaux, individuellement ou en groupe de 6 personnes
                maximum.
              </p>
              <button
                type="submit"
                class="container__track2__bloxNpic__blox__butt"
              >
                Contactez - Moi
              </button>
            </div>
          </div>
        </div>
        <button type="submit" class="container__track2__button">
          Cathalogue Formation
        </button>
      </section>
      <section class="container__track2">
        <div class="container__track2__bloxNpic">
          <div class="container__track2__bloxNpic__blox2">
            <img src="@/assets/visuel_bureautique/excel.svg" alt="" />
            <img src="@/assets/visuel_bureautique/word.svg" alt="" />
            <img src="@/assets/visuel_bureautique/powerpoint.svg" alt="" />
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style lang="scss" scoped>
@import "@/_variable.scss";
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

h1 {
  font-weight: bold;
  font-family: $fontfamilyRegular;
  @include centre;
}

h2 {
  font-weight: bold;
  color: $mainColor;
  @include centre;
  font-family: $fontfamilyRegular;
}

.container {
  display: flex;
  flex-direction: column;
  // border: 3px solid red;
  height: 100%;
  @include padGap;

  &__track {
    display: flex;
    flex-direction: row;
    @include padGap;
    @include centre;

    &__item {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      &__content {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-family: $fontfamilyRegular;
        // border: solid 2px green;
        @include padGap;
      }

      &__imageTxt {
        // border: solid 2px yellow;
        display: flex;
        flex-flow: row;
        justify-content: space-around;
        margin-top: 4vh;
        @include padGap;
        box-shadow: inset 0 0 2000px rgba(255, 255, 255, 0.5);
        backdrop-filter: blur(17.4px);
        background: rgba(203, 203, 203, 0.73);
        border-radius: 16px;
        border: $mainColor solid 1px;
        width: 95%;

        &__picture {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;
          width: 100%;
          @include padGap;

          img {
            width: 3rem;
            height: 50px;
          }
        }
      }

      &__moovingTxt {
        // background-color: pink;
        min-height: 80px;
        margin: auto;
        overflow: hidden;

        position: relative;
        width: 90%;
        margin-top: 5vh;

        ul {
          list-style: none;
          position: absolute;
          left: 0px;
          top: 0px;
          width: 9000px;
          transition: left 0.2s linear;
          -moz-transition: left 0.2s linear;
          -o-transition: left 0.2s linear;
          -webkit-transition: left 0.2s linear;
          animation: slide-animation 20s infinite;

          li {
            font-family: $fontfamilyMedium;
            float: inline-start;
            position: relative;
            width: 500px;
            // border: solid 3px black;
            display: inline-block;
            height: 200px;

            /* Content */
          }
        }

        ul:hover {
          animation-play-state: paused;
          animation-play-state: paused;
        }

        &__container {
          color: $mainColor;
          font-size: 1.8em;
          font-weight: 900;
          line-height: 1.1;
          margin: 0 auto;
          max-width: 550px;
          min-height: 180px;
          padding: 0;
          text-align: center;

          span {
            color: black;
            display: inline-block;
            font-size: 70%;
            font-weight: 300;
            line-height: 1.2;
          }
        }
      }

      /*** target hooks ****/

      @keyframes slide-animation {
        0% {
          opacity: 0;
        }

        2% {
          opacity: 1;
        }

        20% {
          left: 0px;
          opacity: 1;
        }

        22.5% {
          opacity: 0.6;
        }

        25% {
          left: -600px;
          opacity: 1;
        }

        45% {
          left: -600px;
          opacity: 1;
        }

        47.5% {
          opacity: 0.6;
        }

        50% {
          left: -1200px;
          opacity: 1;
        }

        70% {
          left: -1200px;
          opacity: 1;
        }

        72.5% {
          opacity: 0.6;
        }

        75% {
          left: -1800px;
          opacity: 1;
        }

        95% {
          opacity: 1;
        }

        98% {
          left: -1800px;
          opacity: 0;
        }

        100% {
          left: 0px;
          opacity: 0;
        }
      }
    }
  }

  &__track2 {
    display: flex;
    flex-direction: column;
    // border: 3px solid royalblue;
    margin-top: 5vh;

    @include padGap;
    @include centre;

    &__image2 {
      // border: solid 2px yellow;
      display: flex;
      justify-content: space-around;
      flex-flow: nowrap;
      margin-top: 4vh;
      width: 100%;
      @include padGap;
    }

    &__bloxNpic {
      display: flex;
      justify-content: center;
      @include padGap;

      &__blox {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        box-shadow: inset 0 0 2000px rgba(255, 255, 255, 0.5);
        backdrop-filter: blur(17.4px);
        background: rgba(203, 203, 203, 0.73);
        border-radius: 16px;
        -webkit-backdrop-filter: blur(17.4px);
        border: 1px solid rgba(203, 203, 203, 0.36);
        width: 90%;

        margin-top: 2vh;
        @include bloxCentre;
        font-family: $fontfamilyRegular;

        &__visu {
          display: flex;
          border-radius: 16px;
          height: 100%;
          width: 100%;
          border-radius: 16px 16px 0px 0px;
          @include borderMain;

          img {
            height: 100%;
            width: 100%;
            border-radius: 16px;
            border-radius: 16px 16px 0px 0px;
          }
        }

        &__txt {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          @include bloxCentre;
          @include padGap;

          h2 {
            font-weight: bold;
            color: $mainColor;
            font-family: $fontfamilyRegular;
          }

          hr {
            height: 3px;
            width: 90%;
            background: $mainColor;
            border: $mainColor;
          }
        }

        &__butt {
          background-color: $mainColor;
          color: white;
          width: 50%;
          border-radius: 16px;
          @include padGap;
          @include centre;
        }
      }

      &__blox2 {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        box-shadow: inset 0 0 2000px rgba(255, 255, 255, 0.5);
        backdrop-filter: blur(17.4px);
        background: rgba(203, 203, 203, 0.73);
        border-radius: 16px;
        -webkit-backdrop-filter: blur(17.4px);
        border: 1px solid rgba(203, 203, 203, 0.36);
        @include padGap;
        @include bloxCentre;
        font-family: $fontfamilyRegular;
        width: 70vw;

        img {
          width: 70px;
          height: 60px;
        }
      }
    }

    &__button {
      background-color: $mainColor;
      color: white;
      width: 90%;
      border-radius: 16px;
      margin-top: 10vh;
      @include padGap;
      @include centre;
    }
  }
}

//
// REsPONSIVE
//

@media (min-width: 810px) {
  h1 {
    font-weight: bold;
    font-family: $fontfamilyRegular;
    width: 100%;
  }

  .container {
    &__track {
      &__item {
        width: 100vw;
        display: flex;
        flex-direction: column;
        @include centre;

        &__content {
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          font-family: $fontfamilyRegular;
          // border: solid 2px green;
          width: 50%;
        }

        &__image {
          // border: solid 2px yellow;

          img {
            width: 40px;
            height: 50px;
            border: solide 2px red($color: #000000);
          }

          & :nth-child(3) {
            width: 40px;
            height: 50px;
          }
        }

        &__moovingTxt {
          display: flex;
          align-items: center;
          min-height: 80px;
          margin-top: 3vh;
          overflow: hidden;
          position: relative;
          width: 600px;

          ul {
            list-style: none;
            position: absolute;
            left: 0px;
            top: 0px;
            right: 0px;
            width: calc(600px * 5);
            transition: left 0.2s linear;
            -moz-transition: left 0.2s linear;
            -o-transition: left 0.2s linear;
            -webkit-transition: left 0.2s linear;

            li {
              font-family: $fontfamilyRegular;
              float: inline-start;
              position: relative;
              width: 600px;
              display: inline-block;
              height: 200px;

              /* Content */
            }
          }
        }
      }
    }

    &__track2 {
      // border: 3px solid royalblue;

      &__bloxNpic {
        &__blox {
          border: 1px solid $mainColor;
          width: 90%;
          height: 100%;
          margin-top: 2vh;
          gap: 0;
          padding: 0;
          @include bloxCentre;
          font-family: $fontfamilyRegular;

          &__visu {
            display: flex;
            align-items: stretch;
            height: 50vh;
            width: 100%;
            border-radius: 16px 16px 0px 0px;
            @include borderMain;

            img {
              height: 50vh;
              width: 100%;
              border-radius: 16px 16px 0px 0px;
              align-self: flex-start;
            }
          }

          &__txt {
            width: 100%;
            height: 50%;
          }

          &__butt {
            background-color: $mainColor;
            color: white;
            width: 20vw;
            border-radius: 16px;
            @include padGap;
            @include centre;
          }
        }

        &__blox2 {
          border: 1px solid $mainColor;
          width: 70vw;
        }
      }

      &__button {
        background-color: $mainColor;
        color: white;
        width: 90%;
        border-radius: 16px;
        margin-top: 5vh;
        @include padGap;
        @include centre;
      }
    }
  }
}

@media (min-width: 1516px) {
  h1 {
    font-weight: bold;
    font-family: $fontfamilyRegular;
    width: 100%;
    font-size: 1.5rem;
  }

  .container {
    &__track {
      &__item {
        width: 100vw;
        display: flex;
        flex-direction: column;
        @include centre;

        &__content {
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          font-family: $fontfamilyRegular;
          // border: solid 2px green;
          width: 50%;
        }
      }
    }

    &__track2 {
      &__bloxNpic {
        &__blox {
          display: flex;
          flex-direction: row;
          border: 1px solid $mainColor;
          margin-top: 2vh;
          @include bloxCentre;
          font-family: $fontfamilyRegular;
          width: 50%;

          &__visu {
            display: flex;
            align-items: stretch;
            height: 70vh;
            width: 50%;
            border-radius: 16px 0px 0px 16px;
            @include borderMain;

            img {
              border-radius: 16px 0px 0px 16px;
              align-self: flex-start;
              width: 100%;
              height: 100%;
            }
          }

          &__txt {
            @include centre;
            gap: 16px;
          }
        }

        &__blox2 {
          -webkit-backdrop-filter: blur(17.4px);
          @include borderMain;
          width: 70vw;

          img {
            width: 70px;
            height: 80px;
          }
        }
      }

      &__button {
        margin-top: 2vh;
        width: 50%;
      }
    }
  }
}
</style>

<script>
export default { name: "BureautiqueVue" };
</script>
