import React from "react";

class Marketing extends React.Component {
  render() {
    return (
      <div>
        <div className="marketing__container">
          <div className="marketing__container__title" style={{textAlign: "center", paddingTop: "50px"}}>
            <img className="marketing__container__photo" style={{width: "100px"}} src="https://blush.design/api/download?shareUri=EibAL5HRk&s=0%7EFFC280&w=800&h=800&fm=png" />
            <div className="marketing__container__name">
              <h1 style={{color: "#fff"}}>Onkar Janwa</h1>
              <h2 className="color1" style={{marginTop: "30px"}}>Great things does not happen in a small time.</h2>
            </div>
          </div>
          <div className="marketing__container__whoami" style={{maxWidth: "550px", margin: "auto", marginTop: "40px"}}>
            <div style={{fontSize: "26px", fontWeight: "bold", marginBottom: "20px"}}>Who am I ?</div>
            <table style={{fontSize: "16px"}}>
              <tr style={{backgroundColor: "#fff", color: "rgb(53 54 56)"}}>
                <td style={{paddingLeft: "10px"}}>An Engineer with 10 years of work experience</td>
              </tr>
              <tr style={{backgroundColor: "#eaf0f6", color: "rgb(53 54 56)"}}>
                <td style={{paddingLeft: "10px"}}>Built Fintech and Marketing products from scratch</td>
              </tr>
              <tr style={{backgroundColor: "#fff", color: "rgb(53 54 56)"}}>
                <td style={{paddingLeft: "10px"}}>Writes testable code that matters and Reads a lot</td>
              </tr>
              <tr style={{backgroundColor: "#eaf0f6", color: "rgb(53 54 56)"}}>
                <td style={{paddingLeft: "10px"}}>I build trust and delivers solutions</td>
              </tr>
            </table>
          </div>
          <div className="marketing__container__whoami" style={{
            maxWidth: "550px", 
            margin: "auto", 
            marginTop: "60px",
            borderLeft: "2px solid #f4c068",
            paddingLeft: "20px",
            }}>
            <div style={{fontSize: "26px", fontWeight: "bold", marginBottom: "20px"}}>
              People are always looking for the right person to work with and help them <strong className="color1" style={{fontSize: "35px"}}>solve problems and build solutions.</strong>
            </div>
          </div>
          <div className="marketing__container__whatcanido" style={{
            maxWidth: "550px", 
            margin: "auto", 
            marginTop: "60px",
            paddingBottom: "60px",
            }}>
            <div style={{
              fontSize: "26px", 
              fontWeight: "bold", 
              marginBottom: "10px"
              }}>What can I do?</div>
            <table style={{fontSize: "16px"}}>
              <tr style={{}}>
                <td style={{}}><strong>Build Web App:</strong> React, Angular, Laravel, HTML, CSS, Responsive Design</td>
              </tr>
              <tr style={{}}>
                <td style={{}}><strong>Build Mobile App:</strong> React Native</td>
              </tr>
              <tr style={{}}>
                <td style={{}}><strong>Build Rest API:</strong> Node.js, PHP, MySQL, MongoDB, PostgreSQL</td>
              </tr>
              <tr style={{}}>
                <td style={{}}><strong>Build End-to-End Product</strong></td>
              </tr>
            </table>
            <div>
              * I can work with other technologies as well.
            </div>
          </div>
          <div className="marketing__container__whoami" style={{
            maxWidth: "550px", 
            margin: "auto", 
            paddingBottom: "60px",
            }}>
            <div style={{
              fontSize: "26px", 
              fontWeight: "bold", 
              }}>Have an exciting project where you need some help?</div>
            <div style={{fontSize: "16px"}}>
              I am building a team of great Engineers to build solutions for the founders and startups.
              If you are looking for an agency to help you build a great product then we are here to work with you.
              Get in touch through email at <a href="mailto: er.onkarjanwa@gmail.com">er.onkarjanwa@gmail.com</a> or  
              <a href="https://www.linkedin.com/in/onkarjanwa/"> LinkedIn </a> or 
              schedule a meeting <a href="https://calendly.com/onkarjanwa">here</a> to discuss your requirements.
              
            </div>
          </div>

          <div className="marketing__container__whoami" style={{
            maxWidth: "550px", 
            margin: "auto", 
            marginTop: "20px",
            paddingLeft: "20px",
            textAlign: "center",
            paddingBottom: "20px"
            }}>
            <div style={{fontSize: "14px", marginBottom: "20px"}}>
              Thank you for visiting here!
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Marketing;