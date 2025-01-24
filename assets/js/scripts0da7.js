(function ($) {
  "use strict";
  jQuery(document).ready(function ($) {
    // Slider
    $(".slider-box .owl-carousel").owlCarousel({
      loop: true,
      rtl: true,
      margin: 2,
      dots: true,
      responsiveClass: true,
      autoplay: true,
      autoplayTimeout: 5000,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 1,
        },
      },
    });

    // Off section Carousel
    $(".off-products-section .owl-carousel").owlCarousel({
      rtl: true,
      loop: true,
      margin: 0,
      nav: true,
      dots: false,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: false,
      navText: [
        "<span class='owl-arrow-navbar-btn previous' aria-label='Previous'><i class='icon right-arrow'></i></span>",
        "<span class='owl-arrow-navbar-btn next' aria-label='Next'><i class='icon left-arrow-2'></i></span>",
      ],

      responsive: {
        0: {
          items: 2,
        },
        768: {
          items: 3,
        },
        992: {
          items: 6,
        },
      },
    });

    // product Category Carousel
    $(".product-category-section .owl-carousel").owlCarousel({
      rtl: true,
      loop: true,
      margin: 24,
      nav: false,
      dots: false,
      responsive: {
        0: {
          items: 3,
        },
        768: {
          items: 4,
        },
        992: {
          items: 6,
        },
      },
    });

    // Gallery Carousel
    $(".gallery .owl-carousel").owlCarousel({
      rtl: true,
      loop: false,
      margin: 4,
      nav: false,
      responsive: {
        0: {
          items: 4,
        },
        768: {
          items: 4,
        },
        992: {
          items: 5,
        },
      },
    });

    /**
     * Expand Text box
     */
    $(".about-shop-section #vertuka-show-more").on("click", function () {
      $(".about-shop-section #about-shop-section-text").toggleClass("active");

      if ($(this).text() == "بستن") {
        $(this).text("ادامه مطلب");
      } else {
        $(this).text("بستن");
      }
    });

    // defult gradient
    $(".about-product-section p").addClass("bottom-gradient");
    $(".about-product-section .vertuka-show-more").on("click", function () {
      $(".about-product-section #about-product-section-text").toggleClass(
        "active"
      );
      if ($(this).text() == "بستن") {
        $(this).text("ادامه مطلب");
        //add gradient
        $(".about-product-section p").addClass("bottom-gradient");
      } else {
        $(this).text("بستن");
        //remove gradient
        $(".about-product-section p").removeClass("bottom-gradient");
      }
    });
    $(".about-tech-product-section .vertuka-show-more").on(
      "click",
      function () {
        $(
          ".about-tech-product-section #about-tech-product-section-text"
        ).toggleClass("active");
        if ($(this).text() == "بستن") $(this).text("ادامه مطلب");
        else $(this).text("بستن");
      }
    );

    /**
     * Vertuka Checkbox
     */
    $(".vertuka-checkbox").on("click", function () {
      $(this).toggleClass("active");
      if ($(".mj-hoghoghy-force").text() != "no") {
        $(".mj-hoghoghy-force").removeClass("d-none");
        $(this).toggleClass("active");
      }
    });

    /**
     * Vertuka Checkbox for insurance
     */
    $(".vertuka-insurance-option .vertuka-checkbox").on("click", function () {
      const vertuka_checkbox = $(this);

      // Check/uncheck the actual checkbox based on the presence of 'active' class
      $("#13-f_________-______________")
        .prop("checked", $(this).hasClass("active"))
        .change();
      //$("#yith-wapo-4-0").prop("checked", $(this).hasClass("active")).change();

      if ($(this).hasClass("active")) {
        $(".ppom-total-without-fixed").css("display", "block");
      } else {
        $(".ppom-total-without-fixed").css("display", "none");
      }
    });

    $("#13-f_________-______________").prop("checked", "checked").change();

    /**
     * Vertuka Checkbox for Haghighi or hoghooghi
     */
    $(
      ".cart-box #vertuka-order-type .vertuka-insurance-option .vertuka-checkbox"
    ).on("click", function () {
      // Check the appropriate radio button based on the 'active' class
      if ($(this).hasClass("active")) {
        $(".express-cart-price-box #vertuka_custom_radio_field_hoghooghi").prop(
          "checked",
          true
        );
        $(".express-cart-price-box #vertuka_custom_radio_field_haghighi").prop(
          "checked",
          false
        );
      } else {
        $(".express-cart-price-box #vertuka_custom_radio_field_hoghooghi").prop(
          "checked",
          false
        );
        $(".express-cart-price-box #vertuka_custom_radio_field_haghighi").prop(
          "checked",
          true
        );
      }
    });

    /**
     * Vertuka Select Color Option on product single page
     */
    $(".color-option.enable").on("click", function () {
      //   MJ release selected guarantee
      $(".variations_form .variations #pa_guarantee").val(0).change();
      $(".fix-text-guarantee").text("");

      const option = $(this);
      $(".color-option").removeClass("active");
      option.addClass("active");

      const id = option.attr("id");
      $("#pa_color").val(id).change();

      const activeText = option.find(".text").text();
      const activecolor = option.find(".color").css("background");

      $(".express-buy ul > li .express-color").css("background", activecolor);
      $(".express-buy ul > li .express-text").text(activeText);

      //  MJ if color changed
      //  jQuery('.variations_form').clone().appendTo('#mj-guarantee');
      $("#mj-guarantee").empty();
      $("#mj-guarantee").append("<h3>گارانتی: </h3>");
      $("table #pa_guarantee").clone().appendTo("#mj-guarantee");
      $("#mj-guarantee #pa_guarantee").addClass(
        "mj-guarantee-select form-select"
      );
      // auto select garanty after color changed
      $("#mj-guarantee .mj-guarantee-select").val(
        $("#mj-guarantee .mj-guarantee-select option:eq(1)").val()
      );
      $("#mj-guarantee .mj-guarantee-select").trigger("change");

      $("#mj-guarantee-mob").empty();
      $("#mj-guarantee-mob").append("<h3>گارانتی: </h3>");
      $("table #pa_guarantee").clone().appendTo("#mj-guarantee-mob");
      $("#mj-guarantee-mob #pa_guarantee").addClass(
        "mj-guarantee-select form-select"
      );
      // auto select garanty after color changed
      $("#mj-guarantee-mob .mj-guarantee-select").val(
        $("#mj-guarantee-mob .mj-guarantee-select option:eq(1)").val()
      );
      $("#mj-guarantee-mob .mj-guarantee-select").trigger("change");

      // change free shipping text

      if (
        parseInt(
          $("div.woocommerce-variation-price.numb > span > span > bdi")
          .text()
          .replace("تومان", "")
        ) > 5000000
      ) {
        $(
          "div.option-to-buy.pb-2.d-none.d-lg-block > div > ul > li.d-flex.mj_popup_shipping > div:nth-child(2) > p"
        ).html(
          "ارسال رایگان " +
          '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"></path><path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z"></path></svg>'
        );
        $(
          "div.product-info > div.py-5.bg-white.mobile-option-to-buy > div > div:nth-child(2) > div > ul > li.d-flex.mj_popup_shipping > div:nth-child(2) > p"
        ).html(
          "ارسال رایگان " +
          '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"></path><path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z"></path></svg>'
        );
      } else {
        $(
          "div.option-to-buy.pb-2.d-none.d-lg-block > div > ul > li.d-flex.mj_popup_shipping > div:nth-child(2) > p"
        ).html(
          "ارسال توربو " +
          '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"></path><path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z"></path></svg>'
        );
        $(
          "div.product-info > div.py-5.bg-white.mobile-option-to-buy > div > div:nth-child(2) > div > ul > li.d-flex.mj_popup_shipping > div:nth-child(2) > p"
        ).html(
          "ارسال توربو " +
          '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"></path><path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z"></path></svg>'
        );
      }
    });

    // MJ if mj-guarantee-select changed
    $(document).on("change", ".mj-guarantee-select", function () {
      $(".variations_form .variations #pa_guarantee")
        .val($(this).val())
        .change();

      $(".fix-text-guarantee").text(
        $("#mj-guarantee .mj-guarantee-select option:selected").text()
      );

      $(".namojod").remove();
      $("#single_add_to_cart_button-2").prop("disabled", false);
    });

    function vertuka_color_picker_def() {
      var first_choice = $("div.vertuka-option-var:nth-child(1) .color-option");
      if (first_choice.hasClass("disable")) {
        first_choice = $("div.vertuka-option-var:nth-child(2) .color-option");
        if (first_choice.hasClass("disable")) {
          first_choice = $("div.vertuka-option-var:nth-child(3) .color-option");
          if (first_choice.hasClass("disable")) {
            first_choice = $(
              "div.vertuka-option-var:nth-child(4) .color-option"
            );
            if (first_choice.hasClass("disable")) {
              first_choice = $(
                "div.vertuka-option-var:nth-child(5) .color-option"
              );
            }
          }
        }
      }

      first_choice.addClass("active");
      $("#pa_color").val(first_choice.attr("id")).change();

      $(".express-buy ul > li .express-color").css(
        "background",
        first_choice.find(".color").css("background")
      );
      $(".express-buy ul > li .express-text").text(
        first_choice.find(".text").first().text()
      );
    }
    // vertuka_color_picker_def();

    /**
     * Vertuka Quantity input : decrease
     */
    function vertuka_handle_local_quanity_decrease(btn) {
      var local_quantity = btn
        .closest(".cart-product-item")
        .find(".quantity .qty");

      // let local_quantity = btn
      //   .closest(".quantity")
      //   .find("input[name=quantity]");
      let local_quantity_txt = btn.closest(".quantity").find(".numb");

      var old_val = local_quantity.val();
      var new_val = parseInt(old_val) - 1;

      local_quantity.val(new_val);
      local_quantity_txt.text(new_val);
      // console.log(new_val, old_val);
    }
    //for single product
    $(".buy-section .vertuka-q-input .decrease").on("click", function () {
      const btn = $(this);
      var local_quantity = $(".buy-section input[name=quantity].qty");
      const max_val = parseInt(local_quantity.attr("max"));
      const min_val = parseInt(local_quantity.attr("min"));
      var old_val = local_quantity.val();
      var new_val = parseInt(old_val) - 1;

      if (!(new_val < 1)) {
        // vertuka_handle_local_quanity_decrease(btn);
        let local_quantity_txt = btn.closest(".quantity").find(".numb");
        local_quantity.val(new_val);
        local_quantity_txt.text(new_val);

        local_quantity.val(new_val).trigger("change");
      }
    });
    // for cart header
    $(".cart-details .vertuka-q-input .decrease").on("click", function () {
      const btn = $(this);

      var local_quantity = btn
        .closest(".cart-product-item")
        .find(".quantity .qty");
      const max_val = parseInt(local_quantity.attr("max"));
      const min_val = parseInt(local_quantity.attr("min"));
      var old_val = local_quantity.val();
      var new_val = parseInt(old_val) - 1;

      if (!(new_val > max_val)) {
        if (old_val == 1) {
          // console.log("zeroo");
          var local_quantity = btn
            .closest(".cart-product-item")
            .find(".price-box")
            .find(".position-relative")
            .find(".remove-item i")
            .trigger("click");
        } else {
          // console.log(local_quantity.val(new_val).trigger("change"));
          vertuka_handle_local_quanity_decrease(btn);
          local_quantity.val(new_val).trigger("change");
          $(".cart-details .vertuka-update-button")
            .removeAttr("disabled")
            .click();
        }
      }
    });
    //for cart page
    $(".cart-box .cart-content .vertuka-q-input .decrease").on(
      "click",
      function () {
        MJ_popup_function();

        const btn = $(this);

        var local_quantity = btn
          .closest(".cart-product-item")
          .find(".quantity .qty");
        const max_val = parseInt(local_quantity.attr("max"));
        const min_val = parseInt(local_quantity.attr("min"));
        var old_val = local_quantity.val();
        var new_val = parseInt(old_val) - 1;

        // console.log(max_val, old_val, new_val);

        if (!(new_val > max_val)) {
          vertuka_handle_local_quanity_decrease(btn);
          local_quantity.val(new_val).trigger("change");
          btn
            .closest(".cart-product-item")
            .find(".vertuka-update-button")
            .removeAttr("disabled")
            .click();
        }
      }
    );

    /**
     * Vertuka Quantity input : Increase
     */
    function vertuka_handle_local_quanity_increase(btn) {
      let local_quantity = btn
        .closest(".quantity")
        .find("input[name=quantity]");
      let local_quantity_txt = btn.closest(".quantity").find(".numb");

      var old_val = local_quantity.val();
      var new_val = parseInt(old_val) + 1;

      local_quantity.val(new_val);
      local_quantity_txt.text(new_val);
    }
    // for single product
    $(".buy-section .vertuka-q-input .increase").on("click", function () {
      const btn = $(this);
      var local_quantity = $(".buy-section input[name=quantity].qty");
      const max_val = parseInt(local_quantity.attr("max"));

      const min_val = parseInt(local_quantity.attr("min"));
      var old_val = local_quantity.val();
      var new_val = parseInt(old_val) + 1;

      if (!(new_val > max_val)) {
        vertuka_handle_local_quanity_increase(btn);
        local_quantity.val(new_val).trigger("change");
      }
    });
    //for header cart
    $(".cart-details .vertuka-q-input .increase").on("click", function () {
      const btn = $(this);

      var local_quantity = btn
        .closest(".cart-product-item")
        .find(".quantity .qty");
      const max_val = parseInt(local_quantity.attr("max"));
      const min_val = parseInt(local_quantity.attr("min"));
      var old_val = local_quantity.val();
      var new_val = parseInt(old_val) + 1;

      if (!(new_val > max_val)) {
        vertuka_handle_local_quanity_increase(btn);
        local_quantity.val(new_val).trigger("change");
        btn
          .closest(".cart-product-item")
          .find(".vertuka-update-button")
          .removeAttr("disabled")
          .click();
      }
    });
    //for cart page
    $(".cart-box .cart-content .vertuka-q-input .increase").on(
      "click",
      function () {
        const btn = $(this);

        var local_quantity = btn
          .closest(".cart-product-item")
          .find(".quantity .qty");

        const max_val = parseInt(local_quantity.attr("max"));

        const min_val = parseInt(local_quantity.attr("min"));
        var old_val = local_quantity.val();
        var new_val = parseInt(old_val) + 1;

        if (max_val == 1) {
          MJ_popup_function_only_one();
        }

        if (!(new_val > max_val) && max_val > 1) {
          MJ_popup_function();

          vertuka_handle_local_quanity_increase(btn);
          local_quantity.val(new_val).trigger("change");
          btn
            .closest(".cart-product-item")
            .find(".vertuka-update-button")
            .removeAttr("disabled")
            .click();
        }
      }
    );
    /* for mobile */
    $(".vertuka-q-input.mobile-qty").on("click", ".increase", function () {
      $(this)
        .closest(".item-box")
        .find(".cart-product-item")
        .find(".quantity")
        .find(".vertuka-q-input")
        .find(".increase")
        .click();
    });

    $(".vertuka-q-input.mobile-qty").on("click", ".decrease", function () {
      $(this)
        .closest(".item-box")
        .find(".cart-product-item")
        .find(".quantity")
        .find(".vertuka-q-input")
        .find(".decrease")
        .click();
    });

    /**
     * expand image & lightbox for products & footer license
     */
    // Open modal
    $(".full-screen #vertuka-expand, .full-screen #MJ-pro-vertuka-expand, #vertuka-main-product-image > img").on("click", function () {
      const src = $(".product-page .product-image-gallery .image-box .product-image > img").attr("src");
      const alt = $(".product-page .product-image-gallery .image-box .product-image > img").attr("alt"); // واکشی alt

      const modal = $(".MJ-pro-vertuka-image-modal");
      const modal_img = $(".MJ-pro-vertuka-image-modal > .modal-content");
      const modal_caption = $("#modal-caption"); // عنصر کپشن

      modal.css("display", "flex");
      modal_img.attr("src", src);
      modal_caption.text(alt); // تنظیم متن کپشن
    });

    // Close modal
    $(".MJ-pro-vertuka-image-modal .close").on("click", function () {
      $(".MJ-pro-vertuka-image-modal").css("display", "none");
    });

    // Next & Previous buttons
    function updateModalImage(id) {
      let vertuka_product_new_img_id = "#item-" + id;
      let vertuka_new_img_src = $(vertuka_product_new_img_id + " img").attr("src");
      let vertuka_new_img_alt = $(vertuka_product_new_img_id + " img").attr("alt"); // واکشی alt

      const modal = $(".MJ-pro-vertuka-image-modal");
      const modal_img = $(".MJ-pro-vertuka-image-modal > .modal-content");
      const modal_caption = $("#modal-caption"); // عنصر کپشن

      modal.css("display", "flex");
      modal_img.attr("src", vertuka_new_img_src);
      modal_caption.text(vertuka_new_img_alt); // تنظیم متن کپشن
    }

    $(".MJ-pro-vertuka-image-modal .MJ-next-button").on("click", function () {
      let vertuka_product_img_src = $("#MJ-pro-vertuka-image-modal > img").attr("src");
      let vertuka_product_current_img_id = $('.product-page .product-image-gallery .gallery img[src="' + vertuka_product_img_src + '"]').closest(".item").attr("id");
      let id = parseInt(vertuka_product_current_img_id.replace("item-", "")) + 1;
      if (id > $(".product-page .product-image-gallery .gallery img").length - 2) {
        id = 1;
      }
      updateModalImage(id);
    });

    $(".MJ-pro-vertuka-image-modal .MJ-prev-button").on("click", function () {
      let vertuka_product_img_src = $("#MJ-pro-vertuka-image-modal > img").attr("src");
      let vertuka_product_current_img_id = $('.product-page .product-image-gallery .gallery img[src="' + vertuka_product_img_src + '"]').closest(".item").attr("id");
      let id = parseInt(vertuka_product_current_img_id.replace("item-", "")) - 1;
      if (id == 0) {
        id = $(".product-page .product-image-gallery .gallery img").length - 2;
      }
      updateModalImage(id);
    });

    $(".MJ-pro-vertuka-image-modal").click(function (e) {
      if (e.target.id == "MJ-pro-vertuka-image-modal") {
        $(".MJ-pro-vertuka-image-modal").css("display", "none");
      }
    });


    $("body").click(function (e) {
      if (
        e.target.className == "MJ-next-button" ||
        e.target.className == "MJ-prev-button" ||
        e.target.id == "MJ-next-button-left" ||
        e.target.id == "MJ-prev-button-right"
      ) {
        // MJ okay
      } else {
        // if ($(e.target.className == 'MJ-pro-vertuka-image-modal')) {
        //     $('.MJ-pro-vertuka-image-modal').css('display', 'none');
        // }
      }
    });

    //MJ end
    $(".footer #vertuka-image-modal:not(.modal-content)").click(function () {
      $(".vertuka-image-modal").css("display", "none");
    });

    /**
     * Lightbox for footer
     */
    $(".footer .bottom-section .license.popup").on("click", function () {
      const src = $(this).attr("data-vertuka-popup");
      // console.log(src);
      const modal = $(".vertuka-image-modal");
      const modal_img = $(".vertuka-image-modal > .modal-content");

      modal.css("display", "block");
      modal_img.attr("src", src);
    });

    /**
     * Navigate Product Thumbnails
     */
    if ($("#vertuka-main-product-image .next-button").length > 0) {
      $("#vertuka-main-product-image .next-button").on("click", function () {
        let vertuka_product_img_src = $(
          "#vertuka-main-product-image > img"
        ).attr("src");
        let vertuka_product_current_img_id = $(
            '.product-page .product-image-gallery .gallery img[src="' +
            vertuka_product_img_src +
            '"]'
          )
          .closest(".item")
          .attr("id");

        var id = 0;
        if (
          parseInt(vertuka_product_current_img_id.replace("item-", "")) + 1 >
          $(".product-page .product-image-gallery .gallery img").length - 2
        ) {
          id = 1;
        } else {
          id =
            parseInt(vertuka_product_current_img_id.replace("item-", "")) + 1;
        }

        let vertuka_product_new_img_id = "#item-" + id;
        let vertuka_new_img_src = $(vertuka_product_new_img_id + " img").attr(
          "src"
        );
        $(
          ".product-page .product-image-gallery .image-box .product-image > img"
        ).attr("src", vertuka_new_img_src);
      });

      $("#vertuka-main-product-image .prev-button").on("click", function () {
        let vertuka_product_img_src = $(
          "#vertuka-main-product-image > img"
        ).attr("src");
        let vertuka_product_current_img_id = $(
            '.product-page .product-image-gallery .gallery img[src="' +
            vertuka_product_img_src +
            '"]'
          )
          .closest(".item")
          .attr("id");
        var id;
        if (
          parseInt(vertuka_product_current_img_id.replace("item-", "")) - 1 ==
          0
        ) {
          id =
            $(".product-page .product-image-gallery .gallery img").length - 2;
        } else {
          id =
            parseInt(vertuka_product_current_img_id.replace("item-", "")) - 1;
        }
        let vertuka_product_new_img_id = "#item-" + id;
        let vertuka_new_img_src = $(vertuka_product_new_img_id + " img").attr(
          "src"
        );
        $(
          ".product-page .product-image-gallery .image-box .product-image > img"
        ).attr("src", vertuka_new_img_src);
      });
    }

    /**
     * Change image when click in product
     */
    $(".vertuka-product-thumbnail-gallery > img").on("click", function () {
      const new_src = $(this).attr("src");
      $(
        ".product-page .product-image-gallery .image-box .product-image > img"
      ).attr("src", new_src);
    });

    /**
     * Temporary oage
     */
    $(".temporary-page table").addClass("table-bordered");

    /**
     * Vertuka Time Delivary
     */
    $("#vertuka-time-delivery .delivery-methods .method ").on(
      "click",
      function () {
        let txt = $(this).find(".title").text().trim();
        $("#vertuka_custom_text_field").val(txt);

        $(this).find("input").prop("checked", true);
        let input_time = $(this).find("input");
        $("#vertuka_custom_text_field_field #vertuka_custom_text_field").val(
          input_time.val()
        );
      }
    );

    /**
     * Delivary Handler
     */
    $(".choose-delivery-method .method").on("click", function () {
      var selectedMethod = $(this);
      var deliveryMethodId = selectedMethod
        .closest(".choose-delivery-method")
        .attr("id");
      var containerElement = "#" + deliveryMethodId;

      $(containerElement + " .method").removeClass("active");
      $(selectedMethod).addClass("active");
    });
    $("#vertuka-shipping-delivery .method").on("click", function (e) {
      const id = $(this).attr("id");
      const selector = ".express-cart-price #" + id.replace("vertuka_", "");
      $(selector)
        .prop("checked", !$("#yith-wapo-3-0").prop("checked"))
        .change();
    });

    // Calculate Shipping Price in Checkout Page
    let selector = $("#shipping_method input[checked=checked]");
    let price = $(selector)
      .closest("li")
      .find(".woocommerce-Price-amount")
      .text()
      .trim()
      .replace("تومان", "")
      .replace(",", "")
      .trim();
    let label = $(selector).closest("li").find("label").text().trim();

    if (price == "" || price == null) {
      price = 0;
    }
    if (price == 0) {
      //$( '#vertuka-shipping-method-price .price' ).text( 'پس کرایه ای' );
    } else {
      $("#vertuka-shipping-method-price .price").text(price + " تومان");
    }
    $("#vertuka-shipping-method-price .title").text(label);


    setInterval(function () {
      $(".express-cart-price-box").click();
      $(".express-cart-price-box").trigger('click');
      // console.log('clicked');
    }, 500);

    $(".page-checkout-wrapper").on(
      "click",
      function () {
        // for delivary
        let selector = $("#shipping_method input[checked=checked]");
        let price = $(selector)
          .closest("li")
          .find(".woocommerce-Price-amount")
          .first()
          .text()
          .trim()
          .replace("تومان", "");
        // let price = $(selector).closest( 'li' ).find( '.woocommerce-Price-amount' ).text().trim().replace( 'تومان', '' ).replace( ',', '' ).trim();
        let label = $(selector)
          .closest("li")
          .find("label")
          .text()
          .trim()
          .split(":");

        if (price == "" || price == null) {
          price = 0;
        }

        if (label[0] == "پستپست") {
          label[0] = "پست";
        }
        if (label[0] == "ارسال عادیارسال عادی") {
          label[0] = "ارسال عادی";
        }
        if (label[0] == "ارسال توربوارسال توربو") {
          label[0] = "ارسال توربو";
        }
        // console.log(label[0]);


        $("#vertuka-shipping-method-price .title").text(label[0]);
        if (label[0] == "پست") {
          $("#vertuka-time-delivery").addClass("d-none");
          $("#vertuka_custom_text_field_field #vertuka_custom_text_field").val(
            "پست"
          );

          if (price == 0) {
            $("#vertuka-shipping-method-price .price").text("رایگان");
          } else {
            $("#vertuka-shipping-method-price .price").text(price + " تومان");
          }
        }

        if (label[0] == "ارسال عادی") {
          // console.log(" ارسال عادی");
          $("#vertuka-time-delivery").removeClass("d-none");
          // console.log($("#vertuka_custom_text_field_field #vertuka_custom_text_field").val().split(" ")[0] != 'ساعت');
          if ($("#vertuka_custom_text_field_field #vertuka_custom_text_field").val().split(" ")[0] != 'ساعت') {
            $("#vertuka_custom_text_field_field #vertuka_custom_text_field").val(
              "پیک-رایگان"
            );
          }

          $("input[type=radio][name=MJ-selected-method-date-time]")
            .prop("checked", true)
            .trigger("click");

          if (price == 0) {
            $("#vertuka-shipping-method-price .price").text("رایگان");
          } else {
            $("#vertuka-shipping-method-price .price").text(price + " تومان");
          }
        }

        if (label[0] == "ارسال توربو") {
          // console.log(" ارسال توربو");
          $("#vertuka-time-delivery").addClass("d-none");
          $("#vertuka_custom_text_field_field #vertuka_custom_text_field").val(
            "پیک-توربو"
          );

          if (price == 0) {
            $("#vertuka-shipping-method-price .price").text("رایگان");
          } else {
            $("#vertuka-shipping-method-price .price").text(price + " تومان");
          }
        }
        // if (price == 0) {
        //   $("#vertuka-shipping-method-price .price").text("رایگان");
        //   if (
        //     $(selector).closest("li").find("label").attr("for") ==
        //     "shipping_method_0_free_shipping10"
        //   ) {
        //     $("#vertuka-shipping-method-price .title").text("پیک");
        //     $("#vertuka-time-delivery").removeClass("d-none");
        //     $(
        //       "#vertuka_custom_text_field_field #vertuka_custom_text_field"
        //     ).val("پیک-رایگان");

        //     $("input[type=radio][name=MJ-selected-method-date-time]")
        //       .prop("checked", true)
        //       .trigger("click");
        //   } else {
        //     $("#vertuka-shipping-method-price .title").text("پست");
        //     $("#vertuka-time-delivery").addClass("d-none");
        //     $(
        //       "#vertuka_custom_text_field_field #vertuka_custom_text_field"
        //     ).val("پست-رایگان");
        //   }
        // } else {
        //   $("#vertuka-shipping-method-price .price").text(price + " تومان");
        //   $("#vertuka-time-delivery").addClass("d-none");
        //   $("#vertuka_custom_text_field_field #vertuka_custom_text_field").val(
        //     "پیک-توربو"
        //   );
        // }

        // console.log( 'test' );
        //
        // //for discounted
        // $(".original-price-discounted-product > del").each(function() {
        //     let sum_orginal_price = 0;
        //
        //     var value = parseInt($(this).text());
        //     // sum += isNaN(value) ? 0 : value;
        //     sum_orginal_price += isNaN(value) ? 0 : value;
        //     console.log( sum_orginal_price );
        // });

        // let coupon = $('.mj-applied-coupon-block .text-end .price-to-pay-title').find( 'span' ).text().trim().replace( '-', '' ).trim();
        // console.log($('.mj-applied-coupon-block .text-end .price-to-pay-title').find( 'span' ));
        // $('.mj-applied-coupon-block .text-end .price-to-pay-title').find( 'span' ).remove();
        // $('.mj-applied-coupon-block .text-end .price-to-pay-title').find( 'span' ).append(coupon);
      }
    );

    // $('#wcmca_address_select_menu_billing').val("0").change();
    // $('#wcmca_address_select_menu_shipping').val("0").change();
    // $('#select2-wcmca_address_select_menu_shipping-container').val("0").change();
    // $( '#vertuka-address-delivery .method' ).on( 'click', function (){
    //     const id = $(this).attr( 'id' );
    //     const value = id.replace( 'vertuka_', '');
    //     $('#wcmca_address_select_menu_billing').val(value).change();
    //     $('#wcmca_address_select_menu_shipping').val(value).change();
    //     $('#select2-wcmca_address_select_menu_shipping-container').val(value).change();
    // });
    // $( '#vertuka-address-delivery .method' ).removeClass( 'active' );
    // $( '#vertuka-address-delivery #vertuka_0' ).addClass( 'active' );

    // Sort order button
    $("#sort-product-by a").on("click", function () {
      const id = $(this).attr("id");
      const selector = "#" + id;
      $(".orderby").val(id).change();
    });

    // Filter button
    $(".yith-wcan-filters-opener").text("فیلتر");
    $(".yith-wcan-filters.filters-modal h3.mobile-only").text("فیلتر");
    $(".apply-filters.main-modal-button").text("اعمال تغییرات");
    $("#filter_1073_0 > h4:nth-child(1)").html("دسته&zwnj;بندی محصولات");
    $(".woocommerce-MyAccount-content > p:nth-child(2)").html(
      "آدرس&zwnj;هایی که اخیرا از آن استفاده کرده اید"
    );

    // Secondary add to cart button
    $(".single_add_to_cart_button-2").on("click", function () {
      $("form.variations_form").submit();
    });

    $(".show-more-to-buy").on("click", function () {
      const show_more = $(this);
      show_more.toggleClass("active");
      show_more.find(".icon").toggleClass("active");
      $(".section-buyer-single").toggleClass("active");
    });

    // persian number for price
    // function convertToPersianNumber(number) {
    //     var persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    //     return number.toString().replace(/\d/g, function(digit) {
    //         return persianNumbers[digit];
    //     });
    // }
    //
    // // انتخاب المان مورد نظر با استفاده از jQuery
    // var totalPriceElement = jQuery("#wapo-total-order-price");
    //
    // // زمانی که مقدار عدد تغییر کند، عدد را به اعداد فارسی تبدیل کنید
    // totalPriceElement.on("DOMSubtreeModified", function() {
    //     var currentPrice = totalPriceElement.text();
    //     var persianPrice = convertToPersianNumber(currentPrice);
    //     totalPriceElement.text(persianPrice);
    // });

    //Filter
    // Initially, show all cards
    $(".filter-item").show();
    $(
      "div.d-lg-flex.justify-content-between.mt-4 > ul > li:nth-child(1) > a"
    ).click();

    // When a filter button is clicked
    $(".filter-button").on("click", function () {
      const filter_btn = $(this);
      $(".filter-button").removeClass("active");
      filter_btn.addClass("active");

      var filterValue = filter_btn.data("filter");

      // Hide all cards
      $(".filter-item").hide();

      // Show cards with the selected category or show all if "All" is selected
      if (filterValue === "all") {
        $(".filter-item").fadeIn();
      } else {
        $(".filter-item." + filterValue).fadeIn();
      }
    });

    $(".content .woocommerce-MyAccount-content .woocommerce-Address")
      .removeClass("col-1")
      .addClass("w-100");
    $(".content .addresses").addClass("delivery-methods");
    $(".content .addresses .address")
      .removeClass("col-1")
      .addClass("w-100 method");
    $("#wcmca_billing_state_field > label:nth-child(1)").text("استان");
    $("#wcmca_billing_city_field > label:nth-child(1)").text("شهر");
    $("#wcmca_billing_city_field > label").text("شهر");

    $("#wcmca_add_new_address_button_shipping").on("click", function () {
      $("#wcmca_billing_state_field > label:nth-child(1)").text("استان");
      $("#wcmca_billing_city_field > label:nth-child(1)").text("شهر");
      $("#wcmca_shipping_city_field > label:nth-child(1)").text("شهر");
      $("#wcmca_billing_city_field > label").text("شهر");
      $("#wcmca_shipping_city_field > label").text("شهر");
      $(
        "#wcmca_billing_last_name_field, #wcmca_billing_company_field, #wcmca_billing_first_name_field"
      ).addClass("d-none");
      $(
        "#wcmca_shipping_last_name_field, #wcmca_shipping_company_field, #wcmca_shipping_first_name_field"
      ).addClass("d-none");
      // console.log("add new address");
    });

    //refresh checkout page after 2 seconds
    $("#wcmca_save_address_button_shipping").on("click", function () {
      setTimeout(function () {
        location.reload();
      }, 5000);
    });

    new DataTable("#example", {
      pageLength: 8, // Show 8 items per page
      lengthChange: false, // Hide the length menu
      language: {
        processing: "در حال بارگزاری",
        search: " ",
        // lengthMenu:    "Afficher _MENU_ &eacute;l&eacute;ments",
        info: "",
        infoEmpty: "",
        infoFiltered: "",
        //infoFiltered:   "(filtr&eacute; de _MAX_ &eacute;l&eacute;ments au total)",
        infoPostFix: "",
        loadingRecords: "در حال بارگزاری",
        zeroRecords: "محصولی یافت نشد",
        emptyTable: "پسوندی وجود ندارد",
        searchPlaceholder: "محصول مورد نظر خود را جستجو کنید...",
        paginate: {
          first: "اولین",
          previous: "قبلی",
          next: "بعدی",
          last: "قبلی",
        },
        aria: {
          sortAscending: ": activer pour trier la colonne par ordre croissant",
          sortDescending: ": activer pour trier la colonne par ordre décroissant",
        },
      },
      initComplete: function () {
        this.api()
          .columns()
          .every(function () {
            let column = this;
            let title = column.footer().textContent;

            // Create input element
            let input = document.createElement("input");
            input.placeholder = title;
            column.footer().replaceChildren(input);

            // Event listener for user input
            input.addEventListener("keyup", () => {
              if (column.search() !== this.value) {
                column.search(input.value).draw();
              }
            });
          });
      },
    });

    // Replace <br> with space
    if ($(".woocommerce-Addresses .woocommerce-Address address").length > 0) {
      $(".woocommerce-Addresses .woocommerce-Address address").each(
        function () {
          // Get the HTML content
          var htmlContent = $(this).html();

          // Replace <br> with space
          var updatedContent = htmlContent.replace(/<br>/g, " ");

          // Set the updated HTML content
          $(this).html(updatedContent);
        }
      );
    }

    // Replace <br> with space
    // if ( $(".delivery-methods .method .wcmca_clear_both").length > 0 ){
    //     $(".delivery-methods .method .wcmca_clear_both").addClass( 'd-inline' );
    //     $(".wcmca_clear_both[data-name=billing_postcode], .wcmca_clear_both[data-name=billing_phone], .wcmca_clear_both[data-name=billing_email]").addClass( 'd-block' );
    //     $(".wcmca_clear_both[data-name=billing_last_name], .wcmca_clear_both[data-name=billing_first_name]").addClass( 'd-block' );
    //     $(".woocommerce-account .addresses .title .edit").text( 'تغییر | ویرایش')
    // }

    if ($("#sidebar-mobile-menu").length > 0) {
      $("#sidebar-mobile-menu").on("click", function () {
        $("#mobile-menu-header").toggleClass("active");
      });

      $("#mobile-menu-header .close").on("click", function () {
        $("#mobile-menu-header").removeClass("active");
      });
    }

    $("#wcmca_billing_state_field > label").text("استان");
    $("#wcmca_billing_city_field .wcmca_form_label").text("شهر");

    $("#vertuka-close-modal").on("click", function () {
      $("#ChooseProductModal").modal("hide");
    });

    if ($(".vertuka-copy-mode").length > 0) {
      $(".vertuka-copy-mode").on("click", function () {
        const element = $(this);
        let copied_text = "";
        if (element.is(":input")) {
          var copyText = element[0];
          copyText.select();
          copyText.setSelectionRange(0, 99999); // For mobile devices

          // Copy the selected text to the clipboard
          document.execCommand("copy");

          // Deselect the text (optional)
          window.getSelection().removeAllRanges();
        } else {
          // Get the text content of the paragraph
          var copyText = element.attr("data-copy-mode").trim();

          // Create a temporary textarea element to copy the text
          var tempTextArea = $("<textarea>");
          tempTextArea.val(copyText);
          $("body").append(tempTextArea);

          // Select the text in the temporary textarea
          tempTextArea.select();
          tempTextArea[0].setSelectionRange(0, 99999); // For mobile devices

          // Copy the selected text to the clipboard
          document.execCommand("copy");

          // Remove the temporary textarea
          tempTextArea.remove();
        }

        element
          .closest("li")
          .find(".tooltip-copy")
          .fadeIn(500)
          .delay(2500)
          .fadeOut(500);
      });
    }

    $("#med-rp-phone-number").on("keyup change", function () {
      var inputValue = $(this).val();
      var convertedValue = convertArabicIndicToWestern(inputValue);
      $(this).val(convertedValue);
    });

    $(".med-input").on("keyup change", function () {
      var inputValue = $(this).val();
      var convertedValue = convertArabicIndicToWestern(inputValue);
      $(this).val(convertedValue);
    });

    $("#national_code").on("keyup change", function () {
      var inputValue = $(this).val();
      var convertedValue = convertArabicIndicToWestern(inputValue);
      $(this).val(convertedValue);
    });

    $("#wcmca_shipping_postcode").on("keyup change", function () {
      var inputValue = $(this).val();
      var convertedValue = convertArabicIndicToWestern(inputValue);
      $(this).val(convertedValue);
    });

    function convertArabicIndicToWestern(input) {
      var indicNumerals = {
        "٠": "0",
        "١": "1",
        "٢": "2",
        "٣": "3",
        "٤": "4",
        "٥": "5",
        "٦": "6",
        "٧": "7",
        "٨": "8",
        "٩": "9",
        "۰": "0",
        "۱": "1",
        "۲": "2",
        "۳": "3",
        "۴": "4",
        "۵": "5",
        "۶": "6",
        "۷": "7",
        "۸": "8",
        "۹": "9",
      };

      for (var indicNumeral in indicNumerals) {
        var regex = new RegExp(indicNumeral, "g");
        input = input.replace(regex, indicNumerals[indicNumeral]);
      }

      return input;
    }

    // $( '#wcmca_shipping_address_internal_name' ).on( "keyup change", function() {
    //     let newVal = $( '#wcmca_shipping_address_internal_name' ).val();
    //     $( '#wcmca_billing_address_internal_name' ).val( newVal )
    // });
    //
    // $( '#wcmca_shipping_state' ).on( "keyup change", function() {
    //     let newVal = $( '#wcmca_shipping_state' ).val();
    //     $( '#wcmca_billing_state' ).val( newVal )
    // });
    //
    // $( '#wcmca_shipping_address_1' ).on( "keyup change", function() {
    //     let newVal = $( '#wcmca_shipping_address_1' ).val();
    //     $( '#wcmca_billing_address_1' ).val( newVal )
    // });
    //
    // $( '#wcmca_shipping_address_2' ).on( "keyup change", function() {
    //     let newVal = $( '#wcmca_shipping_address_2' ).val();
    //     $( '#wcmca_billing_address_1' ).val( newVal )
    // });
    //
    // $( '#wcmca_shipping_city' ).on( "keyup change", function() {
    //     let newVal = $( '#wcmca_shipping_city' ).val();
    //     $( '#wcmca_billing_city' ).val( newVal )
    // });
    //
    //
    // $( '#wcmca_shipping_postcode' ).on( "keyup change", function() {
    //     let newVal = $( '#wcmca_shipping_postcode' ).val();
    //     $( '#wcmca_billing_postcode' ).val( newVal )
    // });

    $("#ship-to-different-address-checkbox").prop("checked", true).change();

    // Handle med_addresspress delivary SAVE NEW ADDRESS
    // $( '#addresspress-state' ).append( $( '#shipping_state' ).html() );
    // $( '#addresspress-state' ).on( 'change', function(){
    //     $( '#shipping_state' ).val( $( this ).val() ).change();
    //     $( '#addresspress-city' ).html( '' );
    //     $( '#addresspress-city' ).append( $( '#shipping_city' ).html() );
    // })

    // $( '#addresspress-edit-address #addresspress-state' ).append( $( '#shipping_state' ).html() );
    // $( '#addresspress-edit-address #addresspress-state' ).on( 'change', function(){
    //     $( '#addresspress-edit-address #shipping_state' ).val( $( this ).val() ).change();
    //     $( '#addresspress-city' ).html( '' );
    //     $( '#addresspress-city' ).append( $( '#shipping_city' ).html() );
    // })

    $("#vertuka-shipping-delivery-add-address").on("click", function (e) {
      e.preventDefault();
      $(".page-checkout-wrapper.add-address-lightbox")
        .css("position", "relative")
        .css("z-index", "-1");
      $(".progressbar-box.add-address-lightbox").css("z-index", "-1");
      $(".warning-login.add-address-lightbox").removeClass("d-none");
      map.resize();
      mapEdit.resize();
    });

    $(".add-address-lightbox .remove-item").on("click", function (e) {
      $(".page-checkout-wrapper.add-address-lightbox")
        .css("position", "inherit")
        .css("z-index", "inherit");
      $(".progressbar-box.add-address-lightbox").css("z-index", "inherit");
      $(".warning-login.add-address-lightbox").addClass("d-none");
      map.resize();
      mapEdit.resize();
    });

    $("#vertuka-address-delivery").on("click", ".method", function () {
      var element = $(this);
      $("#vertuka-address-delivery .delivery-methods .method").removeClass(
        "active"
      );
      $(this).addClass("active");

      $("[name=shipping_first_name]").val(
        $(".active").find("form").find("[name=first_name]").val()
      );
      $("[name=shipping_last_name]").val(
        $(".active").find("form").find("[name=last_name]").val()
      );
      $("[name=shipping_address_1]").val(
        $(".active")
        .find("form")
        .find("[name=address_1]")
        .val()
        .replace(/\n/g, " ")
      );
      $("[name=shipping_address_2]").val(
        $(".active").find("form").find("[name=address_2]").val()
      );
      $("[name=shipping_city]").val(
        $(".active").find("form").find("[name=city]").val()
      );

      $("[name=shipping_postcode]").val(
        $(".active").find("form").find("[name=postcode]").val()
      );
      $("[name=shipping_coordinates]").val(
        $(".active").find("form").find("[name=coordinates]").val()
      );
      $("[name=shipping_phone]").val(
        $(".active").find("form").find("[name=phone]").val()
      );

      $("[name=shipping_state]").removeClass("select2-hidden-accessible");
      $("[name=shipping_state]").attr("aria-hidden", "false");
      $("[name=shipping_state]").removeData("select2");
      $(".select2").remove();
      $("[name=shipping_state] option").removeAttr("selected");
      var state_val = $(
        "[name=shipping_state] option:contains(" +
        $(".active").find("form").find("[name=state]").val() +
        ")"
      ).val();
      $("[name=shipping_state]").val(state_val);

      $(".select2-results__option ").attr("aria-selected", true);

      // MJ empty custo fild to check everything
      $("#vertuka_custom_text_field_field #vertuka_custom_text_field").val("");
      $("#vertuka_custom_text_field_field #vertuka_custom_text_field").attr('value', 'qqqqaaa');

      console.log(element.find(".addresspress-address-city").text().trim());
      if (element.find(".addresspress-address-city").text().trim() == "تهران") {
        $(".vertuka_shipping_method_0_flat_rate5").removeClass("d-none");
        // $(".vertuka_shipping_method_0_aady").click();
        $(".vertuka_shipping_method_0_aady").removeClass("d-none");
        $("#vertuka_shipping_method_0_post").addClass("d-none");

        $("#vertuka_shipping_method_0_aady").click();
      } else if (
        element.find(".addresspress-address-city").text().trim() == "کرج"
      ) {
        $(".vertuka_shipping_method_0_flat_rate5").addClass("d-none");
        $(".vertuka_shipping_method_0_aady").addClass("d-none");
      } else {
        $(".vertuka_shipping_method_0_flat_rate5").addClass("d-none");
        $(".vertuka_shipping_method_0_aady").addClass("d-none");
        $("#vertuka-time-delivery").addClass("d-none");
        $("#vertuka_shipping_method_0_post").removeClass("d-none");

        $("#vertuka_shipping_method_0_post").click();
      }


      //   $("#vertuka-shipping-delivery .method:not('.d-none')").click(function (e) {
      //     console.log('auto clicked');
      // });

      // age address dare ya nadare



      map.resize();
      mapEdit.resize();
    });
    // $("#vertuka-address-delivery .delivery-methods .method.active").click();
    // $("#vertuka_shipping_method_0_post").click();

    if ($(".delivery-methods .position-relative").length) {
      // if($(".delivery-methods .position-relative .active").find(".addresspress-address-city").text().trim() == "تهران") {
      //   $(".vertuka_shipping_method_0_aady").click();
      // } else {
      //   $("#vertuka_shipping_method_0_post").click();
      // }
      // console.log("adress daradddddddddddddddd");
    } else {
      // console.log("adress nadaradddddddddddddddddddd");
      $(".woocommerce-checkout-review-order-table .inner-box").addClass(
        "d-none"
      );
      $(".woocommerce-checkout-review-order-table").append(
        '<p class="temp-text-msg">لطفا آدرس و شیوه ارسال را انتخاب کنید.</p>'
      );
    }


    $("input[type=radio][name=MJ-selected-method-date-time]").change(
      function () {
        //$('#vertuka_custom_text_field_field #vertuka_custom_text_field').val($(this).val());
      }
    );

    // Handle med_addresspress delivary EDIT ADDRESS
    // $( '.add-address-lightbox #addresspress-state' ).empty();
    $(".add-address-lightbox #addresspress-state").append(
      '<option value="">یک گزینه انتخاب نمائید…</option><option value="البرز">البرز</option><option value="اردبیل">اردبیل</option><option value="آذربایجان شرقی">آذربایجان شرقی</option><option value="آذربایجان غربی">آذربایجان غربی</option><option value="بوشهر">بوشهر</option><option value="چهارمحال و بختیاری">چهارمحال و بختیاری</option><option value="فارس">فارس</option><option value="گیلان">گیلان</option><option value="گلستان">گلستان</option><option value="همدان">همدان</option><option value="هرمزگان">هرمزگان</option><option value="ایلام">ایلام</option><option value="اصفهان">اصفهان</option><option value="کرمان">کرمان</option><option value="کرمانشاه">کرمانشاه</option><option value="خراسان شمالی">خراسان شمالی</option><option value="خراسان رضوی">خراسان رضوی</option><option value="خراسان جنوبی">خراسان جنوبی</option><option value="خوزستان">خوزستان</option><option value="Kکهگیلویه و بویراحمدBD">کهگیلویه و بویراحمد</option><option value="کردستان">کردستان</option><option value="لرستان">لرستان</option><option value="مرکزی">مرکزی</option><option value="مازندران">مازندران</option><option value="قزوین">قزوین</option><option value="قم">قم</option><option value="سمنان">سمنان</option><option value="سیستان و بلوچستان">سیستان و بلوچستان</option><option value="تهران">تهران</option><option value="یزد">یزد</option><option value="زنجان">زنجان</option>'
    );
    // $( '.edit-address-lightbox #addresspress-state' ).empty();
    $(".edit-address-lightbox #addresspress-state").append(
      '<option value="">یک گزینه انتخاب نمائید…</option><option value="البرز">البرز</option><option value="اردبیل">اردبیل</option><option value="آذربایجان شرقی">آذربایجان شرقی</option><option value="آذربایجان غربی">آذربایجان غربی</option><option value="بوشهر">بوشهر</option><option value="چهارمحال و بختیاری">چهارمحال و بختیاری</option><option value="فارس">فارس</option><option value="گیلان">گیلان</option><option value="گلستان">گلستان</option><option value="همدان">همدان</option><option value="هرمزگان">هرمزگان</option><option value="ایلام">ایلام</option><option value="اصفهان">اصفهان</option><option value="کرمان">کرمان</option><option value="کرمانشاه">کرمانشاه</option><option value="خراسان شمالی">خراسان شمالی</option><option value="خراسان رضوی">خراسان رضوی</option><option value="خراسان جنوبی">خراسان جنوبی</option><option value="خوزستان">خوزستان</option><option value="Kکهگیلویه و بویراحمدBD">کهگیلویه و بویراحمد</option><option value="کردستان">کردستان</option><option value="لرستان">لرستان</option><option value="مرکزی">مرکزی</option><option value="مازندران">مازندران</option><option value="قزوین">قزوین</option><option value="قم">قم</option><option value="سمنان">سمنان</option><option value="سیستان و بلوچستان">سیستان و بلوچستان</option><option value="تهران">تهران</option><option value="یزد">یزد</option><option value="زنجان">زنجان</option>'
    );
    // $( '.dashboard-container .add-address-lightbox #addresspress-state' ).empty();
    $(".dashboard-container .add-address-lightbox #addresspress-state").append(
      '<option value="">یک گزینه انتخاب نمائید…</option><option value="البرز">البرز</option><option value="اردبیل">اردبیل</option><option value="آذربایجان شرقی">آذربایجان شرقی</option><option value="آذربایجان غربی">آذربایجان غربی</option><option value="بوشهر">بوشهر</option><option value="چهارمحال و بختیاری">چهارمحال و بختیاری</option><option value="فارس">فارس</option><option value="گیلان">گیلان</option><option value="گلستان">گلستان</option><option value="همدان">همدان</option><option value="هرمزگان">هرمزگان</option><option value="ایلام">ایلام</option><option value="اصفهان">اصفهان</option><option value="کرمان">کرمان</option><option value="کرمانشاه">کرمانشاه</option><option value="خراسان شمالی">خراسان شمالی</option><option value="خراسان رضوی">خراسان رضوی</option><option value="خراسان جنوبی">خراسان جنوبی</option><option value="خوزستان">خوزستان</option><option value="Kکهگیلویه و بویراحمدBD">کهگیلویه و بویراحمد</option><option value="کردستان">کردستان</option><option value="لرستان">لرستان</option><option value="مرکزی">مرکزی</option><option value="مازندران">مازندران</option><option value="قزوین">قزوین</option><option value="قم">قم</option><option value="سمنان">سمنان</option><option value="سیستان و بلوچستان">سیستان و بلوچستان</option><option value="تهران">تهران</option><option value="یزد">یزد</option><option value="زنجان">زنجان</option>'
    );

    $(".edit-address-lightbox .remove-item").on("click", function (e) {
      $(".page-checkout-wrapper.edit-address-lightbox")
        .css("position", "inherit")
        .css("z-index", "inherit");
      $(".progressbar-box.edit-address-lightbox").css("z-index", "inherit");
      $(".warning-login.edit-address-lightbox").addClass("d-none");
    });

    $(".dashboard-container #vertuka-address-delivery").on(
      "click",
      ".edit-address",
      function (e) {
        e.preventDefault();
        var element = $(this);
        var method = element.closest(".position-relative").find(".method");

        $(".edit-address-lightbox #addresspress-first-name")
          .val(method.find(".addresspress-address-first-name").text().trim())
          .change();
        $(".edit-address-lightbox #addresspress-last-name")
          .val(method.find(".addresspress-address-last-name").text().trim())
          .change();
        $(".edit-address-lightbox #addresspress-address1").text(
          method.find(".addresspress-address-address1").text().trim()
        );
        $(".edit-address-lightbox #addresspress-address2")
          .val(method.find(".addresspress-address-address2").text().trim())
          .change();
        $(".edit-address-lightbox #addresspress-zip-code")
          .val(
            convertArabicIndicToWestern(
              method.find(".addresspress-address-zip-code").text().trim()
            )
          )
          .change();
        $(".edit-address-lightbox #addresspress-phone")
          .val(
            convertArabicIndicToWestern(
              method.find(".addresspress-address-phone").text().trim()
            )
          )
          .change();
        $(".edit-address-lightbox #addresspress-address-id")
          .val(method.attr("id").replace("addresspress-address-", ""))
          .change();

        $(".edit-address-lightbox #coordinatesEdit")
          .val(method.find(".addresspress-coordinates").text().trim())
          .change();

        //console.log( convertArabicIndicToWestern( method.find( '.addresspress-address-zip-code' ).text().trim() ) );

        $(".page-checkout-wrapper.edit-address-lightbox")
          .css("position", "relative")
          .css("z-index", "-1");
        $(".progressbar-box.edit-address-lightbox").css("z-index", "-1");
        $(".warning-login.edit-address-lightbox").removeClass("d-none");

        $(".edit-address-lightbox #addresspress-state")
          .val(method.find(".addresspress-address-state").text().trim())
          .change();
        setTimeout(function () {
          $(".edit-address-lightbox #addresspress-city")
            .val(method.find(".addresspress-address-city").text().trim())
            .change();
        }, 1000);
        map.resize();
        mapEdit.resize();
      }
    );

    $(".page-checkout-wrapper #vertuka-address-delivery").on(
      "click",
      ".edit-address",
      function (e) {
        e.preventDefault();
        var element = $(this);
        var method = element.closest(".position-relative").find(".method");

        $(".edit-address-lightbox #addresspress-first-name")
          .val(method.find(".addresspress-address-first-name").text().trim())
          .change();
        $(".edit-address-lightbox #addresspress-last-name")
          .val(method.find(".addresspress-address-last-name").text().trim())
          .change();
        $(".edit-address-lightbox #addresspress-address1").text(
          method.find(".addresspress-address-address1").text().trim()
        );
        $(".edit-address-lightbox #addresspress-address2")
          .val(method.find(".addresspress-address-address2").text().trim())
          .change();
        $(".edit-address-lightbox #addresspress-zip-code")
          .val(
            convertArabicIndicToWestern(
              method.find(".addresspress-address-zip-code").text().trim()
            )
          )
          .change();
        $(".edit-address-lightbox #addresspress-phone")
          .val(
            convertArabicIndicToWestern(
              method.find(".addresspress-address-phone").text().trim()
            )
          )
          .change();
        $(".edit-address-lightbox #addresspress-address-id")
          .val(method.attr("id").replace("addresspress-address-", ""))
          .change();

        // console.log(
        //   convertArabicIndicToWestern(
        //     method.find(".addresspress-address-zip-code").text().trim()
        //   )
        // );

        $(".page-checkout-wrapper.edit-address-lightbox")
          .css("position", "relative")
          .css("z-index", "-1");
        $(".progressbar-box.edit-address-lightbox").css("z-index", "-1");
        $(".warning-login.edit-address-lightbox").removeClass("d-none");

        $(".edit-address-lightbox #addresspress-state")
          .val(method.find(".addresspress-address-state").text().trim())
          .change();
        setTimeout(function () {
          $(".edit-address-lightbox #addresspress-city")
            .val(method.find(".addresspress-address-city").text().trim())
            .change();
        }, 1000);
        map.resize();
        mapEdit.resize();
      }
    );
  });
})(jQuery);

function MJ_popup_function() {
  // mj add popup
  var modal = document.getElementById("mjModal");
  modal.style.display = "block";
  // document.getElementsByClassName("mj-popup-close")[0].onclick = function() {
  //     modal.style.display = "none";
  // }
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
  // mj end popup
}

function MJ_popup_function_only_one() {
  var modal = document.getElementById("mjModalOnlyOne");
  modal.style.display = "block";
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
  jQuery(".div-close").on("click", function () {
    modal.style.display = "none";
  });
}

function MJ_popup_function_exit() {
  // mj add popup
  var modal = document.getElementById("mjModal");
  modal.style.display = "none";
  // mj end popup
}

jQuery(document).ready(function () {
  jQuery('[data-toggle="tooltip"]').tooltip();
});

jQuery(document).ready(function () {
  jQuery(".noptin-label").remove();
  jQuery("#noptin-form-1__field-email").attr("placeholder", "آدرس ایمیل");
  jQuery("#noptin-form-1__field-email").attr("class", "");
  jQuery("#noptin-form-1__field-email").attr(
    "class",
    "newsletters-input mobile-w-100"
  );
  jQuery("#noptin-form-1__field-email").attr("style", "margin-left:5px;");
  jQuery("#noptin-form-1__submit").text("عضویت");
  jQuery("#noptin-form-1__submit").attr("class", "");
  jQuery("#noptin-form-1__submit").attr(
    "class",
    "button bg-success text-white box-shadow-none border-0"
  );
  jQuery(".noptin-form-fields").attr("class", "noptin-form-fields d-flex");
});