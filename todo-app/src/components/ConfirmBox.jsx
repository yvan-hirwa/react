
function ConfirmBox({discard, confirm, todo}) {
  return (
    <div className="fixed inset-0 bg-black/5 backdrop-blur-sm flex justify-center items-center font-mont text-gray-600 font-semibold">
        <div className="bg-white rounded-2xl shadow-xl p-6 w-125 h-80 flex flex-col justify-center items-center">
            <div>
                <p>Are you sure you want to delete '<span className="font-extrabold">{todo}</span>' ?</p>
            </div>
            <div className="flex justify-center items-end w-full">
                <button className="bg-red-500 text-white font-semibold w-28 h-12 p-2 rounded-lg m-2" onClick={discard}>Discard</button>
                <button className="bg-green-500 text-white font-semibold w-28 h-12 p-2 rounded-lg m-2" onClick={confirm}>Confirm</button>
            </div>
        </div>
    </div>
  )
}

export default ConfirmBox