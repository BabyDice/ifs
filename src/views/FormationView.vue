<template>
  <div>
    <section class="container">
      <aside class="container__track">
        <div class="container__track__item">
          <h1>Formation</h1>
          <div class="container__track__item__content">
            <li>Chambery</li>
            <li>Annecy</li>
            <li>Savoie</li>
          </div>
          <div class="container__track__item__image">
            <img src="../assets/visuel_acceuil/work.svg" alt="" />
            <img src="../assets/visuel_acceuil/teaching.svg" alt="" />
            <img src="../assets/visuel_acceuil/location.svg" alt="" />
          </div>
        </div>
      </aside>
      <aside class="container__track2">
        <div class="container__track2__bloxNpic">
          <div class="container__track2__bloxNpic__blox">
            <div class="container__track2__bloxNpic__blox__visu">
              <span>
                <img
                  src="../assets/visuel_formation/colleagues-working-together-on-project.jpg"
                  alt=""
                />
              </span>
            </div>
            <div class="container__track2__bloxNpic__blox__txt">
              <h2>
                Vous souhaitez acquérir des compétences et améliorer votre
                développement ?
              </h2>
              <hr />
              <p>
                Je construis toutes les formations sur mesure en fonction de vos
                besoins pour vous accompagner dans votre projet professionnel ou
                personnel. C'est pourquoi, j'analyse vos demandes spécifiques
                lors d'un premier rendez-vous. Puis, je vous propose un
                programme de formation entièrement personnalisé en fonction de
                vos acquis et de vos objectifs.
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
      </aside>
      <aside class="container__track2">
        <div class="container__track2__bloxNpic">
          <div class="container__track2__bloxNpic__blox2">
            <h2>Public Ciblé</h2>
            <hr />
            <p>
              Quiconque souhaitant approfondir ses connaissances. Ainsi que
              quiconque doit utiliser Word, Excel, Powerpoint, dans un contexte
              professionnel ou personnel.
            </p>
            <h2>Comment financer votre formation ?</h2>
            <hr />
            <h2>Méthodes pédagogiques</h2>
            <hr />
            <p>
              Apports théoriques Ateliers pratiques à hauteur de 80% du temps de
              la formation
            </p>
            <div>
              <p>
                Que vous soyez salarié, entrepreneur ou demandeur d’emploi,
                plusieurs dispositifs vous permettent d’accéder à la formation.
              </p>
              <p>
                En effet, Informatique Formation Sécurité est : enregistré en
                tant qu'organisme de formation professionnelle sous le numéro 84
                73 0197573 auprès de la DREETS de la région Auvergne-Rhône-Alpes
                (cet enregistrement ne vaut pas agrément de l'Etat).
              </p>
            </div>
          </div>
        </div>

        <h2>Il Nous font Confiance</h2>

        <div class="container__track2__wrapper">
          <div class="container__track2__wrapper__slider">
            <div class="container__track2__wrapper__slider__slide">
              <img src="@/assets/visuel_formation/logo/logo_aec.png" alt="" />
            </div>
            <div class="container__track2__wrapper__slider__slide">
              <img
                src="@/assets/visuel_formation/logo/logo_challes_les-eaux.png"
                alt=""
              />
            </div>
            <div class="container__track2__wrapper__slider__slide">
              <img src="@/assets/visuel_formation/logo/logo_ciat.png" alt="" />
            </div>
            <div class="container__track2__wrapper__slider__slide">
              <img
                src="@/assets/visuel_formation/logo/logo_ecole_aries.png"
                alt=""
              />
            </div>
            <div class="container__track2__wrapper__slider__slide">
              <img src="@/assets/visuel_formation/logo/logo_egc.jpg" alt="" />
            </div>
            <div class="container__track2__wrapper__slider__slide">
              <img src="@/assets/visuel_formation/logo/logo_esgi.jpg" alt="" />
            </div>
            <div class="container__track2__wrapper__slider__slide">
              <img
                src="@/assets/visuel_formation/logo/logo_euro_meta.png"
                alt=""
              />
            </div>
            <div class="container__track2__wrapper__slider__slide">
              <img
                src="@/assets/visuel_formation/logo/logo_gobolins_ecole.png"
                alt=""
              />
            </div>
            <div class="container__track2__wrapper__slider__slide">
              <img
                src="@/assets/visuel_formation/logo/logp_photo_watt.jpg"
                alt=""
              />
            </div>
            <div class="container__track2__wrapper__slider__slide">
              <img
                src="@/assets/visuel_formation/logo/logo_ingeos.jpg"
                alt=""
              />
            </div>
            <div class="container__track2__wrapper__slider__slide">
              <img
                src="@/assets/visuel_formation/logo/logo_inseec.png"
                alt=""
              />
            </div>
            <div class="container__track2__wrapper__slider__slide">
              <img
                src="@/assets/visuel_formation/logo//logo_opinel.png"
                alt=""
              />
            </div>
            <div class="container__track2__wrapper__slider__slide">
              <img
                src="@/assets/visuel_formation/logo//logo_opinel.png"
                alt=""
              />
            </div>
            <div class="container__track2__wrapper__slider__slide">
              <img
                src="@/assets/visuel_formation/logo//logo_opinel.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </aside>
    </section>
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

      &__content {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-family: $fontfamilyRegular;
        // border: solid 2px green;
      }

      &__image {
        // border: solid 2px yellow;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
        margin-top: 4vh;
        @include padGap;

        img {
          width: 10vw;
          height: 10vh;
          border: solide 2px red($color: #000000);
        }

        & :nth-child(3) {
          width: 20vw;
          height: 7vh;
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

          &__butt {
            background-color: $mainColor;
            color: white;
            width: 20vw;
            border-radius: 16px;
            @include padGap;
            @include centre;
          }
        }

        h2 {
          font-weight: bold;
          color: $mainColor;
          @include centre;
          font-family: $fontfamilyRegular;
        }

        hr {
          height: 3px;
          width: 90%;
          background: $mainColor;
          border: $mainColor;
        }

        &__butt {
          background-color: $mainColor;
          color: white;
          width: 70%;
          border-radius: 16px;
          @include padGap;
          @include centre;
        }
      }

      &__blox2 {
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
        @include padGap;
        @include bloxCentre;
        font-family: $fontfamilyRegular;

        h2 {
          font-weight: bold;
          color: $mainColor;
          @include centre;
          font-family: $fontfamilyRegular;
        }

        hr {
          height: 3px;
          width: 90%;
          background: $mainColor;
          border: $mainColor;
        }

        div {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
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

    @keyframes scroll {
      0% {
        transform: translateX(0);
      }

      100% {
        transform: translateX(-1200px);
      }
    }

    &__wrapper {
      background: white;
      width: 90%;
      height: 80px;
      border-radius: $radius-24;
      position: relative;
      box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.125);

      overflow: hidden;
      margin: auto;

      &::before,
      &::after {
        height: 150px;
        width: 50px;
        position: absolute;
        content: "";
        @include whiteGradient;
        z-index: 2;
      }

      &::before {
        top: 0;
        left: 0;
      }

      &::after {
        top: 0;
        right: 0;
        transform: rotateZ(180deg);
      }

      &__slider {
        margin: 10px;
        width: calc(150px * 14);
        display: flex;
        gap: 16px;
        animation: scroll 20s linear infinite;

        &__slide {
          height: 100px;
          width: 150px;

          img {
            height: 60px;
            width: 50px;
          }
        }
      }
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
          display: flex;
          flex-flow: row wrap;
          justify-content: space-around;
          @include padGap;
          width: 100%;

          img {
            width: 10vw;
            height: 10vh;
            border: solide 2px red($color: #000000);
          }

          & :nth-child(3) {
            width: 10vw;
            height: 7vh;
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
          border: 1px solid $mainColor;
          width: 90%;
          height: 100vh;
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
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            width: 100%;
            height: 50%;
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

            &__butt {
              background-color: $mainColor;
              color: white;
              width: 20vw;
              border-radius: 16px;
              @include padGap;
              @include centre;
            }
          }
        }

        &__blox2 {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          box-shadow: inset 0 0 2000px rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(17.4px);
          background: rgba(203, 203, 203, 0.73);
          border-radius: 16px;
          -webkit-backdrop-filter: blur(17.4px);
          border: 1px solid $mainColor;
          width: 90%;
          height: 100vh;
          margin-top: 2vh;
          @include padGap;
          @include bloxCentre;
          font-family: $fontfamilyRegular;

          h2 {
            font-weight: bold;
            color: $mainColor;
            @include centre;
            font-family: $fontfamilyRegular;
          }

          hr {
            height: 3px;
            width: 90%;
            background: $mainColor;
            border: $mainColor;
          }

          div {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
        }
      }

      &__button {
        background-color: $mainColor;
        color: white;
        width: 90%;
        border-radius: 16px;
        margin-top: 2vh;
        @include padGap;
        @include centre;
      }

      @keyframes scroll {
        0% {
          transform: translateX(0);
        }

        100% {
          transform: translateX(-1200px);
        }
      }

      &__wrapper {
        display: unset;
        background: white;
        width: 90%;
        height: 80px;
        border-radius: $radius-24;
        position: relative;
        box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.125);

        overflow: hidden;
        margin: auto;

        &::before,
        &::after {
          display: unset;
          height: 150px;
          width: 50px;
          position: absolute;
          content: "";
          @include whiteGradient;
          z-index: 2;
        }

        &::before {
          display: unset;
          top: 0;
          left: 0;
        }

        &::after {
          display: unset;
          top: 0;
          right: 0;
          transform: rotateZ(180deg);
        }

        &__slider {
          display: unset;
          margin: 10px;
          width: calc(150px * 14);
          display: flex;
          gap: 16px;
          animation: scroll 20s linear infinite;

          &__slide {
            display: unset;
            height: 100px;
            width: 150px;

            img {
              display: unset;
              height: 60px;
              width: 50px;
            }
          }
        }
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
          display: flex;
          flex-flow: row wrap;
          justify-content: space-around;
          @include padGap;
          width: 100%;

          img {
            width: 10vw;
            height: 10vh;
            border: solide 2px red($color: #000000);
          }

          & :nth-child(3) {
            width: 10vw;
            height: 7vh;
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

      &__bloxNpic {
        display: flex;
        justify-content: center;
        @include padGap;

        &__blox {
          display: flex;
          flex-flow: column wrap;
          justify-content: space-around;
          box-shadow: inset 0 0 2000px rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(17.4px);
          background: rgba(203, 203, 203, 0.73);
          border-radius: 16px;
          -webkit-backdrop-filter: blur(17.4px);
          border: 1px solid $mainColor;
          width: 90%;
          height: 70vh;
          margin-top: 2vh;
          gap: 0;
          padding: 0;
          @include bloxCentre;
          font-family: $fontfamilyRegular;

          &__visu {
            display: flex;
            align-items: stretch;
            height: 70vh;
            width: 50%;
            border-radius: 16px 0px 0px 16px;
            @include borderMain;

            img {
              height: 100%;
              width: 100%;
              border-radius: 16px 0px 0px 16px;
              align-self: flex-start;
            }
          }

          &__txt {
            width: 50%;
            height: 70vh;
            @include centre;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            gap: 16px;

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

            &__butt {
              background-color: $mainColor;
              color: white;
              width: 20vw;
              border-radius: 16px;
              @include padGap;
              @include centre;
            }
          }
        }

        &__blox2 {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          box-shadow: inset 0 0 2000px rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(17.4px);
          background: rgba(203, 203, 203, 0.73);
          border-radius: 16px;
          -webkit-backdrop-filter: blur(17.4px);
          @include borderMain;
          width: 90%;
          height: 100vh;
          margin-top: 2vh;
          @include padGap;
          @include bloxCentre;
          font-family: $fontfamilyRegular;

          h2 {
            font-weight: bold;
            color: $mainColor;
            @include centre;
            font-family: $fontfamilyRegular;
          }

          hr {
            height: 3px;
            width: 90%;
            background: $mainColor;
            border: $mainColor;
          }

          div {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
        }
      }

      &__button {
        background-color: $mainColor;
        color: white;
        width: 90%;
        border-radius: 16px;
        margin-top: 2vh;
        @include padGap;
        @include centre;
      }

      @keyframes scroll {
        0% {
          transform: translateX(0);
        }

        100% {
          transform: translateX(-1200px);
        }
      }

      &__wrapper {
        background: white;
        width: 90%;
        height: 80px;
        border-radius: $radius-24;
        position: relative;
        box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.125);

        overflow: hidden;
        margin: auto;

        &::before,
        &::after {
          height: 150px;
          width: 50px;
          position: absolute;
          content: "";
          @include whiteGradient;
          z-index: 2;
        }

        &::before {
          top: 0;
          left: 0;
        }

        &::after {
          top: 0;
          right: 0;
          transform: rotateZ(180deg);
        }

        &__slider {
          margin: 10px;
          width: calc(150px * 14);
          display: flex;
          gap: 16px;
          animation: scroll 20s linear infinite;

          &__slide {
            height: 100px;
            width: 150px;

            img {
              height: 60px;
              width: 50px;
            }
          }
        }
      }
    }
  }
}
</style>

<script>
export default { name: "FormationVue" };
</script>
