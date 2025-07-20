import React from "react";
import { Row } from "react-bootstrap";

function LeetcodeStats() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        My <strong className="purple">LeetCode</strong> Stats
      </h1>
      <img
        src="https://leetcard.jacoblin.cool/codeuv10?theme=dark&font=Baloo%20Thambi%202&ext=contest"
        alt="LeetCode Stats"
        style={{ maxWidth: "80%", borderRadius: "10px", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)" }}
      />
    </Row>
  );
}

export default LeetcodeStats;
