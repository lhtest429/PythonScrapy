// import axios from "axios";
//
// const BASE_URL = "http://localhost:8000/api";
// import type { Comment, Note } from "./data";
//
// //获取视频信息
// const GetNotesInfosAPI = async (body): Promise<Note> => {
//   try {
//     const response = await axios.post(`${BASE_URL}/keyword`, body);
//     // Assuming the API response contains the data you need
//     return response.data;
//   } catch (error) {
//     console.error("Error in API request:", error);
//     throw error;
//   }
// };
//
// //获取评论信息
// const GetCommentInfosAPI = async (body): Promise<Comment> => {
//   try {
//     const response = await axios.post(`${BASE_URL}/comment`, body);
//     // Assuming the API response contains the data you need
//     return response.data;
//   } catch (error) {
//     console.error("Error in API request:", error);
//     throw error;
//   }
// };
// const BASE_URL = "ws://localhost:8000/ws";
// import type { Note } from "./data";

// 获取视频信息
// const GetNotesInfosAPI = (body): Promise<Note> => {
//   return new Promise((resolve, reject) => {
//     const socket = new WebSocket(BASE_URL+'/keyword');
//
//     socket.onopen = () => {
//       // Connection opened, send the body
//       socket.send(JSON.stringify(body));
//     };
//
//     socket.onmessage = (event) => {
//       // Handle the received data
//       const data = JSON.parse(event.data);
//       console.log(data)
//       resolve(data);
//     };
//
//     socket.onerror = (error) => {
//       console.error("WebSocket Error:", error);
//       reject(error);
//     };
//
//     socket.onclose = (event) => {
//       console.log("WebSocket Closed:", event);
//     };
//   });
// };
// 获取评论信息
// const GetCommentInfosAPI = (body): Promise<Comment> => {
//   return new Promise((resolve, reject) => {
//     const socket = new WebSocket(BASE_URL+'/comment');
//
//     socket.onopen = () => {
//       // Connection opened, send the body
//       socket.send(JSON.stringify(body));
//     };
//
//     socket.onmessage = (event) => {
//       // Handle the received data
//       const data = JSON.parse(event.data);
//       resolve(data);
//       console.log(data)
//     };
//
//     socket.onerror = (error) => {
//       console.error("WebSocket Error:", error);
//       reject(error);
//     };
//
//     socket.onclose = (event) => {
//       console.log("WebSocket Closed:", event);
//     };
//   });
// };
//
// export { GetCommentInfosAPI, GetNotesInfosAPI };




interface WebSocketOptions {
  url: string;
  onOpen?: () => void;
  onMessage?: (data: any) => void;
  onError?: (error: Event) => void;
  onClose?: (event: CloseEvent) => void;
}

export function useWebSocket(options: WebSocketOptions) {
  const socket = new WebSocket(options.url);

  socket.onopen = () => {
    if (options.onOpen) options.onOpen();
  };

  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    if (options.onMessage) options.onMessage(data);
  };

  socket.onerror = (error) => {
    if (options.onError) options.onError(error);
  };

  socket.onclose = (event) => {
    if (options.onClose) options.onClose(event);
  };

  return socket;
}
