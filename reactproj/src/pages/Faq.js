import React from 'react';
import FAQBG from '../components/images/faqs-bg.png';
import "../components/styles/FAQs.css"

function Faq() {
   return (
      <div>
         <div className="hero">
            <div className="hero-text">
                  {/* <h1 className="ht">WE ARE <br/> HERE TO <br/> <span>HELP</span>.</h1> */}
            </div>
         </div>
         <div id="FAQ">
            <h3 className="faq-title">FREQUENTLY ASKED QUESTIONS</h3>
            <p className="faq-text">Need some help with your order or got a burning question that you need answered pronto?
               Just click on one of the sections below to find the answer.
            </p>
            <figure>
               <img className="bg-img" src={FAQBG} alt="musical note">
               </img>
            </figure>

            <div class="container-sm accordion accordion-flush" id="accordionFlushExample">
               <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingOne">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        Accordion Item #1
                  </button>
                  </h2>
                  <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                     <div class="accordion-body">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Donec lacinia vel lectus malesuada mattis. 
                        Sed et augue vulputate neque commodo sodales. 
                        Suspendisse vel sem finibus, volutpat nisl commodo, porttitor elit. 
                        Quisque vitae purus eu felis scelerisque semper. 
                        Etiam consequat non magna gravida vestibulum. 
                        Nunc blandit feugiat lacus in placerat. 
                        Quisque ut turpis felis. 
                        Integer vel interdum quam. Nulla ac consequat urna.
                     </div>
                  </div>
               </div>
               <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingTwo">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        Accordion Item #2
                  </button>
                  </h2>
                  <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                     <div class="accordion-body">
                        Integer ut risus libero. 
                        Etiam posuere diam efficitur orci dictum, a venenatis quam varius. 
                        Nullam non accumsan velit, sit amet lacinia est. 
                        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                        Duis in purus consequat, iaculis nisl et, interdum odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut ac pretium elit. Sed semper, ante eu eleifend posuere, tortor lorem eleifend tortor, non viverra est tellus sagittis tortor. 
                        Phasellus elementum ipsum non lacinia lobortis. 
                        Vivamus dolor dui, pellentesque lacinia pharetra quis, ultricies sit amet lorem. 
                        Quisque blandit metus luctus, posuere nunc id, blandit tortor. Sed sit amet leo ante. 
                        Vestibulum dolor odio, blandit ut ipsum porta, tempus commodo urna. 
                     </div>
                  </div>
               </div>
               <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingThree">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        Accordion Item #3
                  </button>
                  </h2>
                  <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                     <div class="accordion-body">
                        Quisque in porta nunc, vel fermentum risus. 
                        Etiam neque ligula, interdum tempus cursus id, hendrerit ut mauris. 
                        Donec sodales mattis molestie. Maecenas facilisis, massa sagittis rhoncus dapibus, arcu eros sollicitudin dolor, eget mattis turpis lacus dapibus tellus. 
                        Nulla elementum rhoncus tempor. Cras nec lectus sit amet erat ultricies tristique. 
                        Ut dignissim odio aliquam nibh finibus eleifend. Sed vel dui porttitor dui maximus ultrices sit amet venenatis diam. 
                        Nulla vehicula sem massa, vel interdum magna pretium vitae. Phasellus fringilla risus ipsum, sit amet viverra ipsum elementum sit amet. 
                        Suspendisse quis dictum libero. Nulla at nisi venenatis, mollis mi id, laoreet risus. 
                        Donec in aliquet magna. 
                        Cras tempor sagittis risus vel malesuada. Sed vitae ex eget ante fermentum finibus id in ligula. 
                        Pellentesque porta semper sapien, non sagittis orci convallis at. 
                     </div>
                  </div>
               </div>
            </div> 
         </div>
      </div>
   );
}

export default Faq;
