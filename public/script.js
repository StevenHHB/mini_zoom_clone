const socket = io('/')
const videoGrid = document.getElementById('video-grid')
const newPeer = new Peer(undefined,{
    host: '/',
    port: '3001'
})
const myVideo = document.createElement('video')
const peers = []

myVideo.muted = true

navigator.mediaDevices.getUserMedia({
    video:true,
    audio:true
}).then(stream=>{
    addVideoStream(myVideo,stream)

    newPeer.on('call',call=>{
        call.answer(stream)
        const video = document.createElement('video')
        call.on('stream',userVideoStream=>{
            addVideoStream(video,userVideoStream)
        })
    })

    socket.on('user-connected', userId =>{
        connectNewUser(userId,stream)
    })
})

socket.on('user-disconnected', userId =>{
   if(peers[userId]) peer[userId].close
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

    peers[userId] = call
}


function addVideoStream(video,stream){
    video.srcObject = stream
    video.addEventListener('loadedmetadata',()=>{
        video.play()
    })
    videoGrid.append(video)
}
