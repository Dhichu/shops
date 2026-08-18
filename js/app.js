const shop = {
  name: document.body.dataset.shopName,
  location: document.body.dataset.location,
  tagline: document.body.dataset.tagline,
  logo: document.body.dataset.logo,
  phone: document.body.dataset.phone,
  updatedDate: globalRates.updatedDate,
  updatedTime: globalRates.updatedTime,
  gold24k: globalRates.gold24k,
  gold22k: globalRates.gold22k,
  silver: globalRates.silver
};

const money = n => new Intl.NumberFormat("en-IN").format(n);

function changeInfo(item) {
  const diff = item.price - item.previous;
  const up = diff >= 0;
  return {
    diff: Math.abs(diff),
    arrow: up ? "↑" : "↓",
    className: up ? "" : "down"
  };
}

function rateCard(title, item) {
  const c = changeInfo(item);
  return `
    <article class="rate-card">
      <div>
        <div class="rate-name">${title}</div>
        <div class="rate-meta">${item.purity}</div>
        <span class="unit">Per Gram</span>
      </div>
      <div class="price">
        <div class="price-value">₹${money(item.price)}</div>
        <div class="price-unit">/ gram</div>
      </div>
      <div class="change ${c.className}">
        <span class="change-arrow">${c.arrow}</span>
        ${c.arrow === "↑" ? "+" : "-"}₹${money(c.diff)}
        <br><span style="font-weight:500">Today</span>
      </div>
    </article>`;
}

document.querySelectorAll("[data-shop-name]").forEach(el => {
  el.textContent = document.body.dataset.shopName;
});
document.querySelectorAll("[data-location]").forEach(el => {
  el.textContent = document.body.dataset.location;
});
document.querySelectorAll("[data-tagline]").forEach(el => {
  el.textContent = document.body.dataset.tagline;
});
document.querySelectorAll("[data-shop-logo]").forEach(el => {
  el.src = `../images/logos/${document.body.dataset.logo}`;
  el.alt = `${document.body.dataset.shopName} logo`;
});
document.querySelectorAll("[data-updated-date]").forEach(el => el.textContent = globalRates.updatedDate);
document.querySelectorAll("[data-updated-time]").forEach(el => el.textContent = globalRates.updatedTime);
document.querySelectorAll("[data-phone]").forEach(el => {
  el.textContent = document.body.dataset.phone;
  el.href = `tel:${document.body.dataset.phone.replace(/\s/g,"")}`;
});
document.querySelectorAll("[data-address]").forEach(el => el.textContent = document.body.dataset.location);

document.getElementById("gold-rates").innerHTML =
  rateCard("24K Gold", globalRates.gold24k) +
  rateCard("22K Gold", globalRates.gold22k);

document.getElementById("silver-rates").innerHTML =
  rateCard("Silver", globalRates.silver);

document.title = `${document.body.dataset.shopName} — Gold & Silver Rate`;
