let movingStarsCount = 0;

function createShootingStar() {
   if (movingStarsCount >= 7) {
      return;
   }

   const star = document.createElement("div");
   star.classList.add("shooting-star");
   star.style.left = `${Math.random() * 100}%`;
   star.style.top = `${Math.random() * 100}%`;
   star.style.animationDuration = `${Math.random() * 3 + 2}s`;

   star.addEventListener("animationstart", () => {
      movingStarsCount++;
   });

   star.addEventListener("animationend", () => {
      movingStarsCount--;
      star.remove();
   });

   document.querySelector(".space").appendChild(star);
}

setInterval(createShootingStar, 2300);
