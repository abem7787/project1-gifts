import React, { useState } from 'react';
import { LevelBox } from './components/LevelBox';
import { FunderBox } from './components/FunderBox';
import { GifterBox } from './components/GifterBox';
import { initialStages } from './mockData';
import { Stage, Person } from './types';
import { MoveLeft } from 'lucide-react';
import { LuMoveLeft } from "react-icons/lu";
function App() {
  const [stages, setStages] = useState<Stage[]>(initialStages);
  const [selectedGifter, setSelectedGifter] = useState<Person | null>(null);
  const [selectedReceiver, setSelectedReceiver] = useState<Person | null>(null);

  const handleGift = (from: Person, to: Person) => {
    setStages(prevStages => {
      const newStages = prevStages.map(stage => {
        const updatePerson = (person: Person): Person => {
          if (person.id === to.id) {
            const newGiftsReceived = person.giftsReceived + 1;
            if (newGiftsReceived >= 8) {
              console.log(`${person.name} has received all gifts and can progress!`);
            }
            return { ...person, giftsReceived: newGiftsReceived };
          }
          return person;
        };

        // If this is a gifter being added to a stage's gifters list
        if (stage.level === to.level) {
          return {
            ...stage,
            receiver: stage.receiver ? updatePerson(stage.receiver) : undefined,
            funders: stage.funders.map(updatePerson),
            gifters: [...stage.gifters, from],
          };
        }

        return {
          ...stage,
          receiver: stage.receiver ? updatePerson(stage.receiver) : undefined,
          funders: stage.funders.map(updatePerson),
          gifters: stage.gifters,
        };
      });

      return newStages;
    });

    setSelectedGifter(null);
    setSelectedReceiver(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-8 border-2 border-black inline-block px-8 py-2">
          GIFTING  DASHBOARD
        </h1>

        <div className="flex justify-end mb-8">
          <div className="border-2 border-black px-4 py-2">
            <span className="font-bold">GIFTERS POOL</span>
            <div className="grid grid-cols-4 gap-4 mt-2">
              {stages[0].gifters.slice(0, 12).map((gifter) => (
                <GifterBox
                  key={gifter.id}
                  person={gifter}
                  onClick={() => {
                    if (selectedReceiver) {
                      handleGift(gifter, selectedReceiver);
                    } else {
                      setSelectedGifter(gifter);
                      gifter.isActive = true;
                    }
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 mb-8 text-center">
          <div className="col-span-2 border-2 border-black px-4 py-2 font-bold">RECEIVER</div>
          <div className="col-span-7 border-2 border-black px-4 py-2 font-bold">FUNDERS/STAGING AREA</div>
          <div className="col-span-3 border-2 border-black px-4 py-2 font-bold">GIFTERS</div>
        </div>

        <div className="space-y-12">
          {stages.map((stage) => (
            <div key={stage.level} className="grid grid-cols-12 gap-4 items-start">
              <div className="col-span-2">
                {stage.receiver && (
                  <LevelBox
                    level={stage.level}
                    person={stage.receiver}
                    onClick={() => {
                      if (selectedGifter) {
                        handleGift(selectedGifter, stage.receiver!);
                      } else {
                        setSelectedReceiver(stage.receiver);
                        stage.receiver.isActive = true;
                      }
                    }}
                  />
                )}
              </div>

              <div className="col-span-7">
                <div className="flex gap-4 items-center">
                  {stage.funders.map((funder) => (
                    <FunderBox
                      key={funder.id}
                      person={funder}
                      onClick={() => {
                        if (selectedGifter) {
                          handleGift(selectedGifter, funder);
                        } else {
                          setSelectedReceiver(funder);
                          funder.isActive = true;
                        }
                      }}
                    />
                  ))}
                </div>
                {stage.level !== 'MASTER' && (
                  <div className="mt-4 flex items-center">
                    <div className="w-48 h-0.5 bg-black" />
                    <LuMoveLeft className="w-6 h-8 -ml-1 text-black" />
                  </div>
                )}
              </div>

              <div className="col-span-3 border-2 border-black p-4">
                <div className="text-sm font-medium">
                  {stage.gifters.map((gifter, index) => (
                    <React.Fragment key={gifter.id}>
                      {index > 0 && ', '}
                      <span>{gifter.name} ({gifter.giftsReceived}/8)</span>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {(selectedGifter || selectedReceiver) && (
          <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg border-2 border-black">
            <div className="font-bold mb-2">
              {selectedGifter 
                ? `Selected Gifter: ${selectedGifter.name}` 
                : `Selected Receiver: ${selectedReceiver?.name}`}
            </div>
            <button
              onClick={() => {
                setSelectedGifter(null);
                setSelectedReceiver(null);
                setStages(stages => stages.map(stage => ({
                  ...stage,
                  receiver: stage.receiver ? { ...stage.receiver, isActive: false } : undefined,
                  funders: stage.funders.map(f => ({ ...f, isActive: false })),
                  gifters: stage.gifters.map(g => ({ ...g, isActive: false })),
                })));
              }}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Cancel Selection
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;