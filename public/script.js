const socket = io('/')
const videoGrid = document.getElementById('video-grid')
const newPeer = new Peer(undefined,{
    host: '/',
    port: '3001'
})
const myVideo = document.createElement('video')

myVideo.muted = true

navigator.mediaDevices.getUserMedia({
    video:true,
    audio:true
}).then(stream=>{
    addVideoStream(myVideo,stream)
    socket.on('user-connected', userId =>{
        connectNewUser(userId,stream)
    })
})


newPeer.on('open', id=>{
    socket.emit('join-room', ROOM_ID,id)
})

function connectNewUser(userId,stream){
    const call = newPeer.call(userId,stream)
    const video = document.createElement('video')
    call.on('stream',newUserVideoStream=>{
        addVideoStream(video,newUserVideoStream)
    })
    call.on('close',()=>{
        video.remove()
    })
}


function addVideoStream(video,stream){
    video.srcObject = stream
    video.addEventListener('loadedmetadata',()=>{
        video.play()
    })
    videoGrid.append(video)
}
