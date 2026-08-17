* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  background: #fff9fb;
  color: #33282d;
  line-height: 1.6;
}

a {
  text-decoration: none;
  color: inherit;
}

.container {
  width: 90%;
  max-width: 1150px;
  margin: auto;
}

/* HEADER */

.header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: rgba(255, 249, 251, 0.96);
  border-bottom: 1px solid #f0dfe5;
}

.nav {
  min-height: 75px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 25px;
}

.logo {
  font-family: Georgia, serif;
  font-size: 28px;
  font-weight: bold;
  color: #9b6175;
}

.logo span {
  color: #d59bad;
}

nav {
  display: flex;
  gap: 25px;
}

nav a {
  font-size: 14px;
  color: #55434a;
  transition: 0.3s;
}

nav a:hover {
  color: #c47791;
}

.nav-button,
.button {
  display: inline-block;
  background: #b86f87;
  color: white;
  padding: 13px 22px;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  transition: 0.3s;
  font-size: 14px;
}

.nav-button:hover,
.button:hover {
  background: #95566d;
  transform: translateY(-2px);
}

/* HERO */

.hero {
  min-height: 650px;
  display: flex;
  align-items: center;
  background:
    radial-gradient(circle at 80% 20%, #f7dce5 0, transparent 35%),
    linear-gradient(135deg, #fff9fb, #f9edf1);
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 60px;
}

.small-title {
  color: #b86f87;
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 3px;
  margin-bottom: 15px;
}

.hero h1 {
  font-family: Georgia, serif;
  font-size: clamp(48px, 6vw, 78px);
  line-height: 1.05;
  margin-bottom: 25px;
}

.hero h1 span,
.about h2 span,
.section-heading h2 span,
.booking h2 span,
.contact h2 span {
  color: #c47791;
}

.hero-text > p:not(.small-title) {
  max-width: 520px;
  color: #705e65;
  font-size: 17px;
  margin-bottom: 30px;
}

.hero-buttons {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.secondary {
  background: transparent;
  color: #9b6175;
  border: 1px solid #cfa0ae;
}

.secondary:hover {
  color: white;
}

.hero-card {
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-circle {
  width: 390px;
  height: 390px;
  border-radius: 50%;
  background: linear-gradient(145deg, #f1c9d5, #d991aa);
  box-shadow: 0 25px 60px rgba(130, 76, 96, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.hero-circle span {
  font-size: 65px;
  margin-bottom: 15px;
}

.hero-circle h3 {
  font-family: Georgia, serif;
  font-size: 38px;
  color: white;
}

.hero-circle p {
  color: white;
  letter-spacing: 2px;
  font-size: 12px;
}

/* SECTIONS */

.section {
  padding: 100px 0;
}

.about {
  background: white;
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.about-image {
  min-height: 480px;
}

.image-placeholder {
  height: 480px;
  border-radius: 30px;
  background: linear-gradient(145deg, #ead0d9, #c9879d);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  box-shadow: 0 20px 50px rgba(120, 75, 90, 0.15);
}

.image-placeholder span {
  font-size: 100px;
}

.image-placeholder p {
  font-family: Georgia, serif;
  font-size: 28px;
}

.about h2,
.booking h2,
.contact h2 {
  font-family: Georgia, serif;
  font-size: clamp(38px, 5vw, 55px);
  line-height: 1.1;
  margin-bottom: 25px;
}

.about-text > p:not(.small-title) {
  color: #74656b;
  margin-bottom: 18px;
}

.text-button {
  display: inline-block;
  margin-top: 15px;
  color: #b86f87;
  font-weight: bold;
}

/* SERVICES */

.services {
  background: #fff9fb;
}

.section-heading {
  text-align: center;
  max-width: 650px;
  margin: 0 auto 55px;
}

.section-heading h2 {
  font-family: Georgia, serif;
  font-size: clamp(38px, 5vw, 55px);
  line-height: 1.1;
  margin-bottom: 15px;
}

.section-heading > p:not(.small-title) {
  color: #76666d;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.service-card {
  background: white;
  border: 1px solid #f0dfe5;
  border-radius: 22px;
  padding: 35px 25px;
  text-align: center;
  transition: 0.3s;
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(130, 80, 100, 0.12);
}

.service-card.featured {
  border: 2px solid #d59bad;
}

.service-icon {
  font-size: 45px;
  margin-bottom: 15px;
}

.service-card h3 {
  font-family: Georgia, serif;
  font-size: 24px;
  margin-bottom: 10px;
}

.service-card p {
  color: #76666d;
  font-size: 14px;
  min-height: 70px;
}

.service-card strong {
  display: block;
  margin-top: 15px;
  color: #b86f87;
}

/* GALLERY */

.gallery {
  background: white;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.gallery-item {
  height: 280px;
  border-radius: 25px;
  background: linear-gradient(145deg, #f3dce4, #d79aad);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  overflow: hidden;
  transition: 0.3s;
}

.gallery-item:hover {
  transform: scale(1.02);
}

.gallery-item div {
  font-size: 65px;
  margin-bottom: 10px;
}

.gallery-item span {
  font-family: Georgia, serif;
  font-size: 22px;
}

/* BOOKING */

.booking {
  background: #f8e8ee;
}

.booking-box {
  background: white;
  border-radius: 30px;
  padding: 60px;
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 70px;
  box-shadow: 0 20px 60px rgba(120, 70, 90, 0.1);
}

.booking-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.booking-text p:not(.small-title) {
  color: #76666d;
}

form {
  width: 100%;
}

.form-group {
  margin-bottom: 18px;
}

.form-group label {
  display: block;
  margin-bottom: 7px;
  font-size: 13px;
  font-weight: bold;
  color: #5e4b53;
}

input,
select {
  width: 100%;
  padding: 14px 16px;
  border: 1px solid #ead4dc;
  border-radius: 12px;
  background: #fffafa;
  color: #493a40;
  outline: none;
  font-size: 14px;
}

input:focus,
select:focus {
  border-color: #c47791;
  box-shadow: 0 0 0 3px rgba(196, 119, 145, 0.1);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
}

.full-button {
  width: 100%;
  margin-top: 5px;
}

#formMessage {
  margin-top: 15px;
  text-align: center;
  color: #b86f87;
  font-weight: bold;
}

/* CONTACT */

.contact {
  background: #33282d;
  color: white;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.contact h2 {
  margin-bottom: 0;
}

.contact-info {
  color: #e7d8dd;
  font-size: 17px;
}

.contact-info p {
  margin-bottom: 15px;
}

/* FOOTER */

footer {
  background: #251d21;
  color: #bfaeb4;
  padding: 25px 0;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

footer .logo {
  font-size: 22px;
}

/* MOBILE */

@media (max-width: 900px) {

  nav {
    display: none;
  }

  .hero-content,
  .about-grid,
  .booking-box,
  .contact-grid {
    grid-template-columns: 1fr;
  }

  .hero {
    padding: 70px 0;
  }

  .hero-card {
    order: -1;
  }

  .hero-circle {
    width: 300px;
    height: 300px;
  }

  .hero-circle h3 {
    font-size: 30px;
  }

  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .booking-box {
    padding: 35px 25px;
  }
}

@media (max-width: 600px) {

  .nav-button {
    display: none;
  }

  .hero h1 {
    font-size: 48px;
  }

  .services-grid,
  .gallery-grid,
  .form-row {
    grid-template-columns: 1fr;
  }

  .section {
    padding: 70px 0;
  }

  .image-placeholder {
    height: 350px;
  }

  .about-image {
    min-height: 350px;
  }

  .footer-content {
    flex-direction: column;
    text-align: center;
  }
}
