for (var i = 0; i < 6; i++) {

    document.querySelectorAll(".emotion")[i].addEventListener("click", clickButton);

      function clickButton() {

      var mod = this.innerHTML;

      switch (mod) {
        case "Happy 😀":
          var getlucky = new Audio("sounds/get-lucky.mp3");
          getlucky.play();
          break;
        case "Peaceful 😊":
          var  amilie = new Audio("sounds/amilie.mp3");
          amilie.play();
          break;
        case "Excited 🤩":
          var rüfüs = new Audio("sounds/rüfüs.mp3");
          rüfüs.play();
          break;
        case "Melancholy 😢":
          var upset = new Audio("sounds/lovesong.mp3");
          upset.play();
          break;
        case "Curious 🤔":
          var curious = new Audio("sounds/Drake.mp3");
          curious.play();
          break;
        case "Chill 😎":
          var chill = new Audio("sounds/nosunshine.mp3");
          chill.play();
          break;
        default:

      }
   }
}
