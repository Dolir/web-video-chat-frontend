import { LiveKitRoom } from "livekit-react"
// CSS should be explicitly imported if using the default UI
// import "livekit-react/dist/index.css"
// // used by the default ParticipantView to maintain video aspect ratio.
// // this CSS must be imported globally
// // if you are using a custom Participant renderer, this import isn't necessary.
// import "react-aspect-ratio/aspect-ratio.css"

export const RoomPage = () => {
  const url = "wss://livekit.redsmile.xyz"
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NTExMTI2ODUsImlzcyI6IkFQSWNjcXFid1pOZnk0ciIsImp0aSI6Ik9iamVjdElEKFwiNjI2OTVmMDI4MTFmZWVlNDFjMmYzYzQ5XCIpIiwibmJmIjoxNjUxMTA5MDg1LCJzdWIiOiJPYmplY3RJRChcIjYyNjk1ZjAyODExZmVlZTQxYzJmM2M0OVwiKSIsInZpZGVvIjp7InJvb20iOiJPYmplY3RJRChcIjYyNjllY2RkZDMzN2MxZDk1NzM4MzIxMFwiKSIsInJvb21Kb2luIjp0cnVlfX0.GRnQYl654GeOt7H7TzIdYVPrn64dSI1EEKTZkxwArS4"
  return (
    <div className="roomContainer">
      <LiveKitRoom
        url={url}
        token={token}
        onConnected={(room) => onConnected(room)}
      />
    </div>
  )
}

async function onConnected(room: any) {
  console.log("connected hey")
  await room.localParticipant.setCameraEnabled(true)
  await room.localParticipant.setMicrophoneEnabled(true)
}
