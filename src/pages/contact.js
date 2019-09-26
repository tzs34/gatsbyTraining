import React from 'react'
import Layout from '../components/layout/layout'
import GlobalStyle from '../components/styled/global-style'
import styles from '../css/contact.module.css'
export default () => (
  <>
    <GlobalStyle />
    <Layout>
      <div id={styles.formmain}>
        <div id={styles.formdiv}>
          <form className={styles.form} id={styles.form1}>
            <p className={styles.name}>
              <input
                name="name"
                type="text"
                placeholder="Name"
                id="name"
                className={styles.feedbackinput}
              />
            </p>

            <p className={styles.email}>
              <input
                name="email"
                type="text"
                id="email"
                placeholder="Email"
                className={styles.feedbackinput}
              />
            </p>

            <p className={styles.text}>
              <textarea
                name="text"
                id="comment"
                placeholder="Comment"
                className={styles.feedbackinput}
              ></textarea>
            </p>

            <div className={styles.submit}>
              <input type="submit" value="SEND" className={styles.buttonblue} />
              <div className={styles.ease}></div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  </>
)
