import path from "path";
import fs from "fs";

class EmailDataHandler {
  constructor() {
    this.fullPath = path.join("data", "emails.json");
    this.emails = JSON.parse(fs.readFileSync(this.fullPath));
  }

  checkEmail(userEmail) {
    return this.emails.find((item) => item.email == userEmail);
  }

  addEmail(userEmail) {
    const emailId = new Date().toISOString();
    this.emails.push({ id: emailId, email: userEmail });

    fs.writeFileSync(this.fullPath, JSON.stringify(this.emails), "utf8");
  }
}

export default EmailDataHandler;
