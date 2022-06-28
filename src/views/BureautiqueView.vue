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
            <img src="@/assets/visuel_formation/icon/goal (1).png" alt="" />

            <img
              src="@/assets/visuel_formation/icon/online-marketing-red.png"
              alt=""
            />
          </div>
        </div>
      </aside>
      <aside class="container__track2">
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
      </aside>
      <aside class="container__track2">
        <div class="container__track2__bloxNpic">
          <div class="container__track2__bloxNpic__blox2"></div>
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
        @include padGap;
      }

      &__image {
        // border: solid 2px yellow;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
        margin-top: 4vh;
        @include padGap;
        @include centre;
        box-shadow: inset 0 0 2000px rgba(255, 255, 255, 0.5);
        backdrop-filter: blur(17.4px);
        background: rgba(203, 203, 203, 0.73);
        border-radius: 16px;
        border: $mainColor solid 1px;
        width: 30%;

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
      @include centre;
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
        width: calc(100px * 28);
        display: flex;
        justify-content: space-between;
        @include centre;
        gap: 16px;
        animation: scroll 60s linear infinite;

        &__slide {
          height: 5vh;
          width: 100px;
          @include centre;

          img {
            height: 100%;
            width: 100%;
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
      }
    }

    &__track2 {
      // border: 3px solid royalblue;

      &__bloxNpic {
        &__blox {
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
              border-radius: 16px 0px 0px 16px;
              align-self: flex-start;
              width: 100%;
              height: 100%;
            }
          }

          &__txt {
            width: 50%;
            height: 70vh;
            @include centre;
            gap: 16px;
          }
        }

        &__blox2 {
          -webkit-backdrop-filter: blur(17.4px);
          @include borderMain;

          height: 100vh;
        }
      }

      &__button {
        margin-top: 2vh;
      }
    }
  }
}
</style>

<script>
export default { name: "BureautiqueVue" };
</script>
