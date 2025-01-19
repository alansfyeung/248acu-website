---
layout: single
header:
  og_image: /assets/images/og/248acu-og-parade.jpg
title: Make a payment to 248 ACU
tagline: |
  We accept electronic payment for annual fees and activity fees, including credit card payments and bank transfers.
description: Make online credit card or EFT payments to 248 ACU for annual fees and activity fees
permalink: /payments/
categories: info payment
sidebar:
  nav: articles
---


## Credit Card Payments

<div class="well">
  <strong>Our online credit card payments are processed securely through Square.</strong> 
</div>


<details class="fees__group">
  <summary><h3>Annual Fees</h3></summary>

  <p>
    Annual fees are your yearly contributions that enable us to fund our classroom learning, unit-owned field equipment, awards and prizes, and more. All cadets participating at 248 ACU are required to contribute these annual fees.
  </p>

  <div class="fees__payment-link">
    <div class="fees__box">
        <p class="fees__box__title">Annual Fees</p>
        <p class="fees__box__price"><span class="fees__box__price--amount">$300.00</span></p>
        <div class="fees__button-group">
          <a target="_blank" data-url="https://square.link/u/KrKdDTJX?src=embed" href="https://square.link/u/KrKdDTJX?src=embed" class="square-checkout-button fees__button">Pay Now</a>
        </div>
    </div>
  </div>

</details>


<details class="fees__group">
  <summary><h3>Activity Fees </h3></summary>

  <div class="fees__payment-link">
    <div class="fees__box">
        <p class="fees__box__title">Basic training weekend and uniform deposit</p>
        <p class="fees__box__price"><span class="fees__box__price--amount">$300.00</span></p>
        <div class="fees__button-group">
          <a target="_blank" data-url="https://square.link/u/Y4rlINVY?src=embed" href="https://square.link/u/Y4rlINVY?src=embed" class="square-checkout-button fees__button">Pay now</a>
        </div>
    </div>
  </div>

</details>

---

## Bank transfer (Electronic Funds Transfer/EFT) payments

{% include bank-account.html %}

<small>No surchage is applied or required when making payments through bank transfer/EFT.</small>

When making bank transfer, please include your child's surname in the description as well as the words "Annual Fees".

---

## Related topics

- [Attendance requirements and fees]({% link _pages/attendance-and-fees.md %})
- [Frequently asked questions]({% link _pages/faq.md %})

<script>
  $(function () {
    $('.fees__group').each(function () {
      const numItemsInGroup = $(this).find('.fees__button').length;
      if (numItemsInGroup > 0) {
        $(this).find('summary').append(`<span class="fees__group__counter">${numItemsInGroup}</span>`);
      } 
    });
  });
  
  function showCheckoutWindow(e) {
    e.preventDefault();

    const url = this.getAttribute('data-url');
    const title = 'Square Payment Links';

    // Some platforms embed in an iframe, so we want to top window to calculate sizes correctly
    const topWindow = window.top ? window.top : window;

    // Fixes dual-screen position                                Most browsers          Firefox
    const dualScreenLeft = topWindow.screenLeft !==  undefined ? topWindow.screenLeft : topWindow.screenX;
    const dualScreenTop = topWindow.screenTop !==  undefined   ? topWindow.screenTop  : topWindow.screenY;

    const width = topWindow.innerWidth ? topWindow.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    const height = topWindow.innerHeight ? topWindow.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

    const h = height * .75;
    const w = 500;

    const systemZoom = width / topWindow.screen.availWidth;
    const left = (width - w) / 2 / systemZoom + dualScreenLeft;
    const top = (height - h) / 2 / systemZoom + dualScreenTop;
    const newWindow = window.open(url, title, `scrollbars=yes, width=${w / systemZoom}, height=${h / systemZoom}, top=${top}, left=${left}`);

    if (window.focus) newWindow.focus();
  }

  // This overrides the default checkout button click handler to show the embed modal
  // instead of opening a new tab with the given link url
  const paymentButtons = document.querySelectorAll('.square-checkout-button');
  for (const paymentButton of paymentButtons) {
    paymentButton.addEventListener('click', showCheckoutWindow);
  }
</script>
