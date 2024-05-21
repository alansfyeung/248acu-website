---
layout: single
title: Make a payment to 248 ACU
tagline: |
  We accept electronic payment for term fees and activity fees, including credit card payments and bank transfers.
description: Make credit card payments online to 248 ACU for term fees and activitry fees
permalink: /payments/
categories: info payment
sidebar:
  nav: articles
---

## Credit Card payments

<div class="fees__credit-card">
  <div class="fees__box">
      <p class="fees__box__title">Term Fees - Single Term Once-off</p>
      <p class="fees__box__price"><span class="fees__box__price--amount">$65.00</span> <small>+ surcharge</small></p>
      <a target="_blank" data-url="https://square.link/u/lNgAjpJP?src=embd" href="https://square.link/u/lNgAjpJP?src=embed" class="square-checkout-button fees__box__button">Pay Once</a>
  </div>

  <div class="fees__box">
      <p class="fees__box__title">Term Fees - Single Term Recurring</p>
      <p class="fees__box__price"><span class="fees__box__price--amount">$65.00</span> per quarter <small>+ surcharge</small></p>
      <a target="_blank" data-url="https://square.link/u/J6nlNKC9?src=embd" href="https://square.link/u/J6nlNKC9?src=embed" class="square-checkout-button fees__box__button">Set up payments</a>
  </div>

  <div class="fees__box">
      <p class="fees__box__title">Term Fees - Annual (4 Terms) Once-off</p>
      <p class="fees__box__price"><span class="fees__box__price--amount">$240.00</span> <small>+ surcharge</small></p>
      <a target="_blank" data-url="https://square.link/u/KrKdDTJX?src=embd" href="https://square.link/u/KrKdDTJX?src=embed" class="square-checkout-button fees__box__button">Pay Once</a>
  </div>

  <div class="fees__box">
      <p class="fees__box__title">Term Fees - Annual (4 Terms) Recurring</p>
      <p class="fees__box__price"><span class="fees__box__price--amount">$240.00</span> annually <small>+ surcharge</small></p>
      <a target="_blank" data-url="https://square.link/u/sKTfBsx8?src=embd" href="https://square.link/u/sKTfBsx8?src=embed" class="square-checkout-button fees__box__button">Set up payments</a>
  </div>

</div>

Our online credit card payments are processed securely through Square. A card processing surcharge of 2% applies to credit card payments, so that your full amount of term fees or activity fees goes towards supporting cadets at the unit. Thank you for your understanding.

---

## Bank transfer (Electronic Funds Transfer/EFT) payments

{% include bank-account.html %}

When making bank transfer, please include your child's surname in the description as well as the words "Term Fees". We encourage you to set up a scheduled payment through your online banking to avoid a missed payment.

---

## Related topics

- [Attendance requirements and fees]({% link _pages/attendance-and-fees.md %})
- [Frequently asked questions]({% link _pages/faq.md %})

<script>
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
