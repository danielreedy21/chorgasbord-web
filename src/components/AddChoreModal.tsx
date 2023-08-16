'use client'
import { useState } from 'react'


interface Chore {
    title: string;
    description: string;
    created_at: Date;
    updated_at: Date;
    frequency: number;
    public: Boolean;
}


export default function AddChoreModal() {

    const [showModal, setShowModal] = useState(false);

    const createChore = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();
        const currDateTime = new Date()
        const formData = new FormData(e.currentTarget);


        // TODO: perform form data validation here
        const title = formData.get('title');
        if (typeof title != "string") {
            // throw error
            console.log("Please provide a string for the title")
            return 
        }

        const description = formData.get('description');
        if (typeof description != "string") {
            // throw error
            console.log("Please provide a string for the description")
            return 
        }

        const frequency = Number(formData.get('frequency'));
        let isPublic = false;

        if (formData.get('isPublic') === 'public'){
            isPublic = true;
        } else if (formData.get('isPublic') === 'private') {
            isPublic = false;
        }

        const body: Chore = {
            title: title,
            description: description,
            created_at: currDateTime,
            updated_at: currDateTime,
            frequency: frequency,
            public: isPublic
        }

        const res = await fetch('api/chores', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (res.ok) {
            setShowModal(false);
        }

    }




    return (
      <div>
        <button
          className="bg-white text-black active:bg-gray-500 
        px-6 py-3 hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Create New Chore
        </button>
        {showModal ? (
          <>
            <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div className="border-0 relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 ">
                    <h3 className="text-3xl">General Info</h3>
                    <button
                      className="bg-transparent border-0 text-black float-right"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="text-black opacity-7 h-6 w-6 text-xl block py-0 rounded-full">
                        x
                      </span>
                    </button>
                  </div>
                  <div className="relative p-6 flex-auto">
                    <form onSubmit={createChore} className="bg-gray-200 px-8 pt-6 pb-8 w-full">
                      <label className="block text-black text-sm mb-1">
                        Title
                      </label>
                      <input name="title" className="appearance-none border w-full py-2 px-1 text-black" />
                      <label className="block text-black text-sm mb-1">
                        Description
                      </label>
                      <input name="description" className="appearance-none border w-full py-2 px-1 text-black" />
                      <label className="block text-black text-sm mb-1">
                        Frequency
                      </label>
                      <input name="frequency" className="appearance-none border w-full py-2 px-1 text-black" />
                      <label className="block text-black text-sm mb-1">
                        Public or Private?
                      </label>
                      <select name="isPublic" id="isPublic">
                          <option value="private">Private</option>
                          <option value="public">Public</option>
                      </select>
                      {/* <input name="isPublic" className="appearance-none border w-full py-2 px-1 text-black" /> */}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 ">
                            <button
                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                            type="button"
                            onClick={() => setShowModal(false)}
                            >
                            Close
                            </button>
                            <button
                            className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                            type="submit"
                            >
                            Submit
                            </button>
                        </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </div>
    );
}