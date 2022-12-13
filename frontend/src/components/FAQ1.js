import React from "react";
import "./FAQ.css";


function FAQ() {
  return (
    <div class="boite">
      <div class="container-faq">
        <h1>FAQ</h1>
        <div class="questions">
          <div class="visible-pannel">
            <h2>WHAT DO YOU CHARGE FOR YOUR GRAPHIC DESIGN SERVICES?</h2>
            <img src="ressources/croix.svg" alt="croix animation" />
          </div>
          <div class="toggle-pannel">
            <h4>Lorem ipsum dolor sit amet.</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem et asperiores, quod qui in ducimus rerum nisi
              dolorum. Optio, vel?
            </p>
          </div>
        </div>

        <div class="questions">
          <div class="visible-pannel">
            <h2>HOW DOES YOUR LOGO DESIGN PROCESS WORK?</h2>
            <svg src="icons/plus-solid.svg" alt="croix animation" />
          </div>
          <div class="toggle-pannel">
            <h4>Lorem ipsum dolor sit amet.</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloribus neque et, excepturi sequi laboriosam at sit
              exercitationem repellat voluptate aliquam? Officiis inventore
              quibusdam doloremque amet quidem dolor quod praesentium in, ullam
              tenetur corrupti ducimus commodi, minima, nam maiores temporibus
              assumenda necessitatibus natus voluptas! Mollitia distinctio
              consequuntur eos aut voluptatibus pariatur?
            </p>
          </div>
        </div>

        <div class="questions">
          <div class="visible-pannel">
            <h2>IS THE ARTWORK OUR PROPERTY ONCE PAID FOR?</h2>
            <img src="ressources/croix.svg" alt="croix animation" />
          </div>
          <div class="toggle-pannel">
            <h4>Lorem ipsum dolor sit amet.</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis,
              est!
            </p>
          </div>
        </div>

        <div class="questions">
          <div class="visible-pannel">
            <h2>WHAT IS THE CLIENT’S INVOLVEMENT IN THE DESIGN PROCESS?</h2>
            <img src="ressources/croix.svg" alt="croix animation" />
          </div>
          <div class="toggle-pannel">
            <h4>Lorem ipsum dolor sit amet.</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Obcaecati iusto soluta sunt quos ex, quidem a. Perferendis non
              corporis dolore reiciendis corrupti temporibus voluptatum veniam
              aperiam nemo cumque fugit atque facere eius veritatis facilis, qui
              vero libero, molestias optio fuga labore, similique sint. Tempora
              enim, eum quia, repellendus rerum repellat quae quas error
              reprehenderit dolorum est nesciunt ducimus provident tenetur!
            </p>
          </div>
        </div>
      </div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.0/gsap.min.js"></script>
      <script></script>
    </div>
  );
}

export default FAQ;
