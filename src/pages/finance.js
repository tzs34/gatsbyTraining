import React from 'react'
import Layout from '../components/layout/layout'
import GlobalStyle from '../components/styled/global-style'
export default () => (
  <>
    <GlobalStyle />
    <Layout>
      <form>
        <input
          name="name"
          placeholder="What is your name?"
          class="name"
          required
        />
        <input
          name="emailaddress"
          placeholder="What is your email?"
          class="email"
          type="email"
          required
        />
        <textarea
          rows="4"
          cols="50"
          name="subject"
          placeholder="Please enter your message"
          class="message"
          required
        ></textarea>
        <input name="submit" class="btn" type="submit" value="Send" />
      </form>
    </Layout>
  </>
)
