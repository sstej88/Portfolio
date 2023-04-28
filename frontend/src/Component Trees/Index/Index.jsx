/** @format */
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap";
import "../../styles/background/background.css";
import profilePicture from "../../assets/bgOne.jpg";
import TypeWriter from "../../components/TypeWriter/TypeWriter";
import { motion } from "framer-motion";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Maps from "../../components/Maps/Maps";
import { Link } from "react-router-dom";

function Index() {
  return (
    <div className="bgInOne">
      <div className="container-fluid text-center text-light">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <motion.img
              initial={{ y: -100, scale: 0.6 }}
              animate={{ y: 0, scale: 0.8 }}
              whileHover={{ scale: 1, rotate: 30 }}
              whileTap={{
                scale: 0.8,
                rotate: -30,
                borderRadius: "100%",
              }}
              transition={{ duration: 1 }}
              src={profilePicture}
              className="img-thumbnail rounded profilePicture"
              alt="Profile Picture"
            />
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: 0.8 }}
              whileHover={{ scale: 1 }}
              transition={{ duration: 1 }}
              className="mt-3 h2">
              Hi there, I am{" "}
              <span className="textPrimaryLight">Sai Tej Sunkara</span>
            </motion.div>
            <b>
              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: 0.8 }}
                transition={{ duration: 1 }}
                className="mt-2 lead">
                MS in Computer Systems Engineering, Northeastern University
              </motion.div>
            </b>
            <div className="mt-2">
              <TypeWriter />
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <motion.div
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{ duration: 1 }}
              className="text-end mt-5">
              <LocationOnIcon />
              <Link to="/location">
                <span className="mx-1 mb-0 clickableText">Boston, MA</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
