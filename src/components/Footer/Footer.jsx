import React, { useState } from "react";

import BackgroundImage from "../UI/BackgroundImage";

import FooterForm from "./FooterForm";
import FooterNav from "./FooterNav";
import FooterList from "./FooterList";

export default function Footer() {

    return (
        <footer className="footer">
            
            <BackgroundImage first />
            <div className="container">
                <div className="footer__logo">
                    учимся.<span>ру</span>
                </div>
                <div className="footer__body body-footer">
                    <FooterList />
                    <FooterNav />
                    <FooterForm />
                </div>
                <p className="footer__copyright">
                    © {new Date().getFullYear()} учимся.ру
                </p>
            </div>
        </footer>
    );
}
