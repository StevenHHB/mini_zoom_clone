# Mini Zoom Clone

This is a simple video conferencing application that mimics the basic features of Zoom. It allows users to join video chat rooms and communicate with each other using their webcams and microphones. This readme provides an overview of the code structure and how to run the application.

## Getting Started

To run the Mini Zoom Clone, you need to have Node.js and npm installed on your system.

1. Clone this repository to your local machine.
2. Install the required Node.js packages by running the following command in the project directory:
   <pre><div class="bg-black rounded-md"><div class="flex items-center relative text-gray-200 bg-gray-800 gizmo:dark:bg-token-surface-primary px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>shell</span><button class="flex ml-auto gizmo:ml-0 gap-2 items-center"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="icon-sm" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>Copy code</button></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-shell">npm install
   </code></div></div></pre>
3. Start the application by running:
   <pre><div class="bg-black rounded-md"><div class="flex items-center relative text-gray-200 bg-gray-800 gizmo:dark:bg-token-surface-primary px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>shell</span><button class="flex ml-auto gizmo:ml-0 gap-2 items-center"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="icon-sm" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>Copy code</button></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-shell">npm start
   </code></div></div></pre>
4. Open your web browser and navigate to `http://localhost:3000` to access the Mini Zoom Clone.

## Application Structure

The Mini Zoom Clone consists of three main components: the server, the client-side JavaScript code, and the HTML/EJS templates.

### Server (`server.js`)

The server is built using Express.js and Socket.io. It handles routing and WebSocket communication between clients.

* Express.js serves the web application and renders EJS templates.
* Socket.io facilitates real-time communication between clients for video and user management.

### Client-Side JavaScript (`public/script.js`)

The client-side JavaScript code is responsible for managing video streams and WebSocket communication. It uses the Peer.js library for WebRTC video streaming.

* `socket` is used for WebSocket communication.
* `newPeer` is a Peer.js instance that manages WebRTC connections.
* `myVideo` is the local user's video element.
* `peers` is an array to store connected peers.

### HTML/EJS Templates (`views/room.ejs`)

The HTML/EJS templates define the structure of the video conferencing page. They include placeholders for video elements and JavaScript imports.

## Usage

1. When you access the application, you are given a unique room ID (UUID). Share this room ID with others to invite them to your video chat room.
2. Grant permission to access your camera and microphone when prompted.
3. Other users can join the same room by entering the same room ID.
4. Users' video streams will appear in a grid on the page.
5. When users leave the room, their video streams will be removed automatically.

## Code Overview

The JavaScript code in `script.js` handles the following:

* Initializing WebSockets and the Peer.js instance.
* Capturing the local video stream using `getUserMedia`.
* Answering incoming calls from other users and adding their video streams to the grid.
* Managing connected peers and their video streams.

## Contributing

If you'd like to contribute to this project, feel free to create pull requests or open issues. Your contributions are welcome!

## License

This project is open-source and available under the [MIT License](https://chat.openai.com/c/LICENSE).
