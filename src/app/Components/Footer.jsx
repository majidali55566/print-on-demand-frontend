import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div>
          <h3>Brand Logo</h3>
          <p>
            Brand is a platform designed for print-on-demand services, for
            selling custom items online. It's made for anyone, whether you're
            just starting out or already have a business. With just a few
            clicks.
          </p>
        </div>
        <div className="links">
          <div className="quick-links">
            <h4>Quick Links</h4>
            <Link href="/sldf/lskd">Shipping</Link>
            <Link href="/sldf/lsskd">Context rules</Link>
            <Link href="/sldf/leskd">Printing guidelines</Link>
          </div>
          <div className="resources">
            <h4>Quick Links</h4>
            <Link href="/public/faqs">FAQ</Link>
            <Link href="public/how-it-works">How it works</Link>
            <Link href="/sldf/leskd">contact us</Link>
          </div>
          <div className="conditions">
            <h4>Conditions</h4>
            <Link href="/sldf/leskd">Privacy Policy</Link>
            <Link href="/sldf/leskd">Refund Policy</Link>
            <Link href="/sldf/leskd">Terms of services</Link>
            <Link href="/sldf/leskd">Intellectual Property Policy</Link>
            <Link href="/sldf/leskd">Terms of online sales</Link>
          </div>
        </div>
      </div>
      <div>
        <p>© 2024 Todify™. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
