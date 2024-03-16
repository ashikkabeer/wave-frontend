import Chat from "./components/chat";
export default function Room() {
  return (
    
    <div className="w-screen flex flex-col justify-center items-center">
      <div className="md:max-w-2xl max-w-96">
        <Chat />
      </div>
      {/* ------------------------------- */}
      <div className="my-2 md:max-w-2xl max-w-96">
        <Chat />
      </div>
    </div>
  );
}
