<template>
  <div id="component-welcome" class="welcome">
    <p class="welcome__thanks">Thanks for visiting my website!</p>
    <p>
      <span class="welcome__icon"><i class="fab fa-facebook-square"></i></span>
      If you’d like to learn about when I’m playing next, please visit my <a href="https://www.facebook.com/traviswinkleymusic/" target="_blank">Facebook&nbsp;page&nbsp;<i class="fas fa-external-link-alt"></i></a>.
    </p>

    <hr />

    <p>
      <span class="welcome__icon"><i class="fas fa-heart"></i></span>
      If you’re interested in learning more about my wedding services, you can find me on <a href="https://www.theknot.com/marketplace/travis-winkley-acoustic-performer-middletown-ct-569259" target="_blank">The&nbsp;Knot&nbsp;<i class="fas fa-external-link-alt"></i></a>.
    </p>

    <hr />

    <p>
      <span class="welcome__icon"><i class="fas fa-comments"></i></span>
      If you’d like to contact me for booking, please email me at
      <a href="mailto:traviswinkley@hotmail.com">traviswinkley@hotmail.com</a>
      or call
      <a href="tel:1-860-575-3119">1-860-575-3119</a>.
    </p>
  </div>
</template>

<style lang="scss">
.welcome {
  background: rgba(white, 0.85);
  box-shadow: 0 0 1rem 0 rgba(orange, 0.5);
  margin: 0 1rem;
  padding: 1.5rem;
  border-radius: .25rem;

  &__icon {
    display: none;
  }

  &__thanks {
    text-align: center;
    font-size: 1.25rem;
  }


  @media (min-width: 860px) {
    width: 50%;
  }
}

@media (min-width: 500px) {
  .welcome {
    p {
      padding-left: 60px;
      position: relative;
      min-height: 40px;

      &.welcome__thanks {
        padding-left: 0;
        min-height: auto;
      }
    }

    &__icon {
      position: absolute;
      font-size: 40px;
      display: block;
      left: 0;
      top: 50%;
      margin-top: -20px;
    }
  }
}
</style>
