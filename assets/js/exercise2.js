// Design a Nested Chat Comments

const addComment = (text = null, parentElement = null) => {
  let input = text || document.getElementById("comment-input").value;
  if (!input.trim()) return;

  let commentDiv = document.createElement("div");
  commentDiv.className = "comment-box";

  let comment = document.createElement("div");
  comment.className = "comment";
  comment.textContent = input;

  let replyBtn = document.createElement("button");
  replyBtn.textContent = "Reply";
  replyBtn.className = "reply-btn";
  replyBtn.onclick = () => {
    let replyInput = document.createElement("textarea");
    replyInput.placeholder = "Write a reply...";
    let replySubmit = document.createElement("button");
    replySubmit.textContent = "Post Reply";
    replySubmit.onclick = () => {
      addComment(replyInput.value, repliesDiv);
      replyInput.remove();
      replySubmit.remove();
    };
    commentDiv.appendChild(replyInput);
    commentDiv.appendChild(replySubmit);
  };

  let repliesDiv = document.createElement("div");
  repliesDiv.className = "replies";

  commentDiv.appendChild(comment);
  commentDiv.appendChild(replyBtn);
  commentDiv.appendChild(repliesDiv);

  if (parentElement) {
    parentElement.appendChild(commentDiv);
  } else {
    document.getElementById("comments-container").appendChild(commentDiv);
    document.getElementById("comment-input").value = "";
  }
};
