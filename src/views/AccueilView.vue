<template>
  <div>
    <section class="container">
      <aside class="container__track">
        <div class="container__track__item">
          <h1>Formation en marketing et bureautique</h1>
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
        <h2>Formation en marketing et bureautique</h2>
        <div class="container__track2__content2">
          <li>Chambery</li>
          <li>Annecy</li>
          <li>Savoie</li>
        </div>
        <div class="container__track2__bloxNpic">
          <div class="container__track2__bloxNpic__blox">
            <p>
              On sait depuis longtemps que travailler avec du texte lisible et
              contenant du sens est source de distractions, et empêche de se
              concentrer sur la mise en page elle-même. L'avantage du Lorem
              Ipsum sur un texte générique comme 'Du texte. Du texte. D
            </p>
          </div>
          <img
            src="../assets/visuel_acceuil/teaching.png"
            class="container__track2__bloxNpic__picture"
            alt="Illustration d'une femme qui donne une leçon"
          />
        </div>
        <button type="submit" class="container__track2__button">
          En Savoir Plus
        </button>
        <div class="container__track2__image2">
          <img
            class="container__track2__image2__pic"
            src="../assets/visuel_acceuil/honet.svg"
            alt=""
            width="64"
          />
          <img
            class="container__track2__image2__pic"
            src="../assets/visuel_acceuil/phone.svg"
            alt=""
            width="64"
          />
        </div>
        <div class="container__track2__txt">
          <p>Proximité</p>
          <p>Ecoute</p>
        </div>
        <div class="container__track2__image2">
          <img
            class="container__track2__image2__pic"
            src="../assets/visuel_acceuil/trust.svg"
            alt=""
            width="64"
          />

          <img
            class="container__track2__image2__pic"
            src="../assets/visuel_acceuil/smile.svg"
            alt=""
            width="64"
          />
        </div>
        <div class="container__track2__txt">
          <p>Sur Mesure</p>
          <p>Plaisante</p>
        </div>
      </aside>
      <aside class="container__track2">
        <h2>Formations marketing communication commercial</h2>
        <div class="container__track2__content2">
          <li>Chambery</li>
          <li>Annecy</li>
          <li>Savoie</li>
        </div>
        <div class="container__track2__bloxNpic">
          <div class="container__track2__bloxNpic__blox">
            <p>
              On sait depuis longtemps que travailler avec du texte lisible et
              contenant du sens est source de distractions, et empêche de se
              concentrer sur la mise en page elle-même. L'avantage du Lorem
              Ipsum sur un texte générique comme 'Du texte. Du texte. D
            </p>
          </div>
          <img
            src="../assets/visuel_acceuil/online-courses.png"
            class="container__track2__bloxNpic__picture2"
            alt="Illustration d'une femme qui donne une leçon"
          />
        </div>

        <h2>Il Nous font Confiance</h2>
        <div class="container__track2__slider">
          <div class="container__track2__slider__trak">
            <div class="container__track2__slider__trak__slide"></div>
            <div class="container__track2__slider__trak__slide"></div>
            <div class="container__track2__slider__trak__slide"></div>
            <div class="container__track2__slider__trak__slide"></div>
            <div class="container__track2__slider__trak__slide"></div>
            <div class="container__track2__slider__trak__slide"></div>
            <div class="container__track2__slider__trak__slide"></div>
            <div class="container__track2__slider__trak__slide"></div>
          </div>
        </div>
      </aside>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import "../_variable.scss";
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
          width: 5vw;
          height: 5vh;
          border: solide 2px red($color: #000000);
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

    &__content2 {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      font-family: $fontfamilyRegular;
      width: 100%;
    }

    &__image2 {
      // border: solid 2px yellow;
      display: flex;
      justify-content: space-around;
      flex-flow: nowrap;
      margin-top: 4vh;
      width: 100%;
      @include padGap;

      &__pic2 {
        width: 64px;
        height: 64px;
      }
    }

    &__txt {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      width: 100%;
    }

    &__bloxNpic {
      display: flex;
      justify-content: center;
      @include padGap;

      &__blox {
        box-shadow: inset 0 0 2000px rgba(255, 255, 255, 0.5);
        backdrop-filter: blur(17.4px);
        background: rgba(203, 203, 203, 0.73);
        border-radius: 16px;
        -webkit-backdrop-filter: blur(17.4px);
        border: 1px solid rgba(203, 203, 203, 0.36);
        width: 90%;
        height: 30vh;
        margin-top: 2vh;
        @include padGap;
        @include bloxCentre;
        font-family: $fontfamilyRegular;
      }

      &__picture {
        width: 20vw;
        height: 20vh;
        display: none;
      }

      &__picture2 {
        width: 20vw;
        height: 20vh;
        display: none;
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
    width: 100%;
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

        &__content {
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          font-family: $fontfamilyRegular;
          width: 100%;
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

      &__content2 {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        font-family: $fontfamilyRegular;
      }

      &__bloxNpic {
        display: flex;
        flex-direction: row;
        justify-content: space-around;

        &__blox {
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          box-shadow: inset 0 0 2000px rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(17.4px);
          background: rgba(203, 203, 203, 0.73);
          border-radius: 16px;
          -webkit-backdrop-filter: blur(17.4px);
          border: 1px solid rgba(203, 203, 203, 0.36);
          width: 50%;
          height: 20vh;
          margin-top: 2vh;
          @include padGap;
          @include centre;
          font-family: $fontfamilyRegular;
          border: solid #dd214c 2px;
        }

        &__picture {
          width: 30vw;
          height: 25vh;
          display: unset;
        }

        &__picture2 {
          width: 35vw;
          height: 20vh;
          display: unset;
        }
      }

      @keyframes scroll {
        0% {
          transform: translateX(0);
        }

        100% {
          transform: translateX(-1064px);
        }
      }

      &__slider {
        display: flex;
        flex-direction: row;
        height: 20vh;
        width: 100%;
        // border: #dd214c solid 2px;

        &__trak {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          gap: 16px;
          width: 100%;
          // border: royalblue solid 2px;

          &__slide {
            animation: scroll 10s linear infinite;
            height: 250px;
            width: 250px;
            position: relative;
            background: center left 200%;
          }

          & :nth-child(1) {
            background-image: url("../assets/visuel_acceuil/smile.svg");
          }

          & :nth-child(2) {
            background-image: url("../assets/visuel_acceuil/smile.svg");
          }

          & :nth-child(3) {
            background-image: url("../assets/visuel_acceuil/smile.svg");
          }

          & :nth-child(4) {
            background-image: url("../assets/visuel_acceuil/smile.svg");
          }

          & :nth-child(5) {
            background-image: url("../assets/visuel_acceuil/smile.svg");
          }

          & :nth-child(6) {
            background-image: url("../assets/visuel_acceuil/smile.svg");
          }

          & :nth-child(7) {
            background-image: url("../assets/visuel_acceuil/smile.svg");
          }

          & :nth-child(8) {
            background-image: url("../assets/visuel_acceuil/smile.svg");
          }
        }
      }
    }
  }
}

@media (min-width: 1920px) {
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
    width: 100%;
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
        @include centre;

        &__image {
          width: 50vw;
        }

        &__content {
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          align-self: center;
          font-family: $fontfamilyRegular;
          width: 25vw;
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

      &__content2 {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-self: center;
        font-family: $fontfamilyRegular;
        width: 25vw;
      }

      &__image2 {
        // border: solid 2px yellow;
        display: flex;
        justify-content: space-around;
        flex-flow: nowrap;
        margin-top: 4vh;
        width: 100%;
        @include padGap;

        img {
          width: 5rem;
          height: 5rem;
        }
      }

      &__bloxNpic {
        display: flex;
        flex-direction: row;
        justify-content: space-arounds;
        width: 100%;

        &__blox {
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          box-shadow: inset 0 0 2000px rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(17.4px);
          background: rgba(203, 203, 203, 0.73);
          border-radius: 16px;
          -webkit-backdrop-filter: blur(17.4px);
          border: 1px solid rgba(203, 203, 203, 0.36);
          width: 35vw;
          height: 25vh;
          margin-top: 1vh;
          @include padGap;
          @include centre;
          font-family: $fontfamilyRegular;
          border: solid #dd214c 2px;
        }

        &__picture {
          width: 30vw;
          height: 40vh;
          display: unset;
        }

        &__picture2 {
          width: 25vw;
          height: 23vh;
          display: unset;
        }
      }

      &__button {
        background-color: $mainColor;
        color: white;
        width: 83%;
        border-radius: 16px;
        @include padGap;
      }
    }
  }
}
</style>

<script>
export default { name: "AcceuilVue" };
</script>
