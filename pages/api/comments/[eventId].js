import CommentDataHandler from "./../../../data handlers/comment_data_handler";

const handler = (req, res) => {
  const commentDataHandler = new CommentDataHandler();
  const eventId = req.query.eventId;

  if (req.method === "POST") {
    const { email, name, text } = req.body;
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!email || !re.test(String(email).toLowerCase())) {
      res.status(422).json({ error: true, message: "Invalid email" });
      return;
    }

    if (!name || !name.trim() === "") {
      res.status(422).json({ error: true, message: "Invalid name" });
      return;
    }

    if (!text || !text.trim() === "") {
      res.status(422).json({ error: true, message: "Invalid comment text" });
      return;
    }

    commentDataHandler.addComment(eventId, name, text);

    res.status(201).json({
      error: false,
      message: "Comment submit",
      comments: commentDataHandler.getComments(eventId),
    });
  }

  if (req.method === "GET") {
    res.status(200).json({ comments: commentDataHandler.getComments(eventId) });
  }
};

export default handler;
