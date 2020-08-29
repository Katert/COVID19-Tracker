import React, { Component } from "react";
import { motion } from "framer-motion";

class Footer extends Component {
  render() {
    return (
      <motion.footer
        id="main-footer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div className="content has-text-centered">
          <p>
              <a href="https://bulma.io">
                <img
                  src="https://bulma.io/images/made-with-bulma.png"
                  alt="Made with Bulma"
                  width="128"
                  height="24"
                />
              </a>
          </p>
        </div>
      </motion.footer>
    );
  }
}

export default Footer;
