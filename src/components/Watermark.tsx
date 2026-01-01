import { motion } from "framer-motion";
import { FaHeart, FaCode } from "react-icons/fa";

const Watermark = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center py-8 px-4 relative"
        >
            <div className="inline-flex items-center gap-3 group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-xl group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-500"></div>

                <a
                    href="https://www.instagram.com/code_catalyst_official?igsh=cDg2MWU0djlsZ3g4&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-flex items-center gap-3 text-base text-muted-foreground hover:text-foreground transition-all duration-300 group/link"
                    aria-label="Made by Code Catalyst - Visit Instagram"
                >
                    <FaCode className="text-primary/60 group-hover/link:text-primary group-hover/link:rotate-12 transition-all duration-300" aria-hidden="true" />

                    <span className="font-light opacity-80 group-hover/link:opacity-100 transition-opacity">
                        crafted by
                    </span>

                    <span className="font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover/link:scale-105 transition-transform duration-300">
                        Code Catalyst
                    </span>

                    <FaHeart className="text-red-500 group-hover/link:text-red-600 group-hover/link:scale-110 transition-all duration-300 animate-pulse" aria-hidden="true" />
                </a>
            </div>

            <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100px" }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-3 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mx-auto"
            />
        </motion.div>
    );
};

export default Watermark;
