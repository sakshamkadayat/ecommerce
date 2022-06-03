import "./footer.css";

export function Footer() {
  return (
    <>
      <footer class="footer-distributed">
        <div class="footer-left">
          <h3>
            ECOMMERCE<span>WEB</span>
          </h3>

          

          <p class="footer-company-name">
            Copyright © 2022 <strong>Saksham</strong> All rights reserved
          </p>
        </div>

        <div class="footer-center">
          <div>
            <i class="fa fa-map-marker"></i>
            <p>
              <span>Santinagar</span>
              Kathmandu
            </p>
          </div>

          <div>
            <i class="fa fa-envelope"></i>
            <p>
              <a href="mailto:sakshamkadayat@gmail.com">
                sakshamkadayat@gmail.com
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
