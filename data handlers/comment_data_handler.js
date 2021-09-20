import path from "path";
import fs from "fs";

class CommentDataHandler {
  constructor() {
    this.fullPath = path.join("data", "comments.json");
    this.comments = JSON.parse(fs.readFileSync(this.fullPath));
  }

  getComments(eventId) {
    const event = this.comments.find((item) => item.eventId == eventId);
    return event ? event.comments : [];
  }

  addComment(eventId, name, text) {
    const commentId = new Date().toISOString();
    const event = this.comments.find((item) => item.eventId == eventId);

    if (event) {
      event.comments.push({
        id: commentId,
        name: name,
        text: text,
      });
    } else {
      const newEvent = {
        eventId: eventId,
        comments: [
          {
            id: commentId,
            name: name,
            text: text,
          },
        ],
      };
      this.comments.push(newEvent);
    }

    fs.writeFileSync(this.fullPath, JSON.stringify(this.comments), "utf8");
  }
}

export default CommentDataHandler;
