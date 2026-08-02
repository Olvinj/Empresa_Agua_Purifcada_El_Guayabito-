import { Link } from "react-router-dom";
export default function FooterLink({ to, children }) { return <Link to={to}>{children}</Link>; }
