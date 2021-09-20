import EmailDataHandler from "./../../data handlers/email_data_handler";

const handler = (req, res) => {
  if (req.method === "POST") {
    const emailHandler = new EmailDataHandler();
    const userEmail = req.body.email;
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!userEmail || !re.test(String(userEmail).toLowerCase())) {
      res.status(422).json({ message: "Invalid email" });
      return;
    }

    if (emailHandler.checkEmail(userEmail)) {
      res.status(409).json({ message: "Email already signuped" });
      return;
    }

    emailHandler.addEmail(userEmail);
    console.log(userEmail);
    res.status(201).json({ message: "Signed up" });
  }
};

export default handler;
