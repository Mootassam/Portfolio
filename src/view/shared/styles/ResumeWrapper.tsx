import styled from "styled-components";
const ResumeWrapper = styled.div`
  .resume .resume-title {
    font-size: 26px;
    font-weight: 400;
    margin-top: 20px;
    margin-bottom: 20px;
    color: #222222;
  }

  .resume .resume-item {
    padding: 0 0 20px 20px;
    margin-top: -2px;
    border-left: 2px solid #795548;
    position: relative;
  }

  .resume .resume-item h4 {
    line-height: 18px;
    font-size: 18px;
    font-weight: 600;
    font-family: "Poppins", sans-serif;
    color: #84afb6;
    margin-bottom: 10px;
  }

  .resume .resume-item h5 {
    font-size: 16px;
    background: #effbf9;
    padding: 5px 15px;
    display: inline-block;
    font-weight: 600;
    margin-bottom: 10px;
    color: #795548;
  }

  .resume .resume-item ul {
    padding-left: 20px;
  }

  .resume .resume-item ul li {
    padding-bottom: 10px;
  }

  .resume .resume-item:last-child {
    padding-bottom: 0;
  }

  .resume .resume-item::before {
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50px;
    left: -9px;
    top: 0;
    background: #fff;
    border: 2px solid #795548;
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

  .section-title p {gi
    margin-bottom: 0;
  }
`;
export default ResumeWrapper;
