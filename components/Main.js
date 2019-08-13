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

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Intro</h2>
          <span className="image main"><img src="/static/images/pic01.jpg" alt="" /></span>
          <p>Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. By the way, check out my <a href="#work">awesome work</a>.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh porttitor fermentum. Nullam venenatis erat id vehicula viverra. Nunc ultrices eros ut ultricies condimentum. Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In non lorem sit amet elit placerat maximus. Pellentesque aliquam maximus risus, vel sed vehicula.</p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Work</h2>
          <span className="image main"><img src="/static/images/banner.png" alt="" /></span>
          <p> During my time at the University of California Santa Cruz, I've developed many professional applications using React to provide rich and intuitive user interfaces.  </p> 
          <a href="https://www.instagram.com/shareyourselfartists/">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <b> Share Yourself Artists  </b>
            <br></br> Summer 2018, Role: Backend-developer
            <ul> 
            <li>Create scalable cloud solutions that made sense for several client projects</li>
            <li> Work with a variety of frameworks such as React, Nodejs, and Vuejs. </li>
            <li> Communicate with web-designers, clients, and a team of software engineers on a daily basis. </li>
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