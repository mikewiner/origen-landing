import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import 'tachyons'
import '../styles/layoutNew.css'


const IndexPage = () => (
  <Layout id='newIndex'>
    <SEO title="Home" />
    <div className='flex items-center tc vh-100 pa0 '>
      <div className='w-70 center v-mid ml3 mr3 br3 white' >
        <h1 className="text-shadow">The smart travel bottle.</h1>
        <p className="text-shadow">Join our VIP list for pre-launch updates.</p>
        <p className="text-shadow">Click the link below to become a VIP!</p>  
        <Link className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-blue" to="/signup">Click here</Link>
      </div>
    </div>
  </Layout>
)

export default IndexPage