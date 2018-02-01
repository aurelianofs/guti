let messageId = 0;
export const addMessage = (text, author) => {
  return {
    type: 'ADD_MESSAGE',
    id: messageId++,
    text: text,
    author: author
  }
}
