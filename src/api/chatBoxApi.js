import axiosClient from './axiosClient';

const chatBoxApi = {
  getAllMessages() {
    const url = '/message/getAllMessages';
    return axiosClient.get(url);
  },
  addMessage(message) {
    const url = 'message/createMessage';
    return axiosClient.post(url, message);
  },
  getMessagesByConversationId(id) {
    const url = `message/getMessagesByConversationId/${id}`;
    return axiosClient.get(url);
  },
  async getConversationById (id) {
    const url = `message/getConversationById/${id}`;
    return await axiosClient.get(url);
  },
};

export default chatBoxApi;
