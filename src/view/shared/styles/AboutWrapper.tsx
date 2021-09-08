import styled from "styled-components";
const AboutWrapper = styled.div`
  .about .content h3 {
    font-weight: 700;
    font-size: 26px;
    color: #555555;
  }

  .about .content ul {
    list-style: none;
    padding: 0;
  }

  .about .content ul li {
    padding-bottom: 10px;
  }

  .about .content ul i {
    font-size: 20px;
    padding-right: 2px;
    color: #795548;
  }

  .about .content p:last-child {
    margin-bottom: 0;
  }

  /*--------------------------------------------------------------
                  # Skills
  --------------------------------------------------------------*/
  #skills {
    justify-content: space-between;
    background: #eaf2fa;
  }

  .skills .progress {
    height: 60px;
    display: block;
    background: none;
    border-radius: 0;
  }

  .skills .progress-bar {
    width: 1px;
    height: 10px;
    transition: 0.9s;
    background-color: #795548;
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
export default AboutWrapper;
