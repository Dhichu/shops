# 5-Shop Gold & Silver Rate — PWA GitHub Test

## ⭐ ONE RATE FILE FOR ALL FIVE SHOPS

All five shops use the SAME rate data file:

`js/rates.js`

Change the rates once there and all five shop pages update.

Example:
- Change `gold24k.price` → all 5 shops show the new 24K rate.
- Change `gold22k.price` → all 5 shops show the new 22K rate.
- Change `silver.price` → all 5 shops show the new silver rate.

Shop names, logos, locations and phone numbers remain different for each shop.

## Files

- `index.html` — five-shop selection page
- `js/rates.js` — ⭐ only rate file
- `js/app.js` — shared rendering
- `js/pwa.js` — PWA registration/install
- `manifest.json` — PWA manifest
- `service-worker.js` — offline cache
- `images/logos/` — five shop logos
- `shops/shop1.html` through `shops/shop5.html` — individual shop pages

## Daily rate workflow

1. Open `js/rates.js` in GitHub.
2. Change the current rate and previous rate.
3. Commit the change.
4. GitHub Pages publishes it.
5. All five shops show the new rate.

No OneSignal notifications are included yet.
