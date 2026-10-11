
import { Link } from 'react-router-dom';
import { storeInfo } from '../config/store';

function Contact() {
  return (
    <div>
      <div
        className="text-center p-5 rounded"
        style={{ backgroundColor: '#f8e5e9' }}
      >
        <h1 style={{ color: '#b76e79' }}>Contact Dokkana</h1>
        <p className="lead">We would love to hear from you!</p>
      </div>

      <div className="row justify-content-center mt-5">
        <div className="col-12 col-md-8">
          <div className="card shadow-sm">
            <div className="card-body p-4 text-center">
              <h3 className="mb-4">Contact Information</h3>

              <p>
                <strong>Email: </strong>
                <a href={`mailto:${storeInfo.email}`}>
                  {storeInfo.email}
                </a>
              </p>

              <p>
                <strong>Phone: </strong>
                <a href={`tel:${storeInfo.phone}`}>
                  {storeInfo.phone}
                </a>
              </p>

              <p><strong>Location:</strong> Egypt</p>

              <hr />

              <h4 style={{ color: '#b76e79' }}>Join Our Community</h4>

              <div className="d-flex justify-content-center gap-3 flex-wrap mt-3">
                {storeInfo.whatsappGroup && (
                  <a
                    href={storeInfo.whatsappGroup}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-success"
                  >
                    WhatsApp Group
                  </a>
                )}

                {storeInfo.facebookGroup && (
                  <a
                    href={storeInfo.facebookGroup}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                  >
                    Facebook Group
                  </a>
                )}

                {!storeInfo.whatsappGroup && !storeInfo.facebookGroup && (
                  <p className="text-muted">
                    Community links will be available soon.
                  </p>
                )}
              </div>

              <Link
                to="/products"
                className="btn text-white mt-4"
                style={{ backgroundColor: '#b76e79' }}
              >
                Explore Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
