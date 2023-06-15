import React from "react";
import {
Box,
Container,
Grid,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (
	<Box>
	<p  className="text* center text-white  mt-5">
	We offer instant recharge of Airtime, Databundle, CableTV (DStv, GOtv & Startimes), Electricity Bill Payemnt, Recharge Card Printing and so much more.
	</p>
	<Container>
		<Grid>
		<Column>
    <div className=" text-white">
        <h5 className="foot">Contact</h5>
        <dl className="contact-list">
          <dt>We:</dt>
          <dd>operate every hours</dd>
        </dl>
        <dl className="contact-list">
          <dt>email:</dt>
          <dd><a className="text-white" href="mailto:103ako@gmail.com">send us mail here</a></dd>
        </dl>
        <dl className="contact-list">
          <dt>phones:</dt>
          <dd><a className="text-white" href="tel:+2347026054143">07026054143</a> <span>or</span> <a className="text-white" href="tel:+2348137954163">08137954163</a>
          </dd>
        </dl>
      </div>
		</Column>
	
		<Column>
			<h5  className="foot">Quick Links</h5>
			<FooterLink href="/about">About us</FooterLink>
			<FooterLink href="/contact">Contact us</FooterLink>
			<FooterLink href="">buyairtime</FooterLink>
			<FooterLink href="">buydata</FooterLink>
		</Column>
		<Column>
			<Heading>Support</Heading>
			<FooterLink href="https://www.facebook.com/groups/2182329605125217/?ref=share">
			<i className="fa fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="https://www.instagram.com/p/Ccy5YxJDH_P/?igshid=YmMyMTA2M2Y=">
			<i className="fa fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink href="https://twitter.com/akojel11?t=hohoCvhD-7DGD5W6LIrVoA&s=03">
			<i className="fa fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
      <FooterLink href="https://wa.link/37lc8a">
			<i className="fa fa-whatsapp">
				<span style={{ marginLeft: "10px" }}>
				Whatsapp
				</span>
			</i>
			</FooterLink>
			
		</Column>
		</Grid>
	</Container>
	</Box>
);
};
export default Footer;
