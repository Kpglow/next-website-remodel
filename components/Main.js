import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
// import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter'
// import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'

class Main extends React.Component {
  
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Work</h2>
          <span className="image main"><img src="/static/images/banner.png" alt="" /></span>
          <p> During my time at the University of California Santa Cruz, I've developed many professional applications using React to provide rich and intuitive user interfaces.  </p> 
          <a href="https://www.instagram.com/shareyourselfartists/">
              <FontAwesomeIcon icon={faInstagram} />
          </a>
          {" "}
          <a href="https://sya-app.firebaseapp.com/">
            <b> Share Yourself Artists  </b>
          </a>
            <br></br> <i>Full Stack Developer</i> 
            <br></br>June 2018 - June 2019
            <ul> 
            <li>Create scalable cloud solutions that made sense for several client projects</li>
            <li> Work with a variety of frameworks such as React, Nodejs, and Vuejs. </li>
            <li> Communicate with web-designers, clients, and a team of software engineers on a daily basis. </li>
            </ul>
          <h2 style={{borderBottom: '1px solid #000', paddingBottom: '3px', borderColor:'white', width: '61%'}}>Current Projects</h2>
          <span className="image main"><img src="/static/images/dim-sum-banner.jpg" alt="" /></span>
          <p> A minimalistic full-stack project that will drive up sales and lower third-party costs for my uncle's bakery / takeout in San Francisco. </p> 
          <a href="https://nameless-depths-86272.herokuapp.com/">
          <b> Xiao Long Bao</b>
            </a>
            <br></br>Built w/ React, GraphQL / Apollo, and MongoDB. Hosted with Heroku and uses AWS lambda.
            <ul> 
            <li> This application is currently in development. </li>
            <li> I'm very interested in working with technologies like React and GraphQL to create interactive web applications that works seamlessly with the backend. </li>
            </ul>
           
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <div style={{verticalAlign:'top',display:'inline-block'}}>
          <img src="/static/images/profile-pic.jfif" alt="" style={{width: 200,height: 200, resizeMode: 'contain'}}/>
          </div>
          <div style={{display:'inline-block', paddingLeft:25}}>
            <div> My name is Karl, and I'm a software engineer.</div>
            <div> After graduating Ucsc with a Bachelors of Arts </div>
            <div> degree in Computer Science, I've been on a mission</div>
            <div> to dive deeper into React Programming.</div>
            <br></br>
            <div> I'm currently working on several side-projects. </div>
            <div> If you have freelance projects, leave me a message</div>
            <div> here or via email directly @ karlwng@gmail.com</div>
            <a href={'https://drive.google.com/file/d/1UiBqJONiCGpqrl1gg47HNFqQS7E6mu4f/view?usp=sharing'}>My Resume</a>
          </div>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4" onChange={this.props.onChange} value={this.props.value}></textarea>
            </div>
            <ul className="actions">
              <li><input type="reset" value="Send Message" onClick={this.props.onSubmit}/></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="https://github.com/kpglow">
              <FontAwesomeIcon icon={faGithub} />
            </a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.string
}

export default Main