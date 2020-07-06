import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Form from '../components/form'
import 'tachyons'
import '../styles/layoutNew.css'


const Signup = () => (
  <Layout className="">
  	<div className="flex flex-column items-center">
	  	  <SEO title="Page two" />
	  	  <h1 className="white">To find out more signup below</h1>
	  	  <Form />	
  			<br />
  	  	<Link className="white no-underline"to="/">Go back to the homepage</Link>
  	</div>  
  </Layout>
)

export default Signup

	// <a href='https://mailchi.mp/812393d33dfb/mikesfriends'> Click Here </a>