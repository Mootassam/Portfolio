/**
 * Template Name: Kelly - v4.3.0
 * Template URL: https://bootstrapmade.com/kelly-free-bootstrap-cv-resume-html-template/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
(function () {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach((e) => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };

  /**
   * Easy on scroll event listener
   */
  const onscroll = (el, listener) => {
    el.addEventListener("scroll", listener);
  };

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select("#header");
    let offset = header.offsetHeight;

    let elementPos = select(el).offsetTop;
    window.scrollTo({
      top: elementPos - offset,
      behavior: "smooth",
    });
  };

  /**
   * Back to top button
   */
  let backtotop = select(".back-to-top");
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add("active");
      } else {
        backtotop.classList.remove("active");
      }
    };
    window.addEventListener("load", toggleBacktotop);
    onscroll(document, toggleBacktotop);
  }

  /**
   * Mobile nav toggle
   */

  /**
   * Mobile nav dropdowns activate
   */

  /**
   * Scrool with ofset on links with a class name .scrollto
   */

  /**
   * Scroll with ofset on page load with hash links in the url
   */

  /**
   * Preloader
   */
  // let preloader = select("#preloader");
  // if (preloader) {
  //   window.addEventListener("load", () => {
  //     preloader.remove();
  //   });
  // }

  /**
   * Porfolio isotope and filter
   */

  /**
   * Initiate portfolio lightbox
   */

  /**
   * Initiate portfolio details lightbox
   */

  /**
   * Portfolio details slider
   */

  /**
   * Skills animation
   */

  /**
   * Testimonials slider
   */

  /**
   * Animation on scroll
   */
})();
