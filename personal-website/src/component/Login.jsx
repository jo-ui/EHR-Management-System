import React from "react";
import { Link } from "react-router-dom";
import "./login.scss";

const Login = () => (
  <form action="" className="ui form">
    <div className="form-header">
      <img
        className="logo"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAwFBMVEX///8AYpv/f0EAO1z/fT3/k2MAX5k/fKr/gj8AVZT/di3/6OA/RlgAQWbc5OxhjLP/n3gAN10AXJgAOVwAV5UAT5H/cSP/+vf/dSsANV4ANl0AOFfv9fj/2Mn/wam90OCnv9T/7+j/tZf/ybT/q4j/poD/l2n/jFj/z7z/hEn/1MP/eTX/mGPedUa3aEuaXlByVFRkTlY/TmXreUSjYk5RSlcAS5CHWlEASXIAVYWDpsQAUX9wmryZtc4tc6VWibKoYyw8AAAExUlEQVR4nO3djVLaQBSGYUUMBEQ0JIClICiglVZr7Y9tbb3/u2psa+tMa9g938yePcz3XkGe2c0mkd12a4sxxhhjjDHGGGPMs8GsXZ32BSINLk6WreGwVdmwNda+TmGD091+a1Wvra9vchhn876T7qHVXPtq/Rss+itHXll9qX293k18fKVwV/uCPZudtXx89oTjoev9Z1Q46Xv6rAlPht5AW8KJAGhKeO4/RW0J2yKgJWHddxW1Jlx4PecNCseyOWpI+Eo2R+0Izz3f1ewJa9IhtCIci4fQinApHkIjwoF0ITUjPBU+C+0ID+ST1IhQ8k1hSjjbeOGF/FlhRDgBFhobwvnGCxfAUmpDiDwsKIwjCimMPwopjD8KKYw/CimMPwopjD8KKYw/CimMPwopjD8KKYy/zRfKN0QZEQIbomwIq4BNh16rXv3sYjJfHCx3K6o9Bywv/s3l1dvr673q3jXk3e0jusHpQWvYWq3qa3qGd/P+w9HR4WGv19uprNdJ5GUfj8W+8dL9+Nl/fJd7R4draI91tpFyoe+81pKvj83mVe/QTYcLU9E8Hb8CfLXm5Y6HT0W46CO+m70jH5+CsF1H9v80L1843n5qwnNkAGvNT54DGF4oOF73FHj9whsYWCg5XvcE+MFridEQio7XPRlBCTCoUHyy5xfwk2CKhhVCW33LVdR/kQktPENW0dqNbARDCifQZ15zz/c5GFyInAoB5mhAofSE5G+h1BdOOMOG8Er0oAgqhHaj15rSmzCcEL0L5UMYSoiczXpYSOXAUMJd7FkoXkiDCcFJ+h6YpIGE0Mml8psCWGgCCU+w2xCZpIGEwDnesjcGhNgkRZ4VgYQD7LsJeKEJJQS/DN8iC00YYRubpdcUmhci72wUboLwlkLrwtFXSFi8jF/4GRI6/gasKkwQYNIwIISGMPsSvxDcqOC4F0NRGGahURVCQNfbUFMITtJp9ELwWVE4AjXHEAJmd9EL0XXG+UcLvTHEhrDrClQToneh46NCUQgupN+cgVpC8Fn43R2oJATnaOo+R5WEI+zTt/DaHawhRIEeN6GOcAT+Acrxq0lPGHYEFYQocOoJDC7EVtEsEex8DirEbsGkcH9X0xGOdqABzLdFZ0ja2K9rHsLRDvI1kaTbU4mvLMxumtGoA4xfkhcN4AxQf+3xpudz2Xg5Kus8P3xrTjdlWZ6m91Of17R/as8rD6hV9vpdZ023t18/V/zhN92uPKDW7d59O4YOqcE1oD9bO//NUzFMmMYPRMdQ+/IdgoTJvfblO4QJJa8ooaOQwvijkML4o5DC+KOQwvijkML4o5DC+KOQwvijkML4o5DC+LvfeGEXEXps9NULEzrvRlcME/puUdMIEhr4FR8Uyv6J1cBhQu2rdwkRmvgZHxI6n81SDRF6nApRDBA6HyDUDRBa2BC1hc1S7Wt3Sy60sc4AwsTIEMqFfid7FJMKTXw4/UwqTLQv3Dmh0P0Ur3oyof/RHr1EwtTCl+9jEmHhebxON4HQ+3idbt7CxMjr6J98hfl3E59MT/ITZsZm6EM+wqzoWhvAsrvMkZfkBfa/bGm1/9FFl+VFY6p9qdKO83RNRd74cmxwev5tf02mcYwxxhhjjDHGGNPpBwI90q5xdSiVAAAAAElFTkSuQmCC"
        alt="logo"
      />
      <h1 className="title">EHR MANAGEMENT SYSTEM</h1>
    </div>
    <div className="form-fields">
      <h3 className="login-title">Login Form</h3>
      <div className="field">
        <input
          name="email"
          type="email"
          // value={null}
          placeholder="Email"
          required
        />
      </div>
      <div className="field">
        <input
          name="password"
          type="password"
          // value={null}
          placeholder="Password"
          required
        />
      </div>
      <button className="ui button" type="submit">
        SIGN IN
      </button>
      <div className="field forgot-password">
        <Link to="/">Forgot Password?</Link>
      </div>
    </div>
  </form>
);
export default Login;
