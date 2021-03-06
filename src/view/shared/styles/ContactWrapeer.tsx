import styled from "styled-components";
const ContactWrapeer = styled.div`
  .contact .info {
    width: 100%;
    background: #fff;
  }

  .contact .info i {
    font-size: 20px;
    color: #795548;
    float: left;
    width: 44px;
    height: 44px;
    background: #effbf9;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    transition: all 0.3s ease-in-out;
  }

  .contact .info h4 {
    padding: 0 0 0 60px;
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 5px;
    color: #222222;
  }

  .contact .info p {
    padding: 0 0 0 60px;
    margin-bottom: 0;
    font-size: 14px;
    color: #555555;
  }
  contact .info .address,
  .contact .info .email,
  .contact .info .phone {
    margin-top: 10px;
  }

  .contact .info .email:hover i,
  .contact .info .address:hover i,
  .contact .info .phone:hover i {
    background: #795548;
    color: #fff;
  }

  .contact .php-email-form {
    width: 100%;
    background: #fff;
  }

  .contact .php-email-form .form-group {
    padding-bottom: 8px;
  }

  .contact .php-email-form .error-message {
    display: none;
    color: #fff;
    background: #ed3c0d;
    text-align: center;
    padding: 15px;
    font-weight: 600;
  }

  .contact .php-email-form .sent-message {
    display: none;
    color: #fff;
    background: #18d26e;
    text-align: center;
    padding: 15px;
    font-weight: 600;
  }

  .contact .php-email-form .loading {
    display: none;
    background: #fff;
    text-align: center;
    padding: 15px;
  }

  .contact .php-email-form .loading:before {
    content: "";
    display: inline-block;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    margin: 0 10px -6px 0;
    border: 3px solid #18d26e;
    border-top-color: #eee;
    -webkit-animation: animate-loading 1s linear infinite;
    animation: animate-loading 1s linear infinite;
  }

  .contact .php-email-form input,
  .contact .php-email-form textarea {
    border-radius: 4px;
    box-shadow: none;
    font-size: 14px;
  }

  .contact .php-email-form input:focus,
  .contact .php-email-form textarea:focus {
    border-color: #795548;
  }

  .contact .php-email-form input {
    height: 44px;
  }

  .contact .php-email-form textarea {
    padding: 10px 12px;
  }

  .contact .php-email-form button[type="submit"] {
    background: #795548;
    border: 0;
    padding: 10px 30px 12px 30px;
    color: #fff;
    transition: 0.4s;
    border-radius: 50px;
  }

  .contact .php-email-form button[type="submit"]:hover {
    background: #3dc8b7;
  }

  @-webkit-keyframes animate-loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes animate-loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  section {
    padding: 60px 0;
  }

  .section-bg {
    background-color: #e7f8f6;
  }

  .section-title {
    text-align: center;
    padding-bottom: 30px;
  }

  .section-title h2 {
    font-size: 32px;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 20px;
    padding-bottom: 20px;
    position: relative;
  }

  .section-title h2::after {
    content: "";
    position: absolute;
    display: block;
    width: 50px;
    height: 3px;
    background: #795548;
    bottom: 0;
    left: calc(50% - 25px);
  }

  .section-title p {
    margin-bottom: 0;
  }
`;
export default ContactWrapeer;
